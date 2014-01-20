// secrets.js - by Alexander Stetsyuk - released under MIT License
(function(exports, global){
var defaults = {
	bits: 8, // default number of bits
	radix: 16, // work with HEX by default
	minBits: 3,
	maxBits: 20, // this permits 1,048,575 shares, though going this high is NOT recommended in JS!
	
	bytesPerChar: 2,
	maxBytesPerChar: 6, // Math.pow(256,7) > Math.pow(2,53)
		
	// Primitive polynomials (in decimal form) for Galois Fields GF(2^n), for 2 <= n <= 30
	// The index of each term in the array corresponds to the n for that polynomial
	// i.e. to get the polynomial for n=16, use primitivePolynomials[16]
	primitivePolynomials: [null,null,1,3,3,5,3,3,29,17,9,5,83,27,43,3,45,9,39,39,9,5,3,33,27,9,71,39,9,5,83],
	
	// warning for insecure PRNG
	warning: 'WARNING:\nA secure random number generator was not found.\nUsing Math.random(), which is NOT cryptographically strong!'
};

// Protected settings object
var config = {};

/** @expose **/
exports.getConfig = function(){
	return {
		'bits': config.bits,
		'unsafePRNG': config.unsafePRNG
	};
};

function init(bits){
	if(bits && (typeof bits !== 'number' || bits%1 !== 0 || bits<defaults.minBits || bits>defaults.maxBits)){
		throw new Error('Number of bits must be an integer between ' + defaults.minBits + ' and ' + defaults.maxBits + ', inclusive.')
	}
	
	config.radix = defaults.radix;
	config.bits = bits || defaults.bits;
	config.size = Math.pow(2, config.bits);
	config.max = config.size - 1;
	
	// Construct the exp and log tables for multiplication.	
	var logs = [], exps = [], x = 1, primitive = defaults.primitivePolynomials[config.bits];
	for(var i=0; i<config.size; i++){
		exps[i] = x;
		logs[x] = i;
		x <<= 1;
		if(x >= config.size){
			x ^= primitive;
			x &= config.max;
		}
	}
		
	config.logs = logs;
	config.exps = exps;
};

/** @expose **/
exports.init = init;

function isInited(){
	if(!config.bits || !config.size || !config.max  || !config.logs || !config.exps || config.logs.length !== config.size || config.exps.length !== config.size){
		return false;
	}
	return true;
};

// Returns a pseudo-random number generator of the form function(bits){}
// which should output a random string of 1's and 0's of length `bits`
function getRNG(){
	var randomBits, crypto;
	
	function construct(bits, arr, radix, size){
		var str = '',
			i = 0,
			len = arr.length-1;
		while( i<len || (str.length < bits) ){
			str += padLeft(parseInt(arr[i], radix).toString(2), size);
			i++;
		}
		str = str.substr(-bits);
		if( (str.match(/0/g)||[]).length === str.length){ // all zeros?
			return null;
		}else{
			return str;
		}
	}
	
	// node.js crypto.randomBytes()
	if(typeof require === 'function' && (crypto=require('crypto')) && (randomBits=crypto['randomBytes'])){
		return function(bits){
			var bytes = Math.ceil(bits/8),
				str = null;
		
			while( str === null ){
				str = construct(bits, randomBits(bytes).toString('hex'), 16, 4);
			}
			return str;
		}
	}
	
	// browsers with window.crypto.getRandomValues()
	if(global['crypto'] && typeof global['crypto']['getRandomValues'] === 'function' && typeof global['Uint32Array'] === 'function'){
		crypto = global['crypto'];
		return function(bits){
			var elems = Math.ceil(bits/32),
				str = null,
				arr = new global['Uint32Array'](elems);

			while( str === null ){
				crypto['getRandomValues'](arr);
				str = construct(bits, arr, 10, 32);
			}
			
			return str;	
		}
	}

	// A totally insecure RNG!!! (except in Safari)
	// Will produce a warning every time it is called.
	config.unsafePRNG = true;
	warn();
	
	var bitsPerNum = 32;
	var max = Math.pow(2,bitsPerNum)-1;
	return function(bits){
		var elems = Math.ceil(bits/bitsPerNum);
		var arr = [], str=null;
		while(str===null){
			for(var i=0; i<elems; i++){
				arr[i] = Math.floor(Math.random() * max + 1); 
			}
			str = construct(bits, arr, 10, bitsPerNum);
		}
		return str;
	};
};

// Warn about using insecure rng.
// Called when Math.random() is being used.
function warn(){
	global['console']['warn'](defaults.warning);
	if(typeof global['alert'] === 'function' && config.alert){
		global['alert'](defaults.warning);
	}
}

// Set the PRNG to use. If no RNG function is supplied, pick a default using getRNG()
/** @expose **/
exports.setRNG = function(rng, alert){
	if(!isInited()){
		this.init();
	}
	config.unsafePRNG=false;
	rng = rng || getRNG();
	
	// test the RNG (5 times)
	if(typeof rng !== 'function' || typeof rng(config.bits) !== 'string' || !parseInt(rng(config.bits),2) || rng(config.bits).length > config.bits || rng(config.bits).length < config.bits){
		throw new Error("Random number generator is invalid. Supply an RNG of the form function(bits){} that returns a string containing 'bits' number of random 1's and 0's.")
	}else{
		config.rng = rng;
	}
	config.alert = !!alert;
	
	return !!config.unsafePRNG;
};

function isSetRNG(){
	return typeof config.rng === 'function'; 
};

// Generates a random bits-length number string using the PRNG
/** @expose **/
exports.random = function(bits){
	if(!isSetRNG()){
		this.setRNG();
	}
	
	if(typeof bits !== 'number' || bits%1 !== 0 || bits < 2){
		throw new Error('Number of bits must be an integer greater than 1.')
	}
	
	if(config.unsafePRNG){
		warn();
	}
	return bin2hex(config.rng(bits));
}

// Divides a `secret` number String str expressed in radix `inputRadix` (optional, default 16) 
// into `numShares` shares, each expressed in radix `outputRadix` (optional, default to `inputRadix`), 
// requiring `threshold` number of shares to reconstruct the secret. 
// Optionally, zero-pads the secret to a length that is a multiple of padLength before sharing.
/** @expose **/
exports.share = function(secret, numShares, threshold, padLength, withoutPrefix){
	if(!isInited()){
		this.init();
	}
	if(!isSetRNG()){
		this.setRNG();
	}
	
	padLength =  padLength || 0;
		
	if(typeof secret !== 'string'){
		throw new Error('Secret must be a string.');
	}
	if(typeof numShares !== 'number' || numShares%1 !== 0 || numShares < 2){
		throw new Error('Number of shares must be an integer between 2 and 2^bits-1 (' + config.max + '), inclusive.')
	}
	if(numShares > config.max){
		var neededBits = Math.ceil(Math.log(numShares +1)/Math.LN2);
		throw new Error('Number of shares must be an integer between 2 and 2^bits-1 (' + config.max + '), inclusive. To create ' + numShares + ' shares, use at least ' + neededBits + ' bits.')	
	}
	if(typeof threshold !== 'number' || threshold%1 !== 0 || threshold < 2){
		throw new Error('Threshold number of shares must be an integer between 2 and 2^bits-1 (' + config.max + '), inclusive.');
	}
	if(threshold > config.max){
		var neededBits = Math.ceil(Math.log(threshold +1)/Math.LN2);
		throw new Error('Threshold number of shares must be an integer between 2 and 2^bits-1 (' + config.max + '), inclusive.  To use a threshold of ' + threshold + ', use at least ' + neededBits + ' bits.');
	}
	if(typeof padLength !== 'number' || padLength%1 !== 0 ){
		throw new Error('Zero-pad length must be an integer greater than 1.');
	}
	
	if(config.unsafePRNG){
		warn();
	}
	
	secret = '1' + hex2bin(secret); // append a 1 so that we can preserve the correct number of leading zeros in our secret
	secret = split(secret, padLength);	
	var x = new Array(numShares), y = new Array(numShares);
	for(var i=0, len = secret.length; i<len; i++){
		var subShares = this._getShares(secret[i], numShares, threshold);
		for(var j=0; j<numShares; j++){
			x[j] = x[j] || subShares[j].x.toString(config.radix);
			y[j] = padLeft(subShares[j].y.toString(2)) + (y[j] ? y[j] : '');
		}
	}
	var padding = config.max.toString(config.radix).length;
	if(withoutPrefix){
		for(var i=0; i<numShares; i++){
			x[i] = bin2hex(y[i]);
		}
	}else{
		for(var i=0; i<numShares; i++){
			x[i] = config.bits.toString(36).toUpperCase() + padLeft(x[i],padding) + bin2hex(y[i]);
		}
	}
	
	return x;
};

// This is the basic polynomial generation and evaluation function 
// for a `config.bits`-length secret (NOT an arbitrary length)
// Note: no error-checking at this stage! If `secrets` is NOT 
// a NUMBER less than 2^bits-1, the output will be incorrect!
/** @expose **/
exports._getShares = function(secret, numShares, threshold){	
	var shares = [];
	var coeffs = [secret]; 
		
	for(var i=1; i<threshold; i++){
		coeffs[i] = parseInt(config.rng(config.bits),2);
	}
	for(var i=1, len = numShares+1; i<len; i++){
		shares[i-1] = {
			x: i,
			y: horner(i, coeffs)
		}
	}
	return shares;
};
	
// Polynomial evaluation at `x` using Horner's Method
// TODO: this can possibly be sped up using other methods
// NOTE: fx=fx * x + coeff[i] ->  exp(log(fx) + log(x)) + coeff[i], 
//       so if fx===0, just set fx to coeff[i] because
//       using the exp/log form will result in incorrect value
function horner(x, coeffs){
	var logx = config.logs[x];
	var fx = 0;
	for(var i=coeffs.length-1; i>=0; i--){	
		if(fx === 0){
			fx = coeffs[i];
			continue;
		}
		fx = config.exps[ (logx + config.logs[fx]) % config.max ] ^ coeffs[i];
	}
	return fx;
};

function inArray(arr,val){
	for(var i = 0,len=arr.length; i < len; i++) {
		if(arr[i] === val){
   		 return true;
	 	}
 	}
	return false;
};

function processShare(share){
	
	var bits = parseInt(share[0], 36);
	if(bits && (typeof bits !== 'number' || bits%1 !== 0 || bits<defaults.minBits || bits>defaults.maxBits)){
		throw new Error('Number of bits must be an integer between ' + defaults.minBits + ' and ' + defaults.maxBits + ', inclusive.')
	}
	
	var max = Math.pow(2, bits) - 1;
	var idLength = max.toString(config.radix).length;
	
	var id = parseInt(share.substr(1, idLength), config.radix);
	if(typeof id !== 'number' || id%1 !== 0 || id<1 || id>max){
		throw new Error('Share id must be an integer between 1 and ' + config.max + ', inclusive.');
	}
	share = share.substr(idLength + 1);
	if(!share.length){
		throw new Error('Invalid share: zero-length share.')
	}
	return {
		'bits': bits,
		'id': id,
		'value': share
	};
};

/** @expose **/
exports._processShare = processShare;

// Protected method that evaluates the Lagrange interpolation
// polynomial at x=`at` for individual config.bits-length
// segments of each share in the `shares` Array.
// Each share is expressed in base `inputRadix`. The output 
// is expressed in base `outputRadix'
function combine(at, shares){
	var setBits, share, x = [], y = [], result = '', idx;	
	
	for(var i=0, len = shares.length; i<len; i++){
		share = processShare(shares[i]);
		if(typeof setBits === 'undefined'){
			setBits = share['bits'];
		}else if(share['bits'] !== setBits){
			throw new Error('Mismatched shares: Different bit settings.')
		}
		
		if(config.bits !== setBits){
			init(setBits);
		}
		
		if(inArray(x, share['id'])){ // repeated x value?
			continue;
		}
	
		idx = x.push(share['id']) - 1;
		share = split(hex2bin(share['value']));
		for(var j=0, len2 = share.length; j<len2; j++){
			y[j] = y[j] || [];
			y[j][idx] = share[j];
		}
	}
	
	for(var i=0, len=y.length; i<len; i++){
		result = padLeft(lagrange(at, x, y[i]).toString(2)) + result;
	}

	if(at===0){// reconstructing the secret
		var idx = result.indexOf('1'); //find the first 1
		return bin2hex(result.slice(idx+1));
	}else{// generating a new share
		return bin2hex(result);
	}
};

// Combine `shares` Array into the original secret
/** @expose **/
exports.combine = function(shares){
	return combine(0, shares);
};

// Generate a new share with id `id` (a number between 1 and 2^bits-1)
// `id` can be a Number or a String in the default radix (16)
/** @expose **/
exports.newShare = function(id, shares){
	if(typeof id === 'string'){
		id = parseInt(id, config.radix);	
	}
	
	var share = processShare(shares[0]);
	var max = Math.pow(2, share['bits']) - 1;
	
	if(typeof id !== 'number' || id%1 !== 0 || id<1 || id>max){
		throw new Error('Share id must be an integer between 1 and ' + config.max + ', inclusive.');
	}

	var padding = max.toString(config.radix).length;
	return config.bits.toString(36).toUpperCase() + padLeft(id.toString(config.radix), padding) + combine(id, shares);
};
	
// Evaluate the Lagrange interpolation polynomial at x = `at`
// using x and y Arrays that are of the same length, with
// corresponding elements constituting points on the polynomial.
function lagrange(at, x, y){
	var sum = 0,
		product, 
		i, j;
		
	for(var i=0, len = x.length; i<len; i++){
		if(!y[i]){
			continue; 
		}
			
		product = config.logs[y[i]];
		for(var j=0; j<len; j++){
			if(i === j){ continue; }
			if(at === x[j]){ // happens when computing a share that is in the list of shares used to compute it
				product = -1; // fix for a zero product term, after which the sum should be sum^0 = sum, not sum^1
				break; 
			}
			product = ( product + config.logs[at ^ x[j]] - config.logs[x[i] ^ x[j]] + config.max/* to make sure it's not negative */ ) % config.max;
		}
			
		sum = product === -1 ? sum : sum ^ config.exps[product]; // though exps[-1]= undefined and undefined ^ anything = anything in chrome, this behavior may not hold everywhere, so do the check
	}
	return sum;
};

/** @expose **/
exports._lagrange = lagrange;

// Splits a number string `bits`-length segments, after first 
// optionally zero-padding it to a length that is a multiple of `padLength.
// Returns array of integers (each less than 2^bits-1), with each element
// representing a `bits`-length segment of the input string from right to left, 
// i.e. parts[0] represents the right-most `bits`-length segment of the input string.
function split(str, padLength){
	if(padLength){
		str = padLeft(str, padLength)
	}
	var parts = [];
	for(var i=str.length; i>config.bits; i-=config.bits){
		parts.push(parseInt(str.slice(i-config.bits, i), 2));
	}	
	parts.push(parseInt(str.slice(0, i), 2));	
	return parts;
};
	
// Pads a string `str` with zeros on the left so that its length is a multiple of `bits`
function padLeft(str, bits){
	bits = bits || config.bits
	var missing = str.length % bits;
	return (missing ? new Array(bits - missing + 1).join('0') : '') + str;
};

function hex2bin(str){
	var bin = '', num;
	for(var i=str.length - 1; i>=0; i--){
		num = parseInt(str[i], 16)
		if(isNaN(num)){
			throw new Error('Invalid hex character.')
		}
		bin = padLeft(num.toString(2), 4) + bin;
	}
	return bin;
}

function bin2hex(str){
	var hex = '', num;
	str = padLeft(str, 4);
	for(var i=str.length; i>=4; i-=4){
		num = parseInt(str.slice(i-4, i), 2);
		if(isNaN(num)){
			throw new Error('Invalid binary character.')
		}
		hex = num.toString(16) + hex;
	}
	return hex;
}
	
// Converts a given UTF16 character string to the HEX representation. 
// Each character of the input string is represented by 
// `bytesPerChar` bytes in the output string.
/** @expose **/
exports.str2hex = function(str, bytesPerChar){
	if(typeof str !== 'string'){
		throw new Error('Input must be a character string.');
	}
	bytesPerChar = bytesPerChar || defaults.bytesPerChar;
	
	if(typeof bytesPerChar !== 'number' || bytesPerChar%1 !== 0 || bytesPerChar<1 || bytesPerChar > defaults.maxBytesPerChar){
		throw new Error('Bytes per character must be an integer between 1 and ' + defaults.maxBytesPerChar + ', inclusive.')
	}
	
	var hexChars = 2*bytesPerChar;
	var max = Math.pow(16, hexChars) - 1;
	var out = '', num;
	for(var i=0, len=str.length; i<len; i++){
		num = str[i].charCodeAt();
		if(isNaN(num)){
			throw new Error('Invalid character: ' + str[i]);
		}else if(num > max){
			var neededBytes = Math.ceil(Math.log(num+1)/Math.log(256));
			throw new Error('Invalid character code (' + num +'). Maximum allowable is 256^bytes-1 (' + max + '). To convert this character, use at least ' + neededBytes + ' bytes.')
		}else{
			out = padLeft(num.toString(16), hexChars) + out;
		}
	}
	return out;
};
	
// Converts a given HEX number string to a UTF16 character string. 
/** @expose **/
exports.hex2str = function(str, bytesPerChar){
	if(typeof str !== 'string'){
		throw new Error('Input must be a hexadecimal string.');
	}
	bytesPerChar = bytesPerChar || defaults.bytesPerChar;
	
	if(typeof bytesPerChar !== 'number' || bytesPerChar%1 !== 0 || bytesPerChar<1 || bytesPerChar > defaults.maxBytesPerChar){
		throw new Error('Bytes per character must be an integer between 1 and ' + defaults.maxBytesPerChar + ', inclusive.')
	}
	
	var hexChars = 2*bytesPerChar;
	var out = '';
	str = padLeft(str, hexChars);
	for(var i=0, len = str.length; i<len; i+=hexChars){
		out = String.fromCharCode(parseInt(str.slice(i, i+hexChars),16)) + out;
	}
	return out;
};
	
// by default, initialize without an RNG
exports.init();
})(typeof module !== 'undefined' && module['exports'] ? module['exports'] : (window['secrets'] = {}), typeof GLOBAL !== 'undefined' ? GLOBAL : window );