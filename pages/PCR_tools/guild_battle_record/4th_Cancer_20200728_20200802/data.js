const DATA_nameMap = [
	{name: "手手", id: 1110989227597},
	{name: "迪卢木多", id: 1205633835536},
	{name: "坑神", id: 1410057003564},
	{name: "黑椿", id: 1341416184327},
	{name: "池霜", id: 1059202629191},
	{name: "风月", id: 1003138654718},
	{name: "Otaku", id: 1092119469176},
	{name: "福尔康", id: 1389079112373},
	{name: "常磐丁香", id: 1201341329972},
	{name: "好好先生", id: 1197984197184},
	{name: "橙子", id: 1035489297951},
	{name: "戏言君", id: 1266152645111},
	{name: "一起学猫叫", id: 1357698349190},
	{name: "宋寂", id: 1145480414777},
	{name: "keiko", id: 1020014635566},
	{name: "以摸多", id: 1131848569969},
	{name: "何等的寂寞", id: 1112690918827},
	{name: "八云蓝", id: 1173842782719},
	{name: "红豆沙", id: 1397134481919},
	{name: "夜雨纷扬", id: 1364336248317},
	{name: "金色之泪", id: 1384456670787},
	{name: "我群最菜", id: 1373474221136},
	{name: "香浓朱古力", id: 1369214661104},
	{name: "长星夜烁", id: 1135487787534},
	{name: "魂魄妖梦", id: 1420580320323},
	{name: "幽蓝", id: 1240408107549},
	{name: "lala", id: 1345648171525},
	{name: "灼眼的Saber", id: 1016778001906},
	{name: "打个大西瓜", id: 1175451205131},
	{name: "初心如故", id: 1020717944340},
];

const DATA_mobData = [
	{bossIdx: 1, health: 6000000, scoreFactor: 1, name: "龙", round: 1, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 2, health: 8000000, scoreFactor: 1, name: "鸟", round: 1, bossNum: 2, bgC: "background: #600"},
	{bossIdx: 3, health: 10000000, scoreFactor: 1.1, name: "猪", round: 1, bossNum: 3, bgC: "background: #c00"},
	{bossIdx: 4, health: 12000000, scoreFactor: 1.1, name: "独", round: 1, bossNum: 4, bgC: "background: #900"},
	{bossIdx: 5, health: 20000000, scoreFactor: 1.2, name: "蟹", round: 1, bossNum: 5, bgC: "background: #f00"},
	{bossIdx: 6, health: 6000000, scoreFactor: 1.2, name: "龙", round: 2, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 7, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 2, bossNum: 2, bgC: "background: #600"},
	{bossIdx: 8, health: 10000000, scoreFactor: 1.5, name: "猪", round: 2, bossNum: 3, bgC: "background: #c00"},
	{bossIdx: 9, health: 12000000, scoreFactor: 1.7, name: "独", round: 2, bossNum: 4, bgC: "background: #900"},
	{bossIdx: 10, health: 20000000, scoreFactor: 2, name: "蟹", round: 2, bossNum: 5, bgC: "background: #f00"},
	{bossIdx: 11, health: 6000000, scoreFactor: 1.2, name: "龙", round: 3, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 12, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 3, bossNum: 2, bgC: "background: #611"},
	{bossIdx: 13, health: 10000000, scoreFactor: 1.5, name: "猪", round: 3, bossNum: 3, bgC: "background: #c11"},
	{bossIdx: 14, health: 12000000, scoreFactor: 1.7, name: "独", round: 3, bossNum: 4, bgC: "background: #911"},
	{bossIdx: 15, health: 20000000, scoreFactor: 2, name: "蟹", round: 3, bossNum: 5, bgC: "background: #f11"},
	{bossIdx: 16, health: 6000000, scoreFactor: 1.2, name: "龙", round: 4, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 17, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 4, bossNum: 2, bgC: "background: #611"},
	{bossIdx: 18, health: 10000000, scoreFactor: 1.5, name: "猪", round: 4, bossNum: 3, bgC: "background: #c11"},
	{bossIdx: 19, health: 12000000, scoreFactor: 1.7, name: "独", round: 4, bossNum: 4, bgC: "background: #911"},
	{bossIdx: 20, health: 20000000, scoreFactor: 2, name: "蟹", round: 4, bossNum: 5, bgC: "background: #f11"},
	{bossIdx: 21, health: 6000000, scoreFactor: 1.2, name: "龙", round: 5, bossNum: 1, bgC: "background: #322"},
	{bossIdx: 22, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 5, bossNum: 2, bgC: "background: #622"},
	{bossIdx: 23, health: 10000000, scoreFactor: 1.5, name: "猪", round: 5, bossNum: 3, bgC: "background: #c22"},
	{bossIdx: 24, health: 12000000, scoreFactor: 1.7, name: "独", round: 5, bossNum: 4, bgC: "background: #922"},
	{bossIdx: 25, health: 20000000, scoreFactor: 2, name: "蟹", round: 5, bossNum: 5, bgC: "background: #f22"},
];

