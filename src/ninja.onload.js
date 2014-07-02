// change language
if (ninja.getQueryString()["culture"] != undefined) {
	ninja.translator.translate(ninja.getQueryString()["culture"]);
}
if (ninja.getQueryString()["showseedpool"] == "true" || ninja.getQueryString()["showseedpool"] == "1") {
	document.getElementById("seedpoolarea").style.display = "block";
}
// change currency
var currency = ninja.getQueryString()["currency"] || "bitcoin";
currency = currency.toLowerCase();
for(i = 0; i < janin.currencies.length; i++) {
	if (janin.currencies[i].name.toLowerCase() == currency)
		janin.currency.useCurrency(i);
}
// populate currency dropdown list
var select = document.getElementById("currency");
var options = "";
for(i = 0; i < janin.currencies.length; i++) {
    options += "<option value='"+i+"'";
	if(janin.currencies[i].name == janin.currency.name())
		options += " selected='selected'";
	options += ">"+janin.currencies[i].name+"</option>";
}
select.innerHTML = options;
// populate supported currency list
var supportedcurrencies = document.getElementById("supportedcurrencies");
var currencieslist = "";
for(i = 0; i < janin.currencies.length; i++) {
	if(janin.currencies[i].donate == null)
		continue;
    currencieslist += "<a href='?currency="+janin.currencies[i].name;
	currencieslist += "'>"+janin.currencies[i].name+"</a> ";
}
supportedcurrencies.innerHTML = currencieslist;
// populate donate list
document.getElementById("donateqrcode").style.display = "none";
var donatelist = document.getElementById("donatelist");
var list = "<table>";
for(i = 0; i < janin.currencies.length; i++) {
	if(janin.currencies[i].donate == null)
		continue;
    list += "<tr onmouseover='ninja.wallets.donate.displayQrCode("+i+", this)'>"
        +"<td class='currencyNameColumn'>"+janin.currencies[i].name+"</td>"
        +"<td class='address'><a href='"+janin.currencies[i].name.toLowerCase()+":"+janin.currencies[i].donate+"'>"
        +janin.currencies[i].donate+"</a></td></tr>";
}
list += "</table>";
donatelist.innerHTML = list;

// run unit tests
if (ninja.getQueryString()["unittests"] == "true" || ninja.getQueryString()["unittests"] == "1") {
	ninja.unitTests.runSynchronousTests();
	ninja.translator.showEnglishJson();
}
// run async unit tests
if (ninja.getQueryString()["asyncunittests"] == "true" || ninja.getQueryString()["asyncunittests"] == "1") {
	ninja.unitTests.runAsynchronousTests();
}

ninja.envSecurityCheck();
ninja.browserSecurityCheck();