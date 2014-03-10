// run unit tests
if (ninja.getQueryString()["unittests"] == "true" || ninja.getQueryString()["unittests"] == "1") {
	ninja.unitTests.runSynchronousTests();
	ninja.translator.showEnglishJson();
}
// run async unit tests
if (ninja.getQueryString()["asyncunittests"] == "true" || ninja.getQueryString()["asyncunittests"] == "1") {
	ninja.unitTests.runAsynchronousTests();
}
// change language
if (ninja.getQueryString()["culture"] != undefined) {
	ninja.translator.translate(ninja.getQueryString()["culture"]);
}
if (ninja.getQueryString()["showseedpool"] == "true" || ninja.getQueryString()["showseedpool"] == "1") {
	document.getElementById("seedpoolarea").style.display = "block";
}
// populate currency dropdown list
var select = document.getElementById("currency");
var options = "";
for(i = 0; i < janin.currencies.length; i++) {
    options += "<option value='"+i+"'>"+janin.currencies[i].name+"</option>";
}
select.innerHTML = options;
// populate donate list
var donatelist = document.getElementById("donatelist");
var list = "<table>";
for(i = 0; i < janin.currencies.length; i++) {
    list += "<tr onmouseover='ninja.wallets.donate.displayQrCode("+i+", this)'>"
        +"<td>"+janin.currencies[i].name+"</td>"
        +"<td class='address'><a href='"+janin.currencies[i].name.toLowerCase()+":"+janin.currencies[i].donate+"'>"
        +janin.currencies[i].donate+"</a></td></tr>";
}
list += "</table>";
donatelist.innerHTML = list;

