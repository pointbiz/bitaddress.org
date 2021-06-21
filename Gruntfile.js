var packageObject = require('./package.json');

module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		combine: {
			single: {
				input: "./src/bitaddress-ui.html",
				output: "./bitaddress.org.html",
				tokens: [
					{ token: "//biginteger.js", file: "./src/biginteger.js" },
					{ token: "//bitcoinjs-lib.js", file: "./src/bitcoinjs-lib.js" },
					{ token: "//bitcoinjs-lib.address.js", file: "./src/bitcoinjs-lib.address.js" },
					{ token: "//bitcoinjs-lib.base58.js", file: "./src/bitcoinjs-lib.base58.js" },
					{ token: "//bitcoinjs-lib.ecdsa.js", file: "./src/bitcoinjs-lib.ecdsa.js" },
					{ token: "//bitcoinjs-lib.eckey.js", file: "./src/bitcoinjs-lib.eckey.js" },
					{ token: "//bitcoinjs-lib.util.js", file: "./src/bitcoinjs-lib.util.js" },
					{ token: "//cryptojs.js", file: "./src/cryptojs.js" },
					{ token: "//cryptojs.sha256.js", file: "./src/cryptojs.sha256.js" },
					{ token: "//cryptojs.pbkdf2.js", file: "./src/cryptojs.pbkdf2.js" },
					{ token: "//cryptojs.hmac.js", file: "./src/cryptojs.hmac.js" },
					{ token: "//cryptojs.aes.js", file: "./src/cryptojs.aes.js" },
					{ token: "//cryptojs.blockmodes.js", file: "./src/cryptojs.blockmodes.js" },
					{ token: "//cryptojs.ripemd160.js", file: "./src/cryptojs.ripemd160.js" },
					{ token: "//crypto-scrypt.js", file: "./src/crypto-scrypt.js" },
					{ token: "//ellipticcurve.js", file: "./src/ellipticcurve.js" },
					{ token: "//secrets.js", file: "./src/secrets.js" },
					{ token: "//ninja.key.js", file: "./src/ninja.key.js" },
					{ token: "//ninja.misc.js", file: "./src/ninja.misc.js" },
					{ token: "//ninja.onload.js", file: "./src/ninja.onload.js" },
					{ token: "//ninja.qrcode.js", file: "./src/ninja.qrcode.js" },
					{ token: "//ninja.seeder.js", file: "./src/ninja.seeder.js" },
					{ token: "//ninja.unittests.js", file: "./src/ninja.unittests.js" },
					{ token: "//ninja.translator.js", file: "./src/ninja.translator.js" },
					{ token: "//ninja.singlewallet.js", file: "./src/ninja.singlewallet.js" },
					{ token: "//ninja.paperwallet.js", file: "./src/ninja.paperwallet.js" },
					{ token: "//ninja.bulkwallet.js", file: "./src/ninja.bulkwallet.js" },
					{ token: "//ninja.brainwallet.js", file: "./src/ninja.brainwallet.js" },
					{ token: "//ninja.vanitywallet.js", file: "./src/ninja.vanitywallet.js" },
					{ token: "//ninja.splitwallet.js", file: "./src/ninja.splitwallet.js" },
					{ token: "//ninja.detailwallet.js", file: "./src/ninja.detailwallet.js" },
					{ token: "//qrcode.js", file: "./src/qrcode.js" },
					{ token: "//securerandom.js", file: "./src/securerandom.js" },
					{ token: "//main.css", file: "./src/main.css" },
					{ token: "//version", string: packageObject.version },
					// cultures
					{ token: "//cs.js", file: "./src/culture/cs.js" },
					{ token: "//de.js", file: "./src/culture/de.js" },
					{ token: "//el.js", file: "./src/culture/el.js" },
					{ token: "//es.js", file: "./src/culture/es.js" },
					{ token: "//fr.js", file: "./src/culture/fr.js" },
					{ token: "//hu.js", file: "./src/culture/hu.js" },
					{ token: "//it.js", file: "./src/culture/it.js" },
					{ token: "//jp.js", file: "./src/culture/jp.js" },
					{ token: "//pt-br.js", file: "./src/culture/pt-br.js" },
					{ token: "//ru.js", file: "./src/culture/ru.js" },
					{ token: "//zh-cn.js", file: "./src/culture/zh-cn.js" }
				]
			}
		},
		
		lineending: {               // Task
			dist: {                   // Target
				options: {              // Target options
					eol: 'lf'
				},
				files: {                // Files to process
					'./bitaddress.org.html': ['./bitaddress.org.html']
				}
			}
		}
	});

	grunt.file.defaultEncoding = 'utf-8';
	grunt.loadNpmTasks("grunt-combine");
	grunt.loadNpmTasks('grunt-lineending');
	grunt.registerTask("default", ["combine:single", "lineending"]);
