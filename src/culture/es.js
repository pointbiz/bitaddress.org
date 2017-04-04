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
		"bip38alertincorrectpassphrase": "Contraseña incorrecta para esta llave privada encriptada.", 
		"bip38alertpassphraserequired": "Se requiere Contraseña para la llave BIP38", 
		"vanityinvalidinputcouldnotcombinekeys": "Entrada no válida. No se puede combinar llaves.",
		"vanityalertinvalidinputpublickeysmatch": "Entrada no válida. La clave pública de ambos coincidan entradas. Debe introducir dos claves diferentes.",
		"vanityalertinvalidinputcannotmultiple": "Entrada no válida. No se puede multiplicar dos claves públicas. Seleccione 'Añadir' para agregar dos claves públicas para obtener una dirección bitcoin.",
		"vanityprivatekeyonlyavailable": "Sólo está disponible cuando se combinan dos claves privadas",
		"vanityalertinvalidinputprivatekeysmatch": "Entrada no válida. La clave privada de ambos coincidan entradas. Debe introducir dos claves diferentes.",

		// header and menu html
		"tagline": "Generador de carteras Bitcoin de código abierto en lado de cliente con Javascript",
		"generatelabelbitcoinaddress": "Generando dirección Bitcoin...",
		"generatelabelmovemouse": "Mueve un poco el ratón para crear entropía...",
		"generatelabelkeypress": "o escribe carácteres aleatorios dentro de este cuadro de texto", 
		"singlewallet": "Una sola cartera",
		"paperwallet": "Cartera en papel",
		"bulkwallet": "Direcciones en masa",
		"brainwallet": "Cartera mental",
		"vanitywallet": "Cartera personalizada",
		"splitwallet": "Cartera Cruzada",
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
		"footerlabelcopyright2": "Copyright del código JavaScript: en la fuente.",
		"footerlabelnowarranty": "Sin garantía.",

		// status html
		"statuslabelcryptogood": "&#10004; ¡Bien!", 
		"statuslabelcryptogood1": "Su navegador puede generar claves criptográficamente aleatorias usando window.crypto.getRandomValues", 
		"statusokcryptogood": "OK", //TODO: please translate
		"statuslabelcryptobad": "&times; ¡Oh no!", 
		"statuslabelcryptobad1": "Su navegador NO admite window.crypto.getRandomValues.Debe utilizar un navegador más moderno con este generador para aumentar la seguridad de las claves generadas.",
		"statusokcryptobad": "OK", //TODO: please translate
		"statuslabelunittestsgood": "&#10004; Bien!", 
		"statuslabelunittestsgood1": "Todas las pruebas de unidad síncrona pasaron.",
		"statusokunittestsgood": "OK", //TODO: please translate
		"statuslabelunittestsbad": "&times; ¡Oh no!", 
		"statuslabelunittestsbad1": "Algunas pruebas de unidad síncrona no pasaron. Debe encontrar otro navegador para usar con este generador.", 
		"statusokunittestsbad": "OK", //TODO: please translate
		"statuslabelprotocolgood": "&#10004; ¡Bien!", //TODO: please translate
		"statuslabelprotocolgood1": "Está ejecutando este generador desde su computadora local. <br />Sugerencia: comprueba que estés desconectado intentando ", 
		"statusokprotocolgood": "OK", //TODO: please translate
		"statuslabelprotocolbad": "&#9888; ¡Pensar dos veces!", 
		"statuslabelprotocolbad1": "Parece que está ejecutando este generador en línea desde un sitio web en Online. Para billeteras valiosas se recomienda", 
		"statuslabelprotocolbad2": "descarga", 
		"statuslabelprotocolbad3": "el archivo zip de GitHub y ejecutar este generador sin conexión como un archivo html local.", 
		"statusokprotocolbad": "OK", //TODO: please translate
		"statuslabelkeypool1": "Este es un registro de todas las direcciones Bitcoin y claves privadas que generó durante su sesión actual. Recargar la página creará una nueva sesión.", 
		"statuskeypoolrefresh": "Refrescar",
		"statusokkeypool": "OK", //TODO: please translate

		// single wallet html
		"newaddress": "Generar dirección",
		"singleprint": "Imprimir",
		"singlelabelbitcoinaddress": "Dirección Bitcoin",
		"singlelabelprivatekey": "Clave privada (formato para importar):",
		"singletip1": "<b>Una cartera de Bitcoin</b> es tan simple como un solo emparejamiento de una dirección Bitcoin con su correspondiente clave privada de Bitcoin. Esta cartera se ha generado para usted en su navegador web y se muestra arriba.",
		"singletip2": "<b>Para salvaguardar esta cartera</b> debe imprimir o de otra manera grabar la dirección Bitcoin y la clave privada. Es importante hacer una copia de seguridad de la clave privada y almacenarla en un lugar seguro. Este sitio no tiene conocimiento de su clave privada. Si está familiarizado con PGP puede descargar esta página HTML todo en uno y comprobar que tiene una versión auténtica del autor de este sitio haciendo coincidir el hash SHA256 de este HTML con el hash SHA256 disponible en el documento de historia de versión firmada Vinculado en el pie de este sitio. Si abandona / actualiza el sitio o presiona el botón Generar nueva dirección, se generará una nueva clave privada y la clave privada mostrada anteriormente no será recuperable. Su clave privada Bitcoin debe mantenerse en secreto. Cualquiera con quien comparta la clave privada tiene acceso a pasar todos los bitcoins asociados con esa dirección. Si imprime su billetera, guárdela en una bolsa de cremallera para mantenerla a salvo del agua. Trate una cartera de papel como dinero en efectivo.", //TODO: please translate
		"singletip3": "<b>Añadir fondos</b> a esta cartera instruyendo a otros a enviar bitcoins a su dirección de Bitcoin.", 
		"singletip4": "<b>Revise su saldo</b> visitando blockchain.info o blockexplorer.com e ingresando su dirección Bitcoin.", 
		"singletip5": "<b>Gaste sus bitcoins</b> yendo a blockchain.info y barrer el balance completo de su llave privada en su cuenta en su Web site. También puede gastar sus fondos descargando uno de los populares clientes bitcoin p2p e importando su clave privada a la cartera de clientes p2p. Tenga en cuenta al importar su llave única a un cliente bitcoin p2p y gastar fondos de su llave será incluido con otras claves privadas en la cartera de clientes p2p. Cuando realice una transacción, su cambio se enviará a otra dirección bitcoin dentro de la cartera de clientes p2p. A continuación, debe realizar una copia de seguridad de la cartera de clientes de p2p y mantenerla a salvo, ya que los restantes bitcoins se almacenarán allí. Satoshi aconsejó que uno nunca debe borrar una cartera.", 
		"singleshare": "COMPARTIR", 
		"singlesecret": "SECRETO", 

		// paper wallet html
		"paperlabelhideart": "Ocultar diseño",
		"paperlabeladdressesperpage": "Direcciones por página:",
		"paperlabeladdressestogenerate": "Direcciones en total:",
		"papergenerate": "Generar",
		"paperprint": "Imprimir",
		"paperlabelBIPpassphrase": "Contraseña:",
		"paperlabelencrypt": "¿Encriptar BIP38?", 

		// bulk wallet html
		"bulklabelstartindex": "Empezar en:",
		"bulklabelrowstogenerate": "Filas a generar:",
		"bulklabelcompressed": "¿Direcciones comprimidas?", 
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
		"detaillabelpassphrase": "Contraseña BIP38", 
		"detailbip38decryptbutton": "Desencriptar BIP38", 
		"detailbip38encryptbutton": "Encriptar BIP38", 
		"detaillabelq1": "¿Cómo puedo hacer una cartera usando dados? ¿Qué es B6?", 
		"detaila1": "Una parte importante de la creación de una cartera Bitcoin es asegurar que los números aleatorios utilizados para crear la cartera son realmente aleatorios. La aleatoriedad física es mejor que la pseudo-aleatoriedad generada por ordenador. La manera más fácil de generar aleatoriedad física es con dados. Para crear una clave privada de Bitcoin sólo necesitas un dado de seis caras que rodas 99 veces. Parando cada vez para registrar el valor de la matriz. Al registrar los valores, siga estas reglas: 1 = 1, 2 = 2, 3 = 3, 4 = 4, 5 = 5, 6 = 0. Al hacer esto, está grabando el número aleatorio grande, su clave privada, en formato B6 o base 6. A continuación, puede introducir la clave privada de 99 caracteres de base 6 en el campo de texto anterior y hacer clic en Ver detalles. A continuación, verá la dirección de Bitcoin asociada con su clave privada. También debe tomar nota de su clave privada en formato WIF, ya que es más ampliamente utilizado." 
	};
})(ninja.translator);
