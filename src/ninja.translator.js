ninja.translator = {
	currentCulture: "en",

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
			// apply translations
			for (var id in dict) {
				if (document.getElementById(id) && document.getElementById(id).value) {
					document.getElementById(id).value = dict[id];
				}
				else if (document.getElementById(id)) {
					document.getElementById(id).innerHTML = dict[id];
				}
			}
		}
	},

	get: function (id) {
		var translation = ninja.translator.translations[ninja.translator.currentCulture][id];
		return translation;
	},
    
    staticID: [
        "brainalertpassphrasewarning",
        "brainalertpassphrasetooshort",
        "brainalertpassphrasedoesnotmatch",
        "bulkgeneratingaddresses",
        "bip38alertincorrectpassphrase",
        "bip38alertpassphraserequired",
        "detailconfirmsha256",
        "detailalertnotvalidprivatekey",
        "paperlabelprivatekey",
        "paperlabelencryptedkey",
        "paperlabelbitcoinaddress",
        "vanityinvalidinputcouldnotcombinekeys",
        "vanityalertinvalidinputprivatekeysmatch",
        "vanityalertinvalidinputpublickeysmatch",
        "vanityprivatekeyonlyavailable",
        "vanityalertinvalidinputcannotmultiple",
    ],

	translations: {
    //en.js
    //fr.js

	}
};
