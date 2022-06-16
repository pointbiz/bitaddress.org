(function (ninja) {
	var translator = ninja.translator = {
		currentCulture: "en",

		autoDetectTranslation: function () {
			// window.navigator.language for Firefox / Chrome / Opera Safari
			// window.navigator.userLanguage for IE
			var language = window.navigator.language || window.navigator.userLanguage;
			if (!this.translate(language)) {
				// Try to remove part after dash, for example cs-CZ -> cs
				language = language.substr(0, language.indexOf('-'));
				this.translate(language);
			}
		},

		translate: function (culture) {
			var dict = translator.translations[culture];
			if (dict) {
				// set current culture
				translator.currentCulture = culture;
				// update menu UI
				for (var cult in translator.translations) {
					var cultureElement = document.getElementById("culture" + cult);
					if (cultureElement != null) {
						cultureElement.setAttribute("class", "");
					}
					else {
						console.log("DOM element not found: " + "culture" + cult);
					}
					document.getElementById("culture" + culture).setAttribute("class", "selected");
				}
				// apply translations
				for (var id in dict) {
					if (document.getElementById(id) && document.getElementById(id).value) {
						document.getElementById(id).value = dict[id];
					}
					else if (document.getElementById(id)) {
						document.getElementById(id).innerHTML = dict[id];
					}
				}
				return true;
			} else {
				return false;
			}
		},

		get: function (id) {
			var translation = translator.translations[translator.currentCulture][id];
			return translation;
		},

		translations: {
			"en": {
				// javascript alerts or messages
				"testneteditionactivated": "TESTNET EDITION ACTIVATED",
				"paperlabelbitcoinaddress": "Bitcoin Address:",
				"paperlabelprivatekey": "Private Key:",
				"paperlabelencryptedkey": "Encrypted Private Key (Password required)",
				"bulkgeneratingaddresses": "Generating addresses... ",
				"brainalertpassphrasetooshort": "The passphrase you entered is too short.\n\n",
				"brainalertpassphrasewarning": "Warning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your bitcoins.",
				"brainalertpassphrasedoesnotmatch": "The passphrase does not match the confirm passphrase.",
				"detailalertnotvalidprivatekey": "The text you entered is not a valid Private Key",
				"detailconfirmsha256": "The text you entered is not a valid Private Key!\n\nWould you like to use the entered text as a passphrase and create a Private Key using a SHA256 hash of the passphrase?\n\nWarning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your bitcoins.",
				"detailbip38decryptbutton": "Decrypt BIP38", //TODO: please translate
				"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
				"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.",
				"bip38alertpassphraserequired": "Passphrase required for BIP38 key",
				"vanityinvalidinputcouldnotcombinekeys": "Invalid input. Could not combine keys.",
				"vanityalertinvalidinputpublickeysmatch": "Invalid input. The Public Key of both entries match. You must input two different keys.",
				"vanityalertinvalidinputcannotmultiple": "Invalid input. Cannot multiply two public keys. Select 'Add' to add two public keys to get a bitcoin address.",
				"vanityprivatekeyonlyavailable": "Only available when combining two private keys",
				"vanityalertinvalidinputprivatekeysmatch": "Invalid input. The Private Key of both entries match. You must input two different keys.",

				// header and menu html
				"singlewallet": "Single Wallet",
				"paperwallet": "Paper Wallet",
				"bulkwallet": "Bulk Wallet",
				"brainwallet": "Brain Wallet",
				"vanitywallet": "Vanity Wallet",
				"splitwallet": "Split Wallet",
				"detailwallet": "Wallet Details"
			}
		},

		extractEnglishFromDomAndUpdateDictionary: function () {
			var english = translator.translations["en"];
			var spanish = translator.translations["es"];
			var spanishClone = {};
			for (var key in spanish) {
				spanishClone[key] = spanish[key];
			}
			var newLang = {};
			for (var key in english) {
				newLang[key] = english[key];
				delete spanishClone[key];
			}
			for (var key in spanishClone) {
				if (document.getElementById(key)) {
					if (document.getElementById(key).value) {
						newLang[key] = document.getElementById(key).value;
					}
					else {
						newLang[key] = document.getElementById(key).innerHTML;
					}
				}
			}
			translator.translations["en"] = newLang;
		},

		showEnglishJson: function () {
			var english = ninja.translator.translations["en"];
			var spanish = ninja.translator.translations["es"];
			var spanishClone = {};
			for (var key in spanish) {
				spanishClone[key] = spanish[key];
			}
			var newLang = {};
			for (var key in english) {
				newLang[key] = english[key];
				delete spanishClone[key];
			}
			for (var key in spanishClone) {
				if (document.getElementById(key)) {
					if (document.getElementById(key).value) {
						newLang[key] = document.getElementById(key).value;
					}
					else {
						newLang[key] = document.getElementById(key).innerHTML;
					}
				}
			}
			var div = document.createElement("div");
			div.setAttribute("class", "englishjson");
			div.innerHTML = "<h3>English Json</h3>";
			var elem = document.createElement("textarea");
			elem.setAttribute("rows", "15");
			elem.setAttribute("cols", "110");
			elem.setAttribute("wrap", "off");
			var langJson = "{\n";
			for (var key in newLang) {
				langJson += "\t\"" + key + "\"" + ": " + "\"" + newLang[key].replace(/\"/g, "\\\"").replace(/\n/g, "\\n") + "\",\n";
			}
			langJson = langJson.substr(0, langJson.length - 2);
			langJson += "\n}\n";
			elem.innerHTML = langJson;
			div.appendChild(elem);
			document.body.appendChild(div);

		}
	};
})(ninja);