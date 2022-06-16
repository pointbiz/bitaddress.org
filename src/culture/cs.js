(function (translator) {
	translator.translations["cs"] = {
		// javascript alerts or messages
		"testneteditionactivated": "TESTNET aktivován",
		"paperlabelbitcoinaddress": "Bitcoin adresa:",
		"paperlabelprivatekey": "Soukromý klíč:",
		"paperlabelencryptedkey": "Šifrovaný soukromý klíč (Vyžadováno heslo)",
		"bulkgeneratingaddresses": "Generuji adresy... ",
		"brainalertpassphrasetooshort": "Zadané heslo je příliš krátké.\n\n",
		"brainalertpassphrasewarning": "Varování: Je důležité zvolit silné heslo, které je odolné proti útoku hrubou silou a krádeži vašich Bitcoinů.",
		"brainalertpassphrasedoesnotmatch": "Heslo nejsou stejná.",
		"detailalertnotvalidprivatekey": "Zadaný text není platým soukromým klíčem",
		"detailconfirmsha256": "Zadaný text není platným soukromým klíčem!\n\nChcete použít zadaný text jako heslo a vytvořit soukromý klíč pomocí SHA256?\n\nVarování: Je důležité zvolit silné heslo, které je odolné proti útoku hrubou silou a krádeži vašich Bitcoinů.",
		"bip38alertincorrectpassphrase": "Špatné heslo pro BIP38",
		"bip38alertpassphraserequired": "Vyžadováno heslo pro BIP38 klíč",
		"vanityinvalidinputcouldnotcombinekeys": "Špatný vstup. Kombinovat klíče není možné.",
		"vanityalertinvalidinputpublickeysmatch": "Špatný vstup. Veřejný klíč obou položek je shodný. Musíte zadat dva různé klíče.",
		"vanityalertinvalidinputcannotmultiple": "Špatný vstup. Dva veřejné klíče není možné násobit. Zvolte 'Přidat' pro přidání dvou veřejných klíčů a získání Bitcoin adresy.",
		"vanityprivatekeyonlyavailable": "Dostupné pouze při kombinaci dvou soukromých klíčů",
		"vanityalertinvalidinputprivatekeysmatch": "Špatný vstup. Soukromý klíč obou položek je shodný. Musíte zadat dva různé klíče.",

		// header and menu html
		"tagline": "Open Source generátor Bitcoin peněženky napsaný v JavaScript",
		"generatelabelbitcoinaddress": "Generuji Bitcoin adresu",
		"generatelabelmovemouse": "POHYBUJTE myší pro získání dostatku náhody...",
		"generatelabelkeypress": "NEBO napište několik náhodných znaků do tohoto pole",
		"singlewallet": "Jedna peněženka",
		"paperwallet": "Papírová peněženka",
		"bulkwallet": "Hromadná peněženka",
		"brainwallet": "Myšlenková peněženka",
		"vanitywallet": "Peněženka Vanity",
		"splitwallet": "Split Wallet", //TODO: please translate
		"detailwallet": "Detail peněženky",

		// footer html
		"footerlabeldonations": "Příspěvek:",
		"footerlabeltranslatedby": "Překlad: 1LNF2anjkH3HyRKrhMzVYqYRKFeDe2TJWz",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Historie verzí",
		"footerlabelgithub": "GitHub Repository",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "Copyright JavaScriptu je uveden ve zdrojovém kódu.",
		"footerlabelnowarranty": "Bez záruky.",

		// status html
		"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
		"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
		"statusokcryptogood": "OK", //TODO: please translate
		"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
		"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
		"statusokcryptobad": "OK", //TODO: please translate
		"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
		"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
		"statusokunittestsgood": "OK", //TODO: please translate
		"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
		"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
		"statusokunittestsbad": "OK", //TODO: please translate
		"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
		"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
		"statusokprotocolgood": "OK", //TODO: please translate
		"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
		"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
		"statuslabelprotocolbad2": "download", //TODO: please translate
		"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
		"statusokprotocolbad": "OK", //TODO: please translate
		"statuslabelkeypool1": "This is a log of all the Bitcoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
		"statuskeypoolrefresh": "Refresh", //TODO: please translate
		"statusokkeypool": "OK", //TODO: please translate

		// single wallet html
		"newaddress": "Vytvořit novou adresu",
		"singleprint": "Tisk",
		"singlelabelbitcoinaddress": "Bitcoin adresa",
		"singlelabelprivatekey": "Soukromý klíč (WIF &ndash; Formát pro import do peněženky):",
		"singletip1": "<b>Bitcoin peněženka</b> je jednoduchý pár Bitcoin adresy s přidruženým soukromým klíčem. Taková peněženka byla právě vytvořena ve vašem prohlížeči a zobrazena výše.",
		"singletip2": "<b>Pro zabezpečení této peněženky</b> musíte tuto Bitcoin adresu a soukromý klíč vytisknout a nebo jinak poznamenat. Je důležité provést zálohu soukromého klíče a jeho uschování na bezpečném místě. Tato webová stránka nemá žádné informace o vašem soukromém klíči. Pokud ovládáte PGP, můžete celou tuto stránku stáhnout v jednom HTML souboru a ověřit její pravost srovnáním SHA256 hashe s podepsaným dokumentem historie verzí. Odkaz naleznete v patičce této stránky. Pokud opustíte či obnovíte tuto stránku nebo kliknete na 'Vytvořit novou adresu' dojde k vygenerování nového soukromého klíče a předtím zobrazený klíč bude ztracen. Váš soukromý klíč musíte uchovat v tajnosti. Každý kdo má tento klíč k dispozici může utratit všechny peníze v této peněžence. Pokud budete peněženku tisknout, uzavřete ji do nepropustného obalu nebo ji zalaminujte. Tím zabráníte jejímu poškození vodou. Chovejte se k této peněžence jako k normálním bankovkám.",
		"singletip3": "<b>Pro vložení</b> peněz do této peněženky stačí zaslat peníze na Bitcoin adresu.",
		"singletip4": "<b>Zkontrolovat zůstatek</b> můžete na webové stránce blockchain.info nebo blockexplorer.com po zadání Bitcoin adresy.",
		"singletip5": "<b>Utratit Bitcoiny</b> můžete pomocí blockchain.info načtením celého zůstatku pomocí soukromého klíče do vašeho účtu. Utratit zůstatek můžete také pomocí jednoho z P2P Bitcoin klientů naimportováním soukromého klíče. Myslete na to, že importem klíče do klienta se stane součástí jeho peněženky. Pokud převedete někomu peníze, nespotřebovaný zůstatek se zašle na jinou Bitcoin adresu uvedenou v P2P klienta. Tuto novou adresu musíte vyzálohovat a udržovat v bezpečí. Satoshi doporučuje, že by nikdo nikdy neměl mazat peněženku.",
		"singleshare": "SDÍLEJTE",
		"singlesecret": "SOUKROMÉ",

		// paper wallet html
		"paperlabelhideart": "Skrýt grafiku?",
		"paperlabeladdressesperpage": "Adres na stránku:",
		"paperlabeladdressestogenerate": "Vytvořit adres:",
		"papergenerate": "Vytvořit",
		"paperprint": "Tisk",
		"paperlabelBIPpassphrase": "Heslo:",
		"paperlabelencrypt": "Šifrovat BIP38?",

		// bulk wallet html
		"bulklabelstartindex": "Počátek:",
		"bulklabelrowstogenerate": "Počet řádku k vytvoření:",
		"bulklabelcompressed": "Komprimované adresy?",
		"bulkgenerate": "Vytvořit",
		"bulkprint": "Tisk",
		"bulklabelcsv": "Čárkou oddělené hodnoty (CSV):",
		"bulklabelformat": "Index, Adresa, Soukromý klíč (WIF &ndash; Formát pro import do peněženky)",
		"bulklabelq1": "Proč bych měl používat Hromadnou peněženku pro příjem Bitcoinů na mé stránce?",
		"bulka1": "Tradiční způsob jak přijímat Bitcoiny na vaší webové stránce vyžaduje instalaci oficiálního bitcoin klienta (\"bitcoind\"). Mnoho webhostingových společností neumožňuje tuto instalaci provést. Také běh bitcoin démona na webovém serveru znamená, že soukromé klíče jsou uloženy na serveru a mohou být ukradeny. Pokud použijete Hromadnou peněženku, tak stačí na server nahrát pouze veřejnou bitcoin adresu a ne soukromé klíče. Poté se nemusíte bát, že vaše Bitcoiny budou ukradeny v případě napadení serveru.",
		"bulklabelq2": "Jakým způsobem mohou přijímat Bitcoiny na mé stránce pomocí Hromadné peněženky?",
		"bulklabela2li1": "Předgenerujte si velké množství Bitcoin adres (10 000+). Okopírujte si CSV seznam do souboru na bezpečné místo ve vašem počítači. Poté jej vyzálohujte na bezpečné místo.",
		"bulklabela2li2": "Naimportujte Bitcoin adresy do databáze na vašem webovém serveru. Neimportujte soukromé klíče, abyste zabránili krádeži vašich peněz.",
		"bulklabela2li3": "Umožněte na vaší stránce platbu pomocí Bitcoinu. Stačí vždy zobrazit jednu z vygenerovaných adres a uložit si ji u objednávky.",
		"bulklabela2li4": "Nyní je již pouze potřeba zařídit notifikace o příchozí transakci. Zadejte do Google \"bitcoin payment notification\" a využijte jednu z existujících služeb. Existuje jich několik a podporují např. Web Services, API, SMS, Email, apod. Notifikaci můžete zpracovat automaticky. Pro ruční kontrolu, zda peníze přišly, stačí použít Block Explorer. Nahraďte SEMPATŘÍADRESA Bitcoin adresou, kterou chcete zkontrolovat. Potvrzení transkace může trvat od 10 minut do jedné hodiny.<br />http://www.blockexplorer.com/address/SEMPATŘÍADRESA<br /><br />Nepotvrzené tansakce je možné zkontrolovat na: http://blockchain.info/ <br />Většinou se zde zobrazí do 30 sekund.",
		"bulklabela2li5": "Bitcoiny budou bezpečně převedeny v řetězci bloků. Pro spotřebování stačí kdykoliv naimportovat soubor vygenerovaný v prvním kroku.",

		// brain wallet html
		"brainlabelenterpassphrase": "Zadejte heslo:",
		"brainlabelshow": "Zobrazit?",
		"brainprint": "Tisk",
		"brainlabelconfirm": "Heslo znovu:",
		"brainview": "Zobrazit",
		"brainalgorithm": "Algoritmus: SHA256 (Heslo)",
		"brainlabelbitcoinaddress": "Bitcoin adresa:",
		"brainlabelprivatekey": "Soukromý klíč (WIF &ndash; Formát pro import do peněženky):",

		// vanity wallet html
		"vanitylabelstep1": "Krok 1 &ndash; Vytvořte klíč pro první krok",
		"vanitynewkeypair": "Vytvořit",
		"vanitylabelstep1publickey": "Veřejný klíč 1. kroku",
		"vanitylabelstep1pubnotes": "Zkopírujte a vložte výše uvedený klíč do pole Your-Part-Public-Key na Vanity Pool stránce.",
		"vanitylabelstep1privatekey": "Soukromý klíč 1. kroku",
		"vanitylabelstep1privnotes": "Zkopírujte a uschovejte uvedený soukromý klíč. Ideálně na šifrovaný disk. Budete ho potřebovat pro získání vašeho Bitcoin soukromého klíče poté, co pool nalezne začátek.",
		"vanitylabelstep2calculateyourvanitywallet": "Krok 2 &ndash; Výpočet peněženky Vanity",
		"vanitylabelenteryourpart": "Zadejte vaši část soukromého klíče (vygenerovaný a uložený v prvním kroku výše):",
		"vanitylabelenteryourpoolpart": "Zadejte pool část soukromého klíče (z Vanity Poolu):",
		"vanitylabelnote1": "[POZNÁMKA: do tohoto pole můžete zadat veřejný nebo soukromý klíč]",
		"vanitylabelnote2": "[POZNÁMKA: do tohoto pole můžete zadat veřejný nebo soukromý klíč]",
		"vanitylabelradioadd": "Sečíst",
		"vanitylabelradiomultiply": "Násobit",
		"vanitycalc": "Spočítát peněženku Vanity",
		"vanitylabelbitcoinaddress": "Bitcoin adresa Vanity:",
		"vanitylabelnotesbitcoinaddress": "Výše je vaše nová adresa, která by měla obsahovat požadovaný začátek.",
		"vanitylabelpublickeyhex": "Veřejný klíč Vanity (HEX):",
		"vanitylabelnotespublickeyhex": "Výše je veřejný klíč v hexadecimálním formátu.",
		"vanitylabelprivatekey": "Soukromý klíč Vanity (WIF):",
		"vanitylabelnotesprivatekey": "Výše je soukromý klíč pro načtení do vaší peněženky.",

		// detail wallet html
		"detaillabelenterprivatekey": "Zadejte soukromý klíč:",
		"detailkeyformats": "Podporované formáty: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Zobrazit detail",
		"detailprint": "Tisk",
		"detaillabelnote1": "",
		"detaillabelnote2": "",
		"detaillabelbitcoinaddress": "Bitcoin adresa:",
		"detaillabelbitcoinaddresscomp": "Komprimovaná bitcoin adresa:",
		"detaillabelpublickey": "Veřejný klíč (130 znaků [0-9A-F]):",
		"detaillabelpublickeycomp": "Komprimovaný veřejný klíč (66 znaků [0-9A-F]):",
		"detaillabelprivwif": "Soukromý klíč WIF  <br />51 znaků v base58, začíná",
		"detaillabelprivwifcomp": "Komprimovaný soukromý klíč WIF <br />52 znaků v base58, začíná",
		"detailcompwifprefix": "'K' nebo 'L'",
		"detaillabelprivhex": "Soukromý klíč v hexadecimálním formátů (64 znaků [0-9A-F]):",
		"detaillabelprivb64": "Soukromý klíč v base64 (44 znaků):",
		"detaillabelprivmini": "Soukromý klíč v mini formátů (22, 26 nebo 30 znaků, začíná 'S'):",
		"detaillabelpassphrase": "Zadejte BIP38 heslo:",
		"detailbip38decryptbutton": "Dešifrovat",
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "Jak si mohu vytvořit peněženku pomocí hrací kostky? Co je to B6?",
		"detaila1": "Důležitá součást vytváření Bitcoin peněženky je jistota, že náhodná čísla použitá pro její tvorbu jsou opravdu náhodná. Fyzická náhoda je lepší než počítačem generovaná pseudonáhoda. Pomocí hrací kostky je možné jednoduše získat fyzicky náhodná čísla. Pro vytvoření soukromého klíče potřebujete pouze šestihrannou kostku, kterou 99x hodíte. Každý tento hod zaznamenejte. Při zapisování převeďte čísla takto: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Pomocí této techniky zapisujete velké, opravdu náhodné číslo, svůj soukromý klíč v B6 nebo také base 6 formátu. Těchto 99 čísel napište do pole výše a klikněte na Zobrazit detail. Poté se vám zobrazí Bitcoin adresa přidružená k tomuto soukromému klíči. Soukromý klíč byste si měli zaznamenat také ve WIF formátu, který je široce používán."
	};
})(ninja.translator);