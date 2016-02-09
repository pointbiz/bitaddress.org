(function (translator) {
	translator.translations["jp"] = {
		// javascript alerts or messages
		"testneteditionactivated": "テストネット版が有効になりました。",
		"paperlabelbitcoinaddress": "ビットコインアドレス",
		"paperlabelprivatekey": "プライベートキー",
		"paperlabelencryptedkey": "暗号化されたプライベートキー(パスワード必須)",
		"bulkgeneratingaddresses": "アドレス生成中...",
		"brainalertpassphrasetooshort": "パスワードが短すぎます \n\n",
		"brainalertpassphrasewarning": "注意：強いパスワードを選ばないとプライベートキーを安易に当てられてビットコインを盗まれてしまいます。<br>なお、<b>UTF-8の文字も使えるため、キーボードが半角か全角か今一度ご確認下さい。</b>",
		"brainalertpassphrasedoesnotmatch": "パスワードが一致しません",
		"detailalertnotvalidprivatekey": "入力された文字列は有効なプライベートキーではありません。",
		"detailconfirmsha256": "入力された文字列は有効なプライベートキーではありません。\n\n代わりにこの文字列をパスワードとして、SHA256ハッシュを用いプライベートキーを生成しますか？\n\n注意: 強いパスワードを選ばないとプライベートキーを安易に当てられてビットコインを盗まれてしまいます。",
		"bip38alertincorrectpassphrase": "暗号化されたプライベートキーに一致しないパスワードです。",
		"bip38alertpassphraserequired": "BIP38キーを生成するにはパスワードをかける必要があります。",
		"vanityinvalidinputcouldnotcombinekeys": "不正入力です。キーを結合できませんでした。",
		"vanityalertinvalidinputpublickeysmatch": "不正入力です。両方のパブリックキーが同じです。2つの異なるキーをお使い下さい。",
		"vanityalertinvalidinputcannotmultiple": "不正入力です。2つのパブリックキーを掛け合わせることはできません。「足し算」を選択し、2つのパブリックキーを足し合わせてアドレスを生成して下さい。",
		"vanityprivatekeyonlyavailable": "2つのプライベートキーを掛け合わせた時だけ有効です。",
		"vanityalertinvalidinputprivatekeysmatch": "不正入力両方のプライベートキーがチケットに一致します。2つの異なるキーをお使い下さい。",

		// header and menu html
		"tagline": "クライエント側ビットコインアドレス生成(JavaScript使用)",
		"generatelabelbitcoinaddress": "ビットコインアドレスを生成中...",
		"generatelabelmovemouse": "マウスを動かして、ランダム要素を追加してください。",
		"generatelabelkeypress": "もしくはこちらの入力欄にランダムな文字を打って下さい。",
		"singlewallet": "シングルウォレット",
		"paperwallet": "ペーパーウォレット",
		"bulkwallet": "大量ウォレット",
		"brainwallet": "暗記ウォレット",
		"vanitywallet": "カスタムウォレット",
		"splitwallet": "Split Wallet", //TODO: please translate
		"detailwallet": "ウォレットの詳細",

		// footer html
		"footerlabeldonations": "プロジェクト寄付先",
		"footerlabeltranslatedby": "日本語訳寄付先 1o3EBhxPhGn8cGCL6Wzi5F5kTPuBofdMf",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "バージョン履歴",
		"footerlabelgithub": "GitHubリポジトリ",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "JavaScriptのコピーライト情報はソースに含まれています。",
		"footerlabelnowarranty": "保障はありません。",

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
		"newaddress": "新アドレス生成",
		"singleprint": "印刷",
		"singlelabelbitcoinaddress": "ビットコインアドレス",
		"singlelabelprivatekey": "プライベートキー (WIF形式)",
		"singletip1": "<b>ビットコインウォレットとは</b> ビットコインのアドレスと対応するプライベートキーを組み合わせたものです。新しいアドレスがブラウザー上で生成され、上記に表示されています。",
		"singletip2": "<b>このウォレットを守るためには</b> ビットコインアドレスとビットコインプライベートキーを印刷するなどの手段で記録しなければいけません。プライベートキーが無いとペアになっているアドレスに送られたビットコインが使えないので、人に晒されないような方法でプライベートキーのコピーを取り、大事に保管して下さい。このサイトはこのプライベートキーの保存はしません。PGPをご存知の方は、このサイトを1つのhtmlファイルで落とすことができるので、このサイトのhtmlファイルのSHA256ハッシュとサイトのフッターにデジタル署名されたメッセージに入ったハッシュを比べて不正にいじられていないかをお確かめいただけます。このページを閉じたり、離れたり、”新アドレス生成”を押すと現在表示されているプライベートキーは消え、新規アドレスが生成されるので、ご使用の場合は必ず何らかの手段で記録しておいて下さい。プライベートキーは秘密にしてください。共有されますと、対応するビットコインアドレスに存在するコインが全て共有者間で利用可能となります。ウォレット情報を印刷したら、濡れないようにジップロックに入れましょう。紙幣と同様に扱うよう心がけてください。",
		"singletip3": "<b>このウォレットにコインを追加 : </b> 他の人から自分のビットコインアドレスに送ってもらう。",
		"singletip4": "<b>残高照会は</b> blockchain.infoやblockexplorer.comに行き、ビットコインアドレスを入力してお調べ下さい。",
		"singletip5": "<b>ビットコインを使おう。</b> 送金するには、このページで生成したプライベートキーをblockchain.infoのウォレットや各種パソコン・スマホ端末にあるウォレットアプリなどに取り込んで使えます。しかし、その時点でそのアドレスが取り込んだウォレットの他のアドレスと融合してしまい、この一つのアドレスのバックアップだけじゃビットコインを保管することはできなくなります。取り込み先のウォレットを強いパスワードで暗号化し、バックアップして、安全に扱って下さい。ビットコインの考案者「サトシさん」曰く、「一度作ったウォレットを、空にしたとしても、削除しない方が良い。」(メールアドレスと同じく、いつ昔の友達や親戚から古いアドレス宛にビットコインを送ってくるかわかりませんから。)",

		// paper wallet html
		"paperlabelhideart": "デザイン非表示",
		"paperlabeladdressesperpage": "1ページごとのアドレス数",
		"paperlabeladdressestogenerate": "生成するアドレス数",
		"papergenerate": "生成",
		"paperprint": "印刷",
		"paperlabelBIPpassphrase": "パスワード",
		"paperlabelencrypt": "BIP38で暗号化？",

		// bulk wallet html
		"bulklabelstartindex": "開始番号",
		"bulklabelrowstogenerate": "生成する行数",
		"bulklabelcompressed": "アドレスを短縮？",
		"bulkgenerate": "生成",
		"bulkprint": "印刷",
		"bulklabelcsv": "カンマ区切り値",
		"bulklabelformat": "番号、アドレス、プライベートキー(WIF形式)",
		"bulklabelq1": "ウェブサイトでビットコインを受け付ける時、何故大量のアドレスを生成しておいた方がいいのか？",
		"bulka1": "以前はビットコインをサイトで受け付けたかったら、「bitcoind」というビットコインのシステムサービスをサーバーにアップロードし、サーバー上で実行しなければいけませんでした。しかし、このやり方だとサーバーがハッキングされてしまった場合、プライベートキーも全て持って行かれてしまいます。大量に生成しておいて、ビットコインアドレスだけをサーバーにアップしておけば、プライベートキーを安全な場所に保管できます。",
		"bulklabelq2": "どうやって大量生成を使ってサイトでビットコインを受け付けられるようにできるのか？",
		"bulklabela2li1": "大量生成タブで大量のビットコインを生成(10,000+でも可)。出てくるCSVテキストをコピーして、安全なテキストエディターで貼り付けて、安全な場所に保存しておいて下さい。一つバックアップを取り、別の場所で保管しておく(強いパスワードのかかったzipなどで)",
		"bulklabela2li2": "ビットコインアドレスをウェブサーバーにアップロード。プライベートキーはアップロードしないで下さい。ユーザーに見せたい宛先用のアドレスのみをアップロードして下さい。",
		"bulklabela2li3": "サイトのショッピングカート機能にビットコインのリンクを追加して下さい。クリックされた時、お値段と先ほどアップしたビットコインアドレスが順番に出てくるようにしておいて下さい(1取引1アドレス)。注文の情報と一緒に、このアドレスも一緒に保存して、後で紐付けられるようにしておいて下さい。",
		"bulklabela2li4": "後は支払いの通知を受けないと注文を通すか否か分かりません。グーグルで「bitcoin payment notification」と検索したら、SMS、メール、APIなどでビットコインの支払いがあった際教えてくれます。これをコードの中に組み込んで、支払いがあったら注文を通すようにもできます。手動で送金があったかを見る場合、blockchain.infoに行き、宛先のアドレスを入力すれば、取引履歴から送金の事実を確認できます。大体送金の30秒後に表示され、10分～1時間の間に「確認」されます。",
		"bulklabela2li5": "送られたビットコインはブロックチェーンにて安全に保管されます。送金するには1番で作成したウォレットを何らかのビットコインソフトに取り込んでご利用下さい。",

		// brain wallet html
		"brainlabelenterpassphrase": "パスワード",
		"brainlabelshow": "表示",
		"brainprint": "印刷",
		"brainlabelconfirm": "パスワードをもう一度",
		"brainview": "アドレスを見せる",
		"brainalgorithm": "アルゴリズム SHA256 (パスワード)",
		"brainlabelbitcoinaddress": "ビットコインアドレス",
		"brainlabelprivatekey": "プライベートキー(WIF形式)",

		// vanity wallet html
		"vanitylabelstep1": "ステップ１「ステップ１キーペア」を生成",
		"vanitynewkeypair": "生成",
		"vanitylabelstep1publickey": "ステップ１パブリックキー",
		"vanitylabelstep1pubnotes": "上記のものをカスタムアドレス生成業者の注文フォームに貼り付けて下さい。",
		"vanitylabelstep1privatekey": "ステップ１プライベートキー",
		"vanitylabelstep1privnotes": "上記のものを安全なテキストファイルに貼り付け、大事に保管しておいて下さい。パスワードで暗号化することをオススメします。カスタムアドレス生成業者からアドレスプレフィックスをもらった時にこれが必要となります。",
		"vanitylabelstep2calculateyourvanitywallet": "ステップ2カスタムアドレスを計算",
		"vanitylabelenteryourpart": "ステップ１で保存したプライベートキーを入力",
		"vanitylabelenteryourpoolpart": "カスタムアドレス生成業者からもらったプライベートキーを入力",
		"vanitylabelnote1": "[メモ： この欄はパブリックキーでもプライベートキーでも可能です。]",
		"vanitylabelnote2": "[メモ： この欄はパブリックキーでもプライベートキーでも可能です。]",
		"vanitylabelradioadd": "足し算",
		"vanitylabelradiomultiply": "掛け算",
		"vanitycalc": "カスタムアドレスを計算",
		"vanitylabelbitcoinaddress": "カスタムビットコインアドレス",
		"vanitylabelnotesbitcoinaddress": "ご希望された頭文字を持ったアドレスになっています。",
		"vanitylabelpublickeyhex": "カスタムパブリックキー(HEX)",
		"vanitylabelnotespublickeyhex": "パブリックキーを16進で表したものです。",
		"vanitylabelprivatekey": "カスタムプライベートキー(WIF形式)",
		"vanitylabelnotesprivatekey": "上記のアドレスに送られたビットコインを使うためのプライベートキーです。",

		// split wallet html
		"splitwallet": "分散ウォレット",
		"splitlabelthreshold": "復元に必要なシェア数",
		"splitlabelshares": "全シェア数",
		"splitview": "生成",
		"combinelabelentershares": "お持ちのシェアを入力 (空白区切り)",
		"combineview": "シェア合わせて復元",
		"combinelabelprivatekey": "復元された秘密鍵",

		// detail wallet html
		"detaillabelenterprivatekey": "プライベートキーを入力",
		"detailkeyformats": "受け付けるキーの形式 WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "詳細を表示",
		"detailprint": "印刷",
		"detaillabelnote1": "ビットコインプライベートキーはあなたにしか分からない秘密の鍵。色々な形式で表示することができ、下記で表示しているのはビットコインアドレス、パブリックキー、プライベートキー、そして複数の形式でプライベートキーを表示します。(WIF, WIFC, HEX, B64)",
		"detaillabelnote2": "ビットコイン v0.6より圧縮したパブリックキーを保存している。なお、importprivkey / dumpprivkeyのコマンドを用いてプライベートキーのインポートとエクスポートもできる。エクスポートされるプライベートキーの形式はウォレットの作成時期とバージョンによって異なってくる。",
		"detaillabelbitcoinaddress": "ビットコインアドレス",
		"detaillabelbitcoinaddresscomp": "ビットコインアドレス(圧縮)",
		"detaillabelpublickey": "パブリックキー (130文字[0-9A-F])",
		"detaillabelpublickeycomp": "パブリックキー (圧縮、66文字[0-9A-F])",
		"detaillabelprivwif": "プライベートキー (WIF)<br>(base58コード51文字) 頭文字が",
		"detaillabelprivwifcomp": "プライベートキー (WIF)<br>(圧縮、base58コード52文字) 頭文字が",
		"detailwifprefix": "'5'",
		"detailcompwifprefix": "'K' か 'L'",
		"detaillabelprivhex": "プライベートキー(16進) (64文字[0-9A-F])",
		"detaillabelprivb64": "プライベートキー(base64コード) (44文字)",
		"detaillabelpassphrase": "BIP38パスワード",
		"detailbip38decryptbutton": "BIP38暗号を解除",
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "サイコロを使ってどうやってアドレス作るのか？「B6」とは何か？",
		"detaila1": "ビットコインのアドレスの生成には一番大事なことが、アドレス生成に使われている乱数が本当にランダムなのかというところです。自然界に起きる物理的なランダムさはパソコンが生成する(似非)ランダムさよりは優れている。物理的なランダムさを作る一番簡単な方法はサイコロを振ることです。ビットコインのプライベートキーを生成するには、6面のサイコロを99回振って、毎回結果を記載していきます。規則として1⇒1, 2⇒2, 3⇒3, 4⇒4, 5⇒5, 6⇒0というように、6が出る度に「0」と記載して下さい。99桁の6進数字列ができたら、上記の入力欄に入れて、「詳細を表示」ボタンを押して下さい。これでWIF形式のプライベートキーやそれと紐づくビットコインアドレスが表示されます。これらを記載し、通常生成されたビットコインアドレスと同じように保管しておいて下さい。",
	};
})(ninja.translator);