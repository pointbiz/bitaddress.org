ninja.wallets.donate = {
    open: function () {
        document.getElementById("donatearea").style.display = "block";
    },

    close: function () {
        document.getElementById("donatearea").style.display = "none";
    },
    
    displayQrCode: function (currencyid) {
        var keyValuePair = {};
    	keyValuePair["donateqrcode"] = janin.currencies[currencyid].donate;
		ninja.qrCode.showQrCode(keyValuePair, 4);
    }
};