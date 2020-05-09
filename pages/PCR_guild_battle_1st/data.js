const DATA_nameMap = [
	{name: "黑椿", id: 1341416184327},
	{name: "手手", id: 1110989227597},
	{name: "以摸多", id: 1131848569969},
	{name: "池霜", id: 1059202629191},
	{name: "咸鱼", id: 1072464889993},
	{name: "Alpha", id: 1402954104343},
	{name: "好好先生", id: 1197984197184},
	{name: "一起学猫叫", id: 1357698349190},
	{name: "向井蓝", id: 1227423942797},
	{name: "夜雨纷扬", id: 1364336248317},
	{name: "爱丽丝", id: 1182673656377},
	{name: "机智的阿斗", id: 1369618936374},
	{name: "爱莉杏菜", id: 1287647249903},
	{name: "宋寂", id: 1145480414777},
	{name: "金色之泪", id: 1384456670787},
	{name: "灼眼的Saber", id: 1016778001906},
	{name: "打个大西瓜", id: 1175451205131},
	{name: "我群最菜", id: 1373474221136},
	{name: "初心如故", id: 1020717944340},
	{name: "乐活", id: 1407880747519},
	{name: "香浓朱古力", id: 1369214661104},
	{name: "Lemon", id: 1418294443568},
	{name: "骡逃兵", id: 1199696096321},
	{name: "魂魄妖梦", id: 1420580320323},
	{name: "上杉谦信", id: 1314847096371},
	{name: "Ron洛神", id: 1087383237195},
	{name: "长星夜烁", id: 1135487787534},
	{name: "翻车大队长", id: 1291097389101},
	{name: "海豹", id: 1081885841947},
	{name: "老公", id: 1271928496391},
];

const DATA_mobParas = [
	{bossIdx: 1, health: 6000000, scoreFactor: 1, name: "龙", round: 1, bossNum: 1},
	{bossIdx: 2, health: 8000000, scoreFactor: 1, name: "鸟", round: 1, bossNum: 2},
	{bossIdx: 3, health: 10000000, scoreFactor: 1.1, name: "花", round: 1, bossNum: 3},
	{bossIdx: 4, health: 12000000, scoreFactor: 1.1, name: "熊", round: 1, bossNum: 4},
	{bossIdx: 5, health: 20000000, scoreFactor: 1.2, name: "羊", round: 1, bossNum: 5},
	{bossIdx: 6, health: 6000000, scoreFactor: 1.2, name: "龙", round: 2, bossNum: 1},
	{bossIdx: 7, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 2, bossNum: 2},
	{bossIdx: 8, health: 10000000, scoreFactor: 1.5, name: "花", round: 2, bossNum: 3},
	{bossIdx: 9, health: 12000000, scoreFactor: 1.7, name: "熊", round: 2, bossNum: 4},
	{bossIdx: 10, health: 20000000, scoreFactor: 2, name: "羊", round: 2, bossNum: 5},
];

const DATA_combineRule = [
	{factor:1, refund: 10},
	{factor:1.1, refund: 29},
	{factor:1.2, refund: 35},
	{factor:1.3, refund: 41},
	{factor:1.4, refund: 46},
	{factor:1.5, refund: 50},
	{factor:1.6, refund: 54},
	{factor:1.7, refund: 58},
	{factor:1.8, refund: 60},
	{factor:1.9, refund: 63},
	{factor:2, refund: 65},
	{factor:3, refund: 80},
	{factor:4, refund: 88},
	{factor:4.3, refund: 90},
];

