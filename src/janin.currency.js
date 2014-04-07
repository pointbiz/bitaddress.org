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

        var coinImgUrl = "logos/" + janin.selectedCurrency.name.toLowerCase() + ".png";
        document.getElementById("coinLogoImg").src = coinImgUrl;
        
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
            janin.doge = new Doge(['wow', 'so wallet', 'such random', 'very pretty', 'much design']);
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
    janin.currency.createCurrency ("Auroracoin", 0x17, 0x97, "6",    "T"    , "AVWH1ZutLd4Y5LPDDj5FkBjbm2Gci4iFx3"),
    janin.currency.createCurrency ("Bitcoin",    0x00, 0x80, "5",    "[LK]" , "15DHZzv7eBUwss77qczZiL3DUEZLjDYhbM"),
    janin.currency.createCurrency ("Blackcoin",  0x19, 0x99, "6",    "P"    , "BFeJrZGyJ6bntd7RLXoNGvdn1HB5AQeiz4"),
    janin.currency.createCurrency ("BBQcoin",    0x55, 0xd5, "6",    "T"    , "bTFFC3Gg2XzQygLxxakHkNM3ravBZby1y9"),
    janin.currency.createCurrency ("Catcoin",    0x15, 0x95, "[56]", "P"    , "9rEXDemG6S3k2ddAsKFzRpnMVz3bVryYXZ"),
    janin.currency.createCurrency ("Dogecoin",   0x1e, 0x9e, "6",    "T"    , "D74Npoqhwhjw9fShkm5wbj6DD2BJXpmzPj"),
    janin.currency.createCurrency ("Feathercoin",0x0e, 0x8e, "5",    "N"    , "6dxAP6oacHsove5X2kZPpddcT1Am167YzC"),
    janin.currency.createCurrency ("Litecoin",   0x30, 0xb0, "6",    "T"    , "LiScnsyPcqsyxn1fx92BcFguryXcw4DgCy"),
    janin.currency.createCurrency ("Marscoin",   0x32, 0xb2, "6",    "T"    , "M8caDttyKt2r7V7WHMMkRZ1jEzxj16fgCn"),
    janin.currency.createCurrency ("NameCoin",   0x34, 0x80, "5",    "[LK]" , "NASxLK4nt5hgX9wQEny5qPPJ2q4uSGCvT9"),
    janin.currency.createCurrency ("Peercoin",   0x37, 0xb7, "7",    "[LK]" , "PSnwUwknbmqUU1GCcM1DNxcANqihpdt3tW"),
    janin.currency.createCurrency ("Primecoin",  0x17, 0x97, "6",    "P"    , "AbXChfoHyFESePFuVh1xLZdn7Rj1mfD2a4"),
    janin.currency.createCurrency ("Reddcoin",   0x3d, 0xbd, "7",    "[UV]" , "RmAB99NsX6Wbjk5WdqNeEab83y72d7zkqZ"),
    janin.currency.createCurrency ("Topcoin",    0x42, 0xc2, "7",    "V"    , "TmDTsQqqv1LWGw4xjGNiJ7ABwdCenf2BFF"),
    janin.currency.createCurrency ("Vertcoin",   0x47, 0xc7, "7",    "W"    , "VkmBz8JJWLP1sVH9sGwc1Fz7o5RtXLW4J5"),

    janin.currency.createCurrency ("Testnet Bitcoin", 0x6f, 0xef, "9", "c", null)
                   ];
