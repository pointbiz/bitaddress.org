var janin = { currency: { 
							Address: {},
							ECKey: {}
						 }};


janin.currency.Address.networkVersions = [ 
	0x00, 		// Bitcoin
	0x1e		// Dogecoin
];

janin.currency.ECKey.privateKeyPrefixes = [
	0x80,		// Bitcoin
	0x9e		// Dogecoin
];

janin.currency.WalletImportFormatRegEx = [
	"^5[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$",			// Bitcoin
	"^6[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$"			// Dogecoin
];

janin.currency.CompressedWalletImportRegEx = [
	"^[LK][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$",		// Bitcoin
	"^T[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$"			// Dogecoin
];


janin.currency.changeWalletType = function (ddl) {

	var netVersion = janin.currency.Address.networkVersions[ddl.selectedIndex];
	var privKeyPrefix = janin.currency.ECKey.privateKeyPrefixes[ddl.selectedIndex];
	var walletImportRegex = janin.currency.WalletImportFormatRegEx[ddl.selectedIndex];
	var compressedWalletImportRegex = janin.currency.CompressedWalletImportRegEx[ddl.selectedIndex];
	
	janin.currency.useCurrencyWallet(
		netVersion,
		privKeyPrefix,
		walletImportRegex,
		compressedWalletImportRegex
	);


};

janin.currency.useCurrencyWallet = function(_networkVersion, _privateKeyPrefix, _walletImportFormatRegEx, _compressedWalletImportRegEx) {
	
	Bitcoin.Address.networkVersion = _networkVersion; 		// mainnet
	Bitcoin.ECKey.privateKeyPrefix = _privateKeyPrefix; 	// mainnet 0x80    testnet 0xEF
	
	// 51 characters base58, always starts with a '5'
	Bitcoin.ECKey.isWalletImportFormat = function (key) {
		key = key.toString();
		var currencyRegEx = new RegExp(_walletImportFormatRegEx);
		var testnetRegEx = new RegExp("^9[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$");

		return (ECKey.privateKeyPrefix == _privateKeyPrefix) ? (currencyRegEx.test(key)) : (testnetRegEx.test(key));
	};
	
	// 52 characters base58
	Bitcoin.ECKey.isCompressedWalletImportFormat = function (key) {
		key = key.toString();
		var currencyRegEx = new RegExp(_compressedWalletImportRegEx);
		var testnetRegEx = new RegExp("^c[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$");

		return (ECKey.privateKeyPrefix == _privateKeyPrefix) ? (currencyRegEx.test(key)) : (testnetRegEx.test(key));
	};
	
	ninja.wallets.singlewallet.generateNewAddressAndKey();
}
