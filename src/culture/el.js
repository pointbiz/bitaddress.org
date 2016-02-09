(function (translator) {
	translator.translations["el"] = {
		// javascript alerts or messages
		"testneteditionactivated": "ΕΝΕΡΓΗ ΕΚΔΟΣΗ TESTNET",
		"paperlabelbitcoinaddress": "Διεύθυνση Bitcoin:",
		"paperlabelprivatekey": "Προσωπικό Κλειδί:",
		"paperlabelencryptedkey": "Encrypted Private Key (Password required)", //TODO: please translate
		"bulkgeneratingaddresses": "Δημιουργία διευθύνσεων... ",
		"brainalertpassphrasetooshort": "Η φράση κωδικός που δώσατε είναι πολύ αδύναμη.\n\n",
		"brainalertpassphrasewarning": "Προσοχή: Είναι σημαντικό να επιλέξετε μια ισχυρή φράση κωδικό που θα σας προφυλάξει από απόπειρες παραβίασής της τύπου brute force και κλοπή των bitcoins σας.",
		"brainalertpassphrasedoesnotmatch": "Η φράση κωδικός και η επιβεβαίωση της δε συμφωνούν.",
		"detailalertnotvalidprivatekey": "Το κείμενο που εισάγατε δεν αντιστοιχεί σε έγκυρο Προσωπικό Κλειδί",
		"detailconfirmsha256": "Το κείμενο που εισάγατε δεν αντιστοιχεί σε έγκυρο Προσωπικό Κλειδί!\n\nΘα θέλατε να χρησιμοποιηθεί το κείμενο ως κωδικός για τη δημιουργία ενός Προσωπικού Κλειδιού που θα δημιουργηθεί από το SHA265 hash της φράσης κωδικού;\n\nΠροσοχή: Είναι σημαντικό να επιλέξετε έναν ισχυρό κωδικό ώστε να είναι δύσκολο να τον μαντέψει κάποιος και να κλέψει τα bitcoins σας.",
		"bip38alertincorrectpassphrase": "Λάθος φράση κωδικός αποκρυπτογράφησης Προσωπικού Κλειδιού.",
		"bip38alertpassphraserequired": "Απαιτείται η φράση κωδικός για το Κλειδί BIP38",
		"vanityinvalidinputcouldnotcombinekeys": "Μη έγκυρη εισαγωγή. Ο συνδυασμός των κλειδιών είναι αδύνατος.",
		"vanityalertinvalidinputpublickeysmatch": "Μη έγκυρη εισαγωγή. Τα Δημόσια Κλειδιά των δύο εγγραφών είναι όμοια. Πρέπει να εισάγετε δύο διαφορετικά Κλειδιά.",
		"vanityalertinvalidinputcannotmultiple": "Μη έγκυρη εισαγωγή. Δεν είναι δυνατός ο πολλαπλασιασμός δύο Δημόσιων Κλειδιών. Επιλέξτε 'Πρόσθεση' για να προσθέσετε δύο Δημόσια Κλειδιά για δημιουργία μίας Διεύθυνσης Bitcoin.",
		"vanityprivatekeyonlyavailable": "Διαθέσιμο μόνο κατά το συνδυασμό δύο Προσωπικών Κλειδιών",
		"vanityalertinvalidinputprivatekeysmatch": "Μη έγκυρη εισαγωγή. Τα Προσωπικά Κλειδιά των δύο εγγραφών είναι όμοια. Πρέπει να εισάγετε δύο διαφορετικά Κλειδιά.",

		// header and menu html
		"tagline": "Δημιουργός Διευθύνσεων Bitcoin, ανοικτού κώδικα Javascript",
		"generatelabelbitcoinaddress": "Δημιουργία Διεύθυνσης Bitcoin...",
		"generatelabelmovemouse": "ΚΟΥΝΗΣΤΕ το ποντίκι τριγύρω για να προσθέσετε επιπλέον τυχαιότητα...",
		"generatelabelkeypress": "OR type some random characters into this textbox", //TODO: please translate
		"singlewallet": "Απλό Πορτοφόλι",
		"paperwallet": "Χάρτινο Πορτοφόλι",
		"bulkwallet": "Πολλαπλά Πορτοφόλια",
		"brainwallet": "Μνημονικό Πορτοφόλι",
		"vanitywallet": "Πορτοφόλι Vanity",
		"splitwallet": "Split Wallet", //TODO: please translate
		"detailwallet": "Λεπτομέρειες Πορτοφολιού",

		// footer html
		"footerlabeldonations": "Δωρεές:",
		"footerlabeltranslatedby": "Μετάφραση: <a href='http://BitcoinX.gr/'><b>BitcoinX.gr</b></a> 1BitcoiNxkUPcTFxwMqxhRiPEiQRzYskf6",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "ιστορικό εκδόσεων",
		"footerlabelgithub": "Αποθετήριο GitHub",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "Τα πνευματικά δικαιώματα της JavaScript περιλαμβάνονται στον κώδικα.",
		"footerlabelnowarranty": "Καμία εγγύηση.",

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
		"newaddress": "Δημιουργία μιας νέας Διεύθυνσης",
		"singleprint": "Εκτύπωση",
		"singlelabelbitcoinaddress": "Διεύθυνση Bitcoin:",
		"singlelabelprivatekey": "Προσωπικό Κλειδί (Μορφή εισαγωγής σε πορτοφόλι):",
		"singletip1": "<b>A Bitcoin wallet</b> is as simple as a single pairing of a Bitcoin address with it's corresponding Bitcoin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
		"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the Bitcoin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA256 hash of this HTML with the SHA256 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your Bitcoin private key should be kept a secret. Whomever you share the private key with has access to spend all the bitcoins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
		"singletip3": "<b>Add funds</b> to this wallet by instructing others to send bitcoins to your Bitcoin address.", //TODO: please translate
		"singletip4": "<b>Check your balance</b> by going to blockchain.info or blockexplorer.com and entering your Bitcoin address.", //TODO: please translate
		"singletip5": "<b>Spend your bitcoins</b> by going to blockchain.info and sweep the full balance of your private key into your account at their website. You can also spend your funds by downloading one of the popular bitcoin p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a bitcoin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another bitcoin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining bitcoins will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate
		"singleshare": "SHARE", //TODO: please translate
		"singlesecret": "SECRET", //TODO: please translate

		// paper wallet html
		"paperlabelhideart": "Απόκρυψη γραφικού;",
		"paperlabeladdressesperpage": "Διευθύνσεις ανά σελίδα:",
		"paperlabeladdressestogenerate": "Πλήθος διευθύνσεων:",
		"papergenerate": "Δημιουργία",
		"paperprint": "Εκτύπωση",
		"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
		"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

		// bulk wallet html
		"bulklabelstartindex": "Ξεκίνημα δείκτη:",
		"bulklabelrowstogenerate": "Πλήθος σειρών:",
		"bulklabelcompressed": "Συμπιεσμένες διευθύνσεις;",
		"bulkgenerate": "Δημιουργία",
		"bulkprint": "Εκτύπωση",
		"bulklabelcsv": "Τιμές που χωρίζονται με κόμμα (CSV):",
		"bulklabelformat": "Δείκτης,Διεύθυνση,Προσωπικό Κλειδί (WIF)",
		"bulklabelq1": "Γιατί να χρησιμοποιήσω Πολλαπλά Πορτοφόλια στην ιστοσελίδα μου;",
		"bulka1": "Ο παραδοσιακός τρόπος για να δέχεστε bitcoins στην ιστοσελίδα σας, απαιτεί την εγκατάσταση και λειτουργία του επίσημου δαίμονα πελάτη bitcoin (\"bitcoind\"). Αρκετά πακέτα φιλοξενίας δεν υποστηρίζουν την εγκατάστασή του. Επιπλέον, η εκτέλεση του πελάτη bitcoin στον web server σας συνεπάγεται και τη φιλοξενία των προσωπικών σας κλειδιών στον ίδιο server, τα οποία μπορεί να υποκλαπούν αν ο server πέσει θύμα επίθεσης. Χρησιμοποιώντας τα Πολλαπλά Πορτοφόλια, ανεβάζετε στον server σας μόνο τις διευθύνσεις Bitcoin κι όχι τα προσωπικά κλειδιά. Με αυτό τον τρόπο δεν χρειάζεται να ανησυχείτε μήπως υποκλαπεί το πορτοφόλι σας.",
		"bulklabelq2": "Πως χρησιμοποιώ τα Πολλαπλά Πορτοφόλια για να δέχομαι bitcoins στην ιστοσελίδα μου;",
		"bulklabela2li1": "Χρησιμοποιήστε την καρτέλα Πολλαπλά Πορτοφόλια για να δημιουργήσετε έναν μεγάλο αριθμό διευθύνσεων Bitcoin (10.000+). Αντιγράψτε κι επικολλήστε τη λίστα των χωρισμένων με κόμμα τιμών (CSV) που δημιουργήθηκαν, σε ένα ασφαλές αρχείο στον υπολογιστή σας. Αντιγράψτε το αρχείο που δημιουργήσατε σε μια ασφαλή τοποθεσία.",
		"bulklabela2li2": "Εισάγετε τις διευθύνσεις Bitcoin σε έναν πίνακα βάσης δεδομένων στον web server σας. (Μην αντιγράψετε τα προσωπικά κλειδιά ή το πορτοφόλι στον web server γιατί διακινδυνεύετε να σας τα κλέψουν. Μόνο τις διευθύνσεις Bitcoin που θα εμφανίζονται στους πελάτες.)",
		"bulklabela2li3": "Παρέχετε στο καλάθι αγορών σας μια επιλογή για πληρωμή σε Bitcoin. Όταν ο πελάτης επιλέγει να πληρώσει με Bitcoin, θα εμφανίσετε σε αυτόν μια από τις διευθύνσεις από τη βάση δεδομένων, ως την «προσωπική του διεύθυνση πληρωμής» την οποία θα αποθηκεύσετε μαζί με την εντολή αγοράς.",
		"bulklabela2li4": "Τώρα χρειάζεται να ειδοποιηθείτε μόλις γίνει η πληρωμή. Ψάξτε στο Google για «bitcoin payment notification» κι εγγραφείτε σε τουλάχιστο μία υπηρεσία ειδοποίησης πληρωμής. Υπάρχουν διάφορες υπηρεσίες που θα σας ειδοποιήσουν με Web υπηρεσίες, API, SMS, Email, κλπ. Όταν λάβετε την ειδοποίηση, η οποία μπορεί να αυτοματοποιηθεί προγραμματιστικά, εκτελείτε την εντολή του πελάτη. Για να ελέγξετε χειροκίνητα την πληρωμή μπορείτε να χρησιμοποιήσετε τον Block Explorer. Αντικαταστήστε το THEADDRESSGOESHERE με τη Bitcoin διεύθυνσή σας. Η επιβεβαίωση της πληρωμής ενδέχεται να διαρκέσει από δέκα λεπτά έως μία ώρα.<br />http://www.blockexplorer.com/address/THEADDRESSGOESHERE<br /><br />Μπορείτε να δείτε τις συναλλαγές που δεν έχουν επιβεβαιωθεί στο: http://blockchain.info/ <br />Θα πρέπει να δείτε τη συναλλαγή εκεί εντός 30 δευτερολέπτων.",
		"bulklabela2li5": "Τα Bitcoins θα συσσωρεύονται με ασφάλεια στην αλυσίδα των μπλοκ. Χρησιμοποιήστε το αρχικό πορτοφόλι που δημιουργήσατε στο βήμα 1 για να τα ξοδέψετε.",

		// brain wallet html
		"brainlabelenterpassphrase": "Εισάγετε κωδικό: ",
		"brainlabelshow": "Εμφάνιση;",
		"brainprint": "Εκτύπωση",
		"brainlabelconfirm": "Επιβεβαιώστε τον κωδικό: ",
		"brainview": "Δημιουργία",
		"brainalgorithm": "Αλγόριθμος: SHA256(κωδικός)",
		"brainlabelbitcoinaddress": "Διεύθυνση Bitcoin:",
		"brainlabelprivatekey": "Προσωπικό Κλειδί (Μορφή εισαγωγής σε πορτοφόλι):",

		// vanity wallet html
		"vanitylabelstep1": "Βήμα 1 - Δημιουργήστε το «Ζεύγος κλειδιών του Βήματος 1»",
		"vanitynewkeypair": "Δημιουργία",
		"vanitylabelstep1publickey": "Βήμα 1 Δημόσιο Κλειδί:",
		"vanitylabelstep1pubnotes": "Αντιγράψτε κι επικολλήστε το παραπάνω στο πεδίο Your-Part-Public-Key στην ιστοσελίδα του Vanity Pool.",
		"vanitylabelstep1privatekey": "Step 1 Προσωπικό Κλειδί:",
		"vanitylabelstep1privnotes": "Αντιγράψτε κι επικολλήστε το παραπάνω Προσωπικό Κλειδί σε ένα αρχείο κειμένου. Ιδανικά, αποθηκεύστε το σε έναν κρυπτογραφημένο δίσκο. Θα το χρειαστείτε για να ανακτήσετε το Bitcoin Προσωπικό Κλειδί όταν βρεθεί το πρόθεμά σας από το Vanity Pool.",
		"vanitylabelstep2calculateyourvanitywallet": "Βήμα 2 - Υπολογίστε το Vanity Πορτοφόλι σας.",
		"vanitylabelenteryourpart": "Εισάγετε το Προσωπικό Κλειδί που δημιουργήσατε στο Βήμα 1 κι αποθηκεύσατε:",
		"vanitylabelenteryourpoolpart": "Εισάγετε το Προσωπικό Κλειδί από το Vanity Pool:",
		"vanitylabelnote1": "[ΣΗΜΕΙΩΣΗ: Το πεδίο αυτό μπορεί να δεχθεί είτε ένα Δημόσιο είτε ένα Προσωπικό Κλειδί.]",
		"vanitylabelnote2": "[ΣΗΜΕΙΩΣΗ: Το πεδίο αυτό μπορεί να δεχθεί είτε ένα Δημόσιο είτε ένα Προσωπικό Κλειδί.]",
		"vanitylabelradioadd": "Πρόσθεσε",
		"vanitylabelradiomultiply": "Πολλαπλασίασε",
		"vanitycalc": "Υπολογισμός του Πορτοφολιού Vanity",
		"vanitylabelbitcoinaddress": "Vanity Διεύθυνση Bitcoin:",
		"vanitylabelnotesbitcoinaddress": "Παραπάνω είναι η διεύθυνσή σας που θα πρέπει να περιλαμβάνει το επιθυμητό πρόθεμα.",
		"vanitylabelpublickeyhex": "Vanity Δημόσιο Κλειδί (HEX):",
		"vanitylabelnotespublickeyhex": "Παραπάνω είναι το Δημόσιο Κλειδί σε δεκαεξαδική μορφή. ",
		"vanitylabelprivatekey": "Vanity Προσωπικό Κλειδί (WIF):",
		"vanitylabelnotesprivatekey": "Παραπάνω είναι το Προσωπικό Κλειδί που θα φορτώσετε στο Πορτοφόλι σας. ",

		// detail wallet html
		"detaillabelenterprivatekey": "Εισάγετε το Προσωπικό Κλειδί",
		"detailkeyformats": "Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Προβολή λεπτομερειών",
		"detailprint": "Εκτύπωση",
		"detaillabelnote1": "Το Bitcoin Προσωπικό Κλειδί είναι ένας μοναδικός και μυστικός αριθμός που μόνο εσείς πρέπει να γνωρίζετε, ο οποίος μπορεί να κωδικοποιηθεί σε πολλές διαφορετικές μορφές. Εμφανίζουμε παρακάτω τη διεύθυνση Bitcoin και το Δημόσιο Κλειδί, μαζί με το Προσωπικό Κλειδί, στις πιο δημοφιλείς μορφές  (WIF, WIFC, HEX, B64).",
		"detaillabelnote2": "Το Bitcoin v0.6+ αποθηκεύει τα Προσωπικά Κλειδιά σε συμπιεσμένη μορφή. Το πρόγραμμα υποστηρίζει επίσης εισαγωγή κι εξαγωγή των Προσωπικών Κλειδιών με τις εντολές importprivkey/dumpprivkey. Η μορφή του εξαγόμενου Προσωπικού Κλειδιού προσδιορίζεται από το αν η διεύθυνση δημιουργήθηκε σε ένα παλιό ή νέο πορτοφόλι.",
		"detaillabelbitcoinaddress": "Διεύθυνση Bitcoin:",
		"detaillabelbitcoinaddresscomp": "Συμπιεσμένη Διεύθυνση Bitcoin:",
		"detaillabelpublickey": "Δημόσιο Κλειδί (130 χαρακτήρες [0-9A-F]):",
		"detaillabelpublickeycomp": "Δημόσιο Κλειδί (Συμπιεσμένο, 66 χαρακτήρες [0-9A-F]):",
		"detaillabelprivwif": "Προσωπικό Κλειδί WIF (51 χαρακτήρες base58, ξεκινάει με",
		"detaillabelprivwifcomp": "Προσωπικό Κλειδί WIF (Συμπιεσμένο, 52 χαρακτήρες base58, ξεκινάει με",
		"detailcompwifprefix": "'K' ή 'L'",
		"detaillabelprivhex": "Προσωπικό Κλειδί Δεκαεξαδική Μορφή (64 χαρακτήρες [0-9A-F]):",
		"detaillabelprivb64": "Προσωπικό Κλειδί Base64 (44 χαρακτήρες):",
		"detaillabelprivmini": "Προσωπικό Κλειδί Μορφή Mini (22, 26 ή 30 χαρακτήρες, ξεκινάει με 'S'):",
		"detaillabelpassphrase": "BIP38 Κωδικός",
		"detailbip38decryptbutton": "Αποκωδικοποίηση BIP38",
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "How do I make a wallet using dice? What is B6?", //TODO: please translate
		"detaila1": "An important part of creating a Bitcoin wallet is ensuring the random numbers used to create the wallet are truly random. Physical randomness is better than computer generated pseudo-randomness. The easiest way to generate physical randomness is with dice. To create a Bitcoin private key you only need one six sided die which you roll 99 times. Stopping each time to record the value of the die. When recording the values follow these rules: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. By doing this you are recording the big random number, your private key, in B6 or base 6 format. You can then enter the 99 character base 6 private key into the text field above and click View Details. You will then see the Bitcoin address associated with your private key. You should also make note of your private key in WIF format since it is more widely used." //TODO: please translate
	};
})(ninja.translator);