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
    
    // Switch currency
    useCurrency: function(index) {
        janin.selectedCurrency = janin.currencies[index];

        var coinImgUrl = "logos/" + janin.currency.name().toLowerCase() + ".png";
        document.getElementById("coinLogoImg").src = coinImgUrl;
        
        // Update title depending on currency
        document.title = janin.currency.name() + "'s paper wallet generator";
        document.getElementById("siteTitle").innerHTML = janin.currency.name() + " Paper Wallet Generator";
        
        // Regenerate a new wallet when not expensive
        ninja.wallets.singlewallet.generateNewAddressAndKey();
        ninja.wallets.paperwallet.build(document.getElementById('paperpassphrase').value);
        ninja.wallets.brainwallet.view();
        
        // Reset wallet tab when expensive or not applicable
        document.getElementById("bulktextarea").value = "";
        document.getElementById("vanitypubkey").innerHTML = "";
        document.getElementById("vanityprivatekey").innerHTML = "";
        document.getElementById("vanityinput1").value = "";
        document.getElementById("vanityinput2").value = "";
        document.getElementById("vanityaddress").innerHTML = "";
        document.getElementById("vanitypublickeyhex").innerHTML = "";
        document.getElementById("vanityprivatekeywif").innerHTML = "";
        
        
        // easter egg doge ;)
        if(janin.currency.name() == "Dogecoin")
        {
            janin.doge = new Doge(['wow', 'so paper wallet', 'such random', 'very pretty', 'much design', 'awesome', 'much crypto', 'such coin', 'wow!!', 'to da moon']);
            return;
        }
        
        if(janin.doge != null)
        {
            janin.doge.stop();
            janin.doge = null;
        }
        
    },
};

janin.currencies = [
    //                    name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate
    janin.currency.createCurrency ("42coin",     0x08, 0x88, "5",    "M"    , "4Fs42jYtLYrUMfKEXc6arojuhRsnYnerxN"),
    janin.currency.createCurrency ("Alphacoin",  0x52, 0xd2, "8",    "Y"    , "aAWhiGBDUugXC9ZBvw8CDNQH7KRurjy4Nq"),
    janin.currency.createCurrency ("Anoncoin",   0x17, 0x97, "6",    "P"    , "AS3BvkE4wvsXJpn1bGhQni5vZajthnrWQE"),
    janin.currency.createCurrency ("Auroracoin", 0x17, 0x97, "6",    "T"    , "AVWH1ZutLd4Y5LPDDj5FkBjbm2Gci4iFx3"),
    janin.currency.createCurrency ("Bitcoin",    0x00, 0x80, "5",    "[LK]" , "15DHZzv7eBUwss77qczZiL3DUEZLjDYhbM"),
    janin.currency.createCurrency ("Blackcoin",  0x19, 0x99, "6",    "P"    , "BFeJrZGyJ6bntd7RLXoNGvdn1HB5AQeiz4"),
    janin.currency.createCurrency ("BBQcoin",    0x55, 0xd5, "6",    "T"    , "bTFFC3Gg2XzQygLxxakHkNM3ravBZby1y9"),
    janin.currency.createCurrency ("Catcoin",    0x15, 0x95, "[56]", "P"    , "9rEXDemG6S3k2ddAsKFzRpnMVz3bVryYXZ"),
    janin.currency.createCurrency ("Corgicoin",  0x1c, 0x9c, "6",    "Q"    , "CNwV11TaKrfB3TnBS8vQjNbWT6CNxV8GBi"),
    janin.currency.createCurrency ("Darkcoin",   0x4c, 0xcc, "7",    "X"    , "XdYX6AbDzjb3AVL1tAmWjuYMD28LD9fcWS"),
    janin.currency.createCurrency ("Devcoin",    0x00, 0x80, "5",    "[LK]" , "1GUeBfpVhN7xySQej3HiSe5c8jQoVQPosv"),
    janin.currency.createCurrency ("Digitalcoin",0x1e, 0x9e, "6",    "Q"    , "D7fJwPfW4dFSJNq4NHbMiYJhYnrZehMpqx"),
    janin.currency.createCurrency ("Dogecoin",   0x1e, 0x9e, "6",    "Q"    , "D74Npoqhwhjw9fShkm5wbj6DD2BJXpmzPj"),
    janin.currency.createCurrency ("Feathercoin",0x0e, 0x8e, "5",    "N"    , "6dxAP6oacHsove5X2kZPpddcT1Am167YzC"),
    janin.currency.createCurrency ("HTMLCoin",   0x1e, 0x9e, "6",    "Q"    , "DP4AVuekGEatNmpCL99m46k8THwS9yNVqy"),
    janin.currency.createCurrency ("Litecoin",   0x30, 0xb0, "6",    "T"    , "LiScnsyPcqsyxn1fx92BcFguryXcw4DgCy"),
    janin.currency.createCurrency ("MagicInternetMoney", 0x30, 0xb0,"6", "T", "LPRqCTYEy53FkEzhRTCauLc7Qq23Z5mxZU"),
    janin.currency.createCurrency ("Marscoin",   0x32, 0xb2, "6",    "T"    , "M8caDttyKt2r7V7WHMMkRZ1jEzxj16fgCn"),
    janin.currency.createCurrency ("Megacoin",   0x32, 0xb2, "6",    "T"    , "MPeVmJHvkXN3caneWCB5zGgtGHRRBSLmWd"),
    janin.currency.createCurrency ("NameCoin",   0x34, 0x80, "5",    "[LK]" , "NASxLK4nt5hgX9wQEny5qPPJ2q4uSGCvT9"),
    janin.currency.createCurrency ("Novacoin",   0x08, 0x88, "5",    "M"    , "4EZMrEA5LnmwtcK5b2JfCq9k5YS4ZVZrtT"),
    janin.currency.createCurrency ("Peercoin",   0x37, 0xb7, "7",    "[LK]" , "PSnwUwknbmqUU1GCcM1DNxcANqihpdt3tW"),
    janin.currency.createCurrency ("Primecoin",  0x17, 0x97, "6",    "P"    , "AbXChfoHyFESePFuVh1xLZdn7Rj1mfD2a4"),
    janin.currency.createCurrency ("Reddcoin",   0x3d, 0xbd, "7",    "[UV]" , "RmAB99NsX6Wbjk5WdqNeEab83y72d7zkqZ"),
    janin.currency.createCurrency ("Topcoin",    0x42, 0xc2, "7",    "V"    , "TmDTsQqqv1LWGw4xjGNiJ7ABwdCenf2BFF"),
    janin.currency.createCurrency ("Vertcoin",   0x47, 0xc7, "7",    "W"    , "VkmBz8JJWLP1sVH9sGwc1Fz7o5RtXLW4J5"),

    janin.currency.createCurrency ("Testnet Bitcoin", 0x6f, 0xef, "9", "c", null)
                   ];
