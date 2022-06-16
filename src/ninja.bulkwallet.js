(function (wallets, translator, privateKey) {
	var bulk = wallets.bulkwallet = {
		isOpen: function () {
		    return (document.getElementById("bulkwallet").className.indexOf("selected") != -1);
		},

		open: function () {
			document.getElementById("bulkarea").style.display = "block";
			// show a default CSV list if the text area is empty
			if (document.getElementById("bulktextarea").value == "") {
				// return control of the thread to the browser to render the tab switch UI then build a default CSV list
				setTimeout(function () { bulk.buildCSV(3, 1, document.getElementById("bulkcompressed").checked); }, 200);
			}

			document.getElementById("bulkpassphrase").disabled = !document.getElementById("bulkencrypt").checked;
		},

		close: function () {
			document.getElementById("bulkarea").style.display = "none";
		},

		// use this function to bulk generate addresses
		// rowLimit: number of Bitcoin Addresses to generate
		// startIndex: add this number to the row index for output purposes
		// returns:
		// index,bitcoinAddress,privateKeyWif
		buildCSV: function (rowLimit, startIndex, compressedAddrs, passphrase) {
			document.getElementById("bulktextarea").value = translator.get("bulkgeneratingaddresses") + rowLimit;
			bulk.csv = [];
			bulk.csvRowLimit = rowLimit;
			bulk.csvRowsRemaining = rowLimit;
			bulk.csvStartIndex = --startIndex;
			bulk.compressedAddrs = !!compressedAddrs;
			if (bulk.encrypt) {
				if (passphrase == "") {
					alert(translator.get("bip38alertpassphraserequired"));
					return;
				}
				document.getElementById("busyblock").className = "busy";
				privateKey.BIP38GenerateIntermediatePointAsync(passphrase, null, null, function (intermediate) {
					bulk.intermediatePoint = intermediate;
					document.getElementById("busyblock").className = "";
					setTimeout(bulk.batchCSV, 0);
				});
			}
			else {
				setTimeout(bulk.batchCSV, 0);
			}
		},

		csv: [],
		csvRowsRemaining: null, // use to keep track of how many rows are left to process when building a large CSV array
		csvRowLimit: 0,
		csvStartIndex: 0,

		batchCSV: function () {
			if (bulk.csvRowsRemaining > 0) {
				bulk.csvRowsRemaining--;

				if (bulk.encrypt) {
					privateKey.BIP38GenerateECAddressAsync(bulk.intermediatePoint, bulk.compressedAddrs, function (address, encryptedKey) {
						Bitcoin.KeyPool.push(new Bitcoin.Bip38Key(address, encryptedKey));

						bulk.csv.push((bulk.csvRowLimit - bulk.csvRowsRemaining + bulk.csvStartIndex)
										+ ",\"" + address + "\",\"" + encryptedKey
										+ "\"");
						document.getElementById("bulktextarea").value = translator.get("bulkgeneratingaddresses") + bulk.csvRowsRemaining;

						// release thread to browser to render UI
						setTimeout(bulk.batchCSV, 0);
						
					});
				}
				else {
					var key = new Bitcoin.ECKey(false);
					key.setCompressed(bulk.compressedAddrs);
					bulk.csv.push((bulk.csvRowLimit - bulk.csvRowsRemaining + bulk.csvStartIndex)
										+ ",\"" + key.getBitcoinAddress() + "\",\"" + key.toString("wif")
										//+	"\",\"" + key.toString("wifcomp")    // uncomment these lines to add different private key formats to the CSV
										//+ "\",\"" + key.getBitcoinHexFormat() 
										//+ "\",\"" + key.toString("base64") 
										+ "\"");
					document.getElementById("bulktextarea").value = translator.get("bulkgeneratingaddresses") + bulk.csvRowsRemaining;

					// release thread to browser to render UI
					setTimeout(bulk.batchCSV, 0);
				}
			}
			// processing is finished so put CSV in text area
			else if (bulk.csvRowsRemaining === 0) {
				document.getElementById("bulktextarea").value = bulk.csv.join("\n");
			}
		},

		openCloseFaq: function (faqNum) {
			// do close
			if (document.getElementById("bulka" + faqNum).style.display == "block") {
				document.getElementById("bulka" + faqNum).style.display = "none";
				document.getElementById("bulke" + faqNum).setAttribute("class", "more");
			}
			// do open
			else {
				document.getElementById("bulka" + faqNum).style.display = "block";
				document.getElementById("bulke" + faqNum).setAttribute("class", "less");
			}
		},

		toggleEncrypt: function (element) {
			// enable/disable passphrase textbox
			document.getElementById("bulkpassphrase").disabled = !element.checked;
			bulk.encrypt = element.checked;
		}
	};
})(ninja.wallets, ninja.translator, ninja.privateKey);