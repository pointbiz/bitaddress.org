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
        document.title = janin.currency.name() + " " + ninja.translator.get("title");
        document.getElementById("siteTitle").alt = janin.currency.name() + " " + ninja.translator.get("title");

        // Update i18n link
        document.getElementById("cultureen").href = "?culture=en&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturefr").href = "?culture=fr&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("cultureru").href = "?culture=ru&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturees").href = "?culture=es&currency=" + janin.currency.name().toLowerCase();

        if(ninja.seeder.isDone())
        {
            // Regenerate a new wallet when not expensive
            ninja.wallets.singlewallet.generateNewAddressAndKey();
            ninja.wallets.paperwallet.build(document.getElementById('paperpassphrase').value);
            ninja.wallets.brainwallet.view();
        }

        // Reset wallet tab when expensive or not applicable
        document.getElementById("bulktextarea").value = "";
        document.getElementById("suppliedPrivateKey").value = "";

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
    janin.currency.createCurrency ("Acoin",      0x17, 0xe6, "8",    "b"    , "AJvChtExuvLgAor9aw1Xz9bkvJY7JKD9uL"),
    janin.currency.createCurrency ("Alphacoin",  0x52, 0xd2, "8",    "Y"    , "aAWhiGBDUugXC9ZBvw8CDNQH7KRurjy4Nq"),
    janin.currency.createCurrency ("Animecoin",  0x17, 0x97, "6",    "P"    , "AdA5nLS5FtPws6A3BX8aXccbP7fReptdw7"),
    janin.currency.createCurrency ("Anoncoin",   0x17, 0x97, "6",    "P"    , "AS3BvkE4wvsXJpn1bGhQni5vZajthnrWQE"),
    janin.currency.createCurrency ("Apexcoin",   0x17, 0x97, "6",    "P"    , "AdPxUCGLDUhHUTGYftffwFVdxbFy2nkXGX"),
    janin.currency.createCurrency ("Auroracoin", 0x17, 0x97, "6",    "T"    , "AVWH1ZutLd4Y5LPDDj5FkBjbm2Gci4iFx3"),
    janin.currency.createCurrency ("BBQcoin",    0x55, 0xd5, "6",    "T"    , "bTFFC3Gg2XzQygLxxakHkNM3ravBZby1y9"),
    janin.currency.createCurrency ("Bitcoin",    0x00, 0x80, "5",    "[LK]" , "15DHZzv7eBUwss77qczZiL3DUEZLjDYhbM"),
    janin.currency.createCurrency ("BitcoinDark",0x3c, 0xbc, "7",    "U"    , "RWtY5fg9ZQ9tYaPd7WJLgsdae1m1ZfrVRe"),
    janin.currency.createCurrency ("Birdcoin",   0x2f, 0xaf, "6",    "[ST]" , "L97vGT4wRnyyiugHpLXzZzjqueN8YWRdRJ"),
    janin.currency.createCurrency ("Blackcoin",  0x19, 0x99, "6",    "P"    , "BFeJrZGyJ6bntd7RLXoNGvdn1HB5AQeiz4"),
    janin.currency.createCurrency ("BlackJack", 0x15, 0x95, "[56]",  "P"    , "9pzHRZkJ4Df3EBiqXhDVgtB2A7FaAq6nnG"),
    janin.currency.createCurrency ("BunnyCoin",  0x1a, 0x9a, "6",    "P"    , "BosRXiiSB6WmiSbvzVAdUjpezCWhqpJGyW"),
    janin.currency.createCurrency ("CanadaeCoin",0x1c, 0x9c, "6",    "Q"    , "CbaoyW9KYP8qQHb9Lu59crvjemryCD88Hv"),
    janin.currency.createCurrency ("CannabisCoin",0x1c,0x9c, "6",    "Q"    , "Cb7SSkHpnk1PwKqKbreMALzJpnmAsBNvnG"),
    janin.currency.createCurrency ("Capricoin",  0x1c, 0x9c, "6",    "Q"    , "CS1mBL1dyCR8jH5hRrQiZ4Xz37UWwcbUAJ"),
    janin.currency.createCurrency ("CassubianDetk",0x1e,0x9e,"6",    "Q"    , "DBPagysmjfdkND4Zp1SM4myLenNfXpFWnG"),
    janin.currency.createCurrency ("CashCoin",   0x22, 0xa2, "6",    "[QR]" , "F3bkQC7xGZZcPFmsucYas7KuHoEwCPtGHC"),
    janin.currency.createCurrency ("Catcoin",    0x15, 0x95, "[56]", "P"    , "9rEXDemG6S3k2ddAsKFzRpnMVz3bVryYXZ"),
    janin.currency.createCurrency ("Corgicoin",  0x1c, 0x9c, "6",    "Q"    , "CNwV11TaKrfB3TnBS8vQjNbWT6CNxV8GBi"),
    janin.currency.createCurrency ("CryptoBullion",0xb,0x8b, "5",    "M"    , "Cd9CgzTChm9yJQZ3SL3PUSsMkEEN8LGwCF"),
    janin.currency.createCurrency ("CryptoClub", 0x23, 0xa3, "6",    "R"    , "FKPFTw5LjoeGTZP1d3zHLfZNm91FktgPWY"),
    janin.currency.createCurrency ("Cryptoescudo",0x1c,0x9c, "6",    "Q"    , "Cd9CgzTChm9yJQZ3SL3PUSsMkEEN8LGwCF"),
    janin.currency.createCurrency ("Dash",       0x4c, 0xcc, "7",    "X"    , "XdYX6AbDzjb3AVL1tAmWjuYMD28LD9fcWS"),
    janin.currency.createCurrency ("DeafDollars",0x30, 0xb0, "6",    "T"    , "LNHYnoqySwoN5aMyEVavEBT3CxHA9WrTZs"),
    janin.currency.createCurrency ("Devcoin",    0x00, 0x80, "5",    "[LK]" , "1GUeBfpVhN7xySQej3HiSe5c8jQoVQPosv"),
    janin.currency.createCurrency ("Digitalcoin",0x1e, 0x9e, "6",    "Q"    , "D7fJwPfW4dFSJNq4NHbMiYJhYnrZehMpqx"),
    janin.currency.createCurrency ("Dogecoin",   0x1e, 0x9e, "6",    "Q"    , "D74Npoqhwhjw9fShkm5wbj6DD2BJXpmzPj"),
    janin.currency.createCurrency ("DogecoinDark",0x1e,0x9e, "6",    "Q"    , "DLbjdRYsfiT62JZf5YxSAfNZJo1VKxDTNP"),
    janin.currency.createCurrency ("eGulden",    0x30, 0xb0, "6",    "T"    , "LhBsKs2GUb24KBAzZfua5AsqfQF5uPdWXQ"),
    janin.currency.createCurrency ("eKrona",     0x2d, 0xad, "6",    "S"    , "KLi8FnMZmSH8EfXYgJwi4R2ZyMscJykXT5"),
    janin.currency.createCurrency ("Emercoin",   0x21, 0xa1, "6",    "Q"    , "EN5nVyEbLrhYfcjoyGgQFtD3QHETyj1dy1"),
    janin.currency.createCurrency ("EnergyCoin", 0x5c, 0xdc, "8",    "Z"    , "eD2P3q5PdyHYNwT94Dg6Wt4pBz64k8gwGf"),
    janin.currency.createCurrency ("Fastcoin",   0x60, 0xe0, "8",    "a"    , "frxe8F7gQdiAVgy4mRXjpXH5vN1wyta1db"),
    janin.currency.createCurrency ("Feathercoin",0x0e, 0x8e, "5",    "N"    , "6dxAP6oacHsove5X2kZPpddcT1Am167YzC"),
    janin.currency.createCurrency ("Fibre",      0x23, 0xa3, "6",    "R"    , "F6qGSM29vJm2q3Q9uvozpym7WYqKXBrpqm"),
    janin.currency.createCurrency ("Fluttercoin",0x23, 0xa3, "6",    "R"    , "FJioRLt3gLtqk3tUdMhwjAVo1sdWjRuwqt"),
    janin.currency.createCurrency ("Freicoin",   0x00, 0x80, "5",    "[LK]" , "18kVnAk5Undi7CqEgGx63YDKBPFpxYJmT9"),
    janin.currency.createCurrency ("FUDcoin",    0x23, 0xa3, "6",    "R"    , "FEKsbaLJHjbEnuMiRDvtnyvxaJqehBtQ5V"),
    janin.currency.createCurrency ("Fuelcoin",   0x24, 0x80, "5",    "[KL]" , "Fq1sL24MgDt7tTiKh8MPvhz2UMP8e1uCo4"),
    janin.currency.createCurrency ("Fujicoin",   0x24, 0xa4, "6",    "R"    , "Fqr2ZrqWPCryqsfjdghwMT3enGHukGonit"),
    janin.currency.createCurrency ("GabenCoin",  0x10, 0x90, "5",    "N"    , "7cwtF11nW4qAGp2pFdLuUZ5gzJWiXtUvi1"),
    janin.currency.createCurrency ("GlobalBoost",0x26, 0xa6, "6",    "R"    , "GeXdH1WhzA7ayYim9sdCCQKcVukUq1W8LJ"),
    janin.currency.createCurrency ("Goodcoin",   0x26, 0xa6, "6",    "R"    , "GM3kAbQGaMVAYk8U3CrVGhSwz1hZaF6gVM"),
    janin.currency.createCurrency ("GridcoinResearch",0x3e,0xbe,"7", "V"    , "SHs9ESzUL9VAEcq7kStfF1JUAMaNT1EYzJ"),
    janin.currency.createCurrency ("Gulden",     0x26, 0xa6, "6",    "R"    , "GLD7BDBYyddx6Sr72zGfreRG21dJAe74j8"),
    janin.currency.createCurrency ("Guncoin",    0x27, 0xa7, "6",    "R"    , "GwVej6c3tF9GqEdSKmwJiUDWtQVK2wY9fP"),
    janin.currency.createCurrency ("HamRadioCoin",0x00,0x80, "5",    "LK"   , "1JQVWKT1NQJUJbbq4UdJUY8DbWmgqrrHWz"),
    janin.currency.createCurrency ("HTML5Coin",  0x28, 0xa8, "6",    "R"    , "HBUk5NzWyemrwLffC8pLFXabbJuMRKbkc7"),
    janin.currency.createCurrency ("HyperStake", 0x75, 0xf5, "9",    "d"    , "p71G6VRVxTTxg3Hqa9CbENeJY1PumBjtvL"),
    janin.currency.createCurrency ("ImperiumCoin",0x30,0xb0, "6",    "T"    , "LKcNNWGDyKyedwL8QNsCkg2122fBQyiDat"),
    janin.currency.createCurrency ("IncognitoCoin",0x00,0x80,"5",    "LK"   , "1BbRmhGKyKshFge9kBMdfJyQr3KZoh5K5t"),
    janin.currency.createCurrency ("Influxcoin", 0x66, 0xe6, "8",    "b"    , "i83eN9HxFvfsxSwjXiZQZaWf13cWF25K9Y"),
    janin.currency.createCurrency ("IridiumCoin",0x30, 0xb0, "6",    "T"    , "LKTu2strS8zV1mDJxJtgE3HLqChD2m54yN"),
    janin.currency.createCurrency ("iCash",      0x66, 0xcc, "7",    "X"    , "iKCghTCFEPhriPxrduWxks2SCDE1XKzCU6"),
    janin.currency.createCurrency ("iXcoin",     0x8a, 0x80, "5",    "[LK]" , "xnF1nshqFLaVdDGBmQ4k2jBQkr8nbuCkLz"),
    janin.currency.createCurrency ("Judgecoin",  0x2b, 0xab, "6",    "S"    , "JbF9ZnvoFkBdasPEq21jCCTnTUDSiyWrAQ"),
    janin.currency.createCurrency ("Jumbucks",   0x2b, 0xab, "6",    "S"    , "JSzHiaoD6ewtymBMJHsHqkpFzCYKBzxJeC"),
    janin.currency.createCurrency ("Latium",     0x17, 0x80, "5",    "[LK]" , "ASz2EgegeXfKyHaY1SbJ6nCDK6sxd7BpXg"),
    janin.currency.createCurrency ("Litecoin",   0x30, 0xb0, "6",    "T"    , "LiScnsyPcqsyxn1fx92BcFguryXcw4DgCy"),
    janin.currency.createCurrency ("LiteDoge",   0x5a, 0xab, "6",    "S"    , "daaV1gQ63HpHHn4Ny1fJZHMA7KCeUVE538"),
    janin.currency.createCurrency ("MagicInternetMoney", 0x30, 0xb0,"6", "T", "LPRqCTYEy53FkEzhRTCauLc7Qq23Z5mxZU"),
    janin.currency.createCurrency ("Magicoin",   0x14, 0x94, "5",    "[NP]" , "9H6ddyu9S9gyrEHxVrpMBTBZWrwAvdtehD"),
    janin.currency.createCurrency ("Marscoin",   0x32, 0xb2, "6",    "T"    , "M8caDttyKt2r7V7WHMMkRZ1jEzxj16fgCn"),
    janin.currency.createCurrency ("MarteXcoin", 0x32, 0xb2, "6",    "T"    , "M8DSVG13j3qpNDRbuuUBh5juQmSd15wLXH"),
    janin.currency.createCurrency ("MasterDoge", 0x33, 0x8b, "5",    "M"    , "Mm4Xqy9FYZ8N1NJzuXCaJLZcw8o2cmVC7c"),
    janin.currency.createCurrency ("Mazacoin",   0x32, 0xe0, "8",    "a"    , "MLUXCv3GfNgmUSXc5Ek3ePaQ4cfsJwEXHa"),
    janin.currency.createCurrency ("Megacoin",   0x32, 0xb2, "6",    "T"    , "MPeVmJHvkXN3caneWCB5zGgtGHRRBSLmWd"),
    janin.currency.createCurrency ("MobiusCoin", 0x00, 0x80, "5",    "[LK]" , "1HKNrUR3BaFC8u4VMfnjCuXDPrYGh7jU8S"),
    janin.currency.createCurrency ("MonetaryUnit",0x0f,0x8f, "5",    "N"    , "7R6jCc1h3frSuCrmY87B4iVPzLsZKmkwV5"),
    janin.currency.createCurrency ("Monocle",    0x32, 0xb2, "6",    "T"    , "M9CFHZjyCipuKqByD5K1sCHmt7etuCFGsc"),
    janin.currency.createCurrency ("MoonCoin",   0x03, 0x83, "5",    "L"    , "2P2V9npcK7apbUFsWN3zL7R6ARBMwTJ4hA"),
    janin.currency.createCurrency ("Myriadcoin", 0x32, 0xb2, "6",    "T"    , "MWGDtjDw9c8C6zicDQF22yZBWbEX53v4o9"),
    janin.currency.createCurrency ("NameCoin",   0x34, 0x80, "5",    "[LK]" , "NASxLK4nt5hgX9wQEny5qPPJ2q4uSGCvT9"),
    janin.currency.createCurrency ("Neoscoin",   0x35, 0xb1, "6",    "T"    , "NZw6WJPiKYcXxua1VveieihiNJRYanHjrP"),
    janin.currency.createCurrency ("Novacoin",   0x08, 0x88, "5",    "M"    , "4EZMrEA5LnmwtcK5b2JfCq9k5YS4ZVZrtT"),
    janin.currency.createCurrency ("Nubits",     0x19, 0xbf, "7",    "V"    , "BPWCkyaVqWdaf3uqahrgdTjB2QTnRZzPMM"),
    janin.currency.createCurrency ("Ocupy",      0x73, 0xf3, "9",    "[cd]" , "ocLKVPkQRFtKn5mFygrd4QJG9eZd1sKTyi"),
    janin.currency.createCurrency ("Omnicoin",   0x73, 0xf3, "9",    "[cd]" , "oMesh62joeab2yMoJUH28mGE8h2suDzcYc"),
    janin.currency.createCurrency ("Onyxcoin",   0x73, 0xf3, "9",    "[cd]" , "odRRCGXooJvKs7cn7sax1bJv9EJwwEy94Z"),
    janin.currency.createCurrency ("Paycoin",    0x37, 0xb7, "7",    "U"    , "PV2t9zzj9rQm81c9VJqqL8edj1ndpcW9HD"),
    janin.currency.createCurrency ("Pandacoin",  0x37, 0xb7, "7",    "U"    , "PT6guZjCgsrBkqCUhTnG1NNBYBqgzo8gVv"),
    janin.currency.createCurrency ("ParkByte",   0x37, 0xb7, "7",    "U"    , "PCLozfQ5cBinqdRFGEf6DkuC56YU1jWzMQ"),
    janin.currency.createCurrency ("Pesetacoin", 0x2f, 0xaf, "6",    "[ST]" , "L6qoz2SQN6U9vGNoST35QP85PQbg4s5rDn"),
    janin.currency.createCurrency ("PHCoin",     0x37, 0xb7, "7",    "U"    , "P9e6c714JUHUfuBVHSS36eqaxGCN6X8nyU"),
    janin.currency.createCurrency ("PhoenixCoin",0x38, 0xb8, "7",    "U"    , "PsaaD2mLfAPUJXhMYdC1DBavkJhZj14k6X"),
    janin.currency.createCurrency ("Peercoin",   0x37, 0xb7, "7",    "U"    , "PSnwUwknbmqUU1GCcM1DNxcANqihpdt3tW"),
    janin.currency.createCurrency ("Potcoin",    0x37, 0xb7, "7",    "U"    , "PQcMNuCdeooMcS5H3DGwxXnSE2kmyVMU39"),
    janin.currency.createCurrency ("Primecoin",  0x17, 0x97, "6",    "P"    , "AbXChfoHyFESePFuVh1xLZdn7Rj1mfD2a4"),
    janin.currency.createCurrency ("Quark",      0x3a, 0xba, "7",    "U"    , "QNGJBwRApKKwEevTvDwpeoSgmo6w6wv8yQ"),
    janin.currency.createCurrency ("Reddcoin",   0x3d, 0xbd, "7",    "[UV]" , "RmAB99NsX6Wbjk5WdqNeEab83y72d7zkqZ"),
    janin.currency.createCurrency ("Riecoin",    0x3c, 0x80, "5",    "[LK]" , "RUsNQFds88sdWszMUVKwfdBhE9PtzLTK6N"),
    janin.currency.createCurrency ("Rimbit",     0x3c, 0xbc, "7",    "U"    , "RJNYNAafwKmkGf1hb3LDXiL1gRhSPPrXxN"),
    janin.currency.createCurrency ("Rubycoin",   0x3c, 0xbc, "7",    "U"    , "RNsGHZnnr4pa3nYSp5NsuPtqTAGHT6XWqb"),
    janin.currency.createCurrency ("Sambacoin",  0x3e, 0xbe, "7",    "V"    , "SJdiAgazqtum79HzGbNDxi879NzSDjtH5P"),
    janin.currency.createCurrency ("SecKCoin",   0x3f, 0xbf, "7",    "V"    , "Se1aaa5T1HRpMEfyBPGswVUgTQoZUst9jA"),
    janin.currency.createCurrency ("SibCoin",    0x3f, 0x80, "5",    "[LK]" , "SY7GAzvFVS8bUA89e7hosPMxqMS482ecsp"),
    janin.currency.createCurrency ("SongCoin",   0x3f, 0xbf, "7",    "V"    , "SSK9MXormZXgF5ZfV599okJRXYh3g9RXGN"),
    janin.currency.createCurrency ("SpreadCoin", 0x3f, 0xbf, "7",    "V"    , "SjPkh7V2KkySjL52wsD2CpEj4quTtjiaVW"),
    janin.currency.createCurrency ("StealthCoin",0x3e, 0xbe, "7",    "V"    , "SJJGGq7UyoUH1TExGJCQ6ee49ztJr2quF8"),
    janin.currency.createCurrency ("Syscoin",    0x3f, 0xbf, "7",    "V"    , "SbycbQikGW6dWGbeDAb1NyircpAwXvCsDF"),
    janin.currency.createCurrency ("Titcoin",    0x00, 0x80, "5",    "[LK]" , "1CHAo7muicsLHdPk5q4asrEbh6aUeSPpdC"),
    janin.currency.createCurrency ("TittieCoin", 0x41, 0xc1, "7",    "V"    , "TYrdtLy9irV4u1yo2YQVCkS27RzDzBqWwJ"),
    janin.currency.createCurrency ("Topcoin",    0x42, 0xc2, "7",    "V"    , "TmDTsQqqv1LWGw4xjGNiJ7ABwdCenf2BFF"),
    janin.currency.createCurrency ("TransferCoin",0x42,0x99, "6",    "P"    , "TbnW6ih8314ksuutJpRjwUbc2mAkz64Tij"),
    janin.currency.createCurrency ("TreasureHuntCoin",0x32,0xb2,"6", "T"    , "MKnC2upgCNfVMS2phkV8SqGaXUGkn39EaX"),
    janin.currency.createCurrency ("Unobtanium", 0x82, 0xe0, "8",    "a"    , "uZ8Gq61NGJ2wz3PLybXyXKLYC1FhRpz8Kq"),
    janin.currency.createCurrency ("USDe",       0x26, 0xa6, "6",    "R"    , "GQTeNSfx6xPbBNsUfqoZNrrCBQXeY5Dtdu"),
    janin.currency.createCurrency ("Vertcoin",   0x47, 0xc7, "7",    "W"    , "VkmBz8JJWLP1sVH9sGwc1Fz7o5RtXLW4J5"),
    janin.currency.createCurrency ("Viacoin",    0x47, 0xc7, "7",    "W"    , "VeJMvqvsZFoTkYfitzEG8fYy7bC7hxMfT1"),
    janin.currency.createCurrency ("VikingCoin", 0x46, 0x56, "3",    "D"    , "VJXz1cD1mDGQmu52aDdd7Q2G5ejqA6mcqw"),
    janin.currency.createCurrency ("W2Coin",     0x49, 0xc9, "7",    "W"    , "Wa3AvKUP5J3BpEa93nwKHPAAQ2P1XdTCeU"),
    janin.currency.createCurrency ("WankCoin",   0x0,  0x80, "5",    "[LK]" , "1CnEFZZxJQkNAvgFGdRV5JEKShkNj1LRWL"),
    janin.currency.createCurrency ("WeAreSatoshiCoin", 0x87,0x97,"6","P"    , "wSEgPsCGqQESLDyzBJkwCXvMP1z3e1Qi3X"),
    janin.currency.createCurrency ("WorldCoin",  0x49, 0xc9, "7",    "W"    , "WNmGkn2WQZKS6xKHEsj5AqSbuE4sh9Upyb"),
    janin.currency.createCurrency ("Zetacoin",   0x50, 0xE0, "8",    "a"    , "ZRU6TP8NLzoyey4DPPaa3uCCgDNDc96PXJ"),

    janin.currency.createCurrency ("Testnet Bitcoin", 0x6f, 0xef, "9", "c", null)
                   ];
