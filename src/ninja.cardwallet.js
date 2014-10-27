ninja.wallets.cardwallet = {
	open: function () {
		document.getElementById("cardarea").style.display = "block";
	},

	close: function () {
		document.getElementById("cardarea").style.display = "none";
	},

	// Verify that a self-entered key is valid, and compute the corresponding
	// public address, render the wallet.
	testAndApplyVanityKey: function () {
		var suppliedKey = document.getElementById('suppliedPrivateKey').value;
		suppliedKey = suppliedKey.trim(); // in case any spaces or whitespace got pasted in
		document.getElementById('suppliedPrivateKey').value = suppliedKey;
		if (!ninja.privateKey.isPrivateKey(suppliedKey)) {
			alert(ninja.translator.get("detailalertnotvalidprivatekey"));
		} else {
			var computedPublicAddress = new Bitcoin.ECKey(suppliedKey).getBitcoinAddress();
			if (ninja.wallets.paperwallet.encrypt) {
				document.getElementById("busyblock").className = "busy";
				ninja.privateKey.BIP38PrivateKeyToEncryptedKeyAsync(suppliedKey,
					document.getElementById('paperpassphrase').value, false, function(encodedKey) {
					document.getElementById("busyblock").className = "";
					ninja.wallets.paperwallet.showArtisticWallet(1, computedPublicAddress, encodedKey);
				});
			}
			else {
				ninja.wallets.paperwallet.showArtisticWallet(1, computedPublicAddress, suppliedKey);
			}
		}
	},

	templateArtisticHtml: function (i) {
		var keyelement = 'btcprivwif';
		var coinImgUrl = "logos/" + janin.selectedCurrency.name.toLowerCase() + ".png";
		var walletBackgroundUrl = "wallets/" + janin.selectedCurrency.name.toLowerCase() + ".png";

		var walletHtml =
							"<div class='coinIcoin'> <img id='coinImg' src='" + coinImgUrl + "' alt='currency_logo' /></div><div class='artwallet' id='artwallet" + i + "'>" +
								"<img id='papersvg" + i + "' class='papersvg' src='" + walletBackgroundUrl + "' />" +
								"<div id='qrcode_public" + i + "' class='qrcode_public'></div>" +
								"<div id='qrcode_private" + i + "' class='qrcode_private'></div>" +
								"<div class='btcaddress' id='btcaddress" + i + "'></div>" +
								"<div class='" + keyelement + "' id='" + keyelement + i + "'></div>" +
								"<div class='paperWalletText'><img class='backLogo' src='" + coinImgUrl + "' alt='currency_logo' />" + ninja.translator.get("paperwalletback") + "</div>" +
							"</div>";
		return walletHtml;
	},

	showArtisticWallet: function (idPostFix, bitcoinAddress, privateKey) {
		var keyValuePair = {};
		keyValuePair["qrcode_public" + idPostFix] = bitcoinAddress;
		ninja.qrCode.showQrCode(keyValuePair, 3.5);
		
        var keyValuePair = {};
        keyValuePair["qrcode_private" + idPostFix] = privateKey;
        ninja.qrCode.showQrCode(keyValuePair, 2.8);
        
        document.getElementById("btcaddress" + idPostFix).innerHTML = bitcoinAddress;
		document.getElementById("btcprivwif" + idPostFix).innerHTML = privateKey;
	},
};
