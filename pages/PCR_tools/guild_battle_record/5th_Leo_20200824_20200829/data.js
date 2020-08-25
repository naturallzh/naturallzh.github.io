const DATA_nameMap = [
	{name: "手手", id: 1110989227597},
	{name: "迪卢木多", id: 1205633835536},
	{name: "黑椿", id: 1341416184327},
	{name: "池霜", id: 1059202629191},
	{name: "Otaku", id: 1092119469176},
	{name: "福尔康", id: 1389079112373},
	{name: "常磐丁香", id: 1201341329972},
	{name: "好好先生", id: 1197984197184},
	{name: "橙子", id: 1035489297951},
	{name: "戏言君", id: 1266152645111},
	{name: "一起学猫叫", id: 1357698349190},
	{name: "keiko", id: 1020014635566},
	{name: "以摸多", id: 1131848569969},
	{name: "何等的寂寞", id: 1112690918827},
	{name: "八云蓝", id: 1173842782719},
	{name: "夜雨纷扬", id: 1364336248317},
	{name: "金色之泪", id: 1384456670787},
	{name: "我群最菜", id: 1373474221136},
	{name: "香浓朱古力", id: 1369214661104},
	{name: "长星夜烁", id: 1135487787534},
	{name: "幽蓝", id: 1240408107549},
	{name: "灼眼的Saber", id: 1016778001906},
	{name: "打个大西瓜", id: 1175451205131},
	{name: "初心如故", id: 1020717944340},
	{name: "终将成为你", id: 1388387089979},
	{name: "兰斯咕哒子", id: 1238410846752},
	{name: "flysnow", id: 1047559545968},
	{name: "MA", id: 1108016273966},
	{name: "陈睿", id: 1097401520390},
	{name: "Michael", id: 1185216094750},
];

const DATA_mobData = [
	{bossIdx: 1, health: 6000000, scoreFactor: 1, name: "龙", round: 1, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 2, health: 8000000, scoreFactor: 1, name: "鸟", round: 1, bossNum: 2, bgC: "background: #600"},
	{bossIdx: 3, health: 10000000, scoreFactor: 1.1, name: "虫", round: 1, bossNum: 3, bgC: "background: #c00"},
	{bossIdx: 4, health: 12000000, scoreFactor: 1.1, name: "熊", round: 1, bossNum: 4, bgC: "background: #900"},
	{bossIdx: 5, health: 20000000, scoreFactor: 1.2, name: "狮", round: 1, bossNum: 5, bgC: "background: #f00"},
	{bossIdx: 6, health: 6000000, scoreFactor: 1.2, name: "龙", round: 2, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 7, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 2, bossNum: 2, bgC: "background: #600"},
	{bossIdx: 8, health: 10000000, scoreFactor: 1.5, name: "虫", round: 2, bossNum: 3, bgC: "background: #c00"},
	{bossIdx: 9, health: 12000000, scoreFactor: 1.7, name: "熊", round: 2, bossNum: 4, bgC: "background: #900"},
	{bossIdx: 10, health: 20000000, scoreFactor: 2, name: "狮", round: 2, bossNum: 5, bgC: "background: #f00"},
	{bossIdx: 11, health: 6000000, scoreFactor: 1.2, name: "龙", round: 3, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 12, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 3, bossNum: 2, bgC: "background: #611"},
	{bossIdx: 13, health: 10000000, scoreFactor: 1.5, name: "虫", round: 3, bossNum: 3, bgC: "background: #c11"},
	{bossIdx: 14, health: 12000000, scoreFactor: 1.7, name: "熊", round: 3, bossNum: 4, bgC: "background: #911"},
	{bossIdx: 15, health: 20000000, scoreFactor: 2, name: "狮", round: 3, bossNum: 5, bgC: "background: #f11"},
	{bossIdx: 16, health: 6000000, scoreFactor: 1.2, name: "龙", round: 4, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 17, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 4, bossNum: 2, bgC: "background: #611"},
	{bossIdx: 18, health: 10000000, scoreFactor: 1.5, name: "虫", round: 4, bossNum: 3, bgC: "background: #c11"},
	{bossIdx: 19, health: 12000000, scoreFactor: 1.7, name: "熊", round: 4, bossNum: 4, bgC: "background: #911"},
	{bossIdx: 20, health: 20000000, scoreFactor: 2, name: "狮", round: 4, bossNum: 5, bgC: "background: #f11"},
	{bossIdx: 21, health: 6000000, scoreFactor: 1.2, name: "龙", round: 5, bossNum: 1, bgC: "background: #322"},
	{bossIdx: 22, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 5, bossNum: 2, bgC: "background: #622"},
	{bossIdx: 23, health: 10000000, scoreFactor: 1.5, name: "虫", round: 5, bossNum: 3, bgC: "background: #c22"},
	{bossIdx: 24, health: 12000000, scoreFactor: 1.7, name: "熊", round: 5, bossNum: 4, bgC: "background: #922"},
	{bossIdx: 25, health: 20000000, scoreFactor: 2, name: "狮", round: 5, bossNum: 5, bgC: "background: #f22"},
];

