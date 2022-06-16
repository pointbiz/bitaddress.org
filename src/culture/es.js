(function (translator) {
	translator.translations["es"] = {
		// javascript alerts or messages
		"testneteditionactivated": "Testnet se activa",
		"paperlabelbitcoinaddress": "Dirección Bitcoin:",
		"paperlabelprivatekey": "Clave privada:",
		"paperlabelencryptedkey": "Clave privada cifrada (contraseña necesaria)",
		"bulkgeneratingaddresses": "Generación de direcciones... ",
		"brainalertpassphrasetooshort": "La contraseña introducida es demasiado corta.\n\n",
		"brainalertpassphrasewarning": "Aviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus bitcoins.",
		"brainalertpassphrasedoesnotmatch": "Las contraseñas no coinciden.",
		"detailalertnotvalidprivatekey": "El texto que has introducido no es una clave privada válida",
		"detailconfirmsha256": "El texto que has introducido no es una clave privada válida\n\n¿Quieres usar ese texto como si fuera una contraseña y generar una clave privada usando un hash SHA256 de tal contraseña?\n\nAviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus bitcoins.",
		"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.", //TODO: please translate
		"bip38alertpassphraserequired": "Passphrase required for BIP38 key", //TODO: please translate
		"vanityinvalidinputcouldnotcombinekeys": "Entrada no válida. No se puede combinar llaves.",
		"vanityalertinvalidinputpublickeysmatch": "Entrada no válida. La clave pública de ambos coincidan entradas. Debe introducir dos claves diferentes.",
		"vanityalertinvalidinputcannotmultiple": "Entrada no válida. No se puede multiplicar dos claves públicas. Seleccione 'Añadir' para agregar dos claves públicas para obtener una dirección bitcoin.",
		"vanityprivatekeyonlyavailable": "Sólo está disponible cuando se combinan dos claves privadas",
		"vanityalertinvalidinputprivatekeysmatch": "Entrada no válida. La clave privada de ambos coincidan entradas. Debe introducir dos claves diferentes.",

		// header and menu html
		"tagline": "Generador de carteras Bitcoin de código abierto en lado de cliente con Javascript",
		"generatelabelbitcoinaddress": "Generando dirección Bitcoin...",
		"generatelabelmovemouse": "Mueve un poco el ratón para crear entropía...",
		"generatelabelkeypress": "OR type some random characters into this textbox", //TODO: please translate
		"singlewallet": "Una sola cartera",
		"paperwallet": "Cartera en papel",
		"bulkwallet": "Direcciones en masa",
		"brainwallet": "Cartera mental",
		"vanitywallet": "Cartera personalizada",
		"splitwallet": "Split Wallet", //TODO: please translate
		"detailwallet": "Detalles de la cartera",

		// footer html
		"footerlabeldonations": "Donaciones:",
		"footerlabeltranslatedby": "Traducción: <b>12345</b>Vypv2QSmuRXcciT5oEB27mPbWGeva",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Histórico de versiones",
		"footerlabelgithub": "Repositorio GitHub",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "Copyright del código JavaScript: en el fuente.",
		"footerlabelnowarranty": "Sin garantía.",

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
		"newaddress": "Generar dirección",
		"singleprint": "Imprimir",
		"singlelabelbitcoinaddress": "Dirección Bitcoin",
		"singlelabelprivatekey": "Clave privada (formato para importar):",
		"singletip1": "<b>A Bitcoin wallet</b> is as simple as a single pairing of a Bitcoin address with it's corresponding Bitcoin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
		"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the Bitcoin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA256 hash of this HTML with the SHA256 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your Bitcoin private key should be kept a secret. Whomever you share the private key with has access to spend all the bitcoins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
		"singletip3": "<b>Add funds</b> to this wallet by instructing others to send bitcoins to your Bitcoin address.", //TODO: please translate
		"singletip4": "<b>Check your balance</b> by going to blockchain.info or blockexplorer.com and entering your Bitcoin address.", //TODO: please translate
		"singletip5": "<b>Spend your bitcoins</b> by going to blockchain.info and sweep the full balance of your private key into your account at their website. You can also spend your funds by downloading one of the popular bitcoin p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a bitcoin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another bitcoin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining bitcoins will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate
		"singleshare": "SHARE", //TODO: please translate
		"singlesecret": "SECRET", //TODO: please translate

		// paper wallet html
		"paperlabelhideart": "Ocultar diseño",
		"paperlabeladdressesperpage": "Direcciones por página:",
		"paperlabeladdressestogenerate": "Direcciones en total:",
		"papergenerate": "Generar",
		"paperprint": "Imprimir",
		"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
		"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

		// bulk wallet html
		"bulklabelstartindex": "Empezar en:",
		"bulklabelrowstogenerate": "Filas a generar:",
		"bulklabelcompressed": "Compressed addresses?", //TODO: please translate
		"bulkgenerate": "Generar",
		"bulkprint": "Imprimir",
		"bulklabelcsv": "Valores separados por coma:",
		"bulklabelformat": "Índice,Dirección,Clave privada (formato para importar)",
		"bulklabelq1": "¿Por qué debo usar \"Direcciones en masa\" para aceptar Bitcoins en mi web?",
		"bulka1": "La forma tradicional de aceptar bitcoins en tu web requiere tener instalado el cliente oficial de bitcoin (\"bitcoind\"). Sin embargo muchos servicios de hosting no permiten instalar dicho cliente. Además, ejecutar el cliente en tu servidor supone que las claves privadas están también en el servidor y podrían ser comprometidas en caso de intrusión. Al usar este mecanismo, puedes subir al servidor sólo las dirección de bitcoin y no las claves privadas. De esta forma no te tienes que preocupar de que alguien robe la cartera si se cuelan en el servidor.",
		"bulklabelq2": "¿Cómo uso \"Direcciones en masa\" para aceptar bitcoins en mi web?",
		"bulklabela2li1": "Usa el tab \"Direcciones en masa\" para generar por anticipado muchas direcciones (más de 10000). Copia y pega la lista de valores separados por comas (CSV) a un archivo de texto seguro (cifrado) en tu ordenador. Guarda una copia de seguridad en algún lugar seguro.",
		"bulklabela2li2": "Importa las direcciones en la base de datos de tu servidor. No subas la cartera ni las claves públicas, o de lo contrario te lo pueden robar. Sube sólo las direcciones, ya que es lo que se va a mostrar a los clientes.",
		"bulklabela2li3": "Ofrece una alternativa en el carro de la compra de tu web para que los clientes paguen con Bitcoin. Cuando el cliente elija pagar con Bitcoin, les muestras una de las direcciones de la base de datos como su \"dirección de pago\" y guardas esto junto con el pedido.",
		"bulklabela2li4": "Ahora te hace falta recibir una notificación del pago. Busca en google \"notificación de pagos bitcoin\" (o \"bitcoin payment notification\" en inglés) y suscríbete a alguno de los servicios que aparezcan. Hay varios de ellos, que te pueden notificar vía Web services, API, SMS, email, etc. Una vez te llegue la notificación, lo cual puede ser automatizado, entonces ya puedes procesar el pedido. Para comprobar a mano si has recibido un pago, puedes usar Block Explorer: reemplaza DIRECCION a continuación por la dirección que estés comprobando. La transacción puede tardar entre 10 minutos y una hora en ser confirmada. <br />http://www.blockexplorer.com/address/DIRECCION<br /><br />Puedes ver las transacciones sin confirmar en: http://blockchain.info/ <br />Las transacciones sin confirmar suelen aparecer ahí en unos 30 segundos.",
		"bulklabela2li5": "Las bitcoins que recibas se almacenarán de forma segura en la cadena de bloques. Usa la cartera original que generaste en el paso 1 para usarlas.",

		// brain wallet html
		"brainlabelenterpassphrase": "Contraseña:",
		"brainlabelshow": "Mostrar",
		"brainprint": "Imprimir",
		"brainlabelconfirm": "Confirmar contraseña:",
		"brainview": "Ver",
		"brainalgorithm": "Algoritmo: SHA256(contraseña)",
		"brainlabelbitcoinaddress": "Dirección Bitcoin:",
		"brainlabelprivatekey": "Clave privada (formato para importar):",

		// vanity wallet html
		"vanitylabelstep1": "Paso 1 - Genera tu par de claves",
		"vanitynewkeypair": "Generar",
		"vanitylabelstep1publickey": "Clave pública:",
		"vanitylabelstep1pubnotes": "Copia y pega la línea de arriba en el campo \"Your-Part-Public-Key\" de la web de Vanity Pool.",
		"vanitylabelstep1privatekey": "Clave privada:",
		"vanitylabelstep1privnotes": "Copia y pega la clave privada de arriba en un archivo de texto. Es mejor que lo almacenes en un volumen cifrado. Lo necesitarás para recuperar la clave privada una vez Vanity Pool haya encontrado tu prefijo.",
		"vanitylabelstep2calculateyourvanitywallet": "Paso 2 - Calcula tu cartera personalizada",
		"vanitylabelenteryourpart": "Introduce la clave privada generada en el paso 1, y que has guardado:",
		"vanitylabelenteryourpoolpart": "Introduce la clave privada obtenida de la Vanity Pool:",
		"vanitylabelnote1": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
		"vanitylabelnote2": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
		"vanitylabelradioadd": "Añadir",
		"vanitylabelradiomultiply": "Multiplicar",
		"vanitycalc": "Calcular cartera personalizada",
		"vanitylabelbitcoinaddress": "Dirección Bitcoin personalizada:",
		"vanitylabelnotesbitcoinaddress": "Esta es tu nueva dirección, que debería tener el prefijo deseado.",
		"vanitylabelpublickeyhex": "Clave pública personalizada (HEX):",
		"vanitylabelnotespublickeyhex": "Lo anterior es la clave pública en formato hexadecimal.",
		"vanitylabelprivatekey": "Clave privada personalizada (formato para importar):",
		"vanitylabelnotesprivatekey": "Esto es la clave privada para introducir en tu cartera.",

		// detail wallet html
		"detaillabelenterprivatekey": "Introduce la clave privada",
		"detailkeyformats": "Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Ver detalles",
		"detailprint": "Imprimir",
		"detaillabelnote1": "Tu clave privada es un número secreto, único, que sólo tú conoces. Se puede expresar en varios formatos. Aquí abajo mostramos la dirección y la clave pública que se corresponden con tu clave privada, así como la clave privada en los formatos más conocidos (para importar, hex, base64 y mini).",
		"detaillabelnote2": "Bitcoin v0.6+ almacena las claves públicas comprimidas. El cliente también soporta importar/exportar claves privadas usando importprivkey/dumpprivkey. El formato de las claves privadas exportadas depende de si la dirección se generó en una cartera antigua o nueva.",
		"detaillabelbitcoinaddress": "Dirección Bitcoin:",
		"detaillabelbitcoinaddresscomp": "Dirección Bitcoin (comprimida):",
		"detaillabelpublickey": "Clave pública (130 caracteres [0-9A-F]):",
		"detaillabelpublickeycomp": "Clave pública (comprimida, 66 caracteres [0-9A-F]):",
		"detaillabelprivwif": "Clave privada para importar (51 caracteres en base58, empieza con un",
		"detaillabelprivwifcomp": "Clave privada para importar (comprimida, 52 caracteres en base58, empieza con",
		"detailcompwifprefix": "'K' o 'L'",
		"detaillabelprivhex": "Clave privada en formato hexadecimal (64 caracteres [0-9A-F]):",
		"detaillabelprivb64": "Clave privada en base64 (44 caracteres):",
		"detaillabelprivmini": "Clave privada en formato mini (22, 26 o 30 caracteres, empieza por 'S'):",
		"detaillabelpassphrase": "BIP38 Passphrase", //TODO: please translate
		"detailbip38decryptbutton": "Decrypt BIP38", //TODO: please translate
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "How do I make a wallet using dice? What is B6?", //TODO: please translate
		"detaila1": "An important part of creating a Bitcoin wallet is ensuring the random numbers used to create the wallet are truly random. Physical randomness is better than computer generated pseudo-randomness. The easiest way to generate physical randomness is with dice. To create a Bitcoin private key you only need one six sided die which you roll 99 times. Stopping each time to record the value of the die. When recording the values follow these rules: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. By doing this you are recording the big random number, your private key, in B6 or base 6 format. You can then enter the 99 character base 6 private key into the text field above and click View Details. You will then see the Bitcoin address associated with your private key. You should also make note of your private key in WIF format since it is more widely used." //TODO: please translate
	};
})(ninja.translator);