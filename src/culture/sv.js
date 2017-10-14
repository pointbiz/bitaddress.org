(function (translator) {
	translator.translations["sv"] = {
		// javascript alerts or messages
		"testneteditionactivated": "TESTNET-VERSION AKTIVERAD",	// "TESTNET EDITION ACTIVATED"
		"paperlabelbitcoinaddress": "Bitcoinadress:",			// "Bitcoin Address:"
		"paperlabelprivatekey": "Privat nyckel:",				// "Private Key:"
		"paperlabelencryptedkey": "Krypterad privat nyckel (Lösenord krävs)",	// "Encrypted Private Key (Password required)"
		"bulkgeneratingaddresses": "Skapar adresser ... ",		// "Generating addresses... "
		"brainalertpassphrasetooshort": "Den angivna lösenfrasen är för kort.\n\n",	// "The passphrase you entered is too short.\n\n"
		"brainalertpassphrasewarning": "Varning: det är viktigt att välja en stark lösenfras för att undgå brute force-försök att gissa din lösenfras och stjäla dina bitcoin.",	// "Warning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your bitcoins."
		"brainalertpassphrasedoesnotmatch": "Lösenfraserna matchar inte.",	// "The passphrase does not match the confirm passphrase."
		"detailalertnotvalidprivatekey": "Den angivna texten är inte en giltig privat nyckel.",	// "The text you entered is not a valid Private Key"
		"detailconfirmsha256": "Den angivna texten är inte en giltig privat nyckel!\n\nVill du använda den angivna texten som lösenfras och skapa en privat nyckel genom att skapa en SHA256-hash av lösenfrasen?\n\nVarning: Det är viktigt att välja en stark lösenfras för att ungå brute force-försök att gissa din lösenfras och stjäla dina bitcoin.", // "The text you entered is not a valid Private Key!\n\nWould you like to use the entered text as a passphrase and create a Private Key using a SHA256 hash of the passphrase?\n\nWarning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your bitcoins."

		"detailbip38decryptbutton": "Dekryptera BIP38",	// "Decrypt BIP38"
		"detailbip38encryptbutton": "Kryptera BIP38",	// "Encrypt BIP38"

		"bip38alertincorrectpassphrase": "Fel lösenfras för denna krypterade privata nyckel.",	// "Incorrect passphrase for this encrypted private key."
		"bip38alertpassphraserequired": "Lösenfras krävs för BIP 38-nyckel.",	// "Passphrase required for BIP38 key"
		"vanityinvalidinputcouldnotcombinekeys": "Ogiltig inmatning. Nycklarna kunde inte kombineras.",	// "Invalid input. Could not combine keys."
		"vanityalertinvalidinputpublickeysmatch": "Ogiltig inmatning. Den publika nyckeln i de båda inmatningsfälten är densamma. Du måste ange två olika nycklar.",	// "Invalid input. The Public Key of both entries match. You must input two different keys."
		"vanityalertinvalidinputcannotmultiple": "Ogiltig inmatning. Det går inte att multiplicera två publika nycklar. Välj \"Addera\" för att lägga ihop två publika nycklar för att skapa en bitcoinadress.",	// "Invalid input. Cannot multiply two public keys. Select 'Add' to add two public keys to get a bitcoin address."
		"vanityprivatekeyonlyavailable": "Endast tillgänglig när två privata nycklar kombineras.",	// "Only available when combining two private keys"
		"vanityalertinvalidinputprivatekeysmatch": "Ogiltig inmatning. Den privata nyckeln i de båda inmatningsfälten är densamma. Du måste ange två olika nycklar.",	// "Invalid input. The Private Key of both entries match. You must input two different keys."

		// header and menu html
		"tagline": "Klient-sides bitcoinplånbok-generator i JavaScript med öppen källkod",	// Open Source JavaScript Client-Side Bitcoin Wallet Generator
		"generatelabelbitcoinaddress": "Skapar bitcoinadress ...",				// Generating Bitcoin Address...
		"generatelabelmovemouse": "RÖR på musen för att skapa extra slumpmässighet ...",	//  MOVE your mouse around to add some extra randomness...
		"generatelabelkeypress": "ELLER skriv några slumpmässiga tecken i detta fält", // OR type some random characters into this textbox
		"singlewallet": "Enkel plånbok",	// "Single Wallet"
		"paperwallet": "Pappersplånbok",	// "Paper Wallet"
		"bulkwallet": "Massplånbok",		// "Bulk Wallet"
		"brainwallet": "Hjärnplånbok",		// "Brain Wallet"
		"vanitywallet": "Personlig plånbok",	// "Vanity Wallet"
		"splitwallet": "Delad plånbok",	// "Split Wallet"
		"detailwallet": "Plånboksdetaljer",	// "Wallet Details"

		// footer html
		"footerlabeldonations": "Donationer:",	// Donations:
		"footerlabeltranslatedby": "Översättning: ordtrogen",
		"footerlabelpgp": "PGP",	// "PGP"
		"footerlabelversion": "Versionshistoria",	// Version History
		"footerlabelgithub": "Kodförråd på GitHub",	// GitHub Repository
		"footerlabelgithubzip": "zip",				// zip
		"footerlabelsig": "sig",					// sig
		"footerlabelcopyright1": "Copyright bitaddress.org",	// "Copyright bitaddress.org."
		"footerlabelcopyright2": "Copyright för JavaScript finns angiven i källkoden.",	// "JavaScript copyrights are included in the source."
		"footerlabelnowarranty": "Ingen garanti lämnas.",	// "No warranty."

		// status html
		"statuslabelcryptogood": "&#10004; Bra!",	// "&#10004; Good!"
		"statuslabelcryptogood1": "Din webbläsare kan skapa kryptografiskt slumpmässiga nycklar genom användning av window.crypto.getRandomValues",	// "Your browser can generate cryptographically random keys using window.crypto.getRandomValues"
		"statusokcryptogood": "OK",	// "OK"
		"statuslabelcryptobad": "&times; Åh nej!",	// "&times; Oh no!"
		"statuslabelcryptobad1": "Din webbläsare stödjer INTE window.crypto.getRandomValues. Du måste använda en modernare webbläsare med denna generator för att öka säkerheten hos de nycklar som skapas.",	// "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated."
		"statusokcryptobad": "OK",	// "OK"
		"statuslabelunittestsgood": "&#10004; Bra!",	// "&#10004; Good!"
		"statuslabelunittestsgood1": "Alla synkrona enhetstester lyckades.",	// "All synchronous unit tests passed."
		"statusokunittestsgood": "OK",	// "OK"
		"statuslabelunittestsbad": "&times; Åh nej!",	// "&times; Oh no!"
		"statuslabelunittestsbad1": "Några synkrona enhetstester LYCKADES INTE. Du måste hitta en annan webbläsare för att använda denna generator.",	// "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator."
		"statusokunittestsbad": "OK",	// "OK"
		"statuslabelprotocolgood": "&#10004; Bra!",	// "&#10004; Good!"
		"statuslabelprotocolgood1": "Du kör denna generator från din lokala dator. <br />Tips: Dubbelkolla att du är offline genom att försöka nå",	// "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying "
		"statusokprotocolgood": "OK",	// "OK"
		"statuslabelprotocolbad": "&#9888; Tänk dig för!",	// "&#9888; Think twice!"
		"statuslabelprotocolbad1": "Det verkar som om du kör denna generator online från en live webbplats. För värdefulla plånböcker rekommenderas att",	// "You appear to be running this generator online from a live website. For valuable wallets it is recommended to"
		"statuslabelprotocolbad2": "ladda ner",	// "download"
		"statuslabelprotocolbad3": "zip-filen från GitHub och kör denna generator offline som en lokal html-fil.",	// "the zip file from GitHub and run this generator offline as a local html file."
		"statusokprotocolbad": "OK",	// "OK"
		"statuslabelkeypool1": "Detta är en logg över alla bitcoinadresser och privata nycklar du skapade under den aktuella sessionen. Att ladda om sidan kommer att skapa en ny session.",	// "This is a log of all the Bitcoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session."
		"statuskeypoolrefresh": "Ladda om",	// "Refresh"
		"statusokkeypool": "OK",	// "OK"

		// single wallet html
		"newaddress": "Skapa ny adress",	// "Generate New Address"
		"singleprint": "Skriv ut",			// "Print"
		"singlelabelbitcoinaddress": "Bitcoinadress",	// "Bitcoin Address"
		"singlelabelprivatekey": "Privat nyckel",	// "Private Key"
		"singletip1": "<b>En bitcoinplånbok</b> är helt enkelt ett par av en bitcoinadress och dess tillhörande privata nyckel. En sådan plånbok har skapats åt dig och visas ovan.",	// "<b>A Bitcoin wallet</b> is as simple as a single pairing of a Bitcoin address with its corresponding Bitcoin private key. Such a wallet has been generated for you in your web browser and is displayed above."
		"singletip2": "<b>För att skydda denna plånbok</b> måste du skriva ut eller på annat spara bitcoinadressen och den privata nyckeln. Det är viktigt att skapa en backup-kopia av den privata nyckeln och spara den på en säker plats. Denna webbplats har ingen kunskap om din privata nyckel. Om du är van att använda PGP kan du ladda ner denna kompletta HTML-sida och verifiera att du har en autentisk version från webbplatsens upphovsmakare genom att matcha SHA256-hashen av sidans HTML med SHA256-hashen som finns tillgänglig i det signerade dokumentet med versionshistorik som finns länkat i sidfoten på webbplatsen. Om du lämnar/laddar om webbsidan eller trycker på knappen \"Skapa ny adress\" så kommer en ny privat nyckel att skapas och den tidigare visade privata nyckeln går inte längre att komma åt. Du måste hålla den privata nyckeln hemlig. Om du delar den privata nyckeln med någon annan så kan denna person komma åt alla bitcoin som finns på adressen. Om du skriver ut plånboken så bör du förvara den i en plastpåse för att skyddad den från väta. Behandla en pappersplånbok som kontanter!",	// <b>To safeguard this wallet</b> you must print or otherwise record the Bitcoin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA256 hash of this HTML with the SHA256 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the "Generate New Address" button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your Bitcoin private key should be kept a secret. Whomever you share the private key with has access to spend all the bitcoins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.
		"singletip3": "<b>Lägg till pengar</b> i denna plånbok genom att be andra att skicka bitcoin till din bitcoinadress.",	// "<b>Add funds</b> to this wallet by instructing others to send bitcoins to your Bitcoin address."
		"singletip4": "<b>Kolla ditt saldo</b> genom att gå till blockchain.info eller blockexplorer.com och ange din bitcoinadress.",	// "<b>Check your balance</b> by going to blockchain.info or blockexplorer.com and entering your Bitcoin address."
		"singletip5": "<b>Spendera dina bitcoin</b> genom att gå till blockchain.info och svep hela saldot för din privata nyckel till ditt konto på deras webbplats. Alternativt kan du ladda ner en av de vanliga bitcoinklienterna och importera din privata nyckel till dess klientplånbok. Tänk på att när du importerar din enda nyckel till en bitcoin (p2p)-klient och spenderar pengar så kommer din nyckel att paketeras ihop med andra privata nycklar i p2p-klientens plånbok. Bei einer &Uuml;berweisung wird etwas R&uuml;ckgeld an eine der Bitcoin-Adressen des Programms geschickt. Deswegen musst du, um tats&auml;chlich dein gesamtes Guthaben zu sichern, ein Backup vom gesamten Wallet des Programms, das nun auch deinen importierten privata nyckel enth&auml;lt, anfertigen. Satoshi r&auml;t, dass man unter keinen Umst&auml;nden ein Wallet l&ouml;schen sollte.",	// "<b>Spend your bitcoins</b> by going to blockchain.info and sweep the full balance of your private key into your account at their website. You can also spend your funds by downloading one of the popular bitcoin p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a bitcoin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another bitcoin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining bitcoins will be stored there. Satoshi advised that one should never delete a wallet."
		"singleshare": "DELA",		// "SHARE"
		"singlesecret": "HEMLIG",	// "SECRET"

		// paper wallet html
		"paperlabelhideart": "Dölj konst?",					// "Hide Art?"
		"paperlabeladdressesperpage": "Adresser per sida:",	// "Addresses per page:"
		"paperlabeladdressestogenerate": "Antal adress att skapa:",	// "Addresses to generate:"
		"papergenerate": "Skapa",							// "Generate"
		"paperprint": "Skriv ut",							// "Print"
		"paperlabelBIPpassphrase": "Lösenfras:",			// "Passphrase:"
		"paperlabelencrypt": "BIP38-kryptera?",				// "BIP38 Encrypt?"

		// bulk wallet html
		"bulklabelstartindex": "Startindex:",				// "Start index:"
		"bulklabelrowstogenerate": "Rader att skapa:",		// "Rows to generate:"
		"bulklabelcompressed": "Komprimerade adresser?",	// "Compressed addresses?"
		"bulkgenerate": "Skapa",							// "Generate"
		"bulkprint": "Skriv ut",							// "Print"
		"bulklabelencrypt": "BIP38-kryptera?",				// "BIP38 Encrypt?"
		"bulklabelBIPpassphrase": "Lösenfras:",				// "Passphrase:"
		"bulklabelcsv": "Kommaseparerade värden (CSV):",	// "Comma Separated Values (CSV):"
		"bulklabelformat": "Index, Adress, Privat nyckel",	// "Index,Address,Private Key"
		"bulklabelq1": "Varför ska jag använda en massplånbok för att ta emot bitcoin på min webbplats?",	// "Why should I use a Bulk Wallet to accept bitcoins on my website?"
		"bulka1": "Bisher musste immer der offizielle Bitcoin-Daemon, bitcoind, auf dem Server installiert sein, damit man Bitcoins auf seiner Webseite annehmen konnte. Viele Webhoster blockieren die Installation von bitcoind. Au&szlig;erdem m&uuml;ssen die privata nyckeln auf dem Server liegen, damit bitcoind funktioniert, obwohl sie dort einfacher gestohlen werden k&ouml;nnen. Mit einem Massen-Wallet brauchst du nur noch die Bitcoin-Adressen und nicht mehr zus&auml;tzlich die privata nyckeln hochladen. Dadurch musst du dir keine Sorgen mehr machen, dass dein Bitcoin-Wallet gestohlen werden k&ouml;nnte, wenn unberechtigt in deinen Server eingedrungen wird.", // "The traditional approach to accepting bitcoins on your website requires that you install the official bitcoin client daemon ("bitcoind"). Many website hosting packages don't support installing the bitcoin daemon. Also, running the bitcoin daemon on your web server means your private keys are hosted on the server and could get stolen if your web server is hacked. When using a Bulk Wallet you can upload only the bitcoin addresses and not the private keys to your web server. Then you don't have to worry about your bitcoin wallet being stolen if your web server is hacked. "
		"bulklabelq2": "Hur använder jag en massplånbok för att acceptera bitcoin på min webbplats?",	// "How do I use a Bulk Wallet to accept bitcoins on my website?"
		"bulklabela2li1": "Använd fliken massplånbok för att för-generera ett stort antal bitcoinadresser (10.000+). Kopiera och CSV-Liste in eine sichere Textdatei auf deinem Computer. Fertige ein Backup dieser Datei an und speichere sie an einem sicheren Ort.",	// "Use the Bulk Wallet tab to pre-generate a large number of bitcoin addresses (10,000+). Copy and paste the generated comma separated values (CSV) list to a secure text file on your computer. Backup the file you just created to a secure location."
		"bulklabela2li2": "Importiere die Bitcoin-Adressen in eine Datenbank auf deinem Server. (Lege nur die Bitcoin-Adressen, nicht aber die privata nyckeln auf deinem Server ab!)",	// "Import the bitcoin addresses into a database table on your web server. (Don't put the wallet/private keys on your web server, otherwise you risk hackers stealing your coins. Just the bitcoin addresses as they will be shown to customers.)"
		"bulklabela2li3": "Biete deinen Kunden auf deiner Webseite Bitcoin als Zahlungsm&ouml;glichkeit an. Wenn ein Kunde mit Bitcoin zahlen m&ouml;chte, zeige ihm eine der Adressen aus deiner Datenbank als Zahlungsadresse an und speichere sie mit seiner Bestellung.",	// "Provide an option on your website's shopping cart for your customer to pay in Bitcoin. When the customer chooses to pay in Bitcoin you will then display one of the addresses from your database to the customer as his "payment address" and save it with his shopping cart order."
		"bulklabela2li4": "Jetzt musst du dir den Zahlungseingang best&auml;tigen lassen. Google \"bitcoin payment notification\" und melde dich bei mindestens einem solchen Anbieter an. Es gibt verschiedene Anbieter, die dich via Web, API, SMS, E-Mail etc. &uuml;ber erfolgte Transaktionen informieren k&ouml;nnen. Sobald du die Eingangsbest&auml;tigung erh&auml;lst, kannst du automatisch die Bestellung abwickeln lassen. Um selber zu schauen, ob eine Zahlung erfolgt ist, kannst du Block Explorer nutzen. Ersetze BITCOINADRESSE durch die Bitcoin-Adresse, die du pr&uuml;fen m&ouml;chtest. Es dauert von zehn Minuten bis zu einer Stunde, um Transaktionen zu best&auml;tigen. <br />http://www.blockexplorer.com/address/BITCOINADRESSE<br /> <br />Unbest&auml;tigte Transaktionen findest du hier: http://blockchain.info/ <br /> S&auml;mtliche Transaktionen sollten dort innerhalb von 30 Sekunden auftauchen.",	// "You now need to be notified when the payment arrives. Google "bitcoin payment notification" and subscribe to at least one bitcoin payment notification service. There are various services that will notify you via Web Services, API, SMS, Email, etc. Once you receive this notification, which could be programmatically automated, you can process the customer's order. To manually check if a payment has arrived you can use Block Explorer. Replace THEADDRESSGOESHERE with the bitcoin address you are checking. It could take between 10 minutes to one hour for the transaction to be confirmed.<br />http://www.blockexplorer.com/address/THEADDRESSGOESHERE<br /><br />Unconfirmed transactions can be viewed at: http://blockchain.info/ <br />You should see the transaction there within 30 seconds."
		"bulklabela2li5": "Deine Bitcoins werden sicher in die Block-Chain aufgenommen. Mithilfe des urspr&uuml;nglichen Wallets vom ersten Schritt kannst du sie ausgeben.",	// "Bitcoins will safely pile up on the block chain. Use the original wallet file you generated in step 1 to spend them."

		// brain wallet html
		"brainlabelenterpassphrase": "Ange lösenfras: ",	// "Enter Passphrase: "
		"brainlabelshow": "Visa?",							// "Show?"
		"brainprint": "Skriv ut",							// "Print"
		"brainlabelconfirm": "Bekräfta lösenfras: ",		// "Confirm Passphrase: "
		"brainview": "Visa",								// "View"
		"brainalgorithm": "Algoritm: SHA256(lösenfras)",	// "Algorithm: SHA256(passphrase)"
		"brainlabelcompressed": "Komprimerad adress?",		// Compressed address?
		"brainlabelbitcoinaddress": "Bitcoinadress:",		// "Bitcoin Address:"
		"brainlabelprivatekey": "Privat nyckel (importformat för plånbok, WIF):",	// "Private Key (Wallet Import Format):"

		// vanity wallet html
		"vanitylabelstep1": "Steg 1 - Skapa ditt \"Steg 1-nyckelpar\"",	// "Step 1 - Generate your \"Step1 Key Pair\""
		"vanitynewkeypair": "Skapa",									// "Generate"
		"vanitylabelstep1publickey": "Steg 1-publik nyckel",			// "Step 1 Public Key:"
		"vanitylabelstep1pubnotes": "Kopiera ovanstående och klistra in i fältet \"Your public key\" på webbplatsen Vanity Pool.",	// "Copy and paste the above into the \"Your-Part-Public-Key\" field in the Vanity Pool Website."
		"vanitylabelstep1privatekey": "Steg 1 privat nyckel:",			// "Step 1 Private Key:"
		"vanitylabelstep1privnotes": "Kopiera ovanstående privata nyckel och spara den i en textfil, die du am besten auf einem verschl&uuml;sselten Laufwerk sicherst. Sobald der Vanity-Pool deine personalisierte Bitcoin-Adresse gefunden hat, kannst du den zu ihr geh&ouml;renden privata nyckel nur mithilfe des vom Pools berechneten privata nyckeln (Pool Part Private Key) und des obigen privata nyckeln (Your Part Private Key) erhalten. Beide privata nyckeln (Pool und Your) werden zum Berechnen des privata nyckeln deiner personalisierten Bitcoin-Adresse ben&ouml;tigt, damit wirklich nur jemand, der beide besitzt, das personalisierte Wallet nutzen kann.",	// "Copy and paste the above Private Key field into a text file. Ideally save to an encrypted drive. You will need this to retrieve the Bitcoin Private Key once the Pool has found your prefix."
		"vanitylabelstep2calculateyourvanitywallet": "Steg 2 - Beräkna/kalkylera/räkna ut(?) din personliga plånbok",	// "Step 2 - Calculate your Vanity Wallet"
		"vanitylabelenteryourpart": "Ange din PART privata nyckel (--Your Part Private Key):",	// "Enter Your Part Private Key (generated in Step 1 above and previously saved):"
		"vanitylabelenteryourpoolpart": "Gib hier den von Vanity-Pool erhaltenen privata nyckel ein (Pool Part Private Key):",	// "Enter Pool Part Private Key (from Vanity Pool):"
		"vanitylabelnote1": "[HINWEIS: Dieses Eingabefeld nimmt sowohl &ouml;ffentlich als auch privata nyckeln an.]",	// "[NOTE: this input box can accept a public key or private key]"
		"vanitylabelnote2": "[HINWEIS: Dieses Eingabefeld nimmt sowohl &ouml;ffentlich als auch privata nyckeln an.]",	// "[NOTE: this input box can accept a public key or private key]"
		"vanitylabelradioadd": "Addera",								// "Add"
		"vanitylabelradiomultiply": "Multiplicera",						// "Multiply"
		"vanitycalc": "Beräkna/kalkylera/räkna ut den personliga plånboken",	// "Calculate Vanity Wallet" 
		"vanitylabelbitcoinaddress": "Personlig bitcoinadress:",		// "Vanity Bitcoin Address:"
		"vanitylabelnotesbitcoinaddress": "Ovanstående är din nya adress som bör inbegripa ditt begärda prefix.",	// "The above is your new address that should include your required prefix."
		"vanitylabelpublickeyhex": "Personlig publik nyckel (HEX):",	// "Vanity Public Key (HEX):"
		"vanitylabelnotespublickeyhex": "Ovanstående är den publika nyckeln i hexadecimalt format.",	// "The above is the Public Key in hexadecimal format. "
		"vanitylabelprivatekey": "Personlig privat nyckel (WIF):",		// "Vanity Private Key (WIF):"
		"vanitylabelnotesprivatekey": "Ovanstående är den privata nyckel som ska läsas in i din plånbok.",	// "The above is the Private Key to load into your wallet. " 

		// split wallet html
		"splitlabelthreshold": "Minimum share threshold needed to combine",	// "Minimum share threshold needed to combine"
		"splitlabelshares": "Number of shares",								// "Number of shares"
		"splitview": "Skapa",												// "Generate"
		"combinelabelentershares": "Enter Available Shares (whitespace separated)",	// "Enter Available Shares (whitespace separated)"
		"combineview": "Combine Shares",									// "Combine Shares"
		"combinelabelprivatekey": "Combined Private Key",					// "Combined Private Key"

		// detail wallet html
		"detaillabelenterprivatekey": "Ange privat nyckel:",			// "Enter Private Key"
		"detailkeyformats": "Nyckelformat: WIF, WIFC, HEX, B64, B6, MINI, BIP38",	// "Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38"
		"detailview": "Visa detaljer",									// "View Details"
		"detailprint": "Skriv ut",										// "Print"
		"detaillabelnote1": "Din privata nyckel deines Wallets ist eine geheime, einzigartige Zeichenfolge, die nur du kennst. Er kann auf mehrer Arten dargestellt werden. Unten findest du die zugeh&ouml;rige Bitcoin-Adresse bzw. &ouml;ffentlichen Schl&uuml;ssel sowie den privata nyckeln in den verbreitetsten Formaten.",	// "Your Bitcoin Private Key is a unique secret number that only you know. It can be encoded in a number of different formats. Below we show the Bitcoin Address and Public Key that corresponds to your Private Key as well as your Private Key in the most popular encoding formats (WIF, WIFC, HEX, B64)."
		"detaillabelnote2": "Ab Version 0.6 speichert Bitcoin-qt &ouml;ffentliche Schl&uuml;ssel komprimiert. Das Programm unterst&uuml;tzt nun auch den Import und Export von privata nyckeln mit importprivkey/dumpprivkey. Das Format des exportierten privata nyckeln h&auml;ngt davon ab, ob die Adresse in einem alten oder neuen Wallet erstellt wurde.",	// "Bitcoin v0.6+ stores public keys in compressed format. The client now also supports import and export of private keys with importprivkey/dumpprivkey. The format of the exported private key is determined by whether the address was generated in an old or new wallet."
		"detaillabelbitcoinaddress": "Bitcoinadress:",					// "Bitcoin Address"
		"detaillabelbitcoinaddresscomp": "Komprimerad bitcoinadress:",	// "Bitcoin Address Compressed"
		"detaillabelpublickey": "Publik nyckel (130 tecken [0-9A-F]):",	// "Public Key (130 characters [0-9A-F]):"
		"detaillabelpublickeycomp": "Komprimerad publik nyckel (66 tecken [0-9A-F]):",	// "Public Key (compressed, 66 characters [0-9A-F]):"
		"detaillabelprivwif": "Privat nyckel WIF<br /> 51 tecken i base58, börjar med ett",	// "Private Key WIF<br />51 characters base58, starts with a"
		"detaillabelprivwifcomp": "Privat nyckel WIF-komprimerad<br />52 tecken i base58, börjar med ett",	// "Private Key WIF Compressed<br />52 characters base58, starts with a"
		"detailcompwifprefix": "'K' eller 'L'",							// "'K' or 'L'"
		"detaillabelprivhex": "Privat nyckel i hexadecimalt format (64 tecken [0-9A-F]):",	// "Private Key Hexadecimal Format (64 characters [0-9A-F]):"
		"detaillabelprivb64": "Privat nyckel Base64 (44 tecken):",		// "Private Key Base64 (44 characters):"
		"detaillabelprivmini": "Privat nyckel miniformat (22, 26 eller 30 tecken, börjar med ett 'S'):",	// "Private Key Mini Format (22, 26 or 30 characters, starts with an 'S'):"
		"detaillabelpassphrase": "Ange BIP38-lösenfras",				// "Enter BIP38 Passphrase"
		"detailbip38decryptbutton": "Decrypt BIP38", 					//TODO: please translate
		"detailbip38encryptbutton": "Encrypt BIP38",					//TODO: please translate
		"detaillabelq1": "Hur skapar jag en plånbok med en tärning? Vad innebär B6?",	// "How do I make a wallet using dice? What is B6?"
		"detaila1": "Beim Erstellen eines Bitcoin-Wallets sollten die dafür genutzten Zufallszahlen auch tatsächlich zufällig sein. Ein echter Würfel liefert wesentlich zufälligere Zahlen als ein Computer. Um einen privat nyckel zu erstellen, sind lediglich 99 Würfe mit einem normalen Würfel nötig. Nach jedem Wurf solltest du die Augenzahl nach folgendem Muster aufschreiben: 1-\>1, 2-\>2, 3-\>3, 4-\>4, 5-\>5, 6-\>0. Die so entstandene Zufallszahl stellt deinen privata nyckel in B6 bzw. zur Basis 6 dar. Diesen 99 Zeichen langen Basis-6-Schlüssel kannst du im obigen Eingabefeld eingeben und dir dann die zugehörigen Details anzeigen lassen. U.a. wird dir die zu deinem privat nyckel gehörende bitcoinadress angezeigt. Es wäre ratsam, sich die ebenfalls berechnete WIF-Version des privata nyckeln zu notieren, weil sie häufiger genutzt wird."	// "An important part of creating a Bitcoin wallet is ensuring the random numbers used to create the wallet are truly random. Physical randomness is better than computer generated pseudo-randomness. The easiest way to generate physical randomness is with dice. To create a Bitcoin private key you only need one six sided die which you roll 99 times. Stopping each time to record the value of the die. When recording the values follow these rules: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. By doing this you are recording the big random number, your private key, in B6 or base 6 format. You can then enter the 99 character base 6 private key into the text field above and click View Details. You will then see the Bitcoin address associated with your private key. You should also make note of your private key in WIF format since it is more widely used."
	};
})(ninja.translator);
