var janin = {};

janin.currency = {
    createCurrency: function (name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate) {
        var currency = {};
        currency.name = name;
        currency.networkVersion = networkVersion;
        currency.privateKeyPrefix = privateKeyPrefix;
        currency.WIF_Start = WIF_Start;
        currency.CWIF_Start = CWIF_Start;
        currency.donate = donate;
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
    janin.currency.createCurrency ("Bitcoin",    0x00, 0x80, "5",    "[LK]" , "addr1"),
    janin.currency.createCurrency ("Dogecoin",   0x1e, 0x9e, "6",    "T"    , "addr2"),
    janin.currency.createCurrency ("Litecoin",   0x30, 0xb0, "6",    "T"    , "addr3"),
    janin.currency.createCurrency ("Peercoin",   0x37, 0xb7, "7",    "[LK]" , "addr4"),
    janin.currency.createCurrency ("Auroracoin", 0x17, 0x97, "6",    "T"    , "addr5"),
    janin.currency.createCurrency ("BBQcoin",    0x55, 0xd5, "6",    "T"    , "addr6"),
    janin.currency.createCurrency ("Catcoin",    0x15, 0x95, "[56]", "P"    , "addr7"),
    janin.currency.createCurrency ("Marscoin",   0x32, 0xb2, "6",    "T"    , "addr8"),    
                   ];

janin.selectedCurrency = janin.currencies[0];
