ninja.seeder = {
	init: (function () {
		document.getElementById("generatekeyinput").value = "";
	})(),

	// number of mouse movements to wait for
	seedLimit: (function () {
		var num = Crypto.util.randomBytes(12)[11];
		return 200 + Math.floor(num);
	})(),

	seedCount: 0, // counter
	lastInputTime: new Date().getTime(),
	seedPoints: [],
	isStillSeeding: true,
	seederDependentWallets: ["singlewallet", "paperwallet", "bulkwallet", "vanitywallet", "splitwallet"],

	// seed function exists to wait for mouse movement to add more entropy before generating an address
	seed: function (evt) {
		if (!evt) var evt = window.event;
		var timeStamp = new Date().getTime();
		// seeding is over now we generate and display the address
		if (ninja.seeder.seedCount == ninja.seeder.seedLimit) {
			ninja.seeder.seedCount++;
			ninja.seeder.seedingOver();
		}
			// seed mouse position X and Y when mouse movements are greater than 40ms apart.
		else if ((ninja.seeder.seedCount < ninja.seeder.seedLimit) && evt && (timeStamp - ninja.seeder.lastInputTime) > 40) {
			SecureRandom.seedTime();
			SecureRandom.seedInt16((evt.clientX * evt.clientY));
			ninja.seeder.showPoint(evt.clientX, evt.clientY);
			ninja.seeder.seedCount++;
			ninja.seeder.lastInputTime = new Date().getTime();
			ninja.seeder.showPool();
		}
	},

	// seed function exists to wait for mouse movement to add more entropy before generating an address
	seedKeyPress: function (evt) {
		if (!evt) var evt = window.event;
		// seeding is over now we generate and display the address
		if (ninja.seeder.seedCount == ninja.seeder.seedLimit) {
			ninja.seeder.seedCount++;
			ninja.seeder.seedingOver();
		}
			// seed key press character
		else if ((ninja.seeder.seedCount < ninja.seeder.seedLimit) && evt.which) {
			var timeStamp = new Date().getTime();
			// seed a bunch (minimum seedLimit) of times
			SecureRandom.seedTime();
			SecureRandom.seedInt8(evt.which);
			var keyPressTimeDiff = timeStamp - ninja.seeder.lastInputTime;
			SecureRandom.seedInt8(keyPressTimeDiff);
			ninja.seeder.seedCount++;
			ninja.seeder.lastInputTime = new Date().getTime();
			ninja.seeder.showPool();
		}
	},

	showPool: function () {
		var poolHex;
		if (SecureRandom.poolCopyOnInit != null) {
			poolHex = Crypto.util.bytesToHex(SecureRandom.poolCopyOnInit);
			document.getElementById("seedpool").innerHTML = poolHex;
			document.getElementById("seedpooldisplay").innerHTML = poolHex;
		}
		else {
			poolHex = Crypto.util.bytesToHex(SecureRandom.pool);
			document.getElementById("seedpool").innerHTML = poolHex;
			document.getElementById("seedpooldisplay").innerHTML = poolHex;
		}
		var percentSeeded = Math.round((ninja.seeder.seedCount / ninja.seeder.seedLimit) * 100) + "%";
		document.getElementById("mousemovelimit").innerHTML = percentSeeded;
		for (var wIndex in ninja.seeder.seederDependentWallets) {
			document.getElementById(ninja.seeder.seederDependentWallets[wIndex]).innerHTML = percentSeeded;
		}
	},

	showPoint: function (x, y) {
		var div = document.createElement("div");
		div.setAttribute("class", "seedpoint");
		div.style.top = y + "px";
		div.style.left = x + "px";
		document.body.appendChild(div);
		ninja.seeder.seedPoints.push(div);
	},

	removePoints: function () {
		for (var i = 0; i < ninja.seeder.seedPoints.length; i++) {
			document.body.removeChild(ninja.seeder.seedPoints[i]);
		}
		ninja.seeder.seedPoints = [];
	},

	seedingOver: function () {
		ninja.seeder.isStillSeeding = false;
		// run sync unit tests
		ninja.status.unitTests();
		// open selected tab
		var walletType = ninja.tab.whichIsOpen();
		if (walletType == null) {
			ninja.tab.select("singlewallet");
		} else {
			ninja.tab.select(walletType)
		}
		document.getElementById("generate").style.display = "none";
		// update labels for dependent wallets
		var culture = (ninja.getQueryString()["culture"] == null ? "en" : ninja.getQueryString()["culture"]);
		ninja.translator.translate(culture);
		ninja.seeder.removePoints();
	}
};
