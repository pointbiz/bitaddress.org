ninja.seeder = {
	// number of mouse movements to wait for
	seedLimit: (function () {
		var num = Crypto.util.randomBytes(12)[11];
		return 50 + Math.floor(num);
	})(),

	seedCount: 0, // counter

	// seed function exists to wait for mouse movement to add more entropy before generating an address
	seed: function (evt) {
		if (!evt) var evt = window.event;

		// seed a bunch (minimum seedLimit) of times based on mouse moves
		SecureRandom.seedTime();
		// seed mouse position X and Y
		if (evt) SecureRandom.seedInt((evt.clientX * evt.clientY));

		ninja.seeder.seedCount++;
		// seeding is over now we generate and display the address
		if (ninja.seeder.seedCount == ninja.seeder.seedLimit) {
			ninja.wallets.singlewallet.open();
			// UI
			document.getElementById("generate").style.display = "none";
			document.getElementById("menu").style.visibility = "visible";
		}
	},

	// If user has not moved the mouse or if they are on a mobile device
	// we will force the generation after a random period of time.
	forceGenerate: function () {
		// if the mouse has not moved enough
		if (ninja.seeder.seedCount < ninja.seeder.seedLimit) {
			SecureRandom.seedTime();
			ninja.seeder.seedCount = ninja.seeder.seedLimit - 1;
			ninja.seeder.seed();
		}
	}
};

ninja.qrCode = {
	// determine which type number is big enough for the input text length
	getTypeNumber: function (text) {
		var lengthCalculation = text.length * 8 + 12; // length as calculated by the QRCode
		if (lengthCalculation < 72) { return 1; }
		else if (lengthCalculation < 128) { return 2; }
		else if (lengthCalculation < 208) { return 3; }
		else if (lengthCalculation < 288) { return 4; }
		else if (lengthCalculation < 368) { return 5; }
		else if (lengthCalculation < 480) { return 6; }
		else if (lengthCalculation < 528) { return 7; }
		else if (lengthCalculation < 688) { return 8; }
		else if (lengthCalculation < 800) { return 9; }
		else if (lengthCalculation < 976) { return 10; }
		return null;
	},

	createCanvas: function (text, sizeMultiplier) {
		sizeMultiplier = (sizeMultiplier == undefined) ? 2 : sizeMultiplier; // default 2
		// create the qrcode itself
		var typeNumber = ninja.qrCode.getTypeNumber(text);
		var qrcode = new QRCode(typeNumber, QRCode.ErrorCorrectLevel.H);
		qrcode.addData(text);
		qrcode.make();
		var width = qrcode.getModuleCount() * sizeMultiplier;
		var height = qrcode.getModuleCount() * sizeMultiplier;
		// create canvas element
		var canvas = document.createElement('canvas');
		var scale = 10.0;
		canvas.width = width * scale;
		canvas.height = height * scale;
		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';
		var ctx = canvas.getContext('2d');
		ctx.scale(scale, scale);
		// compute tileW/tileH based on width/height
		var tileW = width / qrcode.getModuleCount();
		var tileH = height / qrcode.getModuleCount();
		// draw in the canvas
		for (var row = 0; row < qrcode.getModuleCount(); row++) {
			for (var col = 0; col < qrcode.getModuleCount(); col++) {
				ctx.fillStyle = qrcode.isDark(row, col) ? "#000000" : "#ffffff";
				ctx.fillRect(col * tileW, row * tileH, tileW, tileH);
			}
		}
		// return just built canvas
		return canvas;
	},

	// generate a QRCode and return it's representation as an Html table 
	createTableHtml: function (text) {
		var typeNumber = ninja.qrCode.getTypeNumber(text);
		var qr = new QRCode(typeNumber, QRCode.ErrorCorrectLevel.H);
		qr.addData(text);
		qr.make();
		var tableHtml = "<table class='qrcodetable'>";
		for (var r = 0; r < qr.getModuleCount(); r++) {
			tableHtml += "<tr>";
			for (var c = 0; c < qr.getModuleCount(); c++) {
				if (qr.isDark(r, c)) {
					tableHtml += "<td class='qrcodetddark'/>";
				} else {
					tableHtml += "<td class='qrcodetdlight'/>";
				}
			}
			tableHtml += "</tr>";
		}
		tableHtml += "</table>";
		return tableHtml;
	},

	// show QRCodes with canvas OR table (IE8)
	// parameter: keyValuePair 
	// example: { "id1": "string1", "id2": "string2"}
	//		"id1" is the id of a div element where you want a QRCode inserted.
	//		"string1" is the string you want encoded into the QRCode.
	showQrCode: function (keyValuePair, sizeMultiplier) {
		for (var key in keyValuePair) {
			var value = keyValuePair[key];
			try {
				if (document.getElementById(key)) {
					document.getElementById(key).innerHTML = "";
					document.getElementById(key).appendChild(ninja.qrCode.createCanvas(value, sizeMultiplier));
				}
			}
			catch (e) {
				// for browsers that do not support canvas (IE8)
				document.getElementById(key).innerHTML = ninja.qrCode.createTableHtml(value);
			}
		}
	}
};

ninja.tabSwitch = function (walletTab) {
	if (walletTab.className.indexOf("selected") == -1) {
		// unselect all tabs
		for (var wType in ninja.wallets) {
			document.getElementById(wType).className = "tab";
			ninja.wallets[wType].close();
		}
		walletTab.className += " selected";
		ninja.wallets[walletTab.getAttribute("id")].open();
	}
};

ninja.getQueryString = function () {
	var result = {}, queryString = location.search.substring(1), re = /([^&=]+)=([^&]*)/g, m;
	while (m = re.exec(queryString)) {
		result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
	}
	return result;
};

// use when passing an Array of Functions
ninja.runSerialized = function (functions, onComplete) {
	onComplete = onComplete || function () { };

	if (functions.length === 0) onComplete();
	else {
		// run the first function, and make it call this
		// function when finished with the rest of the list
		var f = functions.shift();
		f(function () { ninja.runSerialized(functions, onComplete); });
	}
};

ninja.forSerialized = function (initial, max, whatToDo, onComplete) {
	onComplete = onComplete || function () { };

	if (initial === max) { onComplete(); }
	else {
		// same idea as runSerialized
		whatToDo(initial, function () { ninja.forSerialized(++initial, max, whatToDo, onComplete); });
	}
};

// use when passing an Object (dictionary) of Functions
ninja.foreachSerialized = function (collection, whatToDo, onComplete) {
	var keys = [];
	for (var name in collection) {
		keys.push(name);
	}
	ninja.forSerialized(0, keys.length, function (i, callback) {
		whatToDo(keys[i], callback);
	}, onComplete);
};