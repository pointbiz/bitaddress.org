module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    combine: {
      src: {
        input: "./src/index.html",
        output: "./index.html",
        tokens: [
          {token: "//array.map.js", file: "./src/array.map.js"},
          {token: "//biginteger.js", file: "./src/biginteger.js"},
          {token: "//bitcoinjs-lib.js", file: "./src/bitcoinjs-lib.js"},
          {token: "//bitcoinjs-lib.address.js", file: "./src/bitcoinjs-lib.address.js"},
          {token: "//bitcoinjs-lib.base58.js", file: "./src/bitcoinjs-lib.base58.js"},
          {token: "//bitcoinjs-lib.ecdsa.js", file: "./src/bitcoinjs-lib.ecdsa.js"},
          {token: "//bitcoinjs-lib.eckey.js", file: "./src/bitcoinjs-lib.eckey.js"},
          {token: "//bitcoinjs-lib.util.js", file: "./src/bitcoinjs-lib.util.js"},
          {token: "//cryptojs.js", file: "./src/cryptojs.js"},
          {token: "//cryptojs.sha256.js", file: "./src/cryptojs.sha256.js"},
          {token: "//cryptojs.pbkdf2.js", file: "./src/cryptojs.pbkdf2.js"},
          {token: "//cryptojs.hmac.js", file: "./src/cryptojs.hmac.js"},
          {token: "//cryptojs.aes.js", file: "./src/cryptojs.aes.js"},
          {token: "//cryptojs.blockmodes.js", file: "./src/cryptojs.blockmodes.js"},
          {token: "//cryptojs.ripemd160.js", file: "./src/cryptojs.ripemd160.js"},
          {token: "//crypto-scrypt.js", file: "./src/crypto-scrypt.js"},
          {token: "//jsqrcode.js", file: "./src/jsqrcode.js"},
          {token: "//doge.js", file: "./src/doge.js"},
          {token: "//ellipticcurve.js", file: "./src/ellipticcurve.js"},
          {token: "//ninja.key.js", file: "./src/ninja.key.js"},
          {token: "//ninja.misc.js", file: "./src/ninja.misc.js"},
          {token: "//ninja.onload.js", file: "./src/ninja.onload.js"},
          {token: "//ninja.unittests.js", file: "./src/ninja.unittests.js"},
          {token: "//ninja.translator.js", file: "./src/ninja.translator.js"},
          {token: "//ninja.singlewallet.js", file: "./src/ninja.singlewallet.js"},
          {token: "//ninja.paperwallet.js", file: "./src/ninja.paperwallet.js"},
          {token: "//ninja.bulkwallet.js", file: "./src/ninja.bulkwallet.js"},
          {token: "//ninja.brainwallet.js", file: "./src/ninja.brainwallet.js"},
          {token: "//ninja.detailwallet.js", file: "./src/ninja.detailwallet.js"},
          {token: "//ninja.donatetab.js", file: "./src/ninja.donatetab.js"},
          {token: "//qrcode.js", file: "./src/qrcode.js"},
          {token: "//securerandom.js", file: "./src/securerandom.js"},
          {token: "//janin.currency.js", file: "./src/janin.currency.js"},
          {token: "//main.css", file: "./src/main.css"}
        ]
      },
      i18n: {
        input: "./index.html",
        output: "./index.html",
        tokens: [
          {token: "//en.js", file: "./l10n/en.js"},
          {token: "//fr.js", file: "./l10n/fr.js"},
          {token: "//de.js", file: "./l10n/de.js"},
          {token: "//nl.js", file: "./l10n/nl.js"},
          {token: "//pt.js", file: "./l10n/pt.js"},
          {token: "//ru.js", file: "./l10n/ru.js"},
          {token: "//es.js", file: "./l10n/es.js"},
          {token: "//ua.js", file: "./l10n/ua.js"},
          {token: "//tr.js", file: "./l10n/tr.js"},
          {token: "//it.js", file: "./l10n/it.js"},
          {token: "//pl.js", file: "./l10n/pl.js"},
          {token: "//zh.js", file: './l10n/zh.js'}
        ]
      }
    }
  })

  grunt.file.defaultEncoding = 'utf-8'
  grunt.loadNpmTasks("grunt-combine")
  grunt.registerTask("default", ["combine:src", "combine:i18n"])
}
