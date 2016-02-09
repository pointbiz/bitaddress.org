(function (translator) {
	translator.translations["zh-cn"] = {
		// javascript alerts or messages
		"testneteditionactivated": "TESTNET EDITION ACTIVATED",
		"paperlabelbitcoinaddress": "比特币地址",
		"paperlabelprivatekey": "私钥",
		"paperlabelencryptedkey": "加密私钥(需要密码)",
		"bulkgeneratingaddresses": "创建地址中...",
		"brainalertpassphrasetooshort": "这个密码太短了 \n\n",
		"brainalertpassphrasewarning": "警告：选择一个足够强大的口令非常重要，它可以避免你的私钥被暴力破解。 此外，UTF-8编码有效。请注意区分全角/半角",
		"brainalertpassphrasedoesnotmatch": "两次输入的口令不一致",
		"detailalertnotvalidprivatekey": "输入的私钥无效",
		"detailconfirmsha256": "你输入的不是合法的私钥，\n\n你想用它的SHA-256值当作私钥吗（相当于脑钱包）\n\n警告：选择一个足够强大的口令非常重要，它可以避免你的私钥被暴力破解。",
		"bip38alertincorrectpassphrase": "这个加密私钥的密码不正确。",
		"bip38alertpassphraserequired": "BIP38加密的私钥需要密码。",
		"vanityinvalidinputcouldnotcombinekeys": "错误输入，这两个Key无法合成。",
		"vanityalertinvalidinputpublickeysmatch": "错误输入，请使用不同的公钥。",
		"vanityalertinvalidinputcannotmultiple": "错误，两个公钥不能进行乘运算，想要检查两个公钥合成的地址，请选择加运算。",
		"vanityprivatekeyonlyavailable": "使用两个私钥合成，才会得到合成私钥。",
		"vanityalertinvalidinputprivatekeysmatch": "错误输入，请使用不同的私钥。",

		// header and menu html
		"tagline": "开源JavaScript比特币钱包工具",
		"generatelabelbitcoinaddress": "地址生成中...",
		"generatelabelmovemouse": "请移动鼠标产生随机种子...",
		"generatelabelkeypress": "或者在文本框中输入随机字符",
		"singlewallet": "普通钱包",
		"paperwallet": "纸钱包",
		"bulkwallet": "批量钱包",
		"brainwallet": "脑钱包",
		"vanitywallet": "虚荣钱包",
		"splitwallet": "分裂钱包",
		"detailwallet": "钱包详情",

		// footer html
		"footerlabeldonations": "项目捐赠",
		"footerlabeltranslatedby": "简中翻译捐赠 1BfXayW2vrj6uRpoZg3nR8rMEckLpGmaiL",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "版本历史",
		"footerlabelgithub": "GitHub页面",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "JavaScript的版权信息已经包含在源代码中。",
		"footerlabelnowarranty": "No warranty",

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
		"newaddress": "生成新地址",
		"singleprint": "打印",
		"singlelabelbitcoinaddress": "比特币地址",
		"singlelabelprivatekey": "私钥 (WIF格式-可导入客户端的格式)",
		"singletip1": "<b>比特币钱包</b>就是这么简单，一个地址，对应一个私钥，浏览器已自动生成了一个，就显示在上面。私钥必须保密，地址可以公开。",
		"singletip2": "<b>妥善保管你的钱包</b> 为了保护你的钱包，建议你用打印或者其他方式来保管你的私钥和地址。把你的私钥备份保存在安全、保密的位置是必要的。本站不提供私钥的相关知识，请自行学习。如果你熟悉PGP，你也可以下载这个HTML文件（它是单文件全功能的），用它的SHA256摘要和作者在本站页脚留下的相比对。本工具支持离线使用，这样它生成的私钥-地址就很难被监视了。比特币私钥必须保密，任何知道你私钥的人都可以随意花费其对应地址的比特币。你可以打印你的钱包（即纸钱包），把它装进一个防水的口袋里——就像你在保管纸币一样。",
		"singletip3": "<b>获得比特币: </b> 让别人往你的地址汇入比特币。",
		"singletip4": "<b>查询余额：</b> 访问blockchain.info或者blockexplorer.com可以查看到任何地址中的比特币余额。",
		"singletip5": "<b>花费比特币：</b> 你可以下载比特币客户端，或者访问blockchain.info之类的在线钱包网站，导入你的比特币私钥来花费对应地址上的比特币。如果你选择了客户端，每当你发送一笔钱之后，找零有可能会发回客户端生成的另外一个地址，记得备份客户端生成的钱包文件，否则你可能丢钱。比特币作者中本聪说过，不要删除任何钱包，因为你的亲戚朋友说不定还会往你的旧地址里汇款。",

		// paper wallet html
		"paperlabelhideart": "隐藏背景图案",
		"paperlabeladdressesperpage": "每张纸上打印的地址数",
		"paperlabeladdressestogenerate": "生成的地址数",
		"papergenerate": "生成",
		"paperprint": "打印",
		"paperlabelBIPpassphrase": "密码",
		"paperlabelencrypt": "BIP38加密？",

		// bulk wallet html
		"bulklabelstartindex": "起始编号",
		"bulklabelrowstogenerate": "生成行数",
		"bulklabelcompressed": "生成压缩地址？",
		"bulkgenerate": "生成",
		"bulkprint": "打印",
		"bulklabelcsv": "逗号分隔值：",
		"bulklabelformat": "编号,地址,私钥(WIF格式)",
		"bulklabelq1": "什么时候我会需要批量钱包？",
		"bulka1": "例如，当你建设一个比特币收款网站，需要分别为每一个用户准备一个收款地址时，传统的做法是使用比特币客户端“bitcoind”生成大量的地址，但是不一定所有的网站托管都支持它。另外，你在服务器上运行比特币客户端，也就意味着你的私钥也会保存在服务器上，当骇客攻破服务器时，你的比特币可能会被盗。使用批量钱包一次生成大量的钱包，只把生成的地址放在服务器上，即使服务器被攻破，也不必担心比特币的安全。",
		"bulklabelq2": "我该怎样在我的网站上使用批量钱包接受比特币？",
		"bulklabela2li1": "    在批量钱包选项卡预生成大量比特币地址（比如，一万个）。把生成的逗号分隔值清单（CSV）复制到一个安全的环境中，注意备份。",
		"bulklabela2li2": "    把地址列表导入到Web服务器上（注意，<b>不要</b>把私钥部分也一并导入，否则会有被盗的危险）",
		"bulklabela2li3": "    为你的客户提供一个比特币支付的接口。每当一名客户选择使用比特币支付，你就从你的数据库中提取一个地址，作为该客户专用的“付款地址”，并保存订单信息。",
		"bulklabela2li4": "接下来你需要一个收款通知，联系相关服务的供应商（谷歌搜索“bitcoin payment notification”），它们可以监视指定地址的资金变动，并通过WebAPI、短信、电邮或者其他方式来提醒你，你也可以通过编程使一切自动化。在http://www.blockexplorer.com/address/地址 或者 https://blockchain.info/address/地址 查看交易确认数。通常情况下，你能够在30秒之内看见交易，而根据你对安全的要求不同，你可能需要10分钟到1小时的时间等待交易确认。",
		"bulklabela2li5": "比特币在区块链上稳定之后，你就可以使用在第一步中生成的私钥来花费它们。",

		// brain wallet html
		"brainlabelenterpassphrase": "口令",
		"brainlabelshow": "显示口令？",
		"brainprint": "打印",
		"brainlabelconfirm": "口令确认",
		"brainview": "生成脑钱包",
		"brainalgorithm": "算法： SHA256 (口令)",
		"brainlabelbitcoinaddress": "比特币地址",
		"brainlabelprivatekey": "私钥(WIF格式)",

		// vanity wallet html
		"vanitylabelstep1": "第一步，生成一对公-私钥",
		"vanitynewkeypair": "生成",
		"vanitylabelstep1publickey": "第一步-公钥",
		"vanitylabelstep1pubnotes": "委托他人替你生成虚荣地址时，将这段公钥提供给受托人。受托人生成你需要的虚荣地址后，可能会给你另一个公钥，将这两个公钥合成，你可验证是否得到了你所需的虚荣地址。",
		"vanitylabelstep1privatekey": "第一步-私钥",
		"vanitylabelstep1privnotes": "妥善保管这段私钥，建议严格加密。受托人为你生成虚荣地址后，将交给你另一个私钥（不保密也没关系），将这两个私钥合成，你即获得你所需的虚荣地址及其私钥。",
		"vanitylabelstep2calculateyourvanitywallet": "第二步-合成虚荣地址",
		"vanitylabelenteryourpart": "这里输入你的第一步-私钥（或公钥）",
		"vanitylabelenteryourpoolpart": "这里输入你从受托人那里获得的私钥（或公钥）",
		"vanitylabelnote1": "[注：这个文本框可以接受一个私钥或公钥，压缩非压缩均可]",
		"vanitylabelnote2": "[注：这个文本框可以接受一个私钥或公钥，压缩非压缩均可]",
		"vanitylabelradioadd": "加运算",
		"vanitylabelradiomultiply": "乘运算（仅适合私钥）",
		"vanitycalc": "合成",
		"vanitylabelbitcoinaddress": "虚荣地址-合成地址",
		"vanitylabelnotesbitcoinaddress": "这是合成的虚荣地址，它应当满足你的委托。",
		"vanitylabelpublickeyhex": "合成公钥(16进制)",
		"vanitylabelnotespublickeyhex": "用16进制表示的合成公钥。",
		"vanitylabelprivatekey": "合成私钥(WIF格式)",
		"vanitylabelnotesprivatekey": "上面虚荣地址对应的私钥，即你的虚荣私钥，请妥善保管，可导入钱包。",

		// split wallet html
		"splitlabelthreshold": "组合私钥时，需要的最少分裂私钥的份数（区间[2,127]）",
		"splitlabelshares": "分裂的总份数（[2,127]）",
		"splitview": "制造分裂私钥",
		"combinelabelentershares": "输入找到的分裂私钥（空格分隔）",
		"combineview": "组合它们",
		"combinelabelprivatekey": "组合后的私钥",

		// detail wallet html
		"detaillabelenterprivatekey": "钱包详情",
		"detailkeyformats": "接受下列格式：WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "显示详情",
		"detailprint": "打印",
		"detaillabelnote1": "比特币私钥应当是只有你知道的保密代码，这段代码有许多种不同的编码格式。下面会给出此私钥对应的地址、公钥，以及最流行的私钥编码格式(WIF, WIFC, HEX, B64, MINI)",
		"detaillabelnote2": "Bitcoin v0.6+ 存储压缩格式的公钥。现在客户端支持导入/导出私钥，命令是importprivkey/dumpprivkey，导出的格式可能因钱包文件版本而不同。",
		"detaillabelbitcoinaddress": "比特币地址",
		"detaillabelbitcoinaddresscomp": "比特币地址(压缩格式)",
		"detaillabelpublickey": "公钥 (130位[0-9A-F]字符)",
		"detaillabelpublickeycomp": "公钥 (压缩格式，66位[0-9A-F]字符)",
		"detaillabelprivwif": "私钥 (WIF格式)<br />(51位base58字符) ",
		"detaillabelprivwifcomp": "私钥 (WIF格式)<br />(压缩格式，52位base58字符) ",
		"detailwifprefix": "'5'开头",
		"detailcompwifprefix": "'K'或'L'开头",
		"detaillabelprivhex": "私钥(16进制) (64位[0-9A-F]字符)",
		"detaillabelprivb64": "私钥(base64) (44位)",
		"detaillabelpassphrase": "输入BIP38的口令",
		"detailbip38decryptbutton": "BIP38解码",
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "怎样用骰子生成私钥？B6是什么意思？",
		"detaila1": "真正用随机数产生的钱包才是好钱包。物理产生的随机数可能会比计算机产生的随机数更优越（计算机的伪随机算法可能被识破，但是物理随机不太可能）。生成物理随机的最简单的办法是使用骰子，掷一枚六面骰99次，记录结果，将结果“6”记为“0”（或者将所有结果-1记录），这样你得到的记录将会是由0 1 2 3 4 5 组成的一串数字，称为“Base6格式”，简称“B6”。将它输入上面的文本框，点击“显示详情”按钮，得到你的私钥、地址。",
	};
})(ninja.translator);