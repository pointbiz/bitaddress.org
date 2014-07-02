ninja.wallets.singlewallet = {
	open: function () {
		if (document.getElementById("btcaddress").innerHTML == "") {
			ninja.wallets.singlewallet.generateNewAddressAndKey();
		}
		document.getElementById("walletCommands").style.display = "block";
		document.getElementById("keyarea").style.display = "block";
		document.getElementById("currencyddl").style.display = "block";
		document.getElementById("singlearea").style.display = "block";
		document.getElementById("initBanner").style.display = "none";
	},

	close: function () {
		document.getElementById("singlearea").style.display = "none";
	},

	// generate bitcoin address and private key and update information in the HTML
	generateNewAddressAndKey: function () {
		try {
			var key = new Bitcoin.ECKey(false);
			var bitcoinAddress = key.getBitcoinAddress();
			var privateKeyWif = key.getBitcoinWalletImportFormat();
			document.getElementById("btcaddress").innerHTML = bitcoinAddress;
			document.getElementById("btcprivwif").innerHTML = privateKeyWif;
			var keyValuePair = {
				"qrcode_public": bitcoinAddress,
				"qrcode_private": privateKeyWif
			};
			ninja.qrCode.showQrCode(keyValuePair, 4);
		}
		catch (e) {
			// browser does not have sufficient JavaScript support to generate a bitcoin address
			alert(e);
			document.getElementById("btcaddress").innerHTML = "error";
			document.getElementById("btcprivwif").innerHTML = "error";
			document.getElementById("qrcode_public").innerHTML = "";
			document.getElementById("qrcode_private").innerHTML = "";
		}
	}
};