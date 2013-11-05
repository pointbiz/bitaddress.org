ninja.wallets.bulkwallet = {
	open: function () {
		document.getElementById("bulkarea").style.display = "block";
		// show a default CSV list if the text area is empty
		if (document.getElementById("bulktextarea").value == "") {
			// return control of the thread to the browser to render the tab switch UI then build a default CSV list
			setTimeout(function () { ninja.wallets.bulkwallet.buildCSV(3, 1, document.getElementById("bulkcompressed").checked); }, 200);
		}
	},

	close: function () {
		document.getElementById("bulkarea").style.display = "none";
	},

	// use this function to bulk generate addresses
	// rowLimit: number of Bitcoin Addresses to generate
	// startIndex: add this number to the row index for output purposes
	// returns:
	// index,bitcoinAddress,privateKeyWif
	buildCSV: function (rowLimit, startIndex, compressedAddrs) {
		var bulkWallet = ninja.wallets.bulkwallet;
		document.getElementById("bulktextarea").value = ninja.translator.get("bulkgeneratingaddresses") + rowLimit;
		bulkWallet.csv = [];
		bulkWallet.csvRowLimit = rowLimit;
		bulkWallet.csvRowsRemaining = rowLimit;
		bulkWallet.csvStartIndex = --startIndex;
		bulkWallet.compressedAddrs = !!compressedAddrs;
		setTimeout(bulkWallet.batchCSV, 0);
	},

	csv: [],
	csvRowsRemaining: null, // use to keep track of how many rows are left to process when building a large CSV array
	csvRowLimit: 0,
	csvStartIndex: 0,

	batchCSV: function () {
		var bulkWallet = ninja.wallets.bulkwallet;
		if (bulkWallet.csvRowsRemaining > 0) {
			bulkWallet.csvRowsRemaining--;
			var key = new Bitcoin.ECKey(false);
			key.setCompressed(bulkWallet.compressedAddrs);

			bulkWallet.csv.push((bulkWallet.csvRowLimit - bulkWallet.csvRowsRemaining + bulkWallet.csvStartIndex)
								+ ",\"" + key.getBitcoinAddress() + "\",\"" + key.toString("wif")
			//+	"\",\"" + key.toString("wifcomp")    // uncomment these lines to add different private key formats to the CSV
			//+ "\",\"" + key.getBitcoinHexFormat() 
			//+ "\",\"" + key.toString("base64") 
								+ "\"");

			document.getElementById("bulktextarea").value = ninja.translator.get("bulkgeneratingaddresses") + bulkWallet.csvRowsRemaining;

			// release thread to browser to render UI
			setTimeout(bulkWallet.batchCSV, 0);
		}
		// processing is finished so put CSV in text area
		else if (bulkWallet.csvRowsRemaining === 0) {
			document.getElementById("bulktextarea").value = bulkWallet.csv.join("\n");
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
	}
};