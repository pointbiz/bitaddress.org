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
// testnet, check if testnet edition should be activated
if (ninja.getQueryString()["testnet"] == "true" || ninja.getQueryString()["testnet"] == "1") {
	document.getElementById("testnet").innerHTML = ninja.translator.get("testneteditionactivated");
	document.getElementById("testnet").style.display = "block";
	document.getElementById("detailwifprefix").innerHTML = "'9'";
	document.getElementById("detailcompwifprefix").innerHTML = "'c'";
	Bitcoin.Address.networkVersion = 0x6F; // testnet
	Bitcoin.ECKey.privateKeyPrefix = 0xEF; // testnet
	ninja.testnetMode = true;
}
// if users does not move mouse after random amount of time then generate the key anyway.
setTimeout(ninja.seeder.forceGenerate, ninja.seeder.seedLimit * 20);