/*!
* Random number generator with ArcFour PRNG
* 
* NOTE: For best results, put code like
* <body onclick='SecureRandom.seedTime();' onkeypress='SecureRandom.seedTime();'>
* in your main HTML document.
* 
* Copyright Tom Wu, bitaddress.org  BSD License.
* http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/
(function () {

	// Constructor function of Global SecureRandom object
	var sr = window.SecureRandom = function () { };

	// Properties
	sr.state;
	sr.pool;
	sr.pptr;

	// Pool size must be a multiple of 4 and greater than 32.
	// An array of bytes the size of the pool will be passed to init()
	sr.poolSize = 256;


	// --- object methods ---

	// public method
	// ba: byte array
	sr.prototype.nextBytes = function (ba) {
		var i;
		for (i = 0; i < ba.length; ++i) ba[i] = sr.getByte();
	};


	// --- static methods ---

	// Mix in the current time (w/milliseconds) into the pool
	// NOTE: this method should be called from body click/keypress event handlers to increase entropy
	sr.seedTime = function () {
		sr.seedInt(new Date().getTime());
	}

	sr.getByte = function () {
		if (sr.state == null) {
			sr.seedTime();
			sr.state = sr.ArcFour(); // Plug in your RNG constructor here
			sr.state.init(sr.pool);
			for (sr.pptr = 0; sr.pptr < sr.pool.length; ++sr.pptr)
				sr.pool[sr.pptr] = 0;
			sr.pptr = 0;
		}
		// TODO: allow reseeding after first request
		return sr.state.next();
	}

	// Mix in a 32-bit integer into the pool
	sr.seedInt = function (x) {
		sr.pool[sr.pptr++] ^= x & 255;
		sr.pool[sr.pptr++] ^= (x >> 8) & 255;
		sr.pool[sr.pptr++] ^= (x >> 16) & 255;
		sr.pool[sr.pptr++] ^= (x >> 24) & 255;
		if (sr.pptr >= sr.poolSize) sr.pptr -= sr.poolSize;
	}


	// Arcfour is a PRNG
	sr.ArcFour = function () {
		function Arcfour() {
			this.i = 0;
			this.j = 0;
			this.S = new Array();
		}

		// Initialize arcfour context from key, an array of ints, each from [0..255]
		function ARC4init(key) {
			var i, j, t;
			for (i = 0; i < 256; ++i)
				this.S[i] = i;
			j = 0;
			for (i = 0; i < 256; ++i) {
				j = (j + this.S[i] + key[i % key.length]) & 255;
				t = this.S[i];
				this.S[i] = this.S[j];
				this.S[j] = t;
			}
			this.i = 0;
			this.j = 0;
		}

		function ARC4next() {
			var t;
			this.i = (this.i + 1) & 255;
			this.j = (this.j + this.S[this.i]) & 255;
			t = this.S[this.i];
			this.S[this.i] = this.S[this.j];
			this.S[this.j] = t;
			return this.S[(t + this.S[this.i]) & 255];
		}

		Arcfour.prototype.init = ARC4init;
		Arcfour.prototype.next = ARC4next;

		return new Arcfour();
	};


	// Initialize the pool with junk if needed.
	if (sr.pool == null) {
		sr.pool = new Array();
		sr.pptr = 0;
		var t;
		if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
			// Extract entropy (256 bits) from NS4 RNG if available
			var z = window.crypto.random(32);
			for (t = 0; t < z.length; ++t)
				sr.pool[sr.pptr++] = z.charCodeAt(t) & 255;
		}
		while (sr.pptr < sr.poolSize) {  // extract some randomness from Math.random()
			t = Math.floor(65536 * Math.random());
			sr.pool[sr.pptr++] = t >>> 8;
			sr.pool[sr.pptr++] = t & 255;
		}
		sr.pptr = 0;
		sr.seedTime();
		// entropy
		sr.seedInt(window.screenX);
		sr.seedInt(window.screenY);
	}
})();