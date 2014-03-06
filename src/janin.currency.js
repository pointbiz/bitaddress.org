var janin = {};

janin.currency = {
    createCurrency: function (name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start) {
        var currency = {};
        currency.name = name;
        currency.networkVersion = networkVersion;
        currency.privateKeyPrefix = privateKeyPrefix;
        currency.WIF_Start = WIF_Start;
        currency.CWIF_Start = CWIF_Start;
        return currency;
    },
    
    name: function() {
        return janin.selectedCurrency.name;
    },

    networkVersion: function() {
        return janin.selectedCurrency.networkVersion;
    },
    
    privateKeyPrefix: function() {
        return janin.selectedCurrency.privateKeyPrefix;
    },
    
    WIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.WIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$");
    },
    
    CWIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.CWIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$");
    },
    
    useCurrency: function(currency) {
        janin.selectedCurrency = currency;
        
        // TODO: regenerate/reset current wallet (single, vanity ...)
    },
    
};

janin.currencies = [
    janin.currency.createCurrency ("Bitcoin",    0x00, 0x80, "5", "[LK]"),
    janin.currency.createCurrency ("Dogecoin",   0x1e, 0x9e, "6", "T"),
    janin.currency.createCurrency ("Litecoin",   0x30, 0xb0, "6", "T")
                   ];

janin.selectedCurrency = janin.currencies[0];

/*
janin.currency.useCurrencyWallet = function(_networkVersion, _privateKeyPrefix, _walletImportFormatRegEx, _compressedWalletImportRegEx) {
	
	Bitcoin.Address.networkVersion = _networkVersion; 		// mainnet
	Bitcoin.ECKey.privateKeyPrefix = _privateKeyPrefix; 	// mainnet 0x80    testnet 0xEF
	
	// 51 characters base58, always starts with a '5'
	Bitcoin.ECKey.isWalletImportFormat = function (key) {
		key = key.toString();
		var currencyRegEx = new RegExp(_walletImportFormatRegEx);
		var testnetRegEx = new RegExp("^9[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$");

		return (ECKey.privateKeyPrefix == _privateKeyPrefix) ? (currencyRegEx.test(key)) : (testnetRegEx.test(key));
	};
	
	// 52 characters base58
	Bitcoin.ECKey.isCompressedWalletImportFormat = function (key) {
		key = key.toString();
		var currencyRegEx = new RegExp(_compressedWalletImportRegEx);
		var testnetRegEx = new RegExp("^c[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$");

		return (ECKey.privateKeyPrefix == _privateKeyPrefix) ? (currencyRegEx.test(key)) : (testnetRegEx.test(key));
	};
	
	ninja.wallets.singlewallet.generateNewAddressAndKey();
}*/
