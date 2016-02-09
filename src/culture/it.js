(function (translator) {
	translator.translations["it"] = {
		// javascript alerts or messages
		"testneteditionactivated": "TESTNET EDITION ATTIVATO",
		"paperlabelbitcoinaddress": "Indirizzo Bitcoin:",
		"paperlabelprivatekey": "Chiave privata:",
		"paperlabelencryptedkey": "Chiave privata criptata (password richiesta)",
		"bulkgeneratingaddresses": "Generazione indirizzi... ",
		"brainalertpassphrasetooshort": "La passphrase inserita è troppo corta.\n\n",
		"brainalertpassphrasewarning": "Attenzione: La scelta di una passphrase robusta è importante per evitare attacchi brute force in grado di indovinare la tua passphrase e rubare i tuoi Bitcoin",
		"brainalertpassphrasedoesnotmatch": "La passphrase non combacia con quella data per la conferma.",
		"detailalertnotvalidprivatekey": "Il testo inserito non rappresenta una Chiave Privata valida",
		"detailconfirmsha256": "Il testo inserito non rappresenta una Chiave privata valida!\n\nVorresti usare il testo inserito come passphrase e creare da questa un hash SHA256 e generare così una Chiave Privata?\n\nAvvertenza: La scelta di una passphrase robusta è importante per evitare che attacchi di tipo \"brute force\" vadano a segno indovinando il testo segreto e di conseguenza far perdere i Bitcoin.",
		"bip38alertincorrectpassphrase": "Passphrase non corretta per questa chiave privata criptata.",
		"bip38alertpassphraserequired": "Passphrase richiesta per chiave BIP38",
		"vanityinvalidinputcouldnotcombinekeys": "Dati inseriti non validi. Le chiavi non possono essere combinate.",
		"vanityalertinvalidinputpublickeysmatch": "Dati inseriti non validi. Entrambe le chiavi pubbliche combaciano. Devi inserire due chiavi differenti.",
		"vanityalertinvalidinputcannotmultiple": "Dati inseriti non validi. Impossibile moltiplicare due chiavi pubbliche. Seleziona 'Aggiungi' per inserire due chiavi pubbliche ed ottenere l'indirizzo Bitcoin.",
		"vanityprivatekeyonlyavailable": "Non disponibile quando vengono combinate due chiavi private",
		"vanityalertinvalidinputprivatekeysmatch": "Dati inseriti non validi. Entrambe le chiavi private combaciano. Devi inserire due chiavi differenti.",

		// header and menu html
		"tagline": "Open Source JavaScript Client-Side Bitcoin Wallet Generator",
		"generatelabelbitcoinaddress": "Generazione Indirizzo Bitcoin...",
		"generatelabelmovemouse": "MUOVI il tuo mouse per contribuire alla generazione dei numeri casuali...",
		"generatelabelkeypress": "OR type some random characters into this textbox", //TODO: please translate
		"singlewallet": "Singolo portafoglio",
		"paperwallet": "Paper Wallet",
		"bulkwallet": "Portafogli multipli",
		"brainwallet": "Brain Wallet",
		"vanitywallet": "Vanity Wallet",
		"splitwallet": "Split Wallet", //TODO: please translate
		"detailwallet": "Dettagli portafoglio",

		// footer html
		"footerlabeldonations": "Donazioni:",
		"footerlabeltranslatedby": "",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Cronologia Versioni",
		"footerlabelgithub": "Repository GitHub",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "Le note di copyright dei file JavaScript sono inclusi nei sorgenti stessi.",
		"footerlabelnowarranty": "Nessuna garanzia.",

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
		"newaddress": "Genera un Nuovo Indirizzo",
		"singleprint": "Stampa",
		"singlelabelbitcoinaddress": "Indirizzo Bitcoin:",
		"singlelabelprivatekey": "Chiave privata (Wallet Import Format):",
		"singletip1": "<b>Un portafogli bitcoin</b> è composto semplicemente da una coppia di valori: l'indirizzo e la sua chiave privata. Un portafogli è stato appena generato sul tuo browser e mostrato sopra.",
		"singletip2": "<b>Per mettere in sicurezza questo portafogli</b> devi stampare o quantomeno salvare l'indirizzo bitcoin e la Chiave privata. È molto importante fare una copia di backup della chiave privata e conservarla in un posto sicuro. Questo sito non conosce la tua chiave privata. Se hai familiarità con PGP, puoi scaricare per intero questa pagina HTML e controllare la sua autentiticità. Puoi confrontare il codice SHA256 della pagina scaricata con il codice firmato dall'autore che trovi nella cronologia delle versioni (in fondo alla pagina). Se abbandoni/aggiorni la pagina web oppure premi il tasto Genera, un nuovo indirizzo sostituirà quello vecchio che non potrà più essere recuperato. La chiave privata dovrebbe essere tenuta segreta, chiunque conosca la chiave privata può avere accesso e spendere i tuoi bitcoin. Se stampi il tuo portafogli conservalo in una busta di plastica sigillata per tenerla al riparo dall'acqua. Tratta quanto stampato alla stregua di una banconota.",
		"singletip3": "<b>Ricevi fondi</b> su questo portafogli mostrando l'indirizzo bitcoin per il versamento.",
		"singletip4": "<b>Controlla il saldo</b> visitando blockchain.info o blockexplorer.com cercando il tuo indirizzo bitcoin.",
		"singletip5": "<b>Spendi i tuoi bitcoin</b> aprendo un account su blockchain.info usando la chiave privata. Puoi anche spendere i tuoi bitcoin scaricando il popolare client p2p ed importando in esso il portafogli. Tieni presente che quando importi una chiave nel client p2p, nel momento in cui spendi le monete, la chiave viene raggruppata insieme alle altre presenti nel programma con i restanti bitcoin. Quando esegui una transazione gli spiccioli verranno invitati verso un altro indirizzo all'interno del tuo portafogli gestito dal client p2p. Quindi dovresti tenere un backup del portafogli contenuto nel client p2p e tenere questo in un posto sicuro fin tanto terrai dei bitcoin lì. Satoshi consiglia di non cancellare mai un portafogli. ",
		"singleshare": "SHARE", //TODO: please translate
		"singlesecret": "SECRET", //TODO: please translate

		// paper wallet html
		"paperlabelhideart": "Senza grafica?",
		"paperlabeladdressesperpage": "Indirizzi per pagina:",
		"paperlabeladdressestogenerate": "Indirizzi da generare:",
		"papergenerate": "Genera",
		"paperprint": "Stampa",
		"paperlabelBIPpassphrase": "Passphrase:",
		"paperlabelencrypt": "BIP38 criptato?",

		// bulk wallet html
		"bulklabelstartindex": "Indice iniziale:",
		"bulklabelrowstogenerate": "Righe da generare:",
		"bulklabelcompressed": "Indirizzo compresso?",
		"bulkgenerate": "Genera",
		"bulkprint": "Stampa",
		"bulklabelcsv": "Valori Separati da virgola:",
		"bulklabelformat": "Indice,Indirizzo,Chiave Privata (WIF)",
		"bulklabelq1": "Perché dovrei usare tanti portafogli per accettare Bitcoin sul mio sito web?",
		"bulka1": "Il tradizionale approcio per accettare i Bitcoin è quello di installare il demone ufficiale Bitcoin (\"bitcoind\"). Molti pacchetti di hosting web non supportano l'installazione di tale demone. Inoltre tenere in esecuzione il demone richiede che la chiave privata del portafogli sia custodita sul server, se questo viene violato tramite hacking puoi perdere tutti i Bitcoin. Usando portafogli multipli puoi caricare sul server solo l'indirizzo per il versamento e non la chiave privata. Quindi non devi preoccuparti del tuo portafogli nel caso in cui il server venga violato con un attacco di hacking.",
		"bulklabelq2": "Come utilizzo tutti questi portafogli per accettare Bitcoin sul mio sito web?",
		"bulklabela2li1": "Usa la funzione \"Portafogli multipli\" per generare una grande quantità di indirizzi Bitcoin (10,000+). Copia e incolla la lista generata in formato CSV (campi separati da virgola) su un file, al sicuro nel tuo computer. Fai una copia di backup di questo file e mettilo un posto sicuro.",
		"bulklabela2li2": "Importa gli indirizzi Bitcoin in una tabella del database sul tuo web server. (Non importare i portafogli/chiavi private sul web server, altrimenti corri il rischio che rubino i tuoi Bitcoin con l'hacking. Usa gli indirizzi Bitcoin così come verranno mostrati ai tuoi clienti.)",
		"bulklabela2li3": "Fornisci una opzione nel carrello del tuo sito web per pagare in Bitcoin. Quando il cliente sceglie di pagare in Bitcoin, gli mostrerai un indirizzo dal tuo database come \"indirizzo di pagamento\" e conserverai questo stesso indirizzo insieme ai dati dell'ordine.",
		"bulklabela2li4": "Ora hai bisogno di notificare l'arrivo del pagamento. Cerca su Google \"notifiche pagamento Bitcoin\" ed iscriviti ad almeno un servizio di notifica. Esistono diversi servizi che possono notificare in vari modi come Web Services, API, SMS, Email, etc. Una volta ricevuta la notifica, la quale può essere automatizzata con la programmazione, puoi processare l'ordine del cliente. Per verificare manualmente se l'ordine è davvero arrivato puoi usare un block explorer. Sostituisci INDIRIZZODACONTROLLARE con l'indirizzo Bitcoin da controllare. Possono volerci dai 10 fino a 60 minuti per fare in modo che una transazione venga confermata.<br>http://www.blockexplorer.com/address/INDIRIZZODACONTROLLARE<br><br>Le transazioni non confermate possono essere visionate su: http://blockchain.info/ <br>Dovresti vedere la transazione entro 30 secondi.",
		"bulklabela2li5": "In questo modo i Bitcoin transiteranno nella blockchain in tutta sicurezza. Usa il portafogli creato nel Passo 1 per spendere i Bitcoin.",

		// brain wallet html
		"brainlabelenterpassphrase": "Inserisci la Passphrase: ",
		"brainlabelshow": "Mostra?",
		"brainprint": "Stampa",
		"brainlabelconfirm": "Conferma Passphrase: ",
		"brainview": "Visiona",
		"brainalgorithm": "Algoritmo: SHA256(passphrase)",
		"brainlabelbitcoinaddress": "Indirizzo Bitcoin:",
		"brainlabelprivatekey": "Chiave privata (Wallet Import Format):",

		// vanity wallet html
		"vanitylabelstep1": "Passo1 1 - Genera la tua Coppia di chiavi",
		"vanitynewkeypair": "Genera",
		"vanitylabelstep1publickey": "Passo 1 Chiave pubblica:",
		"vanitylabelstep1pubnotes": "Copia e incolla il testo soprastante nel campo \"chiave-pubblica-parziale\" sul sito web del pool.",
		"vanitylabelstep1privatekey": "Passo 1 Chiave pubblica:",
		"vanitylabelstep1privnotes": "Copia & incolla la Chiave privata soprastante su un file di testo. Idealmente conservalo su un disco criptato. Ti servirà per recuperare la Chiave privata una volta che il Pool avrà trovato quella col prefisso scelto.",
		"vanitylabelstep2calculateyourvanitywallet": "Passo 2 - Calcolo del Vanity Wallet",
		"vanitylabelenteryourpart": "Inserisci la tua Chiave Privata parziale (Generata nel Passo 1 e precedentemente salvata):",
		"vanitylabelenteryourpoolpart": "Inserisci la Chiave privata parziale generata dal pool (dal Vanity Pool):",
		"vanitylabelnote1": "[NOTA: questo campo può accettare sia chiavi pubbliche che private]",
		"vanitylabelnote2": "[NOTA: questo campo può accettare sia chiavi pubbliche che private]",
		"vanitylabelradioadd": "Aggiungi",
		"vanitylabelradiomultiply": "Moltiplica",
		"vanitycalc": "Calcola Vanity Wallet",
		"vanitylabelbitcoinaddress": "Indirizzo del Vanity Wallet:",
		"vanitylabelnotesbitcoinaddress": "Sopra trovi il tuo nuovo indirizzo che dovrebbe includere il prefisso che hai scelto.",
		"vanitylabelpublickeyhex": "Chiave pubblica del Vanity Wallet (HEX):",
		"vanitylabelnotespublickeyhex": "Quella sopra è la Chiave Pubblica nel formato esadecimale. ",
		"vanitylabelprivatekey": "Chiave privata del Vanity Wallet (WIF):",
		"vanitylabelnotesprivatekey": "Quella sopra è la Chiave Privata nel formato esadecimale.  ",

		// detail wallet html
		"detaillabelenterprivatekey": "Inserisci la Chiave Privata",
		"detailkeyformats": "Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Mostra Dettagli",
		"detailprint": "Stampa",
		"detaillabelnote1": "La tua Chiave privata Bitcoin è rappresentata da un numero segreto, unico al mondo, che dovresti conoscere soltanto tu. Può essere codificato in molti formati differenti. Di seguito verrà mostrato l'indirizzo Bitcoin e la chiave pubblica, con la corrispondente chiave privata, nei più diffusi formati di codifica (WIF, WIFC, HEX, B64).",
		"detaillabelnote2": "Il client Bitcoin, dalla versione v0.6, memorizza le chiavi pubbliche in formato compresso. Il programma ora supporta l'importazione e l'esportazione delle chiavi private attraverso importprivkey/dumpprivkey. Il formato con cui viene esportata la chiave privata dipende se l'indirizzo generato è stato creato con il nuovo o vecchio portafogli.",
		"detaillabelbitcoinaddress": "Indirizzo Bitcoin",
		"detaillabelbitcoinaddresscomp": "Indirizzo Bitcoin compresso",
		"detaillabelpublickey": "Chiave pubblica (130 caratteri [0-9A-F]):",
		"detaillabelpublickeycomp": "Chiave pubblica (compressa, 66 caratteri [0-9A-F]):",
		"detaillabelprivwif": "Chiave privata WIF<br>51 caratteri base58, inizia per a",
		"detaillabelprivwifcomp": "Chiave privata WIF compressa<br>52 caratteri base58, inizia per 'a'",
		"detailcompwifprefix": "'K' o 'L'",
		"detaillabelprivhex": "Chiave privata formato esadecimale (64 caratteri [0-9A-F]):",
		"detaillabelprivb64": "Chiave privata Base64 (44 caratteri):",
		"detaillabelprivmini": "Chiave privata formato mini (22, 26 or 30 caratteri, inizia per 'S'):",
		"detaillabelpassphrase": "Inserisci passphrase BIP38",
		"detailbip38decryptbutton": "Decripta BIP38",
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "How do I make a wallet using dice? What is B6?", //TODO: please translate
		"detaila1": "An important part of creating a Bitcoin wallet is ensuring the random numbers used to create the wallet are truly random. Physical randomness is better than computer generated pseudo-randomness. The easiest way to generate physical randomness is with dice. To create a Bitcoin private key you only need one six sided die which you roll 99 times. Stopping each time to record the value of the die. When recording the values follow these rules: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. By doing this you are recording the big random number, your private key, in B6 or base 6 format. You can then enter the 99 character base 6 private key into the text field above and click View Details. You will then see the Bitcoin address associated with your private key. You should also make note of your private key in WIF format since it is more widely used." //TODO: please translate
	};
})(ninja.translator);