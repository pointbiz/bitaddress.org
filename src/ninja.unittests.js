(function (ninja) {
	var ut = ninja.unitTests = {
		runSynchronousTests: function () {
			document.getElementById("busyblock").className = "busy";
			var div = document.createElement("div");
			div.setAttribute("class", "unittests");
			div.setAttribute("id", "unittests");
			var testResults = "";
			var passCount = 0;
			var testCount = 0;
			for (var test in ut.synchronousTests) {
				var exceptionMsg = "";
				var resultBool = false;
				try {
					resultBool = ut.synchronousTests[test]();
				} catch (ex) {
					exceptionMsg = ex.toString();
					resultBool = false;
				}
				if (resultBool == true) {
					var passFailStr = "pass";
					passCount++;
				}
				else {
					var passFailStr = "<b>FAIL " + exceptionMsg + "</b>";
				}
				testCount++;
				testResults += test + ": " + passFailStr + "<br/>";
			}
			testResults += passCount + " of " + testCount + " synchronous tests passed";
			if (passCount < testCount) {
				testResults += "<b>" + (testCount - passCount) + " unit test(s) failed</b>";
			}
			div.innerHTML = "<h3>Unit Tests</h3><div id=\"unittestresults\">" + testResults + "<br/><br/></div>";
			document.body.appendChild(div);
			document.getElementById("busyblock").className = "";

		},

		runAsynchronousTests: function () {
			var div = document.createElement("div");
			div.setAttribute("class", "unittests");
			div.setAttribute("id", "asyncunittests");
			div.innerHTML = "<h3>Async Unit Tests</h3><div id=\"asyncunittestresults\"></div><br/><br/><br/><br/>";
			document.body.appendChild(div);

			// run the asynchronous tests one after another so we don't crash the browser
			ninja.foreachSerialized(ninja.unitTests.asynchronousTests, function (name, cb) {
				document.getElementById("busyblock").className = "busy";
				ninja.unitTests.asynchronousTests[name](cb);
			}, function () {
				document.getElementById("asyncunittestresults").innerHTML += "running of asynchronous unit tests complete!<br/>";
				document.getElementById("busyblock").className = "";
			});
		},

		synchronousTests: {
			//ninja.publicKey tests
			testIsPublicKeyHexFormat: function () {
				var key = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var bool = ninja.publicKey.isPublicKeyHexFormat(key);
				if (bool != true) {
					return false;
				}
				return true;
			},
			testGetHexFromByteArray: function () {
				var bytes = [4, 120, 152, 47, 64, 250, 12, 11, 122, 85, 113, 117, 131, 175, 201, 154, 78, 223, 211, 1, 162, 114, 157, 197, 155, 11, 142, 185, 225, 134, 146, 188, 181, 33, 240, 84, 250, 217, 130, 175, 76, 193, 147, 58, 253, 31, 27, 86, 62, 167, 121, 166, 170, 108, 206, 54, 163, 11, 148, 125, 214, 83, 230, 62, 68];
				var key = ninja.publicKey.getHexFromByteArray(bytes);
				if (key != "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44") {
					return false;
				}
				return true;
			},
			testHexToBytes: function () {
				var key = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var bytes = Crypto.util.hexToBytes(key);
				if (bytes.toString() != "4,120,152,47,64,250,12,11,122,85,113,117,131,175,201,154,78,223,211,1,162,114,157,197,155,11,142,185,225,134,146,188,181,33,240,84,250,217,130,175,76,193,147,58,253,31,27,86,62,167,121,166,170,108,206,54,163,11,148,125,214,83,230,62,68") {
					return false;
				}
				return true;
			},
			testGetBitcoinAddressFromByteArray: function () {
				var bytes = [4, 120, 152, 47, 64, 250, 12, 11, 122, 85, 113, 117, 131, 175, 201, 154, 78, 223, 211, 1, 162, 114, 157, 197, 155, 11, 142, 185, 225, 134, 146, 188, 181, 33, 240, 84, 250, 217, 130, 175, 76, 193, 147, 58, 253, 31, 27, 86, 62, 167, 121, 166, 170, 108, 206, 54, 163, 11, 148, 125, 214, 83, 230, 62, 68];
				var address = ninja.publicKey.getBitcoinAddressFromByteArray(bytes);
				if (address != "1Cnz9ULjzBPYhDw1J8bpczDWCEXnC9HuU1") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAdding: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "0419153E53FECAD7FF07FEC26F7DDEB1EDD66957711AA4554B8475F10AFBBCD81C0159DC0099AD54F733812892EB9A11A8C816A201B3BAF0D97117EBA2033C9AB2";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				if (bytes.toString() != "4,151,19,227,152,54,37,184,255,4,83,115,216,102,189,76,82,170,57,4,196,253,2,41,74,6,226,33,167,199,250,74,235,223,128,233,99,150,147,92,57,39,208,84,196,71,68,248,166,106,138,95,172,253,224,70,187,65,62,92,81,38,253,79,0") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAddingCompressed: function () {
				var key1 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var key2 = "0219153E53FECAD7FF07FEC26F7DDEB1EDD66957711AA4554B8475F10AFBBCD81C";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				var hex = ninja.publicKey.getHexFromByteArray(bytes);
				if (hex != "029713E3983625B8FF045373D866BD4C52AA3904C4FD02294A06E221A7C7FA4AEB") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAddingUncompressedAndCompressed: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "0219153E53FECAD7FF07FEC26F7DDEB1EDD66957711AA4554B8475F10AFBBCD81C";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				if (bytes.toString() != "4,151,19,227,152,54,37,184,255,4,83,115,216,102,189,76,82,170,57,4,196,253,2,41,74,6,226,33,167,199,250,74,235,223,128,233,99,150,147,92,57,39,208,84,196,71,68,248,166,106,138,95,172,253,224,70,187,65,62,92,81,38,253,79,0") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAddingShouldReturnNullWhenSameKey1: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				if (bytes != null) {
					return false;
				}
				return true;
			},
			testGetByteArrayFromAddingShouldReturnNullWhenSameKey2: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var bytes = ninja.publicKey.getByteArrayFromAdding(key1, key2);
				if (bytes != null) {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplying: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, new Bitcoin.ECKey(key2));
				if (bytes.toString() != "4,102,230,163,180,107,9,21,17,48,35,245,227,110,199,119,144,57,41,112,64,245,182,40,224,41,230,41,5,26,206,138,57,115,35,54,105,7,180,5,106,217,57,229,127,174,145,215,79,121,163,191,211,143,215,50,48,156,211,178,72,226,68,150,52") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplyingCompressedOutputsUncompressed: function () {
				var key1 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var key2 = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, new Bitcoin.ECKey(key2));
				if (bytes.toString() != "4,102,230,163,180,107,9,21,17,48,35,245,227,110,199,119,144,57,41,112,64,245,182,40,224,41,230,41,5,26,206,138,57,115,35,54,105,7,180,5,106,217,57,229,127,174,145,215,79,121,163,191,211,143,215,50,48,156,211,178,72,226,68,150,52") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplyingCompressedOutputsCompressed: function () {
				var key1 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = new Bitcoin.ECKey(key2);
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, ecKey);
				if (bytes.toString() != "2,102,230,163,180,107,9,21,17,48,35,245,227,110,199,119,144,57,41,112,64,245,182,40,224,41,230,41,5,26,206,138,57") {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplyingShouldReturnNullWhenSameKey1: function () {
				var key1 = "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44";
				var key2 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, new Bitcoin.ECKey(key2));
				if (bytes != null) {
					return false;
				}
				return true;
			},
			testGetByteArrayFromMultiplyingShouldReturnNullWhenSameKey2: function () {
				var key1 = "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5";
				var key2 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(key1, new Bitcoin.ECKey(key2));
				if (bytes != null) {
					return false;
				}
				return true;
			},
			// confirms multiplication is working and BigInteger was created correctly (Pub Key B vs Priv Key A)
			testGetPubHexFromMultiplyingPrivAPubB: function () {
				var keyPub = "04F04BF260DCCC46061B5868F60FE962C77B5379698658C98A93C3129F5F98938020F36EBBDE6F1BEAF98E5BD0E425747E68B0F2FB7A2A59EDE93F43C0D78156FF";
				var keyPriv = "B1202A137E917536B3B4C5010C3FF5DDD4784917B3EEF21D3A3BF21B2E03310C";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(keyPub, new Bitcoin.ECKey(keyPriv));
				var pubHex = ninja.publicKey.getHexFromByteArray(bytes);
				if (pubHex != "04C6732006AF4AE571C7758DF7A7FB9E3689DFCF8B53D8724D3A15517D8AB1B4DBBE0CB8BB1C4525F8A3001771FC7E801D3C5986A555E2E9441F1AD6D181356076") {
					return false;
				}
				return true;
			},
			// confirms multiplication is working and BigInteger was created correctly (Pub Key A vs Priv Key B)
			testGetPubHexFromMultiplyingPrivBPubA: function () {
				var keyPub = "0429BF26C0AF7D31D608474CEBD49DA6E7C541B8FAD95404B897643476CE621CFD05E24F7AE8DE8033AADE5857DB837E0B704A31FDDFE574F6ECA879643A0D3709";
				var keyPriv = "7DE52819F1553C2BFEDE6A2628B6FDDF03C2A07EB21CF77ACA6C2C3D252E1FD9";
				var bytes = ninja.publicKey.getByteArrayFromMultiplying(keyPub, new Bitcoin.ECKey(keyPriv));
				var pubHex = ninja.publicKey.getHexFromByteArray(bytes);
				if (pubHex != "04C6732006AF4AE571C7758DF7A7FB9E3689DFCF8B53D8724D3A15517D8AB1B4DBBE0CB8BB1C4525F8A3001771FC7E801D3C5986A555E2E9441F1AD6D181356076") {
					return false;
				}
				return true;
			},

			// Private Key tests
			testBadKeyIsNotWif: function () {
				return !(Bitcoin.ECKey.isWalletImportFormat("bad key"));
			},
			testBadKeyIsNotWifCompressed: function () {
				return !(Bitcoin.ECKey.isCompressedWalletImportFormat("bad key"));
			},
			testBadKeyIsNotHex: function () {
				return !(Bitcoin.ECKey.isHexFormat("bad key"));
			},
			testBadKeyIsNotBase64: function () {
				return !(Bitcoin.ECKey.isBase64Format("bad key"));
			},
			testBadKeyIsNotMini: function () {
				return !(Bitcoin.ECKey.isMiniFormat("bad key"));
			},
			testBadKeyReturnsNullPrivFromECKey: function () {
				var key = "bad key";
				var ecKey = new Bitcoin.ECKey(key);
				if (ecKey.priv != null) {
					return false;
				}
				return true;
			},
			testGetBitcoinPrivateKeyByteArray: function () {
				var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var bytes = [41, 38, 101, 195, 135, 36, 24, 173, 241, 218, 127, 250, 58, 100, 111, 47, 6, 2, 36, 109, 166, 9, 138, 145, 210, 41, 195, 33, 80, 242, 113, 139];
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinPrivateKeyByteArray().toString() != bytes.toString()) {
					return false;
				}
				return true;
			},
			testECKeyDecodeWalletImportFormat: function () {
				var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var bytes1 = [41, 38, 101, 195, 135, 36, 24, 173, 241, 218, 127, 250, 58, 100, 111, 47, 6, 2, 36, 109, 166, 9, 138, 145, 210, 41, 195, 33, 80, 242, 113, 139];
				var bytes2 = Bitcoin.ECKey.decodeWalletImportFormat(key);
				if (bytes1.toString() != bytes2.toString()) {
					return false;
				}
				return true;
			},
			testECKeyDecodeCompressedWalletImportFormat: function () {
				var key = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var bytes1 = [41, 38, 101, 195, 135, 36, 24, 173, 241, 218, 127, 250, 58, 100, 111, 47, 6, 2, 36, 109, 166, 9, 138, 145, 210, 41, 195, 33, 80, 242, 113, 139];
				var bytes2 = Bitcoin.ECKey.decodeCompressedWalletImportFormat(key);
				if (bytes1.toString() != bytes2.toString()) {
					return false;
				}
				return true;
			},
			testWifToPubKeyHex: function () {
				var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getPubKeyHex() != "0478982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB521F054FAD982AF4CC1933AFD1F1B563EA779A6AA6CCE36A30B947DD653E63E44"
						|| btcKey.getPubPoint().compressed != false) {
					return false;
				}
				return true;
			},
			testWifToPubKeyHexCompressed: function () {
				var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var btcKey = new Bitcoin.ECKey(key);
				btcKey.setCompressed(true);
				if (btcKey.getPubKeyHex() != "0278982F40FA0C0B7A55717583AFC99A4EDFD301A2729DC59B0B8EB9E18692BCB5"
						|| btcKey.getPubPoint().compressed != true) {
					return false;
				}
				return true;
			},
			testBase64ToECKey: function () {
				var key = "KSZlw4ckGK3x2n/6OmRvLwYCJG2mCYqR0inDIVDycYs=";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinBase64Format() != "KSZlw4ckGK3x2n/6OmRvLwYCJG2mCYqR0inDIVDycYs=") {
					return false;
				}
				return true;
			},
			testHexToECKey: function () {
				var key = "292665C3872418ADF1DA7FFA3A646F2F0602246DA6098A91D229C32150F2718B";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinHexFormat() != "292665C3872418ADF1DA7FFA3A646F2F0602246DA6098A91D229C32150F2718B") {
					return false;
				}
				return true;
			},
			testCompressedWifToECKey: function () {
				var key = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinWalletImportFormat() != "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S"
						|| btcKey.getPubPoint().compressed != true) {
					return false;
				}
				return true;
			},
			testWifToECKey: function () {
				var key = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinWalletImportFormat() != "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb") {
					return false;
				}
				return true;
			},
			testBrainToECKey: function () {
				var key = "bitaddress.org unit test";
				var bytes = Crypto.SHA256(key, { asBytes: true });
				var btcKey = new Bitcoin.ECKey(bytes);
				if (btcKey.getBitcoinWalletImportFormat() != "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb") {
					return false;
				}
				return true;
			},
			testMini30CharsToECKey: function () {
				var key = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinWalletImportFormat() != "5JrBLQseeZdYw4jWEAHmNxGMr5fxh9NJU3fUwnv4khfKcg2rJVh") {
					return false;
				}
				return true;
			},
			testGetECKeyFromAdding: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "5KAJTSqSjpsZ11KyEE3qu5PrJVjR4ZCbNxK3Nb1F637oe41m1c2") {
					return false;
				}
				return true;
			},
			testGetECKeyFromAddingCompressed: function () {
				var key1 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "L3A43j2pc2J8F2SjBNbYprPrcDpDCh8Aju8dUH65BEM2r7RFSLv4") {
					return false;
				}
				return true;
			},
			testGetECKeyFromAddingUncompressedAndCompressed: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "5KAJTSqSjpsZ11KyEE3qu5PrJVjR4ZCbNxK3Nb1F637oe41m1c2") {
					return false;
				}
				return true;
			},
			testGetECKeyFromAddingShouldReturnNullWhenSameKey1: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey != null) {
					return false;
				}
				return true;
			},
			testGetECKeyFromAddingShouldReturnNullWhenSameKey2: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var ecKey = ninja.privateKey.getECKeyFromAdding(key1, key2);
				if (ecKey != null) {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplying: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "SQE6yipP5oW8RBaStWoB47xsRQ8pat";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "5KetpZ5mCGagCeJnMmvo18n4iVrtPSqrpnW5RP92Gv2BQy7GPCk") {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplyingCompressed: function () {
				var key1 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "L5LFitc24jme2PfVChJS3bKuQAPBp54euuqLWciQdF2CxnaU3M8t") {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplyingUncompressedAndCompressed: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "L1n4cgNZAo2KwdUc15zzstvo1dcxpBw26NkrLqfDZtU9AEbPkLWu";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey.getBitcoinWalletImportFormat() != "5KetpZ5mCGagCeJnMmvo18n4iVrtPSqrpnW5RP92Gv2BQy7GPCk") {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplyingShouldReturnNullWhenSameKey1: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey != null) {
					return false;
				}
				return true;
			},
			testGetECKeyFromMultiplyingShouldReturnNullWhenSameKey2: function () {
				var key1 = "5J8QhiQtAiozKwyk3GCycAscg1tNaYhNdiiLey8vaDK8Bzm4znb";
				var key2 = "KxbhchnQquYQ2dfSxz7rrEaQTCukF4uCV57TkamyTbLzjFWcdi3S";
				var ecKey = ninja.privateKey.getECKeyFromMultiplying(key1, key2);
				if (ecKey != null) {
					return false;
				}
				return true;
			},
			testGetECKeyFromBase6Key: function () {
				var base = 6;
				var baseKey = "100531114202410255230521444145414341221420541210522412225005202300434134213212540304311321323051431";
				var hexKey = "292665C3872418ADF1DA7FFA3A646F2F0602246DA6098A91D229C32150F2718B";
				var bigInt = new BigInteger(baseKey, base);
				var ecKey = new Bitcoin.ECKey(bigInt);
				if (ecKey.getBitcoinHexFormat() != hexKey) {
					return false;
				}
				return true;
			},

			// EllipticCurve tests
			testDecodePointEqualsDecodeFrom: function () {
				var key = "04F04BF260DCCC46061B5868F60FE962C77B5379698658C98A93C3129F5F98938020F36EBBDE6F1BEAF98E5BD0E425747E68B0F2FB7A2A59EDE93F43C0D78156FF";
				var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
				var ecPoint1 = EllipticCurve.PointFp.decodeFrom(ecparams.getCurve(), Crypto.util.hexToBytes(key));
				var ecPoint2 = ecparams.getCurve().decodePointHex(key);
				if (!ecPoint1.equals(ecPoint2)) {
					return false;
				}
				return true;
			},
			testDecodePointHexForCompressedPublicKey: function () {
				var key = "03F04BF260DCCC46061B5868F60FE962C77B5379698658C98A93C3129F5F989380";
				var pubHexUncompressed = ninja.publicKey.getDecompressedPubKeyHex(key);
				if (pubHexUncompressed != "04F04BF260DCCC46061B5868F60FE962C77B5379698658C98A93C3129F5F98938020F36EBBDE6F1BEAF98E5BD0E425747E68B0F2FB7A2A59EDE93F43C0D78156FF") {
					return false;
				}
				return true;
			},
			// old bugs
			testBugWithLeadingZeroBytePublicKey: function () {
				var key = "5Je7CkWTzgdo1RpwjYhwnVKxQXt8EPRq17WZFtWcq5umQdsDtTP";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinAddress() != "1M6dsMZUjFxjdwsyVk8nJytWcfr9tfUa9E") {
					return false;
				}
				return true;
			},
			testBugWithLeadingZeroBytePrivateKey: function () {
				var key = "0004d30da67214fa65a41a6493576944c7ea86713b14db437446c7a8df8e13da";
				var btcKey = new Bitcoin.ECKey(key);
				if (btcKey.getBitcoinAddress() != "1NAjZjF81YGfiJ3rTKc7jf1nmZ26KN7Gkn") {
					return false;
				}
				return true;
			}
		},

		asynchronousTests: {
			//https://en.bitcoin.it/wiki/BIP_0038
			testBip38: function (done) {
				var tests = [
					//No compression, no EC multiply
					["6PRVWUbkzzsbcVac2qwfssoUJAN1Xhrg6bNk8J7Nzm5H7kxEbn2Nh2ZoGg", "TestingOneTwoThree", "5KN7MzqK5wt2TP1fQCYyHBtDrXdJuXbUzm4A9rKAteGu3Qi5CVR"],
					["6PRNFFkZc2NZ6dJqFfhRoFNMR9Lnyj7dYGrzdgXXVMXcxoKTePPX1dWByq", "Satoshi", "5HtasZ6ofTHP6HCwTqTkLDuLQisYPah7aUnSKfC7h4hMUVw2gi5"],
					//Compression, no EC multiply
					["6PYNKZ1EAgYgmQfmNVamxyXVWHzK5s6DGhwP4J5o44cvXdoY7sRzhtpUeo", "TestingOneTwoThree", "L44B5gGEpqEDRS9vVPz7QT35jcBG2r3CZwSwQ4fCewXAhAhqGVpP"],
					["6PYLtMnXvfG3oJde97zRyLYFZCYizPU5T3LwgdYJz1fRhh16bU7u6PPmY7", "Satoshi", "KwYgW8gcxj1JWJXhPSu4Fqwzfhp5Yfi42mdYmMa4XqK7NJxXUSK7"],
					//EC multiply, no compression, no lot/sequence numbers
					["6PfQu77ygVyJLZjfvMLyhLMQbYnu5uguoJJ4kMCLqWwPEdfpwANVS76gTX", "TestingOneTwoThree", "5K4caxezwjGCGfnoPTZ8tMcJBLB7Jvyjv4xxeacadhq8nLisLR2"],
					["6PfLGnQs6VZnrNpmVKfjotbnQuaJK4KZoPFrAjx1JMJUa1Ft8gnf5WxfKd", "Satoshi", "5KJ51SgxWaAYR13zd9ReMhJpwrcX47xTJh2D3fGPG9CM8vkv5sH"],
					//EC multiply, no compression, lot/sequence numbers
					["6PgNBNNzDkKdhkT6uJntUXwwzQV8Rr2tZcbkDcuC9DZRsS6AtHts4Ypo1j", "MOLON LABE", "5JLdxTtcTHcfYcmJsNVy1v2PMDx432JPoYcBTVVRHpPaxUrdtf8"],
					["6PgGWtx25kUg8QWvwuJAgorN6k9FbE25rv5dMRwu5SKMnfpfVe5mar2ngH", Crypto.charenc.UTF8.bytesToString([206, 156, 206, 159, 206, 155, 206, 169, 206, 157, 32, 206, 155, 206, 145, 206, 146, 206, 149])/*UTF-8 characters, encoded in source so they don't get corrupted*/, "5KMKKuUmAkiNbA3DazMQiLfDq47qs8MAEThm4yL8R2PhV1ov33D"]];
				
				// running each test uses a lot of memory, which isn't freed
				// immediately, so give the VM a little time to reclaim memory
				function waitThenCall(callback) {
					return function () { setTimeout(callback, 10000); }
				}

				var decryptTest = function (test, i, onComplete) {
					ninja.privateKey.BIP38EncryptedKeyToByteArrayAsync(test[0], test[1], function (privBytes) {
						if (privBytes.constructor == Error) {
							document.getElementById("asyncunittestresults").innerHTML += "fail testDecryptBip38 #" + i + ", error: " + privBytes.message + "<br/>";
						} else {
							var btcKey = new Bitcoin.ECKey(privBytes);
							var wif = !test[2].substr(0, 1).match(/[LK]/) ? btcKey.setCompressed(false).getBitcoinWalletImportFormat() : btcKey.setCompressed(true).getBitcoinWalletImportFormat();
							if (wif != test[2]) {
								document.getElementById("asyncunittestresults").innerHTML += "fail testDecryptBip38 #" + i + "<br/>";
							} else {
								document.getElementById("asyncunittestresults").innerHTML += "pass testDecryptBip38 #" + i + "<br/>";
							}
						}
						onComplete();
					});
				};

				var encryptTest = function (test, compressed, i, onComplete) {
					ninja.privateKey.BIP38PrivateKeyToEncryptedKeyAsync(test[2], test[1], compressed, function (encryptedKey) {
						if (encryptedKey === test[0]) {
							document.getElementById("asyncunittestresults").innerHTML += "pass testBip38Encrypt #" + i + "<br/>";
						} else {
							document.getElementById("asyncunittestresults").innerHTML += "fail testBip38Encrypt #" + i + "<br/>";
							document.getElementById("asyncunittestresults").innerHTML += "expected " + test[0] + "<br/>received " + encryptedKey + "<br/>";
						}
						onComplete();
					});
				};

				// test randomly generated encryption-decryption cycle
				var cycleTest = function (i, compress, onComplete) {
					// create new private key
					var privKey = (new Bitcoin.ECKey(false)).getBitcoinWalletImportFormat();

					// encrypt private key
					ninja.privateKey.BIP38PrivateKeyToEncryptedKeyAsync(privKey, 'testing', compress, function (encryptedKey) {
						// decrypt encryptedKey
						ninja.privateKey.BIP38EncryptedKeyToByteArrayAsync(encryptedKey, 'testing', function (decryptedBytes) {
							var decryptedKey = (new Bitcoin.ECKey(decryptedBytes)).getBitcoinWalletImportFormat();

							if (decryptedKey === privKey) {
								document.getElementById("asyncunittestresults").innerHTML += "pass cycleBip38 test #" + i + "<br/>";
							}
							else {
								document.getElementById("asyncunittestresults").innerHTML += "fail cycleBip38 test #" + i + " " + privKey + "<br/>";
								document.getElementById("asyncunittestresults").innerHTML += "encrypted key: " + encryptedKey + "<br/>decrypted key: " + decryptedKey;
							}
							onComplete();
						});
					});
				};

				// intermediate test - create some encrypted keys from an intermediate
				// then decrypt them to check that the private keys are recoverable
				var intermediateTest = function (i, onComplete) {
					var pass = Math.random().toString(36).substr(2);
					ninja.privateKey.BIP38GenerateIntermediatePointAsync(pass, null, null, function (intermediatePoint) {
						ninja.privateKey.BIP38GenerateECAddressAsync(intermediatePoint, false, function (address, encryptedKey) {
							ninja.privateKey.BIP38EncryptedKeyToByteArrayAsync(encryptedKey, pass, function (privBytes) {
								if (privBytes.constructor == Error) {
									document.getElementById("asyncunittestresults").innerHTML += "fail testBip38Intermediate #" + i + ", error: " + privBytes.message + "<br/>";
								} else {
									var btcKey = new Bitcoin.ECKey(privBytes);
									var btcAddress = btcKey.getBitcoinAddress();
									if (address !== btcKey.getBitcoinAddress()) {
										document.getElementById("asyncunittestresults").innerHTML += "fail testBip38Intermediate #" + i + "<br/>";
									} else {
										document.getElementById("asyncunittestresults").innerHTML += "pass testBip38Intermediate #" + i + "<br/>";
									}
								}
								onComplete();
							});
						});
					});
				}

				document.getElementById("asyncunittestresults").innerHTML += "running " + tests.length + " tests named testDecryptBip38<br/>";
				document.getElementById("asyncunittestresults").innerHTML += "running 4 tests named testBip38Encrypt<br/>";
				document.getElementById("asyncunittestresults").innerHTML += "running 2 tests named cycleBip38<br/>";
				document.getElementById("asyncunittestresults").innerHTML += "running 5 tests named testBip38Intermediate<br/>";
				ninja.runSerialized([
					function (cb) {
						ninja.forSerialized(0, tests.length, function (i, callback) {
							decryptTest(tests[i], i, waitThenCall(callback));
						}, waitThenCall(cb));
					},
					function (cb) {
						ninja.forSerialized(0, 4, function (i, callback) {
							// only first 4 test vectors are not EC-multiply,
							// compression param false for i = 1,2 and true for i = 3,4
							encryptTest(tests[i], i >= 2, i, waitThenCall(callback));
						}, waitThenCall(cb));
					},
					function (cb) {
						ninja.forSerialized(0, 2, function (i, callback) {
							cycleTest(i, i % 2 ? true : false, waitThenCall(callback));
						}, waitThenCall(cb));
					},
					function (cb) {
						ninja.forSerialized(0, 5, function (i, callback) {
							intermediateTest(i, waitThenCall(callback));
						}, cb);
					}
				], done);
			}
		}
	};
})(ninja);