const DATA_actionData = [
	// D1
	{
		day: 1,
		bossIdx: 1,
		log: [
			{name: "何等的寂寞", damage: 1106881, time: '2020,6,28,6,55'},
			{name: "以摸多", damage: 472997, time: '2020,6,28,7,40'},
			{name: "打个大西瓜", damage: 1233072, time: '2020,6,28,7,46'},
			{name: "初心如故", damage: 1181081, time: '2020,6,28,8,1'},
			{name: "Otaku", damage: 976375, time: '2020,6,28,8,6'},
			{name: "迪卢木多", damage: 1029594, time: '2020,6,28,8,14'},
		]
	},
	{
		day: 1,
		bossIdx: 2,
		log: [
			{name: "迪卢木多", damage: 67822, time: '2020,6,28,8,15'},
			{name: "打个大西瓜", damage: 1182680, time: '2020,6,28,8,28'},
			{name: "初心如故", damage: 1167750, time: '2020,6,28,8,33'},
			{name: "何等的寂寞", damage: 1195695, time: '2020,6,28,8,40'},
			{name: "金色之泪", damage: 1157390, time: '2020,6,28,9,5'},
			{name: "橙子", damage: 1117753, time: '2020,6,28,9,11'},
			{name: "keiko", damage: 1144621, time: '2020,6,28,9,29'},
			{name: "黑椿", damage: 966289, time: '2020,6,28,13,5'},
		]
	},
	{
		day: 1,
		bossIdx: 3,
		log: [
			{name: "黑椿", damage: 108514, time: '2020,6,28,13,9'},
			{name: "池霜", damage: 1211037, time: '2020,6,28,15,1'},
			{name: "手手", damage: 1273188, time: '2020,6,28,15,10'},
			{name: "黑椿", damage: 1174101, time: '2020,6,28,15,16'},
			{name: "以摸多", damage: 1211965, time: '2020,6,28,15,24'},
			{name: "好好先生", damage: 1235964, time: '2020,6,28,15,34'},
			{name: "戏言君", damage: 1189187, time: '2020,6,28,15,39'},
			{name: "八云蓝", damage: 1191237, time: '2020,6,28,16,8'},
			{name: "宋寂", damage: 1196496, time: '2020,6,28,16,11'},
			{name: "keiko", damage: 1156075, time: '2020,6,28,16,12'},
		]
	},
	{
		day: 1,
		bossIdx: 4,
		log: [
			{name: "keiko", damage: 985888, time: '2020,6,28,16,13'},
			{name: "一起学猫叫", damage: 1000587, time: '2020,6,28,16,47'},
			{name: "池霜", damage: 1184315, time: '2020,6,28,16,53'},
			{name: "一起学猫叫", damage: 1172807, time: '2020,6,28,16,54'},
			{name: "以摸多", damage: 1026781, time: '2020,6,28,17,8'},
			{name: "手手", damage: 1195225, time: '2020,6,28,17,16'},
			{name: "戏言君", damage: 1066277, time: '2020,6,28,17,22'},
			{name: "八云蓝", damage: 1087284, time: '2020,6,28,17,29'},
			{name: "好好先生", damage: 1084035, time: '2020,6,28,17,33'},
			{name: "夜雨纷扬", damage: 1124405, time: '2020,6,28,17,33'},
			{name: "福尔康", damage: 1072396, time: '2020,6,28,17,39'},
		]
	},
	{
		day: 1,
		bossIdx: 5,
		log: [
			{name: "福尔康", damage: 23125, time: '2020,6,28,17,43'},
			{name: "初心如故", damage: 878530, time: '2020,6,28,17,46'},
			{name: "福尔康", damage: 855587, time: '2020,6,28,17,59'},
			{name: "一起学猫叫", damage: 827548, time: '2020,6,28,17,59'},
			{name: "池霜", damage: 873167, time: '2020,6,28,18,4'},
			{name: "金色之泪", damage: 811647, time: '2020,6,28,18,5'},
			{name: "常磐丁香", damage: 903279, time: '2020,6,28,18,15'},
			{name: "戏言君", damage: 856541, time: '2020,6,28,18,16'},
			{name: "好好先生", damage: 859148, time: '2020,6,28,18,22'},
			{name: "灼眼的Saber", damage: 859768, time: '2020,6,28,18,26'},
			{name: "八云蓝", damage: 805731, time: '2020,6,28,18,28'},
			{name: "宋寂", damage: 721810, time: '2020,6,28,18,32'},
			{name: "香浓朱古力", damage: 865651, time: '2020,6,28,18,33'},
			{name: "橙子", damage: 900867, time: '2020,6,28,18,44'},
			{name: "我群最菜", damage: 859287, time: '2020,6,28,18,55'},
			{name: "风月", damage: 819446, time: '2020,6,28,18,55'},
			{name: "keiko", damage: 746735, time: '2020,6,28,18,57'},
			{name: "手手", damage: 901394, time: '2020,6,28,18,59'},
			{name: "夜雨纷扬", damage: 805089, time: '2020,6,28,19,7'},
		]
	},
];
