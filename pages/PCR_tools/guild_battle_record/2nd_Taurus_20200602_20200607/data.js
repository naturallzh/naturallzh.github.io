const DATA_nameMap = [
	{name: "手手", id: 1110989227597},
	{name: "池霜", id: 1059202629191},
	{name: "迪卢木多", id: 1205633835536},
	{name: "黑椿", id: 1341416184327},
	{name: "好好先生", id: 1197984197184},
	{name: "以摸多", id: 1131848569969},
	{name: "向井蓝", id: 1227423942797},
	{name: "福尔康", id: 1389079112373},
	{name: "何等的寂寞", id: 1112690918827},
	{name: "咸鱼", id: 1072464889993},
	{name: "戏言君", id: 1266152645111},
	{name: "Otaku", id: 1092119469176},
	{name: "夜雨纷扬", id: 1364336248317},
	{name: "宋寂", id: 1145480414777},
	{name: "八云蓝", id: 1173842782719},
	{name: "未曾设想", id: 1252472107549},
	{name: "Alpha", id: 1402954104343},
	{name: "46黑桐", id: 1240408107549},
	{name: "爱丽丝", id: 1182673656377},
	{name: "一起学猫叫", id: 1357698349190},
	{name: "keiko", id: 1020014635566},
	{name: "机智的阿斗", id: 1369618936374},
	{name: "金色之泪", id: 1384456670787},
	{name: "我群最菜", id: 1373474221136},
	{name: "打个大西瓜", id: 1175451205131},
	{name: "灼眼的Saber", id: 1016778001906},
	{name: "香浓朱古力", id: 1369214661104},
	{name: "魂魄妖梦", id: 1420580320323},
	{name: "长星夜烁", id: 1135487787534},
	{name: "初心如故", id: 1020717944340}
];

const DATA_mobData = [
	{bossIdx: 1, health: 6000000, scoreFactor: 1, name: "龙", round: 1, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 2, health: 8000000, scoreFactor: 1, name: "鸟", round: 1, bossNum: 2, bgC: "background: #c00"},
	{bossIdx: 3, health: 10000000, scoreFactor: 1.1, name: "猪", round: 1, bossNum: 3, bgC: "background: #600"},
	{bossIdx: 4, health: 12000000, scoreFactor: 1.1, name: "鹿", round: 1, bossNum: 4, bgC: "background: #f00"},
	{bossIdx: 5, health: 20000000, scoreFactor: 1.2, name: "牛", round: 1, bossNum: 5, bgC: "background: #900"},
	{bossIdx: 6, health: 6000000, scoreFactor: 1.2, name: "龙", round: 2, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 7, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 2, bossNum: 2, bgC: "background: #c00"},
	{bossIdx: 8, health: 10000000, scoreFactor: 1.5, name: "猪", round: 2, bossNum: 3, bgC: "background: #600"},
	{bossIdx: 9, health: 12000000, scoreFactor: 1.7, name: "鹿", round: 2, bossNum: 4, bgC: "background: #f00"},
	{bossIdx: 10, health: 20000000, scoreFactor: 2, name: "牛", round: 2, bossNum: 5, bgC: "background: #900"},
	{bossIdx: 11, health: 6000000, scoreFactor: 1.2, name: "龙", round: 3, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 12, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 3, bossNum: 2, bgC: "background: #c11"},
	{bossIdx: 13, health: 10000000, scoreFactor: 1.5, name: "猪", round: 3, bossNum: 3, bgC: "background: #611"},
	{bossIdx: 14, health: 12000000, scoreFactor: 1.7, name: "鹿", round: 3, bossNum: 4, bgC: "background: #f11"},
	{bossIdx: 15, health: 20000000, scoreFactor: 2, name: "牛", round: 3, bossNum: 5, bgC: "background: #911"},
	{bossIdx: 16, health: 6000000, scoreFactor: 1.2, name: "龙", round: 4, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 17, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 4, bossNum: 2, bgC: "background: #c11"},
	{bossIdx: 18, health: 10000000, scoreFactor: 1.5, name: "猪", round: 4, bossNum: 3, bgC: "background: #611"},
	{bossIdx: 19, health: 12000000, scoreFactor: 1.7, name: "鹿", round: 4, bossNum: 4, bgC: "background: #f11"},
	{bossIdx: 20, health: 20000000, scoreFactor: 2, name: "牛", round: 4, bossNum: 5, bgC: "background: #911"},
	{bossIdx: 21, health: 6000000, scoreFactor: 1.2, name: "龙", round: 5, bossNum: 1, bgC: "background: #322"},
	{bossIdx: 22, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 5, bossNum: 2, bgC: "background: #c22"},
	{bossIdx: 23, health: 10000000, scoreFactor: 1.5, name: "猪", round: 5, bossNum: 3, bgC: "background: #622"},
	{bossIdx: 24, health: 12000000, scoreFactor: 1.7, name: "鹿", round: 5, bossNum: 4, bgC: "background: #f22"},
	{bossIdx: 25, health: 20000000, scoreFactor: 2, name: "牛", round: 5, bossNum: 5, bgC: "background: #922"},
];

const DATA_actionData = [
	// D1
	{
		day: 1,
		bossIdx: 1,
		log: [
			{name: "打个大西瓜", damage: 832272, time: new Date(2020,5,2,7,29)},
			{name: "爱丽丝", damage: 810161, time: new Date(2020,5,2,7,54)},
			{name: "灼眼的Saber", damage: 762113, time: new Date(2020,5,2,8,3)},
			{name: "何等的寂寞", damage: 800108, time: new Date(2020,5,2,8,36)},
			{name: "初心如故", damage: 887215, time: new Date(2020,5,2,8,53)},
			{name: "keiko", damage: 765331, time: new Date(2020,5,2,9,25)},
			{name: "戏言君", damage: 811612, time: new Date(2020,5,2,9,36)},
			{name: "池霜", damage: 331188, time: new Date(2020,5,2,9,45)},
		]
	},
	{
		day: 1,
		bossIdx: 2,
		log: [
			{name: "池霜", damage: 213358, time: new Date(2020,5,2,9,48)},
			{name: "宋寂", damage: 810335, time: new Date(2020,5,2,10,1)},
			{name: "金色之泪", damage: 628181, time: new Date(2020,5,2,10,20)},
			{name: "机智的阿斗", damage: 773552, time: new Date(2020,5,2,10,26)},
			{name: "八云蓝", damage: 795531, time: new Date(2020,5,2,10,44)},
			{name: "初心如故", damage: 800454, time: new Date(2020,5,2,10,48)},
			{name: "keiko", damage: 698280, time: new Date(2020,5,2,10,55)},
			{name: "池霜", damage: 933132, time: new Date(2020,5,2,11,11)},
			{name: "咸鱼", damage: 846505, time: new Date(2020,5,2,11,42)},
			{name: "Alpha", damage: 838524, time: new Date(2020,5,2,12,5)},
			{name: "Alpha", damage: 469610, time: new Date(2020,5,2,12,33)},
			{name: "我群最菜", damage: 488246, time: new Date(2020,5,2,12,33)},
		]
	},
	{
		day: 1,
		bossIdx: 3,
		log: [
			{name: "灼眼的Saber", damage: 743502, time: new Date(2020,5,2,12,39)},
		]
	},
];