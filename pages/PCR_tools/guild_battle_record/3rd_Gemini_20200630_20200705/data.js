const DATA_nameMap = [
	{name: "手手", id: 1110989227597},
	{name: "迪卢木多", id: 1205633835536},
	{name: "黑椿", id: 1341416184327},
	{name: "池霜", id: 1059202629191},
	{name: "欧派果奶", id: 1277951147540},
	{name: "好好先生", id: 1197984197184},
	{name: "Otaku", id: 1092119469176},
	{name: "以摸多", id: 1131848569969},
	{name: "一起学猫叫", id: 1357698349190},
	{name: "咸鱼", id: 1072464889993},
	{name: "常磐丁香", id: 1201341329972},
	{name: "keiko", id: 1020014635566},
	{name: "宋寂", id: 1145480414777},
	{name: "何等的寂寞", id: 1112690918827},
	{name: "夜雨纷扬", id: 1364336248317},
	{name: "戏言君", id: 1266152645111},
	{name: "福尔康", id: 1389079112373},
	{name: "八云蓝", id: 1173842782719},
	{name: "机智的阿斗", id: 1369618936374},
	{name: "我群最菜", id: 1373474221136},
	{name: "金色之泪", id: 1384456670787},
	{name: "魂魄妖梦", id: 1420580320323},
	{name: "幽蓝", id: 1240408107549},
	{name: "长星夜烁", id: 1135487787534},
	{name: "爱丽丝", id: 1182673656377},
	{name: "黑喵", id: 1129359200353},
	{name: "香浓朱古力", id: 1369214661104},
	{name: "灼眼的Saber", id: 1016778001906},
	{name: "打个大西瓜", id: 1175451205131},
	{name: "初心如故", id: 1020717944340}
];

const DATA_mobData = [
	{bossIdx: 1, health: 6000000, scoreFactor: 1, name: "龙", round: 1, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 2, health: 8000000, scoreFactor: 1, name: "鸟", round: 1, bossNum: 2, bgC: "background: #600"},
	{bossIdx: 3, health: 10000000, scoreFactor: 1.1, name: "花", round: 1, bossNum: 3, bgC: "background: #c00"},
	{bossIdx: 4, health: 12000000, scoreFactor: 1.1, name: "巨", round: 1, bossNum: 4, bgC: "background: #900"},
	{bossIdx: 5, health: 20000000, scoreFactor: 1.2, name: "双", round: 1, bossNum: 5, bgC: "background: #f00"},
	{bossIdx: 6, health: 6000000, scoreFactor: 1.2, name: "龙", round: 2, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 7, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 2, bossNum: 2, bgC: "background: #600"},
	{bossIdx: 8, health: 10000000, scoreFactor: 1.5, name: "花", round: 2, bossNum: 3, bgC: "background: #c00"},
	{bossIdx: 9, health: 12000000, scoreFactor: 1.7, name: "巨", round: 2, bossNum: 4, bgC: "background: #900"},
	{bossIdx: 10, health: 20000000, scoreFactor: 2, name: "双", round: 2, bossNum: 5, bgC: "background: #f00"},
	{bossIdx: 11, health: 6000000, scoreFactor: 1.2, name: "龙", round: 3, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 12, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 3, bossNum: 2, bgC: "background: #611"},
	{bossIdx: 13, health: 10000000, scoreFactor: 1.5, name: "花", round: 3, bossNum: 3, bgC: "background: #c11"},
	{bossIdx: 14, health: 12000000, scoreFactor: 1.7, name: "巨", round: 3, bossNum: 4, bgC: "background: #911"},
	{bossIdx: 15, health: 20000000, scoreFactor: 2, name: "双", round: 3, bossNum: 5, bgC: "background: #f11"},
	{bossIdx: 16, health: 6000000, scoreFactor: 1.2, name: "龙", round: 4, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 17, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 4, bossNum: 2, bgC: "background: #611"},
	{bossIdx: 18, health: 10000000, scoreFactor: 1.5, name: "花", round: 4, bossNum: 3, bgC: "background: #c11"},
	{bossIdx: 19, health: 12000000, scoreFactor: 1.7, name: "巨", round: 4, bossNum: 4, bgC: "background: #911"},
	{bossIdx: 20, health: 20000000, scoreFactor: 2, name: "双", round: 4, bossNum: 5, bgC: "background: #f11"},
	{bossIdx: 21, health: 6000000, scoreFactor: 1.2, name: "龙", round: 5, bossNum: 1, bgC: "background: #322"},
	{bossIdx: 22, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 5, bossNum: 2, bgC: "background: #622"},
	{bossIdx: 23, health: 10000000, scoreFactor: 1.5, name: "花", round: 5, bossNum: 3, bgC: "background: #c22"},
	{bossIdx: 24, health: 12000000, scoreFactor: 1.7, name: "巨", round: 5, bossNum: 4, bgC: "background: #922"},
	{bossIdx: 25, health: 20000000, scoreFactor: 2, name: "双", round: 5, bossNum: 5, bgC: "background: #f22"},
];

const DATA_actionData = [
	// D1
	{
		day: 1,
		bossIdx: 1,
		log: [
			{name: "何等的寂寞", damage: 1207045, time: '2020,5,30,5,35'},
			{name: "以摸多", damage: 941615, time: '2020,5,30,7,7'},
			{name: "打个大西瓜", damage: 1066506, time: '2020,5,30,7,23'},
			{name: "keiko", damage: 999675, time: '2020,5,30,9,1'},
			{name: "机智的阿斗", damage: 1075762, time: '2020,5,30,9,34'},
			{name: "欧派果奶", damage: 1098568, time: '2020,5,30,9,34'},
		]
	},
	{
		day: 1,
		bossIdx: 2,
		log: [
			{name: "好好先生", damage: 1043597, time: '2020,5,30,9,41'},
			{name: "欧派果奶", damage: 458147, time: '2020,5,30,9,41'},
			{name: "八云蓝", damage: 1018826, time: '2020,5,30,9,43'},
			{name: "金色之泪", damage: 1021572, time: '2020,5,30,9,44'},
			{name: "福尔康", damage: 996212, time: '2020,5,30,9,44'},
			{name: "Otaku", damage: 964780, time: '2020,5,30,10,12'},
			{name: "何等的寂寞", damage: 1010676, time: '2020,5,30,10,38'},
		]
	},
];
