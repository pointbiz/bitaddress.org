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