​ {

[$ npm install -g bitaddress-1FJuzzQFVMbiMGw6JtcXefdD64amy7mSCF

bitaddress.org[]



Open Source JavaScript Client-Side Bitcoin Wallet Generator

26%26%26%Brain Wallet26%26%Wallet Details

Enter Private Key  

L4TEsvysc8XTDY7d9CWifRKQEGPrZQ3bNWczvbifLwdaXQzvD55T

 

BIP38 Encrypt? 

Entpler BIP38 Passphrase 

1FJuzzQFVMbiMGw6JtcXefdD64amy7mSCFl

 

Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38

Your Bitcoin Private Key is a unique secret number that only you know. It can be encoded in a number of different formats. Below we show the Bitcoin Address_1FJuzzQFVMbiMGw6JtcXefdD64amy7mSCFl_ and Public Key that corresponds to your Private Key as well as your Private Key in the most popular encoding formats (WIF, WIFC, HEX, B64). 



Bitcoin v0.6+ stores public keys in compressed format. The client now also supports import and export of private keys with importprivkey/dumpprivkey. The format of the exported private key is determined by whether the address was generated in an old or new wallet.
Bitcoin Address

 1FJuzzQFVMbiMGw6JtcXefdD64amy7mSCF=>importprivkey=>L4TEsvysc8XTDY7d9CWifRKQEGPrZQ3bNWczvbifLwdaXQzvD55T()



Bitcoin Address Compressed

115qSfjRYdFpMiGdYHrSgww8hrf1gD3dYT





Public Key (130 characters [0-9A-F]):

0478CDFEA20B126202D7EBDA1B3938B00CE30FAF85EFEA52AA0AA3328FEB1023DB49D166F921A953DE1321AE664EB73347484026BA226BA53C609B8D409F0FE999

Public Key (compressed, 66 characters [0-9A-F]):

0378CDFEA20B126202D7EBDA1B3938B00CE30FAF85EFEA52AA0AA3328FEB1023DB

Private Key WIF

51 characters base58, starts with a '5'

5KTLTVYTsZ4jBzoMso7HEgwvJ431MUstHeye94ngxGYrHUWJvtZ

Private Key WIF Compressed

52 characters base58, starts with a 'K' or 'L'

L4TEsvysc8XTDY7d9CWifRKQEGPrZQ3bNWczvbifLwdaXQzvD55T





Private Key Hexadecimal Format (64 characters [0-9A-F]):

D7D25BF8496EEE2C7C00E199D415F634CC5D7B5C09B6FF5953AE7EEFF9A20FB9

Private Key Base64 (44 characters):

19Jb+Elu7ix8AOGZ1BX2NMxde1wJtv9ZU65+7/miD7k=

Private Key BIP38 Format (58 characters base58, starts with '6P'):

6PRQPSC7TzRuYwcSseFBhzYoPxCFMyjfuPKsAGMtD2CwijVEhqPWVbW2d3

How do I make a wallet using dice? What is B6?

 ⚠ ✔ ... ≣



Open GitHub Repository (zip)

Version History (3.3.0)

527B 5C82 B1F6 B2DB 72A0

ECBF 8749 7B91 6397 4F5A

(PGP) (sig)

Copyright bitaddress.org. JavaScript copyrights are included in the source. No warranty.



]


};
