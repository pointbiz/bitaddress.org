ninja.wallets.singlewallet = {
    isOpen: function () {
        return (document.getElementById("singlewallet").className.indexOf("selected") != -1);
    },

	open: function () {
		if (document.getElementById("btcaddress").innerHTML == "") {
			ninja.wallets.singlewallet.generateNewAddressAndKey();
		}
		document.getElementById("singlearea").style.display = "block";
	},

	close: function () {
		document.getElementById("singlearea").style.display = "none";
	},

	// generate bitcoin address and private key and update information in the HTML
	generateNewAddressAndKey: function () {
		this.generate = function () {
			if ( document.getElementById("qrcode_private").innerHTML.length && window.sessionStorage ) {
				window.sessionStorage.previous_address = document.getElementById("btcaddress").innerHTML
				window.sessionStorage.previous_private_key = document.getElementById("btcprivwif").innerHTML
			}

			try {
				var key = new Bitcoin.ECKey(false);
				var bitcoinAddress = key.getBitcoinAddress();
				var privateKeyWif = key.getBitcoinWalletImportFormat();
				document.getElementById("btcaddress").innerHTML = bitcoinAddress;
				document.getElementById("btcprivwif").innerHTML = privateKeyWif;

				window.sessionStorage.newest_address = bitcoinAddress
				window.sessionStorage.newest_private_key = privateKeyWif

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

		if ( document.getElementById("qrcode_private").innerHTML.length ) {
			if ( confirm( "WARNING: This will permanently erase the current private key that is on the screen. If you have not saved this private key, press cancel now!" ) ) {
				return this.generate()
			} else return
		} else return this.generate()
	}
};