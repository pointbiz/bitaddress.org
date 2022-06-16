(function (translator) {
	translator.translations["ru"] = {
		// javascript alerts or messages
		"testneteditionactivated": "Активирован режим TESTNET",
		"paperlabelbitcoinaddress": "Адрес Bitcoin кошелька:",
		"paperlabelprivatekey": "Приватный Ключ:",
		"paperlabelencryptedkey": "Зашифрованный Приватный Ключ (требуется пароль)",
		"bulkgeneratingaddresses": "Генерация адресов... ",
		"brainalertpassphrasetooshort": "Введенная парольная фраза слишком коротка.\n\n",
		"brainalertpassphrasewarning": "Предупреждение: Очень важно выбрать сложную парольную фразу, чтобы было невозможно угадать ее методом грубого перебора и украсть ваши биткоины.",
		"brainalertpassphrasedoesnotmatch": "Парольная фраза и ее подтверждение не совпадают.",
		"detailalertnotvalidprivatekey": "Введенный текст не является корректным приватным ключем",
		"detailconfirmsha256": "Введенный текст не является корректным приватным ключем!\n\nВы хотите использовать введенный текст в качестве парольной фразы и создать Приватный Ключ используя SHA256 для хеширования парольной фразы?\n\nПредупреждение: Очень важно выбрать сложную парольную фразу, чтобы было невозможно угадать ее методом грубого перебора и украсть ваши биткоины.",
		"bip38alertincorrectpassphrase": "Введена некорректная парольная фраза для этого зашифрованного приватного ключа.",
		"bip38alertpassphraserequired": "Парольная фраза необходима для ключа BIP38",
		"vanityinvalidinputcouldnotcombinekeys": "Некорректный ввод. Не удалось объединить ключи.",
		"vanityalertinvalidinputpublickeysmatch": "Некорректный ввод. Обе записи имеют одинаковый публичный ключ. Введите два разных публичных ключа.",
		"vanityalertinvalidinputcannotmultiple": "Некорректный ввод. Невозможно объединить два публичных ключа. Выберите 'Добавить', чтобы добавить два публичных ключа для получения биткоин адреса.",
		"vanityprivatekeyonlyavailable": "Доступно только при объединении двух приватных ключей",
		"vanityalertinvalidinputprivatekeysmatch": "Некорректный ввод. Обе записи имеют одинаковый приватный ключ. Введите два разных приватных ключа.",

		// header and menu html
		"tagline": "JavaScript генератор Биткоин кошельков на стороне клиента с открытым исходным кодом",
		"generatelabelbitcoinaddress": "Генерация Биткоин адреса...",
		"generatelabelmovemouse": "Двигайте указателем мыши по экрану для добавления случайности...",
		"generatelabelkeypress": "ИЛИ введите несколько случайных символов в это текстовое поле",
		"singlewallet": "Один кошелек",
		"paperwallet": "Бумажный кошелек",
		"bulkwallet": "Несколько кошельков",
		"brainwallet": "Умный кошелек",
		"vanitywallet": "Персональный кошелек",
		"splitwallet": "Split Wallet", //TODO: please translate
		"detailwallet": "Детали кошелька",

		// footer html
		"footerlabeldonations": "Пожертвования:",
		"footerlabeltranslatedby": "Перевод: 1JGnkKH7gJhTyAz9r47nugFM8sdrUENpJi",
		"footerlabelpgp": "PGP ключ",
		"footerlabelversion": "История версий",
		"footerlabelgithub": "Проект на GitHub",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Копирайт bitaddress.org.",
		"footerlabelcopyright2": "Информация о копирайте на JavaScript в исходниках.",
		"footerlabelnowarranty": "Без гарантий.",

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
		"newaddress": "Сгенерировать новый адрес",
		"singleprint": "Распечатать",
		"singlelabelbitcoinaddress": "Адрес Биткоин кошелька",
		"singlelabelprivatekey": "Приватный Ключ (в формате для импорта)",
		"singletip1": "<b>Биткоин кошелек</b> это простая пара идентификаторов, состоящая из адреса Биткоин кошелька и соответствующего ему приватного ключа. Такой колшелек был сгенерирован для Вас в Вашем браузере и отображен выше.",
		"singletip2": "<b>Для обеспечения сохранности этого кошелька</b> Вам необходимо распечатать или каким-либо другим спобом записать Биткоин адрес и приватный ключ. Очень важно иметь запасную копию приватного ключа и хранить ее в безопасном месте. Этот сайт не хранит информацию о Вашем ключе. Если Вы имеете опыт работы с PGP, то Вы можете сохранить эту HTML страницу в формате архива и проверить то, что Вы используете подлинную версию страницы от автора сайта, сравнив SHA256 хэш этой HTML страницы с SHA256 хэшем указанным истории версий данной страницы, которая подписана ключем автора сайта. Данную ифнормацию можно найти внизу страницы. Если Вы покинете или обновите страницу с сайтом или нажмете кнопку 'Сгенерировать новый адрес', то будет сгенерирован новый приватный ключ и предыдущий приватный ключ восстановить будет невозможно. Ваш приватный ключ Биткоин кошелька должен храниться в секрете. С кем бы Вы не поделились информацией о приватном ключе - он будет иметь возможность потратить Биткоины кошелька с этим адресом. Если вы распечатали приватный ключ - необходимо обеспечить его сохранность в месте, недоступном для воды. Обращайтесь с бумажным кошельком для Биткоинов как с наличными деньгами.",
		"singletip3": "<b>Пополните кошелек</b> сообщив другим свой Биткоин адрес.",
		"singletip4": "<b>Проверить баланс кошелька</b> можно на сайте blockchain.info or blockexplorer.com по адресу Биткоин кошелька.",
		"singletip5": "<b>Потратить Ваши биткоины</b> можно на сайте blockchain.info переведя все средства соответсвующие приватному ключу на аккаунт этого сайта. Также Вы можете потратить биткоины загрузив один из наиболее популярных Биткоин p2p-клиентов и выполнив импорт Вашего приватного ключа. Необходимо учесть, что когда Вы импортируете свой один приватный ключ в программу-клиент и тратите биткоины - Ваш ключ смешан с другими приватными ключами в программе-клиенте. При выполнении транзакции по расходу или получению средств, сдача будет перенаправлена на другой Биткоин адрес программного кошелька.После выполнения транзации необходимо сделать резервную копию Вашего программного кошелька и сохранить ее в надежном месте, так как на нем будут сожержаться оставшиеся средства. Сатоши рекомендует никогда не удалять кошелек.",
		"singleshare": "Поделиться",
		"singlesecret": "Хранить в секрете",

		// paper wallet html
		"paperlabelhideart": "Без дизайна",
		"paperlabeladdressesperpage": "Адресов на страницу:",
		"papergenerate": "Сгенерировать",
		"paperprint": "Распечатать",
		"paperlabelBIPpassphrase": "Парольная фраза:",
		"paperlabelencrypt": "Шифрование BIP38?",

		// bulk wallet html
		"bulklabelstartindex": "Стартовый индекс:",
		"bulklabelrowstogenerate": "Количество кошельков:",
		"bulklabelcompressed": "Короткие адреса?",
		"bulkgenerate": "Сгенерировать",
		"bulkprint": "Распечатать",
		"bulklabelcsv": "Значения разделенные запятой:",
		"bulklabelformat": "Порядковый номер, Адрес, Приватный Ключ (импорт)",
		"bulklabelq1": "Почему нужно использовать несколько кошельков, чтобы принимать биткоины на Вашем сайте?",
		"bulka1": "Традиционный подход к приему биткоинов на Вашем сайте - это установка оффициального демона клиента Биткоин ('bitcoind'). Большинство хостингов для вебсайтов не поддерживают установку демона Биткоин. Также, запуск демона клиента Биткоин на Вашем веб-сервере означает, что Вы храните приватные ключи на этом сервере и они могут быть украдены, если Ваш веб-сервер подвергнется взлому. При использовании нескольких кошельков Вы можете выгрузить только адреса Биткоин на Ваш сервер, в то время как приватные ключи останутся в секрете. В этом случае Вам не следует беспокоиться того, что Ваш веб-сервер будет взломан и биткоин кошелек будет украден.",
		"bulklabelq2": "Как использовать несколько кошельков, чтобы принимать биткоины на Вашем сайте?",
		"bulklabela2li1": "Используйте вкладку 'Несколько кошельков', для того чтобы сгенерировать большое количество адресов Биткоин (10.000+). Скопируйте и вставьте сгенерированные идентификаторы в виде списка (в формате CSV) в секретный файл на вашем компьютере. Сделайте резервную копию созданного файла и сохраните ее в надежном месте. ",
		"bulklabela2li2": "Импортируйте биткоин адреса в базу данных или иное хранилище Вашего веб-сервера. (Не размещайте приватные ключи кошелька на Вашем веб-сервере, в противном случае Вы рискуете потерять свои биткоины. Своим клиентам Вам достаточно предоставить Биткоин адрес.)",
		"bulklabela2li3": "Добавьте опцию для оплаты заказа из корзины Вашего клиента для оплаты Биткоинами. Если клиент выбирает оплату Биткоинами - предоставьте ему информацию о Биткоин адресе для приема оплаты, который будет закреплен за этим клиентом и сохраните соответствующим образом заказ.",
		"bulklabela2li4": "Вам необходимо получать информацию о получении оплаты. Загуглите 'нотификации об оплате биткоинами' и подпишитесь на какой-нибудь сервис нотификаций. В интернете можно найти множество сервисов дял получения нотификаций через веб-сервисы, api, смс, электронную почту и т.д. Как только Вы получите нотификацию об оплате, которую можно обрабатывать в автоматическом режиме, Вы можете приступить к подготовке заказа для Вашего клиента. Чтобы вручную проверить статус оплаты воспользуйтесь сервисом Block Explorer. Заменить АДРЕС на Ваш адрес Биткоин, который Вы хотите проверить. Подтверждение транзакции оплаты может занимать от 10 минут до одного часа. http://www.blockexplorer.com/address/АДРЕС\n\nНеподтвержденные транзации оплаты можно посмотреть на: http://blockchain.info/\nНеподтвержденная транзакция будет отображаться через 30 секунд.",
		"bulklabela2li5": "Биткоины накапливаются в цепочке блоков. Используйте оригинальный файл сгенерированный на 1 шаге, чтобы потратить их.",

		// brain wallet html
		"brainlabelenterpassphrase": "Парольная фраза:",
		"brainlabelshow": "Показать?",
		"brainprint": "Распечатать",
		"brainlabelconfirm": "Подтверждение парольной фразы:",
		"brainview": "Просмотр",
		"brainalgorithm": "Алгоритм SHA256(парольная фраза)",
		"brainlabelbitcoinaddress": "Адрес Биткоин кошелька:",
		"brainlabelprivatekey": "Приватный ключ (в формате импорта):",

		// vanity wallet html
		"vanitylabelstep1": "Шаг 1 - Сгенерируйте Ваш приватный ключ первого шага",
		"vanitynewkeypair": "Сгенерировать",
		"vanitylabelstep1publickey": "Шаг 1 Публичный Ключ:",
		"vanitylabelstep1pubnotes": "Скопируйте и вставьте это значение в поле Вашей части публичного ключа на сайте пула для генерации адресов.",
		"vanitylabelstep1privatekey": "Шаг 1 Приватный Ключ:",
		"vanitylabelstep1privnotes": "Скопируйте и вставьте приватный ключ в файл. В идеале необходимо сохранить его на зашифрованный диск. Вам будет нужен приватный ключ после того, как пул найдет интересующий Вас префикс адреса.",
		"vanitylabelstep2calculateyourvanitywallet": "Шаг 2 - Вычисление Вашего персонального кошелька",
		"vanitylabelenteryourpart": "Введите Вашу часть приватного ключа (сгенерированного и сохраненного на шаге 1):",
		"vanitylabelenteryourpoolpart": "Введите часть приватного ключа пула (предоставляется пулом):",
		"vanitylabelnote1": "Это поле для публичного или приватного ключа",
		"vanitylabelnote2": "Это поле для публичного или приватного ключа",
		"vanitylabelradioadd": "Сложить",
		"vanitylabelradiomultiply": "Перемножить",
		"vanitycalc": "Вычислить адрес кошелька",
		"vanitylabelbitcoinaddress": "Адрес Биткоин кошелька:",
		"vanitylabelnotesbitcoinaddress": "Это Ваш новый адрес с префиксом.",
		"vanitylabelpublickeyhex": "Публичный ключ (в формате HEX):",
		"vanitylabelnotespublickeyhex": "Это публичный ключ в формате hex.",
		"vanitylabelprivatekey": "Приватный ключ (в формате импорта):",
		"vanitylabelnotesprivatekey": "Это Ваш приватный ключ для импорта в другой кошелек.",

		// detail wallet html
		"detaillabelenterprivatekey": "Введите Приватный Ключ",
		"detailkeyformats": "Форматы ключа: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Детальная информация",
		"detailprint": "Распечатать",
		"detaillabelnote1": "Ваш Приватный Ключ - это секретная информация, которую знаете только Вы. Этот ключ можно закодировать несколькими способами. Ниже вы видите адрес Биткоин и публичный ключ, которые соответствуют Вашему приватному ключу, если Ваш приватный ключ в одном из популярных форматов (WIF, WIFC, HEX, B64, MINI)",
		"detaillabelnote2": "Приложение Bitcoin версии 0.6 и выше хранит ключи в сжатом формате. Это приложение также поддерживает импорт и экспорт приватных ключей командами importprivkey/dumpprivkey. Формат экспортированного ключа определяется кошельком, который сгенерировал адрес Биткоин.",
		"detaillabelbitcoinaddress": "Адрес Биткоин кошелька",
		"detaillabelbitcoinaddresscomp": "Короткий адрес Биткоин кошелька",
		"detaillabelpublickey": "Публичный ключ (130 символов [0-9A-F]):",
		"detaillabelpublickeycomp": "Публичный ключ (короткий, 66 символов [0-9A-F]):",
		"detaillabelprivwif": "Приватный ключ (в формате импорта), 51 символ base58, начинается с '5'",
		"detaillabelprivwifcomp": "Приватный ключ, короткий, 52 символа base58, начинается с",
		"detailcompwifprefix": "'K' или 'L'",
		"detaillabelprivhex": "Приватный Ключ в HEX формате (64 символа [0-9A-F]):",
		"detaillabelprivb64": "Приватный Ключ в Base64 формате (44 символа):",
		"detaillabelprivmini": "Приватный Ключ в формате мини (22, 26 или 30 символов, начинается с 'S'):",
		"detaillabelpassphrase": "Парольная фраза BIP38",
		"detailbip38decryptbutton": "Расшифровать BIP38",
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "Как сделать кошелек используя игральный кости? Что такое B6?",
		"detaila1": "Очень важно понимать, что при генерации биткоин кошелька используются действительно случайные числа. Физическая случайность лучше компьютерной псевдо-случайности. Самым простым способом генерации физической случайности является игральная кость. Для генерации Приватного Ключа Биткоин кошелька Вам нужна игральная кость с шестью сторонами, которую необходимо бросить 99 раз. Необходимо записать каждую цифру, выпавшую на игральной кости. Итоговый результат необходимо записать в таком виде: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Таким образом Вы запишите большое случайное число - Ваш Приватный Ключ, в формате B6 или Base6. После этого Вы можете ввести 99 символов приватного ключа в формате Base6 в текстовое поле вверху страницы и получить детальную информацию о кошельке. После этого Вы сможете увидеть адрес Биткоин кошелька соответствующий полученному приватному ключу. Вам потребуется сделать запись приватного ключа в формате для импорта, так как он наиболее часто используется."
	};
})(ninja.translator);