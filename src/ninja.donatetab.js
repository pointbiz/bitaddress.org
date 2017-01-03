ninja.wallets.donate = {
    open: function () {
        document.getElementById("donatearea").style.display = "block";
    },

    close: function () {
        document.getElementById("donatearea").style.display = "none";
    },
    
    displayQrCode: function (currencyid, e) {
        var keyValuePair = {};
    	keyValuePair["donateqrcode"] = janin.currencies[currencyid].donate;
		ninja.qrCode.showQrCode(keyValuePair, 4);
        
        document.getElementById("donateqrcode").style.display = "block";
        document.getElementById("donateqrcode").style.top = (e.offsetTop+15) + 'px';
    }
};