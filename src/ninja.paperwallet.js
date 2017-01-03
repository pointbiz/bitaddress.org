ninja.wallets.paperwallet = {
	open: function () {
		document.getElementById("main").setAttribute("class", "paper"); // add 'paper' class to main div
		var paperArea = document.getElementById("paperarea");
		paperArea.style.display = "block";

		var pageBreakAt = ninja.wallets.paperwallet.pageBreakAtArtisticDefault;

		if (document.getElementById("paperkeyarea").innerHTML == "") {
			document.getElementById("paperpassphrase").disabled = true;
			document.getElementById("paperencrypt").checked = false;
			ninja.wallets.paperwallet.encrypt = false;
			ninja.wallets.paperwallet.build(document.getElementById('paperpassphrase').value);
		}
	},

	close: function () {
		document.getElementById("paperarea").style.display = "none";
		document.getElementById("main").setAttribute("class", ""); // remove 'paper' class from main div
	},

	remaining: null, // use to keep track of how many addresses are left to process when building the paper wallet
	count: 0,
	pageBreakAtDefault: 1,
	pageBreakAtArtisticDefault: 1,
	pageBreakAt: null,

	build: function (passphrase) {
		var numWallets = 1;
		var pageBreakAt = 1;
		ninja.wallets.paperwallet.remaining = numWallets;
		ninja.wallets.paperwallet.count = 0;
		ninja.wallets.paperwallet.pageBreakAt = pageBreakAt;
		document.getElementById("paperkeyarea").innerHTML = "";
		if (ninja.wallets.paperwallet.encrypt) {
			if (passphrase == "") {
				alert(ninja.translator.get("bip38alertpassphraserequired"));
				return;
			}
			document.getElementById("busyblock").className = "busy";
			ninja.privateKey.BIP38GenerateIntermediatePointAsync(passphrase, null, null, function (intermediate) {
				ninja.wallets.paperwallet.intermediatePoint = intermediate;
				document.getElementById("busyblock").className = "";
				setTimeout(ninja.wallets.paperwallet.batch, 0);
			});
		}
		else {
			setTimeout(ninja.wallets.paperwallet.batch, 0);
		}
	},

	batch: function () {
		if (ninja.wallets.paperwallet.remaining > 0) {
			var paperArea = document.getElementById("paperkeyarea");
			ninja.wallets.paperwallet.count++;
			var i = ninja.wallets.paperwallet.count;
			var pageBreakAt = ninja.wallets.paperwallet.pageBreakAt;
			var div = document.createElement("div");
			div.setAttribute("id", "keyarea" + i);

			div.innerHTML = ninja.wallets.paperwallet.templateArtisticHtml(i);
			div.setAttribute("class", "keyarea art");

			if (paperArea.innerHTML != "") {
				// page break
				if ((i - 1) % pageBreakAt == 0 && i >= pageBreakAt) {
					var pBreak = document.createElement("div");
					pBreak.setAttribute("class", "pagebreak");
					document.getElementById("paperkeyarea").appendChild(pBreak);
					div.style.pageBreakBefore = "always";
				}
			}
			document.getElementById("paperkeyarea").appendChild(div);
			ninja.wallets.paperwallet.generateNewWallet(i);
			ninja.wallets.paperwallet.remaining--;
			setTimeout(ninja.wallets.paperwallet.batch, 0);
		}
	},

	// generate bitcoin address, private key, QR Code and update information in the HTML
	// idPostFix: 1, 2, 3, etc.
	generateNewWallet: function (idPostFix) {
		if (ninja.wallets.paperwallet.encrypt) {
			ninja.privateKey.BIP38GenerateECAddressAsync(ninja.wallets.paperwallet.intermediatePoint, false, function (address, encryptedKey) {
				ninja.wallets.paperwallet.showArtisticWallet(idPostFix, address, encryptedKey);
			});
		}
		else {
			var key = new Bitcoin.ECKey(false);
			var bitcoinAddress = key.getBitcoinAddress();
			var privateKeyWif = key.getBitcoinWalletImportFormat();

			ninja.wallets.paperwallet.showArtisticWallet(idPostFix, bitcoinAddress, privateKeyWif);
		}
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

	toggleEncrypt: function (element) {
		// enable/disable passphrase textbox
		document.getElementById("paperpassphrase").disabled = !element.checked;
		ninja.wallets.paperwallet.encrypt = element.checked;
		ninja.wallets.paperwallet.resetLimits();
	},

	resetLimits: function () {
		var paperEncrypt = document.getElementById("paperencrypt");

		document.getElementById("paperkeyarea").style.fontSize = "100%";
		if (paperEncrypt.checked) {
			// reduce font size
			document.getElementById("paperkeyarea").style.fontSize = "95%";
		}
	}
};