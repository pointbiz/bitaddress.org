ninja.wallets.splitwallet = {
    isOpen: function () {
        return (document.getElementById("splitwallet").className.indexOf("selected") != -1);
    },

	open: function () {
		document.getElementById("splitarea").style.display = "block";
		secrets.setRNG();
		secrets.init(7); // 7 bits allows for up to 127 shares
	},

	close: function () {
		document.getElementById("splitarea").style.display = "none";
	},

	mkOutputRow: function (s, id, lbltxt) {
		var row = document.createElement("div");
		var label = document.createElement("label");
		label.innerHTML = lbltxt;
		var qr = document.createElement("div");
		var output = document.createElement("span");
		output.setAttribute("class", "output");
		output.innerHTML = s;

		qr.setAttribute("id", id);
		row.setAttribute("class", "splitsharerow");
		row.appendChild(label);
		row.appendChild(output);
		row.appendChild(qr);
		row.appendChild(document.createElement("br"));

		return row;
	},

	stripLeadZeros: function (hex) { return hex.split(/^0+/).slice(-1)[0]; },

	hexToBytes: function (hex) {
		//if input has odd number of digits, pad it
		if (hex.length % 2 == 1)
			hex = "0" + hex;
		for (var bytes = [], c = 0; c < hex.length; c += 2)
			bytes.push(parseInt(hex.substr(c, 2), 16));
		return bytes;
	},

	// Split a private key and update information in the HTML
	splitKey: function () {
		try {
			var numshares = parseInt(document.getElementById('splitshares').value);
			var threshold = parseInt(document.getElementById('splitthreshold').value);
			var key = new Bitcoin.ECKey(false);
			var bitcoinAddress = key.getBitcoinAddress();
			var shares = ninja.wallets.splitwallet.getFormattedShares(key.getBitcoinHexFormat(), numshares, threshold);

			var output = document.createElement("div");
			output.setAttribute("id", "splitoutput");
			var m = {};
			output.appendChild(this.mkOutputRow(bitcoinAddress, "split_addr", "Bitcoin Address:    "));
			m["split_addr"] = bitcoinAddress;

			for (var i = 0; i < shares.length; i++) {
				var id = "split_qr_" + i;
				output.appendChild(this.mkOutputRow(shares[i], id, "Share " + (i + 1) + ":          "));
				m[id] = shares[i];
			}

			document.getElementById("splitstep1area").innerHTML = output.innerHTML;
			ninja.qrCode.showQrCode(m);

			document.getElementById("splitstep1area").style.display = "block";
			document.getElementById("splitstep1icon").setAttribute("class", "less");
		}
		catch (e) {
			// browser does not have sufficient JavaScript support to generate a bitcoin address
			alert(e);
		}
	},

	// Combine shares of a private key to retrieve the key
	combineShares: function () {
		try {
			document.getElementById("combinedprivatekey").innerHTML = "";
			var shares = document.getElementById("combineinput").value.trim().split(/\W+/);
			var combinedBytes = ninja.wallets.splitwallet.combineFormattedShares(shares);
			var privkeyBase58 = new Bitcoin.ECKey(combinedBytes).getBitcoinWalletImportFormat();
			document.getElementById("combinedprivatekey").innerHTML = privkeyBase58;
		}
		catch (e) {
			alert(e);
		}
	},

	// generate shares and format them in base58
	getFormattedShares: function (key, numshares, threshold) {
		var shares = secrets.share(key, numshares, threshold).map(ninja.wallets.splitwallet.hexToBytes).map(Bitcoin.Base58.encode);
		return shares;
	},

	// combine base58 formatted shares and return a bitcoin byte array
	combineFormattedShares: function (shares) {
		var combined = secrets.combine(shares.map(Bitcoin.Base58.decode).map(Crypto.util.bytesToHex).map(ninja.wallets.splitwallet.stripLeadZeros));
		return ninja.wallets.splitwallet.hexToBytes(combined);
	},

	openCloseStep: function (num) {
		// do close
		if (document.getElementById("splitstep" + num + "area").style.display == "block") {
			document.getElementById("splitstep" + num + "area").style.display = "none";
			document.getElementById("splitstep" + num + "icon").setAttribute("class", "more");
		}
		// do open
		else {
			document.getElementById("splitstep" + num + "area").style.display = "block";
			document.getElementById("splitstep" + num + "icon").setAttribute("class", "less");
		}
	}
};