const DATA_actionData = [
	// D1
	{
		day: 1,
		bossIdx: 1,
		log: [
			{name: "黑椿", damage: 1529159, time: '2020,7,24,15,3'},
			{name: "初心如故", damage: 1421487, time: '2020,7,24,15,8'},
			{name: "陈睿", damage: 1411343, time: '2020,7,24,15,31'},
			{name: "幽蓝", damage: 1454308, time: '2020,7,24,15,35'},
			{name: "黑椿", damage: 1344283, time: '2020,7,24,15,35'},
		]
	},
	{
		day: 1,
		bossIdx: 2,
		log: [
			{name: "陈睿", damage: 1314482, time: '2020,7,24,15,50'},
			{name: "幽蓝", damage: 1208251, time: '2020,7,24,15,52'},
			{name: "黑椿", damage: 1141246, time: '2020,7,24,16,0'},
			{name: "金色之泪", damage: 1349094, time: '2020,7,24,16,3'},
			{name: "初心如故", damage: 1169568, time: '2020,7,24,16,5'},
			{name: "池霜", damage: 1258917, time: '2020,7,24,16,28'},
			{name: "迪卢木多", damage: 1207842, time: '2020,7,24,16,31'},
		]
	},
	{
		day: 1,
		bossIdx: 3,
		log: [
			{name: "长星夜烁", damage: 954486, time: '2020,7,24,16,37'},
			{name: "迪卢木多", damage: 517275, time: '2020,7,24,16,39'},
			{name: "初心如故", damage: 936859, time: '2020,7,24,16,41'},
			{name: "幽蓝", damage: 863246, time: '2020,7,24,16,41'},
			{name: "夜雨纷扬", damage: 1124603, time: '2020,7,24,16,45'},
			{name: "金色之泪", damage: 1030040, time: '2020,7,24,16,50'},
			{name: "池霜", damage: 1011477, time: '2020,7,24,16,52'},
			{name: "福尔康", damage: 881354, time: '2020,7,24,16,58'},
			{name: "香浓朱古力", damage: 988256, time: '2020,7,24,17,0'},
			{name: "迪卢木多", damage: 1075607, time: '2020,7,24,17,1'},
			{name: "我群最菜", damage: 952610, time: '2020,7,24,17,3'},
		]
	},
	{
		day: 1,
		bossIdx: 4,
		log: [
			{name: "我群最菜", damage: 339167, time: '2020,7,24,17,5'},
			{name: "我群最菜", damage: 1170936, time: '2020,7,24,17,12'},
			{name: "香浓朱古力", damage: 1205526, time: '2020,7,24,17,13'},
			{name: "长星夜烁", damage: 1036794, time: '2020,7,24,17,14'},
			{name: "兰斯咕哒子", damage: 1095035, time: '2020,7,24,17,14'},
			{name: "福尔康", damage: 1182705, time: '2020,7,24,17,15'},
			{name: "夜雨纷扬", damage: 1137956, time: '2020,7,24,17,18'},
			{name: "八云蓝", damage: 1270178, time: '2020,7,24,17,18'},
			{name: "flysnow", damage: 1213483, time: '2020,7,24,17,51'},
			{name: "好好先生", damage: 1136923, time: '2020,7,24,17,54'},
			{name: "keiko", damage: 1101194, time: '2020,7,24,17,55'},
			{name: "橙子", damage: 110103, time: '2020,7,24,18,3'},
		]
	},
	{
		day: 1,
		bossIdx: 5,
		log: [
			{name: "橙子", damage: 973439, time: '2020,7,24,18,6'},
			{name: "长星夜烁", damage: 1233055, time: '2020,7,24,18,11'},
			{name: "香浓朱古力", damage: 1359398, time: '2020,7,24,18,16'},
			{name: "终将成为你", damage: 1295424, time: '2020,7,24,18,16'},
			{name: "Otaku", damage: 1306085, time: '2020,7,24,18,16'},
			{name: "夜雨纷扬", damage: 1350078, time: '2020,7,24,18,18'},
			{name: "MA", damage: 1314471, time: '2020,7,24,18,23'},
			{name: "金色之泪", damage: 1316426, time: '2020,7,24,18,30'},
			{name: "八云蓝", damage: 1194810, time: '2020,7,24,18,31'},
			{name: "何等的寂寞", damage: 1205407, time: '2020,7,24,18,39'},
			{name: "黑椿", damage: 1215051, time: '2020,7,24,18,43'},
			{name: "常磐丁香", damage: 1225355, time: '2020,7,24,18,44'},
			{name: "橙子", damage: 1262712, time: '2020,7,24,18,47'},
			{name: "灼眼的Saber", damage: 1240071, time: '2020,7,24,18,48'},
			{name: "手手", damage: 1240071, time: '2020,7,24,18,57'},
			{name: "灼眼的Saber", damage: 1194145, time: '2020,7,24,19,8'},
			{name: "迪卢木多", damage: 1299628, time: '2020,7,24,19,11'},
		]
	},
	{
		day: 1,
		bossIdx: 6,
		log: [
			{name: "迪卢木多", damage: 1180790, time: '2020,7,24,19,22'},
			{name: "兰斯咕哒子", damage: 1102592, time: '2020,7,24,20,11'},
			{name: "打个大西瓜", damage: 1134990, time: '2020,7,24,20,36'},
			{name: "Otaku", damage: 1079039, time: '2020,7,24,20,47'},
			{name: "何等的寂寞", damage: 1035088, time: '2020,7,24,21,12'},
			{name: "橙子", damage: 1098556, time: '2020,7,24,21,14'},
		]
	},
	{
		day: 1,
		bossIdx: 7,
		log: [
			{name: "橙子", damage: 671561, time: '2020,7,24,21,20'},
			{name: "手手", damage: 1221146, time: '2020,7,24,21,20'},
			{name: "灼眼的Saber", damage: 1226317, time: '2020,7,24,21,28'},
			{name: "以摸多", damage: 1201039, time: '2020,7,24,21,29'},
			{name: "Otaku", damage: 1210724, time: '2020,7,24,21,30'},
			{name: "打个大西瓜", damage: 1270230, time: '2020,7,24,21,32'},
			{name: "常磐丁香", damage: 1237862, time: '2020,7,24,21,32'},
		]
	},
	{
		day: 1,
		bossIdx: 8,
		log: [
			{name: "常磐丁香", damage: 14186, time: '2020,7,24,21,34'},
			{name: "手手", damage: 799536, time: '2020,7,24,21,59'},
			{name: "陈睿", damage: 789827, time: '2020,7,24,22,6'},
			{name: "戏言君", damage: 980960, time: '2020,7,24,22,11'},
			{name: "以摸多", damage: 916987, time: '2020,7,24,22,21'},
			{name: "八云蓝", damage: 833721, time: '2020,7,24,22,23'},
			{name: "兰斯咕哒子", damage: 921085, time: '2020,7,24,22,29'},
			{name: "flysnow", damage: 804136, time: '2020,7,24,22,35'},
			{name: "常磐丁香", damage: 925169, time: '2020,7,24,22,37'},
			{name: "一起学猫叫", damage: 891190, time: '2020,7,24,22,50'},
			{name: "打个大西瓜", damage: 888858, time: '2020,7,24,22,55'},
			{name: "好好先生", damage: 815236, time: '2020,7,24,22,56'},
			{name: "keiko", damage: 419109, time: '2020,7,24,23,13'},
		]
	},
	{
		day: 1,
		bossIdx: 9,
		log: [
			{name: "戏言君", damage: 993373, time: '2020,7,24,23,18'},
			{name: "何等的寂寞", damage: 975288, time: '2020,7,24,23,23'},
			{name: "Michael", damage: 1016175, time: '2020,7,24,23,30'},
			{name: "MA", damage: 979348, time: '2020,7,24,23,30'},
			{name: "一起学猫叫", damage: 995875, time: '2020,7,24,23,35'},
			{name: "终将成为你", damage: 935041, time: '2020,7,25,0,6'},
			{name: "戏言君", damage: 895597, time: '2020,7,25,0,7'},
			{name: "终将成为你", damage: 1006980, time: '2020,7,25,0,8'},
			{name: "一起学猫叫", damage: 704454, time: '2020,7,25,0,9'},
			{name: "flysnow", damage: 831143, time: '2020,7,25,0,21'},
			{name: "福尔康", damage: 903540, time: '2020,7,25,0,30'},
			{name: "我群最菜", damage: 896510, time: '2020,7,25,0,31'},
			{name: "好好先生", damage: 866676, time: '2020,7,25,0,45'},
		]
	},
	{
		day: 1,
		bossIdx: 10,
		log: [
			{name: "好好先生", damage: 52134, time: '2020,7,25,0,47'},
			{name: "MA", damage: 977403, time: '2020,7,25,0,52'},
			{name: "keiko", damage: 322834, time: '2020,7,25,0,56'},
			{name: "池霜", damage: 919834, time: '2020,7,25,0,57'},
			{name: "以摸多", damage: 697900, time: '2020,7,25,1,4'},
			{name: "keiko", damage: 984743, time: '2020,7,25,1,23'},
			{name: "Michael", damage: 916132, time: '2020,7,25,1,30'},
			{name: "Michael", damage: 800555, time: '2020,7,25,3,39'},
		]
	},
	{
		day: 2,
		bossIdx: 10,
		log: [
			{name: "初心如故", damage: 886062, time: '2020,7,25,7,48'},
			{name: "打个大西瓜", damage: 1081061, time: '2020,7,25,8,37'},
			{name: "以摸多", damage: 807004, time: '2020,7,25,12,29'},
			{name: "何等的寂寞", damage: 670445, time: '2020,7,25,18,41'},
			{name: "终将成为你", damage: 1065978, time: '2020,7,25,18,42'},
			{name: "长星夜烁", damage: 847627, time: '2020,7,25,18,45'},
			{name: "MA", damage: 950650, time: '2020,7,25,18,59'},
			{name: "灼眼的Saber", damage: 977811, time: '2020,7,25,19,13'},
			{name: "金色之泪", damage: 838214, time: '2020,7,25,19,18'},
			{name: "橙子", damage: 1068241, time: '2020,7,25,19,25'},
			{name: "幽蓝", damage: 918457, time: '2020,7,25,19,29'},
			{name: "兰斯咕哒子", damage: 1028573, time: '2020,7,25,19,30'},
			{name: "Otaku", damage: 880524, time: '2020,7,25,19,31'},
			{name: "八云蓝", damage: 944645, time: '2020,7,25,19,38'},
			{name: "flysnow", damage: 966581, time: '2020,7,25,19,45'},
			{name: "我群最菜", damage: 964061, time: '2020,7,25,19,45'},
		]
	},
	{
		day: 2,
		bossIdx: 11,
		log: [
			{name: "陈睿", damage: 1264505, time: '2020,7,25,19,51'},
			{name: "福尔康", damage: 1288758, time: '2020,7,25,20,24'},
			{name: "香浓朱古力", damage: 1245365, time: '2020,7,25,20,26'},
			{name: "戏言君", damage: 1120201, time: '2020,7,25,20,48'},
			{name: "一起学猫叫", damage: 1234178, time: '2020,7,25,20,49'},
		]
	},
];