const DATA_actionData =
	[
		// D1
		{
			day: 1,
			bossIdx: 1,
			log: [
				{name: "好好先生", damage: 819696},
				{name: "初心如故", damage: 754978},
				{name: "爱莉杏菜", damage: 729122},
				{name: "宋寂", damage: 657609},
				{name: "向井蓝", damage: 588688},
				{name: "打个大西瓜", damage: 582455},
				{name: "咸鱼", damage: 462544},
				{name: "老公", damage: 427843},
				{name: "爱丽丝", damage: 406698},
				{name: "池霜", damage: 315082},
				{name: "灼眼的Saber", damage: 255285}
			]
		},
		{
			day: 1,
			bossIdx: 2,
			log: [
				{name: "以摸多", damage: 1126371},
				{name: "黑椿", damage: 1055339},
				{name: "手手", damage: 945169},
				{name: "机智的阿斗", damage: 906561},
				{name: "乐活", damage: 675446},
				{name: "池霜", damage: 485988},
				{name: "打个大西瓜", damage: 400554},
				{name: "Lemon", damage: 388002},
				{name: "骡逃兵", damage: 386179},
				{name: "夜雨纷扬", damage: 315210},
				{name: "上杉谦信", damage: 312073},
				{name: "好好先生", damage: 291123},
				{name: "爱丽丝", damage: 288072},
				{name: "宋寂", damage: 229801},
				{name: "翻车大队长", damage: 194112}
			]
		},
		{
			day: 1,
			bossIdx: 3,
			log: [
				{name: "Alpha", damage: 1036913},
				{name: "我群最菜", damage: 1000953},
				{name: "金色之泪", damage: 943713},
				{name: "夜雨纷扬", damage: 832962},
				{name: "灼眼的Saber", damage: 780306},
				{name: "魂魄妖梦", damage: 779154},
				{name: "骡逃兵", damage: 596846},
				{name: "海豹", damage: 534583},
				{name: "咸鱼", damage: 525912},
				{name: "Lemon", damage: 409581},
				{name: "上杉谦信", damage: 383512},
				{name: "池霜", damage: 363605},
				{name: "Ron洛神", damage: 360373},
				{name: "一起学猫叫", damage: 283992},
				{name: "打个大西瓜", damage: 268277},
				{name: "向井蓝", damage: 241974},
				{name: "爱丽丝", damage: 228205},
				{name: "初心如故", damage: 223196},
				{name: "老公", damage: 205943}
			]
		},
		{
			day: 1,
			bossIdx: 4,
			log: [
				{name: "长星夜烁", damage: 888363},
				{name: "香浓朱古力", damage: 770474},
				{name: "一起学猫叫", damage: 695918},
				{name: "Ron洛神", damage: 533188},
				{name: "手手", damage: 285770},
				{name: "翻车大队长", damage: 179203}
			]
		},

		// D2
		{
			day: 2,
			bossIdx: 4,
			log: [
				{name: "爱莉杏菜", damage: 427853},
				{name: "爱莉杏菜", damage: 265079},
				{name: "爱莉杏菜", damage: 158140},
				{name: "爱丽丝", damage: 339337},
				{name: "魂魄妖梦", damage: 298512},
				{name: "老公", damage: 258138},
				{name: "灼眼的Saber", damage: 378034},
				{name: "宋寂", damage: 443157},
				{name: "向井蓝", damage: 374219},
				{name: "初心如故", damage: 431614},
				{name: "向井蓝", damage: 373881},
				{name: "宋寂", damage: 257858},
				{name: "海豹", damage: 246644},
				{name: "初心如故", damage: 315853},
				{name: "海豹", damage: 207000},
				{name: "海豹", damage: 155877},
				{name: "好好先生", damage: 412782},
				{name: "金色之泪", damage: 404515},
				{name: "金色之泪", damage: 288394},
				{name: "以摸多", damage: 272012},
				{name: "咸鱼", damage: 402840},
				{name: "手手", damage: 243386},
				{name: "骡逃兵", damage: 201942},
				{name: "手手", damage: 369626},
				{name: "打个大西瓜", damage: 271314},
				{name: "咸鱼", damage: 403070},
				{name: "打个大西瓜", damage: 379814},
				{name: "我群最菜", damage: 66193}
			]
		},
		{
			day: 2,
			bossIdx: 5,
			log: [
				{name: "机智的阿斗", damage: 533407},
				{name: "骡逃兵", damage: 322831},
				{name: "Alpha", damage: 465888},
				{name: "以摸多", damage: 507290},
				{name: "我群最菜", damage: 91865},
				{name: "灼眼的Saber", damage: 425492},
				{name: "好好先生", damage: 498776},
				{name: "Alpha", damage: 318708},
				{name: "好好先生", damage: 251740},
				{name: "机智的阿斗", damage: 385797},
				{name: "机智的阿斗", damage: 207912},
				{name: "爱丽丝", damage: 270685},
				{name: "夜雨纷扬", damage: 465893},
				{name: "黑椿", damage: 459151},
				{name: "夜雨纷扬", damage: 415108},
				{name: "黑椿", damage: 405655},
				{name: "池霜", damage: 577472},
				{name: "初心如故", damage: 244419},
				{name: "手手", damage: 563198},
				{name: "骡逃兵", damage: 564242},
				{name: "上杉谦信", damage: 270216},
				{name: "池霜", damage: 355764},
				{name: "池霜", damage: 320392},
				{name: "金色之泪", damage: 215472},
				{name: "向井蓝", damage: 261072},
				{name: "上杉谦信", damage: 333166},
				{name: "爱丽丝", damage: 263267},
				{name: "我群最菜", damage: 384428},
				{name: "我群最菜", damage: 386641},
				{name: "咸鱼", damage: 295887},
				{name: "Lemon", damage: 304668},
				{name: "Lemon", damage: 220519},
				{name: "Lemon", damage: 212473},
				{name: "宋寂", damage: 308688},
				{name: "乐活", damage: 291546},
				{name: "乐活", damage: 308623},
				{name: "乐活", damage: 274430},
				{name: "黑椿", damage: 307039},
				{name: "魂魄妖梦", damage: 330614},
				{name: "魂魄妖梦", damage: 259710},
				{name: "夜雨纷扬", damage: 303541},
				{name: "打个大西瓜", damage: 540371},
				{name: "上杉谦信", damage: 171233},
				{name: "Alpha", damage: 252145},
				{name: "灼眼的Saber", damage: 211401},
				{name: "老公", damage: 192207},
				{name: "老公", damage: 104114},
				{name: "Ron洛神", damage: 329786},
				{name: "Ron洛神", damage: 329517},
				{name: "以摸多", damage: 262455},
				{name: "Ron洛神", damage: 205731},
				{name: "翻车大队长", damage: 252999},
				{name: "翻车大队长", damage: 177711},
				{name: "翻车大队长", damage: 324516},
				{name: "一起学猫叫", damage: 422363},
				{name: "香浓朱古力", damage: 415656},
				{name: "一起学猫叫", damage: 325660},
				{name: "一起学猫叫", damage: 258237},
				{name: "香浓朱古力", damage: 304403},
				{name: "香浓朱古力", damage: 219828},
				{name: "长星夜烁", damage: 384801},
				{name: "长星夜烁", damage: 131181},
			]
		},
		{
			day: 2,
			bossIdx: 6,
			log: [
				{name: "长星夜烁", damage: 192176},
				{name: "长星夜烁", damage: 200736},
			]
		},

		// D3
		{
			day: 3,
			bossIdx: 6,
			log: [
				{name: "魂魄妖梦", damage: 318540},
				{name: "老公", damage: 283858},
				{name: "打个大西瓜", damage: 553699},
				{name: "打个大西瓜", damage: 443608},
				{name: "爱莉杏菜", damage: 287151},
				{name: "爱莉杏菜", damage: 301933},
				{name: "爱莉杏菜", damage: 203509},
				{name: "初心如故", damage: 458458},
				{name: "初心如故", damage: 360125},
				{name: "宋寂", damage: 284991},
				{name: "海豹", damage: 347675},
				{name: "以摸多", damage: 508313},
				{name: "海豹", damage: 380476},
				{name: "海豹", damage: 172960},
				{name: "好好先生", damage: 225404},
				{name: "池霜", damage: 323961},
				{name: "向井蓝", damage: 437643},
			]
		},
		{
			day: 3,
			bossIdx: 7,
			log: [
				{name: "骡逃兵", damage: 380819},
				{name: "向井蓝", damage: 340326},
				{name: "向井蓝", damage: 217891},
				{name: "宋寂", damage: 333782},
			]
		}
	]