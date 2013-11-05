ninja.wallets.detailwallet = {
	open: function () {
		document.getElementById("detailarea").style.display = "block";
		document.getElementById("detailprivkey").focus();
	},

	close: function () {
		document.getElementById("detailarea").style.display = "none";
	},

	viewDetails: function () {
		var bip38 = false;
		var key = document.getElementById("detailprivkey").value.toString().replace(/^\s+|\s+$/g, ""); // trim white space
		if (key == "") {
			ninja.wallets.detailwallet.clear();
			return;
		}
		document.getElementById("detailprivkey").value = key;
		if (Bitcoin.ECKey.isMiniFormat(key)) {
			// show Private Key Mini Format
			document.getElementById("detailprivmini").innerHTML = key;
			document.getElementById("detailmini").style.display = "block";
			document.getElementById("detailbip38commands").style.display = "none";
		}
		else if (ninja.privateKey.isBIP38Format(key)) {
			if (document.getElementById("detailbip38commands").style.display != "block") {
				document.getElementById("detailbip38commands").style.display = "block";
				document.getElementById("detailprivkeypassphrase").focus();
				return;
			}
			else {
				bip38 = true;
			}
		}
		else {
			// hide Private Key Mini Format
			document.getElementById("detailmini").style.display = "none";
			document.getElementById("detailbip38commands").style.display = "none";
		}

		if (bip38) {
			var passphrase = document.getElementById("detailprivkeypassphrase").value.toString().replace(/^\s+|\s+$/g, ""); // trim white space
			if (passphrase == "") {
				alert(ninja.translator.get("bip38alertpassphraserequired"));
				return;
			}
			ninja.privateKey.BIP38EncryptedKeyToByteArrayAsync(key, passphrase, function (btcKeyOrError) {
				document.getElementById("busyblock").className = "";
				if (btcKeyOrError.message) {
					alert(btcKeyOrError.message);
					ninja.wallets.detailwallet.clear();
				} else {
					ninja.wallets.detailwallet.populateKeyDetails(new Bitcoin.ECKey(btcKeyOrError));
				}
			});
			document.getElementById("busyblock").className = "busy";
		}
		else {
			var btcKey = new Bitcoin.ECKey(key);
			if (btcKey.priv == null) {
				// enforce a minimum passphrase length
				if (key.length >= ninja.wallets.brainwallet.minPassphraseLength) {
					// Deterministic Wallet confirm box to ask if user wants to SHA256 the input to get a private key
					var usePassphrase = confirm(ninja.translator.get("detailconfirmsha256"));
					if (usePassphrase) {
						var bytes = Crypto.SHA256(key, { asBytes: true });
						var btcKey = new Bitcoin.ECKey(bytes);
					}
					else {
						ninja.wallets.detailwallet.clear();
					}
				}
				else {
					alert(ninja.translator.get("detailalertnotvalidprivatekey"));
					ninja.wallets.detailwallet.clear();
				}
			}
			ninja.wallets.detailwallet.populateKeyDetails(btcKey);
		}
	},

	populateKeyDetails: function (btcKey) {
		if (btcKey.priv != null) {
			btcKey.setCompressed(false);
			document.getElementById("detailprivhex").innerHTML = btcKey.toString().toUpperCase();
			document.getElementById("detailprivb64").innerHTML = btcKey.toString("base64");
			var bitcoinAddress = btcKey.getBitcoinAddress();
			var wif = btcKey.getBitcoinWalletImportFormat();
			document.getElementById("detailpubkey").innerHTML = btcKey.getPubKeyHex();
			document.getElementById("detailaddress").innerHTML = bitcoinAddress;
			document.getElementById("detailprivwif").innerHTML = wif;
			btcKey.setCompressed(true);
			var bitcoinAddressComp = btcKey.getBitcoinAddress();
			var wifComp = btcKey.getBitcoinWalletImportFormat();
			document.getElementById("detailpubkeycomp").innerHTML = btcKey.getPubKeyHex();
			document.getElementById("detailaddresscomp").innerHTML = bitcoinAddressComp;
			document.getElementById("detailprivwifcomp").innerHTML = wifComp;

			ninja.qrCode.showQrCode({
				"detailqrcodepublic": bitcoinAddress,
				"detailqrcodepubliccomp": bitcoinAddressComp,
				"detailqrcodeprivate": wif,
				"detailqrcodeprivatecomp": wifComp
			}, 4);
		}
	},

	clear: function () {
		document.getElementById("detailpubkey").innerHTML = "";
		document.getElementById("detailpubkeycomp").innerHTML = "";
		document.getElementById("detailaddress").innerHTML = "";
		document.getElementById("detailaddresscomp").innerHTML = "";
		document.getElementById("detailprivwif").innerHTML = "";
		document.getElementById("detailprivwifcomp").innerHTML = "";
		document.getElementById("detailprivhex").innerHTML = "";
		document.getElementById("detailprivb64").innerHTML = "";
		document.getElementById("detailprivmini").innerHTML = "";
		document.getElementById("detailqrcodepublic").innerHTML = "";
		document.getElementById("detailqrcodepubliccomp").innerHTML = "";
		document.getElementById("detailqrcodeprivate").innerHTML = "";
		document.getElementById("detailqrcodeprivatecomp").innerHTML = "";
		document.getElementById("detailbip38commands").style.display = "none";
	}
};