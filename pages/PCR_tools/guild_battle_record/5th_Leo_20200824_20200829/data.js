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
	{
		day: 2,
		bossIdx: 12,
		log: [
			{name: "一起学猫叫", damage: 135158, time: '2020,7,25,20,50'},
			{name: "福尔康", damage: 1216891, time: '2020,7,25,20,54'},
			{name: "MA", damage: 1237382, time: '2020,7,25,20,55'},
			{name: "flysnow", damage: 1147118, time: '2020,7,25,20,56'},
			{name: "陈睿", damage: 987643, time: '2020,7,25,20,56'},
			{name: "灼眼的Saber", damage: 1072215, time: '2020,7,25,20,58'},
			{name: "打个大西瓜", damage: 1227809, time: '2020,7,25,20,59'},
			{name: "Otaku", damage: 975784, time: '2020,7,25,21,6'},
		]
	},
	{
		day: 2,
		bossIdx: 13,
		log: [
			{name: "Otaku", damage: 38631, time: '2020,7,25,21,9'},
			{name: "兰斯咕哒子", damage: 881813, time: '2020,7,25,21,11'},
			{name: "以摸多", damage: 882573, time: '2020,7,25,21,16'},
			{name: "常磐丁香", damage: 887871, time: '2020,7,25,21,18'},
			{name: "幽蓝", damage: 912762, time: '2020,7,25,21,24'},
			{name: "何等的寂寞", damage: 904832, time: '2020,7,25,21,32'},
			{name: "一起学猫叫", damage: 807986, time: '2020,7,25,21,33'},
			{name: "初心如故", damage: 858405, time: '2020,7,25,21,37'},
			{name: "橙子", damage: 908970, time: '2020,7,25,21,37'},
			{name: "迪卢木多", damage: 885600, time: '2020,7,25,21,39'},
			{name: "八云蓝", damage: 901101, time: '2020,7,25,21,44'},
			{name: "长星夜烁", damage: 751941, time: '2020,7,25,21,45'},
			{name: "以摸多", damage: 1043003, time: '2020,7,25,21,49'},
		]
	},
	{
		day: 2,
		bossIdx: 14,
		log: [
			{name: "何等的寂寞", damage: 943510, time: '2020,7,25,21,54'},
			{name: "兰斯咕哒子", damage: 985507, time: '2020,7,25,21,54'},
			{name: "以摸多", damage: 789734, time: '2020,7,25,21,54'},
			{name: "长星夜烁", damage: 1061349, time: '2020,7,25,21,55'},
			{name: "迪卢木多", damage: 918102, time: '2020,7,25,21,56'},
			{name: "八云蓝", damage: 999517, time: '2020,7,25,21,57'},
			{name: "金色之泪", damage: 1023411, time: '2020,7,25,21,58'},
			{name: "MA", damage: 916599, time: '2020,7,25,21,59'},
			{name: "初心如故", damage: 991293, time: '2020,7,25,21,59'},
			{name: "陈睿", damage: 874311, time: '2020,7,25,21,59'},
			{name: "Michael", damage: 1000338, time: '2020,7,25,22,0'},
			{name: "flysnow", damage: 978933, time: '2020,7,25,22,0'},
			{name: "常磐丁香", damage: 964326, time: '2020,7,25,22,1'},
		]
	},
	{
		day: 2,
		bossIdx: 15,
		log: [
			{name: "常磐丁香", damage: 527934, time: '2020,7,25,22,6'},
			{name: "我群最菜", damage: 464359, time: '2020,7,25,22,8'},
			{name: "幽蓝", damage: 1118934, time: '2020,7,25,22,9'},
			{name: "好好先生", damage: 934721, time: '2020,7,25,22,10'},
			{name: "橙子", damage: 1086837, time: '2020,7,25,22,10'},
			{name: "福尔康", damage: 1113964, time: '2020,7,25,22,13'},
			{name: "灼眼的Saber", damage: 1083216, time: '2020,7,25,22,13'},
			{name: "好好先生", damage: 1097954, time: '2020,7,25,22,14'},
			{name: "Otaku", damage: 1168614, time: '2020,7,25,22,15'},
			{name: "黑椿", damage: 1068116, time: '2020,7,25,22,15'},
			{name: "夜雨纷扬", damage: 1097772, time: '2020,7,25,22,15'},
			{name: "香浓朱古力", damage: 1119251, time: '2020,7,25,22,16'},
			{name: "迪卢木多", damage: 924714, time: '2020,7,25,22,19'},
			{name: "池霜", damage: 1038761, time: '2020,7,25,22,30'},
			{name: "常磐丁香", damage: 980721, time: '2020,7,25,22,30'},
			{name: "我群最菜", damage: 1099958, time: '2020,7,25,22,34'},
			{name: "终将成为你", damage: 970732, time: '2020,7,25,22,39'},
			{name: "Michael", damage: 937618, time: '2020,7,25,22,43'},
			{name: "戏言君", damage: 1081008, time: '2020,7,25,22,53'},
			{name: "手手", damage: 1090174, time: '2020,7,25,22,56'},
		]
	},
	{
		day: 2,
		bossIdx: 16,
		log: [
			{name: "手手", damage: 20599, time: '2020,7,25,22,57'},
			{name: "手手", damage: 1334890, time: '2020,7,25,23,2'},
			{name: "夜雨纷扬", damage: 1256338, time: '2020,7,25,23,4'},
			{name: "黑椿", damage: 1330301, time: '2020,7,25,23,8'},
			{name: "池霜", damage: 1176658, time: '2020,7,25,23,9'},
			{name: "keiko", damage: 881214, time: '2020,7,25,23,26'},
		]
	},
	{
		day: 2,
		bossIdx: 17,
		log: [
			{name: "Michael", damage: 1221499, time: '2020,7,25,23,30'},
			{name: "终将成为你", damage: 1101968, time: '2020,7,25,23,32'},
			{name: "香浓朱古力", damage: 1075422, time: '2020,7,25,23,34'},
			{name: "黑椿", damage: 1143861, time: '2020,7,25,23,34'},
			{name: "戏言君", damage: 1125881, time: '2020,7,25,23,37'},
			{name: "keiko", damage: 350370, time: '2020,7,25,23,37'},
			{name: "我群最菜", damage: 1058472, time: '2020,7,25,23,37'},
			{name: "夜雨纷扬", damage: 1091690, time: '2020,7,25,23,40'},
		]
	},
	{
		day: 2,
		bossIdx: 18,
		log: [
			{name: "夜雨纷扬", damage: 61161, time: '2020,7,25,23,45'},
			{name: "手手", damage: 888896, time: '2020,7,25,23,50'},
			{name: "金色之泪", damage: 790069, time: '2020,7,25,23,52'},
			{name: "池霜", damage: 920320, time: '2020,7,25,23,54'},
			{name: "好好先生", damage: 807747, time: '2020,7,26,0,24'},
			{name: "打个大西瓜", damage: 612067, time: '2020,7,26,0,50'},
			{name: "keiko", damage: 701992, time: '2020,7,26,0,50'},
			{name: "keiko", damage: 979272, time: '2020,7,26,1,5'},
			{name: "一起学猫叫", damage: 467079, time: '2020,7,26,1,36'},
		]
	},
	{
		day: 3,
		bossIdx: 18,
		log: [
			{name: "兰斯咕哒子", damage: 905234, time: '2020,7,26,6,35'},
			{name: "手手", damage: 964399, time: '2020,7,26,7,9'},
			{name: "初心如故", damage: 898414, time: '2020,7,26,8,7'},
			{name: "幽蓝", damage: 903949, time: '2020,7,26,8,56'},
			{name: "八云蓝", damage: 1003350, time: '2020,7,26,8,57'},
		]
	},
	{
		day: 3,
		bossIdx: 19,
		log: [
			{name: "八云蓝", damage: 987912, time: '2020,7,26,8,59'},
			{name: "陈睿", damage: 971666, time: '2020,7,26,9,2'},
			{name: "终将成为你", damage: 995571, time: '2020,7,26,9,7'},
			{name: "兰斯咕哒子", damage: 1055093, time: '2020,7,26,9,13'},
			{name: "黑椿", damage: 936362, time: '2020,7,26,9,19'},
			{name: "Otaku", damage: 1073020, time: '2020,7,26,9,24'},
			{name: "夜雨纷扬", damage: 1054379, time: '2020,7,26,10,0'},
			{name: "福尔康", damage: 1015330, time: '2020,7,26,10,30'},
			{name: "一起学猫叫", damage: 811847, time: '2020,7,26,11,18'},
			{name: "金色之泪", damage: 949678, time: '2020,7,26,11,38'},
			{name: "何等的寂寞", damage: 989751, time: '2020,7,26,11,58'},
			{name: "以摸多", damage: 1041707, time: '2020,7,26,12,8'},
			{name: "keiko", damage: 1034735, time: '2020,7,26,12,13'},
		]
	},
	{
		day: 3,
		bossIdx: 20,
		log: [
			{name: "keiko", damage: 1091538, time: '2020,7,26,12,19'},
			{name: "Otaku", damage: 998503, time: '2020,7,26,12,48'},
			{name: "常磐丁香", damage: 997213, time: '2020,7,26,13,2'},
			{name: "keiko", damage: 936887, time: '2020,7,26,13,5'},
			{name: "迪卢木多", damage: 948115, time: '2020,7,26,13,39'},
			{name: "池霜", damage: 994467, time: '2020,7,26,13,47'},
			{name: "手手", damage: 965439, time: '2020,7,26,13,49'},
			{name: "以摸多", damage: 968040, time: '2020,7,26,13,57'},
			{name: "兰斯咕哒子", damage: 536280, time: '2020,7,26,13,59'},
			{name: "打个大西瓜", damage: 1018194, time: '2020,7,26,14,3'},
			{name: "福尔康", damage: 1022375, time: '2020,7,26,14,5'},
			{name: "何等的寂寞", damage: 1128277, time: '2020,7,26,14,20'},
			{name: "好好先生", damage: 1048238, time: '2020,7,26,14,34'},
			{name: "终将成为你", damage: 1065370, time: '2020,7,26,14,35'},
			{name: "夜雨纷扬", damage: 1064411, time: '2020,7,26,14,39'},
			{name: "MA", damage: 1015547, time: '2020,7,26,14,44'},
			{name: "黑椿", damage: 1109046, time: '2020,7,26,14,45'},
			{name: "池霜", damage: 1180353, time: '2020,7,26,15,46'},
			{name: "金色之泪", damage: 1036598, time: '2020,7,26,15,46'},
			{name: "一起学猫叫", damage: 971739, time: '2020,7,26,15,47'},
		]
	},
	{
		day: 3,
		bossIdx: 21,
		log: [
			{name: "一起学猫叫", damage: 63781, time: '2020,7,26,15,51'},
			{name: "终将成为你", damage: 1269292, time: '2020,7,26,16,2'},
			{name: "金色之泪", damage: 1168173, time: '2020,7,26,16,6'},
			{name: "Otaku", damage: 1255833, time: '2020,7,26,16,7'},
			{name: "夜雨纷扬", damage: 1274170, time: '2020,7,26,16,9'},
			{name: "黑椿", damage: 1249478, time: '2020,7,26,16,10'},
		]
	},
	{
		day: 3,
		bossIdx: 22,
		log: [
			{name: "黑椿", damage: 355469, time: '2020,7,26,16,14'},
			{name: "MA", damage: 1364096, time: '2020,7,26,16,17'},
			{name: "常磐丁香", damage: 1342135, time: '2020,7,26,16,17'},
			{name: "迪卢木多", damage: 1422580, time: '2020,7,26,16,18'},
			{name: "何等的寂寞", damage: 1350340, time: '2020,7,26,16,21'},
			{name: "福尔康", damage: 1169876, time: '2020,7,26,16,21'},
			{name: "好好先生", damage: 1280553, time: '2020,7,26,16,22'},
		]
	},
	{
		day: 3,
		bossIdx: 23,
		log: [
			{name: "好好先生", damage: 214801, time: '2020,7,26,16,26'},
			{name: "flysnow", damage: 881892, time: '2020,7,26,16,38'},
			{name: "八云蓝", damage: 962191, time: '2020,7,26,16,39'},
			{name: "陈睿", damage: 986145, time: '2020,7,26,16,45'},
			{name: "以摸多", damage: 870991, time: '2020,7,26,17,10'},
			{name: "香浓朱古力", damage: 910264, time: '2020,7,26,17,25'},
			{name: "长星夜烁", damage: 961405, time: '2020,7,26,17,35'},
			{name: "我群最菜", damage: 877287, time: '2020,7,26,18,45'},
			{name: "橙子", damage: 974025, time: '2020,7,26,18,46'},
			{name: "打个大西瓜", damage: 966299, time: '2020,7,26,19,4'},
			{name: "一起学猫叫", damage: 858696, time: '2020,7,26,19,7'},
			{name: "戏言君", damage: 905226, time: '2020,7,26,19,7'},
		]
	},
	{
		day: 3,
		bossIdx: 24,
		log: [
			{name: "戏言君", damage: 278195, time: '2020,7,26,19,9'},
			{name: "flysnow", damage: 1026897, time: '2020,7,26,19,11'},
			{name: "打个大西瓜", damage: 966804, time: '2020,7,26,19,11'},
			{name: "戏言君", damage: 1026232, time: '2020,7,26,19,12'},
			{name: "灼眼的Saber", damage: 1096292, time: '2020,7,26,19,14'},
			{name: "好好先生", damage: 1031001, time: '2020,7,26,19,14'},
			{name: "我群最菜", damage: 973944, time: '2020,7,26,19,16'},
			{name: "迪卢木多", damage: 1001579, time: '2020,7,26,19,20'},
			{name: "初心如故", damage: 1043184, time: '2020,7,26,19,20'},
			{name: "橙子", damage: 1011134, time: '2020,7,26,19,27'},
			{name: "幽蓝", damage: 1079962, time: '2020,7,26,20,4'},
			{name: "手手", damage: 977458, time: '2020,7,26,20,17'},
			{name: "Michael", damage: 1002821, time: '2020,7,26,20,18'},
		]
	},
	{
		day: 3,
		bossIdx: 25,
		log: [
			{name: "Michael", damage: 597817, time: '2020,7,26,20,20'},
			{name: "初心如故", damage: 895371, time: '2020,7,26,20,24'},
			{name: "灼眼的Saber", damage: 951348, time: '2020,7,26,20,26'},
			{name: "八云蓝", damage: 924767, time: '2020,7,26,20,29'},
			{name: "常磐丁香", damage: 1088624, time: '2020,7,26,20,29'},
			{name: "灼眼的Saber", damage: 927504, time: '2020,7,26,20,29'},
			{name: "幽蓝", damage: 932968, time: '2020,7,26,20,34'},
			{name: "flysnow", damage: 719284, time: '2020,7,26,20,37'},
			{name: "陈睿", damage: 935104, time: '2020,7,26,20,40'},
			{name: "香浓朱古力", damage: 1032005, time: '2020,7,26,20,43'},
			{name: "我群最菜", damage: 1001754, time: '2020,7,26,20,43'},
			{name: "橙子", damage: 1042668, time: '2020,7,26,20,54'},
			{name: "香浓朱古力", damage: 1175053, time: '2020,7,26,21,3'},
			{name: "Michael", damage: 1069670, time: '2020,7,26,21,3'},
			{name: "MA", damage: 1088265, time: '2020,7,26,21,6'},
			{name: "长星夜烁", damage: 1079863, time: '2020,7,26,21,11'},
			{name: "长星夜烁", damage: 1018069, time: '2020,7,26,21,27'},
			{name: "池霜", damage: 1036764, time: '2020,7,26,21,31'},
			{name: "keiko", damage: 911876, time: '2020,7,26,21,53'},
			{name: "Michael", damage: 936225, time: '2020,7,26,21,53'},
			{name: "戏言君", damage: 400766, time: '2020,7,26,21,56'},
		]
	},
	{
		day: 4,
		bossIdx: 25,
		log: [
			{name: "池霜", damage: 234235, time: '2020,7,27,11,43'},
		]
	},
	{
		day: 4,
		bossIdx: 26,
		log: [
			{name: "池霜", damage: 1002517, time: '2020,7,27,11,47'},
			{name: "好好先生", damage: 1268805, time: '2020,7,27,12,1'},
			{name: "Otaku", damage: 1216816, time: '2020,7,27,12,18'},
			{name: "黑椿", damage: 1323290, time: '2020,7,27,12,21'},
			{name: "灼眼的Saber", damage: 1188572, time: '2020,7,27,12,27'},
		]
	},
	{
		day: 4,
		bossIdx: 27,
		log: [
			{name: "灼眼的Saber", damage: 34087, time: '2020,7,27,12,28'},
			{name: "夜雨纷扬", damage: 1386634, time: '2020,7,27,12,30'},
			{name: "MA", damage: 1433476, time: '2020,7,27,12,31'},
			{name: "终将成为你", damage: 1436161, time: '2020,7,27,12,32'},
			{name: "常磐丁香", damage: 1372283, time: '2020,7,27,12,36'},
			{name: "何等的寂寞", damage: 1456365, time: '2020,7,27,12,40'},
			{name: "keiko", damage: 880994, time: '2020,7,27,12,48'},
		]
	},
	{
		day: 4,
		bossIdx: 28,
		log: [
			{name: "打个大西瓜", damage: 803324, time: '2020,7,27,12,57'},
			{name: "福尔康", damage: 989509, time: '2020,7,27,13,2'},
			{name: "香浓朱古力", damage: 930454, time: '2020,7,27,13,9'},
			{name: "初心如故", damage: 877628, time: '2020,7,27,13,19'},
			{name: "陈睿", damage: 871245, time: '2020,7,27,13,22'},
			{name: "兰斯咕哒子", damage: 939487, time: '2020,7,27,13,32'},
			{name: "幽蓝", damage: 926027, time: '2020,7,27,13,50'},
			{name: "长星夜烁", damage: 919049, time: '2020,7,27,14,12'},
			{name: "flysnow", damage: 929728, time: '2020,7,27,14,20'},
			{name: "我群最菜", damage: 946861, time: '2020,7,27,15,34'},
			{name: "以摸多", damage: 866688, time: '2020,7,27,15,54'},
		]
	},
	{
		day: 4,
		bossIdx: 29,
		log: [
			{name: "以摸多", damage: 66367, time: '2020,7,27,15,55'},
			{name: "以摸多", damage: 997122, time: '2020,7,27,15,59'},
			{name: "终将成为你", damage: 940271, time: '2020,7,27,16,1'},
			{name: "flysnow", damage: 982939, time: '2020,7,27,16,2'},
			{name: "黑椿", damage: 985188, time: '2020,7,27,16,2'},
			{name: "夜雨纷扬", damage: 1012815, time: '2020,7,27,16,3'},
			{name: "灼眼的Saber", damage: 999549, time: '2020,7,27,16,6'},
			{name: "MA", damage: 1073932, time: '2020,7,27,16,7'},
			{name: "八云蓝", damage: 1074656, time: '2020,7,27,16,7'},
			{name: "福尔康", damage: 973351, time: '2020,7,27,16,9'},
			{name: "戏言君", damage: 999926, time: '2020,7,27,16,15'},
			{name: "初心如故", damage: 990130, time: '2020,7,27,16,19'},
			{name: "金色之泪", damage: 948920, time: '2020,7,27,16,19'},
		]
	},
	{
		day: 4,
		bossIdx: 30,
		log: [
			{name: "金色之泪", damage: 32688, time: '2020,7,27,16,21'},
			{name: "flysnow", damage: 998458, time: '2020,7,27,16,31'},
			{name: "陈睿", damage: 962949, time: '2020,7,27,16,33'},
			{name: "幽蓝", damage: 1070273, time: '2020,7,27,16,33'},
			{name: "初心如故", damage: 896901, time: '2020,7,27,16,36'},
			{name: "兰斯咕哒子", damage: 968179, time: '2020,7,27,16,39'},
			{name: "我群最菜", damage: 995857, time: '2020,7,27,16,41'},
			{name: "以摸多", damage: 982114, time: '2020,7,27,16,43'},
			{name: "福尔康", damage: 716161, time: '2020,7,27,16,47'},
			{name: "手手", damage: 1111274, time: '2020,7,27,17,25'},
			{name: "一起学猫叫", damage: 985213, time: '2020,7,27,17,55'},
			{name: "keiko", damage: 366687, time: '2020,7,27,18,0'},
			{name: "Otaku", damage: 979933, time: '2020,7,27,18,11'},
			{name: "MA", damage: 1092091, time: '2020,7,27,18,14'},
			{name: "keiko", damage: 987814, time: '2020,7,27,18,15'},
			{name: "金色之泪", damage: 1051490, time: '2020,7,27,18,18'},
			{name: "黑椿", damage: 1060952, time: '2020,7,27,18,20'},
			{name: "夜雨纷扬", damage: 1084105, time: '2020,7,27,18,21'},
			{name: "Michael", damage: 978957, time: '2020,7,27,18,21'},
			{name: "池霜", damage: 1103502, time: '2020,7,27,18,22'},
			{name: "好好先生", damage: 1091099, time: '2020,7,27,18,25'},
			{name: "灼眼的Saber", damage: 1066034, time: '2020,7,27,18,25'},
		]
	},
	{
		day: 4,
		bossIdx: 31,
		log: [
			{name: "灼眼的Saber", damage: 405409, time: '2020,7,27,18,38'},
			{name: "长星夜烁", damage: 1123983, time: '2020,7,27,18,49'},
			{name: "八云蓝", damage: 1250565, time: '2020,7,27,18,53'},
			{name: "香浓朱古力", damage: 1244874, time: '2020,7,27,18,55'},
			{name: "迪卢木多", damage: 1179044, time: '2020,7,27,19,2'},
			{name: "戏言君", damage: 1202998, time: '2020,7,27,19,5'},
		]
	},
	{
		day: 4,
		bossIdx: 32,
		log: [
			{name: "戏言君", damage: 521647, time: '2020,7,27,19,7'},
			{name: "金色之泪", damage: 1386459, time: '2020,7,27,19,9'},
			{name: "Otaku", damage: 1239292, time: '2020,7,27,19,15'},
			{name: "陈睿", damage: 1262915, time: '2020,7,27,19,16'},
			{name: "橙子", damage: 1298920, time: '2020,7,27,19,17'},
			{name: "打个大西瓜", damage: 1166577, time: '2020,7,27,19,20'},
			{name: "我群最菜", damage: 1124190, time: '2020,7,27,19,28'},
		]
	},
	{
		day: 4,
		bossIdx: 33,
		log: [
			{name: "常磐丁香", damage: 1015955, time: '2020,7,27,19,36'},
			{name: "橙子", damage: 968690, time: '2020,7,27,19,40'},
			{name: "八云蓝", damage: 962365, time: '2020,7,27,19,49'},
			{name: "何等的寂寞", damage: 969624, time: '2020,7,27,20,5'},
			{name: "Michael", damage: 851819, time: '2020,7,27,20,38'},
			{name: "一起学猫叫", damage: 844014, time: '2020,7,27,21,5'},
			{name: "我群最菜", damage: 60740, time: '2020,7,27,21,13'},
			{name: "终将成为你", damage: 899016, time: '2020,7,27,21,15'},
			{name: "戏言君", damage: 1051871, time: '2020,7,27,21,25'},
			{name: "迪卢木多", damage: 1002796, time: '2020,7,27,21,45'},
			{name: "手手", damage: 961469, time: '2020,7,27,21,45'},
			{name: "兰斯咕哒子", damage: 1009875, time: '2020,7,27,21,46'},
		]
	},
	{
		day: 4,
		bossIdx: 34,
		log: [
			{name: "兰斯咕哒子", damage: 693821, time: '2020,7,27,21,48'},
			{name: "手手", damage: 1004329, time: '2020,7,27,21,52'},
			{name: "Micheal", damage: 0, time: '2020,7,27,21,53'},
			{name: "迪卢木多", damage: 959149, time: '2020,7,27,21,58'},
			{name: "长星夜烁", damage: 948096, time: '2020,7,27,22,5'},
			{name: "一起学猫叫", damage: 784550, time: '2020,7,27,22,5'},
			{name: "何等的寂寞", damage: 946935, time: '2020,7,27,22,6'},
			{name: "池霜", damage: 971669, time: '2020,7,27,22,8'},
			{name: "打个大西瓜", damage: 881785, time: '2020,7,27,22,8'},
		]
	},
];
