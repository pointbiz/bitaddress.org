// change language
if (ninja.getQueryString()["culture"] != undefined) {
	ninja.translator.translate(ninja.getQueryString()["culture"]);
} else {
	ninja.translator.autodetectTranslation();
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
// Reset title if no currency is choosen
if(ninja.getQueryString()["currency"] == null) {
    document.title = ninja.translator.get("defaultTitle");
    document.getElementById("siteTitle").alt = ninja.translator.get("defaultTitle");
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
j = 0;
for(i = 0; i < janin.currencies.length; i++) {
	if(janin.currencies[i].donate == null)
		continue;
    currencieslist += "<a href='?currency="+janin.currencies[i].name;
    if (ninja.getQueryString()["culture"] != undefined)
        currencieslist += "&culture=" + ninja.getQueryString()["culture"];
	currencieslist += "'>"+janin.currencies[i].name+"</a> ";
    j++;
}
supportedcurrencies.innerHTML = currencieslist;
document.getElementById("supportedcurrenciescounter").innerHTML = j.toString() + " ";
// populate donate list
document.getElementById("donateqrcode").style.display = "none";
var donatelist = document.getElementById("donatelist");
var list = "<table>";
for(i = 0; i < janin.currencies.length; i++) {
	if(janin.currencies[i].donate == null)
		continue;
    list += "<tr onmouseover='ninja.wallets.donate.displayQrCode("+i+", this)'>";
    list += "<td class='currencyNameColumn'>"+janin.currencies[i].name+"</td>";
    list += "<td class='address'><a href='"+janin.currencies[i].name.toLowerCase()+":"+janin.currencies[i].donate+"'>";
    list += janin.currencies[i].donate+"</a></td></tr>";
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
// Extract i18n
if (ninja.getQueryString()["i18nextract"]) {
    var culture = ninja.getQueryString()["i18nextract"];
    var div = document.createElement("div");
    div.innerHTML = "<h3>i18n</h3>";
    div.setAttribute("style", "text-align: center");
    var elem = document.createElement("textarea");
    elem.setAttribute("rows", "30");
    elem.setAttribute("style", "width: 99%");
    elem.setAttribute("wrap", "off");
    
    a=document.getElementsByClassName("i18n");    
    
    var i18n = "\"" + culture + "\": {\n";
    for(x=0; x<a.length; x++) {
        i18n += "\t";
        i18n += "\"" + a[x].id + "\": \"";
        if(ninja.translator.translations[culture] && ninja.translator.translations[culture][a[x].id])
            i18n += cleani18n(ninja.translator.translations[culture][a[x].id]);
        else
            i18n += "(ENGLISH)" + cleani18n(a[x].innerHTML);
        i18n += "\",\n";
    }
    for(x=0; x<ninja.translator.staticID.length; x++) {
        i18n += "\t";
        i18n += "\"" + ninja.translator.staticID[x] + "\": \"";
        if(ninja.translator.translations[culture] && ninja.translator.translations[culture][ninja.translator.staticID[x]])
            i18n += cleani18n(ninja.translator.translations[culture][ninja.translator.staticID[x]]);
        else
            i18n += "(ENGLISH)" + cleani18n(ninja.translator.translations["en"][ninja.translator.staticID[x]]);
        i18n += "\",\n";
    }
    
    i18n += "},"
    
    elem.innerHTML = i18n;
    div.appendChild(elem);
    document.body.appendChild(div);
}
function cleani18n(string) {
    return string.replace(/^\s\s*/, '').replace(/\s\s*$/, '') // remove leading and trailing space
                .replace(/\s*\n+\s*/g, '\\n') // replace new line
                .replace(/"/g, '\\"');
}

ninja.envSecurityCheck();
ninja.browserSecurityCheck();
