ninja.wallets.splitwallet = {
	open: function () {
		document.getElementById("splitarea").style.display = "block";
		secrets.setRNG();
		secrets.init(7);
	},

	close: function () {
		document.getElementById("splitarea").style.display = "none";
	},

	mkOutputRow: function (s, id, lbltxt) {
		var row = document.createElement("div");
		var label = document.createElement("label");
		label.innerHTML = lbltxt + s;
		var qr = document.createElement("div");

		qr.setAttribute("id", id);
		row.setAttribute("class", "splitsharerow");
		row.appendChild(label);
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
			var key = new Bitcoin.ECKey(false);
			var bitcoinAddress = key.getBitcoinAddress();

			var numshares = parseInt(document.getElementById('splitshares').value);
			var threshold = parseInt(document.getElementById('splitthreshold').value);
			var hexKey = Crypto.util.bytesToHex(key.getBitcoinPrivateKeyByteArray());
			var shares = secrets.share(hexKey, numshares, threshold).map(this.hexToBytes).map(Bitcoin.Base58.encode);
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
			document.getElementById("btcaddress").innerHTML = "error";
			document.getElementById("btcprivwif").innerHTML = "error";
			document.getElementById("qrcode_public").innerHTML = "";
			document.getElementById("qrcode_private").innerHTML = "";
		}
	},

	// Combine shares of a private key to retrieve the key
	combineShares: function () {
		try {
			var element = document.getElementById("combineoutput");
			if (element != null) element.parentNode.removeChild(element);

			var shares = document.getElementById("combineinput").value.trim().split(/\W+/);

			var combined = secrets.combine(shares.map(Bitcoin.Base58.decode).map(Crypto.util.bytesToHex).map(this.stripLeadZeros));

			var privkeyBase58 = new Bitcoin.ECKey(this.hexToBytes(combined)).getBitcoinWalletImportFormat();
			var output = document.createElement("div");
			output.setAttribute("id", "combineoutput");
			var txt = document.createElement("input");
			txt.setAttribute("id", "combineoutputtext");
			txt.setAttribute("value", privkeyBase58);
			txt.setAttribute("size", 55);
			var lbl = document.createElement("label");
			lbl.innerHTML = "Private key";
			output.appendChild(lbl);
			output.appendChild(txt);
			document.getElementById("combinecommands").appendChild(output);
		}
		catch (e) {
			alert(e);
		}
	},

	getFormattedShares: function (key, numshares, threshold) {
		var shares = secrets.share(key, numshares, threshold).map(ninja.wallets.splitwallet.hexToBytes).map(Bitcoin.Base58.encode);
		return shares;
	},

	combineFormattedShares: function (shares) {
		var combined = secrets.combine(shares.map(Bitcoin.Base58.decode).map(Crypto.util.bytesToHex).map(ninja.wallets.splitwallet.stripLeadZeros));
		return combined;
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
