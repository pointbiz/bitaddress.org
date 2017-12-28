ninja.translator = {
	currentCulture: "en",

	autodetectTranslation: function() {
		// window.navigator.language for Firefox / Chrome / Opera Safari
		// window.navigator.userLanguage for IE
		var language = window.navigator.language || window.navigator.userLanguage;
		if (!ninja.translator.translate(language)) {
			// Try to remove part after dash, for example cs-CZ -> cs
			language = language.substr(0, language.indexOf('-'));
			ninja.translator.translate(language);
		}
	},

	translate: function (culture) {
		var dict = ninja.translator.translations[culture];
		if (dict) {
			// set current culture
			ninja.translator.currentCulture = culture;
			// update menu UI
			for (var cult in ninja.translator.translations) {
				document.getElementById("culture" + cult).setAttribute("class", "");
			}
			document.getElementById("culture" + culture).setAttribute("class", "selected");
			// apply translations for each know id
			for (var id in dict) {
				if (document.getElementById(id) && document.getElementById(id).value) {
					document.getElementById(id).value = dict[id];
				}
				else if (document.getElementById(id)) {
					document.getElementById(id).innerHTML = dict[id];
				}
			}
			return true;
		}
		return false;
	},

	get: function (id) {
		var translation = ninja.translator.translations[ninja.translator.currentCulture][id];
		return translation;
	},

	staticID: [
		"defaultTitle",
		"title",
		"brainalertpassphrasewarning",
		"brainalertpassphrasetooshort",
		"brainalertpassphrasedoesnotmatch",
		"bulkgeneratingaddresses",
		"bip38alertincorrectpassphrase",
		"bip38alertpassphraserequired",
		"detailconfirmsha256",
		"detailalertnotvalidprivatekey",
		"securitychecklistrandomOK",
		"securitychecklistrandomNOK",
		"securitychecklistofflineNOK",
		"securitychecklistofflineOK",
		"paperwalletback",
	],

	translations: {
		//en.js
		//fr.js
		//de.js
		//nl.js
		//pt.js
		//ru.js
		//es.js
		//it.js
		//ua.js
		//tr.js
		//pl.js
		//zh.js
	}
};
