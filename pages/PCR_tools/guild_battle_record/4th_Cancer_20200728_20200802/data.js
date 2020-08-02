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
			{name: "红豆沙", damage: 878546, time: '2020,6,28,19,8'},
			{name: "打个大西瓜", damage: 830377, time: '2020,6,28,19,12'},
			{name: "黑椿", damage: 869552, time: '2020,6,28,19,16'},
			{name: "幽蓝", damage: 835201, time: '2020,6,28,19,17'},
			{name: "Otaku", damage: 880743, time: '2020,6,28,19,17'},
			{name: "迪卢木多", damage: 531231, time: '2020,6,28,19,22'},
		]
	},
	{
		day: 1,
		bossIdx: 6,
		log: [
			{name: "迪卢木多", damage: 177310, time: '2020,6,28,19,28'},
			{name: "幽蓝", damage: 1041005, time: '2020,6,28,19,37'},
			{name: "橙子", damage: 1045017, time: '2020,6,28,19,40'},
			{name: "坑神", damage: 1010933, time: '2020,6,28,19,44'},
			{name: "lala", damage: 989561, time: '2020,6,28,19,47'},
			{name: "长星夜烁", damage: 1095213, time: '2020,6,28,19,49'},
			{name: "红豆沙", damage: 1046414, time: '2020,6,28,19,51'},
		]
	},
	{
		day: 1,
		bossIdx: 7,
		log: [
			{name: "灼眼的Saber", damage: 1158636, time: '2020,6,28,19,53'},
			{name: "长星夜烁", damage: 1193845, time: '2020,6,28,19,54'},
			{name: "常磐丁香", damage: 1151382, time: '2020,6,28,19,55'},
			{name: "幽蓝", damage: 1027615, time: '2020,6,28,19,56'},
			{name: "坑神", damage: 1055785, time: '2020,6,28,19,57'},
			{name: "lala", damage: 1078428, time: '2020,6,28,19,58'},
			{name: "风月", damage: 1122600, time: '2020,6,28,20,17'},
			{name: "lala", damage: 783119, time: '2020,6,28,20,19'},
		]
	},
	{
		day: 1,
		bossIdx: 8,
		log: [
			{name: "lala", damage: 429716, time: '2020,6,28,20,23'},
			{name: "坑神", damage: 499932, time: '2020,6,28,20,40'},
			{name: "红豆沙", damage: 284118, time: '2020,6,28,20,44'},
			{name: "红豆沙", damage: 565499, time: '2020,6,28,21,8'},
			{name: "金色之泪", damage: 671802, time: '2020,6,28,21,27'},
			{name: "Otaku", damage: 847057, time: '2020,6,28,21,29'},
			{name: "宋寂", damage: 636937, time: '2020,6,28,21,30'},
			{name: "夜雨纷扬", damage: 857868, time: '2020,6,28,21,34'},
			{name: "常磐丁香", damage: 765754, time: '2020,6,28,21,43'},
			{name: "福尔康", damage: 0, time: '2020,6,28,21,50'},
			{name: "灼眼的Saber", damage: 866094, time: '2020,6,28,22,2'},
			{name: "风月", damage: 837772, time: '2020,6,28,22,45'},
			{name: "魂魄妖梦", damage: 793296, time: '2020,6,28,22,46'},
			{name: "我群最菜", damage: 768520, time: '2020,6,28,22,55'},
			{name: "香浓朱古力", damage: 909227, time: '2020,6,28,23,13'},
			{name: "我群最菜", damage: 266408, time: '2020,6,28,23,15'},
		]
	},
	{
		day: 1,
		bossIdx: 9,
		log: [
			{name: "我群最菜", damage: 387969, time: '2020,6,28,20,17'},
			{name: "何等的寂寞", damage: 797583, time: '2020,6,28,20,17'},
			{name: "香浓朱古力", damage: 957950, time: '2020,6,28,20,18'},
			{name: "魂魄妖梦", damage: 966381, time: '2020,6,28,20,22'},
			{name: "魂魄妖梦", damage: 612276, time: '2020,6,28,20,37'},
			{name: "长星夜烁", damage: 477619, time: '2020,6,28,20,41'},
			{name: "迪卢木多", damage: 944712, time: '2020,6,28,20,50'},
		]
	},
	{
		day: 2,
		bossIdx: 9,
		log: [
			{name: "黑椿", damage: 1036140, time: '2020,6,29,5,15'},
			{name: "黑椿", damage: 899114, time: '2020,6,29,5,25'},
			{name: "何等的寂寞", damage: 930975, time: '2020,6,29,6,35'},
			{name: "宋寂", damage: 969610, time: '2020,6,29,6,48'},
			{name: "打个大西瓜", damage: 1029135, time: '2020,6,29,7,51'},
			{name: "Otaku", damage: 930073, time: '2020,6,29,8,9'},
			{name: "八云蓝", damage: 992701, time: '2020,6,29,9,36'},
			{name: "keiko", damage: 937900, time: '2020,6,29,9,37'},
		]
	},
	{
		day: 2,
		bossIdx: 10,
		log: [
			{name: "keiko", damage: 311747, time: '2020,6,29,9,44'},
			{name: "手手", damage: 572831, time: '2020,6,29,10,2'},
			{name: "keiko", damage: 514994, time: '2020,6,29,11,47'},
			{name: "初心如故", damage: 520217, time: '2020,6,29,11,59'},
			{name: "灼眼的Saber", damage: 531546, time: '2020,6,29,12,23'},
			{name: "常磐丁香", damage: 572895, time: '2020,6,29,12,25'},
			{name: "幽蓝", damage: 549443, time: '2020,6,29,12,56'},
			{name: "香浓朱古力", damage: 539141, time: '2020,6,29,13,2'},
			{name: "打个大西瓜", damage: 427060, time: '2020,6,29,13,45'},
			{name: "何等的寂寞", damage: 468106, time: '2020,6,29,14,18'},
			{name: "一起学猫叫", damage: 520652, time: '2020,6,29,14,28'},
			{name: "坑神", damage: 530155, time: '2020,6,29,14,48'},
			{name: "八云蓝", damage: 512081, time: '2020,6,29,15,18'},
			{name: "橙子", damage: 532059, time: '2020,6,29,16,5'},
			{name: "好好先生", damage: 501820, time: '2020,6,29,16,14'},
			{name: "夜雨纷扬", damage: 548733, time: '2020,6,29,16,16'},
			{name: "宋寂", damage: 521116, time: '2020,6,29,16,19'},
			{name: "金色之泪", damage: 526652, time: '2020,6,29,16,24'},
			{name: "以摸多", damage: 485896, time: '2020,6,29,16,29'},
			{name: "迪卢木多", damage: 540236, time: '2020,6,29,16,33'},
			{name: "长星夜烁", damage: 493030, time: '2020,6,29,16,57'},
			{name: "福尔康", damage: 525420, time: '2020,6,29,17,9'},
			{name: "lala", damage: 434338, time: '2020,6,29,17,10'},
			{name: "戏言君", damage: 503368, time: '2020,6,29,17,19'},
			{name: "我群最菜", damage: 500341, time: '2020,6,29,17,26'},
			{name: "风月", damage: 560591, time: '2020,6,29,17,33'},
			{name: "魂魄妖梦", damage: 548060, time: '2020,6,29,17,35'},
			{name: "池霜", damage: 542045, time: '2020,6,29,17,40'},
			{name: "Otaku", damage: 529314, time: '2020,6,29,18,51'},
			{name: "红豆沙", damage: 517698, time: '2020,6,29,18,53'},
			{name: "Otaku", damage: 656018, time: '2020,6,29,19,42'},
			{name: "池霜", damage: 681657, time: '2020,6,29,20,30'},
			{name: "红豆沙", damage: 504119, time: '2020,6,29,20,37'},
			{name: "手手", damage: 739818, time: '2020,6,29,20,42'},
			{name: "橙子", damage: 677323, time: '2020,6,29,20,49'},
			{name: "坑神", damage: 577512, time: '2020,6,29,21,2'},
			{name: "灼眼的Saber", damage: 567508, time: '2020,6,29,21,14'},
			{name: "以摸多", damage: 323518, time: '2020,6,29,21,14'},
		]
	},
	{
		day: 2,
		bossIdx: 11,
		log: [
			{name: "以摸多", damage: 390437, time: '2020,6,29,21,16'},
			{name: "幽蓝", damage: 1030676, time: '2020,6,29,21,21'},
			{name: "常磐丁香", damage: 1087275, time: '2020,6,29,21,24'},
			{name: "初心如故", damage: 820693, time: '2020,6,29,21,26'},
			{name: "金色之泪", damage: 936741, time: '2020,6,29,21,39'},
			{name: "戏言君", damage: 1002248, time: '2020,6,29,21,44'},
			{name: "一起学猫叫", damage: 1036512, time: '2020,6,29,21,46'},
		]
	},
	{
		day: 2,
		bossIdx: 12,
		log: [
			{name: "一起学猫叫", damage: 353424, time: '2020,6,29,21,48'},
			{name: "池霜", damage: 1197913, time: '2020,6,29,21,52'},
			{name: "橙子", damage: 1104206, time: '2020,6,29,21,56'},
			{name: "坑神", damage: 1222113, time: '2020,6,29,21,59'},
			{name: "灼眼的Saber", damage: 1145997, time: '2020,6,29,22,3'},
			{name: "以摸多", damage: 1154899, time: '2020,6,29,22,7'},
			{name: "幽蓝", damage: 1144898, time: '2020,6,29,22,14'},
			{name: "戏言君", damage: 1152384, time: '2020,6,29,22,14'},
		]
	},
	{
		day: 2,
		bossIdx: 13,
		log: [
			{name: "戏言君", damage: 409118, time: '2020,6,29,22,16'},
			{name: "黑椿", damage: 0, time: '2020,6,29,22,20'},
			{name: "我群最菜", damage: 884620, time: '2020,6,29,22,21'},
			{name: "迪卢木多", damage: 815762, time: '2020,6,29,22,25'},
			{name: "宋寂", damage: 745561, time: '2020,6,29,22,28'},
			{name: "风月", damage: 843589, time: '2020,6,29,22,31'},
			{name: "香浓朱古力", damage: 907815, time: '2020,6,29,22,34'},
			{name: "夜雨纷扬", damage: 958174, time: '2020,6,29,22,35'},
			{name: "红豆沙", damage: 825125, time: '2020,6,29,22,38'},
			{name: "长星夜烁", damage: 830411, time: '2020,6,29,22,42'},
			{name: "魂魄妖梦", damage: 900731, time: '2020,6,29,22,57'},
			{name: "好好先生", damage: 914747, time: '2020,6,29,23,4'},
			{name: "lala", damage: 751863, time: '2020,6,29,23,5'},
			{name: "八云蓝", damage: 212484, time: '2020,6,29,23,11'},
		]
	},
	{
		day: 2,
		bossIdx: 14,
		log: [
			{name: "八云蓝", damage: 767431, time: '2020,6,29,23,13'},
			{name: "初心如故", damage: 1046388, time: '2020,6,29,23,14'},
			{name: "打个大西瓜", damage: 999639, time: '2020,6,29,23,15'},
			{name: "金色之泪", damage: 1082009, time: '2020,6,29,23,15'},
			{name: "我群最菜", damage: 966355, time: '2020,6,29,23,16'},
			{name: "keiko", damage: 960114, time: '2020,6,29,23,16'},
			{name: "何等的寂寞", damage: 1127245, time: '2020,6,29,23,17'},
			{name: "风月", damage: 1016287, time: '2020,6,29,23,19'},
			{name: "常磐丁香", damage: 916238, time: '2020,6,29,23,19'},
			{name: "魂魄妖梦", damage: 964604, time: '2020,6,29,23,20'},
			{name: "手手", damage: 1202579, time: '2020,6,29,23,21'},
			{name: "夜雨纷扬", damage: 977155, time: '2020,6,29,23,22'},
		]
	},
	{
		day: 2,
		bossIdx: 15,
		log: [
			{name: "夜雨纷扬", damage: 14692, time: '2020,6,29,23,24'},
			{name: "迪卢木多", damage: 468404, time: '2020,6,29,23,37'},
			{name: "香浓朱古力", damage: 487335, time: '2020,6,29,23,41'},
			{name: "好好先生", damage: 469473, time: '2020,6,29,23,46'},
			{name: "长星夜烁", damage: 522842, time: '2020,6,29,23,50'},
			{name: "福尔康", damage: 478316, time: '2020,6,29,23,54'},
			{name: "福尔康", damage: 565539, time: '2020,6,30,0,2'},
			{name: "一起学猫叫", damage: 342437, time: '2020,6,30,0,7'},
			{name: "lala", damage: 375979, time: '2020,6,30,0,15'},
		]
	},
	{
		day: 3,
		bossIdx: 15,
		log: [
			{name: "黑椿", damage: 512131, time: '2020,6,30,5,30'},
			{name: "手手", damage: 551922, time: '2020,6,30,6,27'},
			{name: "初心如故", damage: 502385, time: '2020,6,30,6,49'},
			{name: "灼眼的Saber", damage: 497371, time: '2020,6,30,7,35'},
			{name: "Otaku", damage: 497021, time: '2020,6,30,8,2'},
			{name: "幽蓝", damage: 541983, time: '2020,6,30,8,35'},
			{name: "金色之泪", damage: 455746, time: '2020,6,30,10,33'},
			{name: "一起学猫叫", damage: 535326, time: '2020,6,30,10,51'},
			{name: "池霜", damage: 571420, time: '2020,6,30,10,52'},
			{name: "风月", damage: 534062, time: '2020,6,30,10,57'},
			{name: "夜雨纷扬", damage: 567820, time: '2020,6,30,11,9'},
			{name: "以摸多", damage: 537766, time: '2020,6,30,11,40'},
			{name: "keiko", damage: 543273, time: '2020,6,30,12,8'},
			{name: "打个大西瓜", damage: 686103, time: '2020,6,30,12,32'},
			{name: "八云蓝", damage: 639214, time: '2020,6,30,12,42'},
			{name: "宋寂", damage: 669402, time: '2020,6,30,12,48'},
			{name: "夜雨纷扬", damage: 686259, time: '2020,6,30,12,49'},
			{name: "金色之泪", damage: 530686, time: '2020,6,30,12,53'},
			{name: "手手", damage: 733226, time: '2020,6,30,12,58'},
			{name: "一起学猫叫", damage: 624973, time: '2020,6,30,13,5'},
			{name: "常磐丁香", damage: 697091, time: '2020,6,30,13,14'},
			{name: "灼眼的Saber", damage: 654498, time: '2020,6,30,13,14'},
			{name: "好好先生", damage: 668587, time: '2020,6,30,13,52'},
			{name: "福尔康", damage: 590642, time: '2020,6,30,14,3'},
			{name: "幽蓝", damage: 667412, time: '2020,6,30,14,8'},
			{name: "池霜", damage: 662383, time: '2020,6,30,14,15'},
			{name: "迪卢木多", damage: 627094, time: '2020,6,30,15,38'},
			{name: "以摸多", damage: 602337, time: '2020,6,30,15,38'},
		]
	},
	{
		day: 3,
		bossIdx: 16,
		log: [
			{name: "以摸多", damage: 471677, time: '2020,6,30,15,43'},
			{name: "lala", damage: 1029579, time: '2020,6,30,16,24'},
			{name: "以摸多", damage: 1126434, time: '2020,6,30,16,39'},
			{name: "初心如故", damage: 1013674, time: '2020,6,30,16,46'},
			{name: "一起学猫叫", damage: 1091562, time: '2020,6,30,16,47'},
			{name: "黑椿", damage: 1032588, time: '2020,6,30,16,55'},
			{name: "八云蓝", damage: 837273, time: '2020,6,30,16,58'},
		]
	},
	{
		day: 3,
		bossIdx: 17,
		log: [
			{name: "八云蓝", damage: 900635, time: '2020,6,30,17,0'},
			{name: "金色之泪", damage: 1170336, time: '2020,6,30,17,0'},
			{name: "黑椿", damage: 1077381, time: '2020,6,30,17,5'},
			{name: "好好先生", damage: 1144080, time: '2020,6,30,17,23'},
			{name: "迪卢木多", damage: 1083284, time: '2020,6,30,17,24'},
			{name: "长星夜烁", damage: 1209209, time: '2020,6,30,18,8'},
			{name: "我群最菜", damage: 1207454, time: '2020,6,30,18,24'},
			{name: "魂魄妖梦", damage: 1010299, time: '2020,6,30,18,24'},
		]
	},
	{
		day: 3,
		bossIdx: 18,
		log: [
			{name: "魂魄妖梦", damage: 763772, time: '2020,6,30,18,28'},
			{name: "何等的寂寞", damage: 815210, time: '2020,6,30,18,40'},
			{name: "幽蓝", damage: 809737, time: '2020,6,30,18,52'},
			{name: "Otaku", damage: 925851, time: '2020,6,30,18,59'},
			{name: "打个大西瓜", damage: 863388, time: '2020,6,30,19,29'},
			{name: "香浓朱古力", damage: 892055, time: '2020,6,30,20,12'},
			{name: "红豆沙", damage: 1025092, time: '2020,6,30,20,17'},
			{name: "坑神", damage: 822409, time: '2020,6,30,20,23'},
			{name: "戏言君", damage: 845306, time: '2020,6,30,20,36'},
			{name: "橙子", damage: 844306, time: '2020,6,30,20,43'},
			{name: "风月", damage: 983988, time: '2020,6,30,21,28'},
			{name: "灼眼的Saber", damage: 885135, time: '2020,6,30,21,28'},
		]
	},
	{
		day: 3,
		bossIdx: 19,
		log: [
			{name: "灼眼的Saber", damage: 555780, time: '2020,6,30,21,29'},
			{name: "宋寂", damage: 888858, time: '2020,6,30,21,30'},
			{name: "坑神", damage: 1089295, time: '2020,6,30,21,31'},
			{name: "keiko", damage: 965771, time: '2020,6,30,21,31'},
			{name: "福尔康", damage: 1088590, time: '2020,6,30,21,32'},
			{name: "夜雨纷扬", damage: 1141057, time: '2020,6,30,21,32'},
			{name: "常磐丁香", damage: 1186746, time: '2020,6,30,21,32'},
			{name: "池霜", damage: 1237817, time: '2020,6,30,21,35'},
			{name: "手手", damage: 1179592, time: '2020,6,30,21,35'},
			{name: "初心如故", damage: 830372, time: '2020,6,30,21,37'},
			{name: "何等的寂寞", damage: 1059290, time: '2020,6,30,21,39'},
			{name: "戏言君", damage: 776832, time: '2020,6,30,21,58'},
		]
	},
	{
		day: 3,
		bossIdx: 20,
		log: [
			{name: "戏言君", damage: 56805, time: '2020,6,30,22,0'},
			{name: "红豆沙", damage: 527276, time: '2020,6,30,22,3'},
			{name: "宋寂", damage: 501923, time: '2020,6,30,22,4'},
			{name: "常磐丁香", damage: 466922, time: '2020,6,30,22,4'},
			{name: "何等的寂寞", damage: 506029, time: '2020,6,30,22,7'},
			{name: "坑神", damage: 446452, time: '2020,6,30,22,12'},
			{name: "橙子", damage: 512993, time: '2020,6,30,22,14'},
			{name: "香浓朱古力", damage: 547175, time: '2020,6,30,22,16'},
			{name: "我群最菜", damage: 560232, time: '2020,6,30,22,17'},
			{name: "红豆沙", damage: 493340, time: '2020,6,30,22,30'},
			{name: "八云蓝", damage: 505507, time: '2020,6,30,22,31'},
			{name: "福尔康", damage: 579877, time: '2020,6,30,22,33'},
			{name: "橙子", damage: 404244, time: '2020,6,30,22,33'},
			{name: "打个大西瓜", damage: 561580, time: '2020,6,30,22,34'},
			{name: "keiko", damage: 558109, time: '2020,6,30,22,34'},
			{name: "lala", damage: 572685, time: '2020,6,30,22,44'},
			{name: "长星夜烁", damage: 501204, time: '2020,6,30,22,50'},
			{name: "长星夜烁", damage: 371075, time: '2020,6,30,22,56'},
			{name: "Otaku", damage: 505549, time: '2020,6,30,23,1'},
			{name: "戏言君", damage: 409908, time: '2020,6,30,23,7'},
			{name: "魂魄妖梦", damage: 494966, time: '2020,6,30,23,8'},
			{name: "lala", damage: 518148, time: '2020,6,30,23,10'},
			{name: "我群最菜", damage: 613444, time: '2020,6,30,23,26'},
			{name: "魂魄妖梦", damage: 552221, time: '2020,6,30,23,27'},
			{name: "好好先生", damage: 549910, time: '2020,6,30,23,51'},
			{name: "迪卢木多", damage: 506035, time: '2020,6,30,23,58'},
			{name: "风月", damage: 603610, time: '2020,6,31,0,15'},
			{name: "香浓朱古力", damage: 718102, time: '2020,6,31,0,30'},
		]
	},
	{
		day: 4,
		bossIdx: 20,
		log: [
			{name: "宋寂", damage: 613239, time: '2020,6,31,6,51'},
			{name: "Otaku", damage: 645966, time: '2020,6,31,7,52'},
			{name: "手手", damage: 650119, time: '2020,6,31,7,53'},
			{name: "幽蓝", damage: 537422, time: '2020,6,31,8,10'},
			{name: "池霜", damage: 498380, time: '2020,6,31,8,21'},
			{name: "好好先生", damage: 560327, time: '2020,6,31,8,23'},
			{name: "迪卢木多", damage: 548172, time: '2020,6,31,8,36'},
			{name: "迪卢木多", damage: 691449, time: '2020,6,31,8,50'},
			{name: "福尔康", damage: 600976, time: '2020,6,31,9,40'},
			{name: "一起学猫叫", damage: 554518, time: '2020,6,31,9,41'},
		]
	},
	{
		day: 4,
		bossIdx: 21,
		log: [
			{name: "一起学猫叫", damage: 66906, time: '2020,6,31,10,33'},
			{name: "黑椿", damage: 1178654, time: '2020,6,31,10,54'},
			{name: "以摸多", damage: 1055871, time: '2020,6,31,11,1'},
			{name: "幽蓝", damage: 1022600, time: '2020,6,31,11,8'},
			{name: "金色之泪", damage: 1163127, time: '2020,6,31,11,12'},
			{name: "魂魄妖梦", damage: 1090155, time: '2020,6,31,11,23'},
			{name: "香浓朱古力", damage: 1117882, time: '2020,6,31,11,24'},
		]
	},
	{
		day: 4,
		bossIdx: 22,
		log: [
			{name: "金色之泪", damage: 1129960, time: '2020,6,31,11,27'},
			{name: "幽蓝", damage: 1204143, time: '2020,6,31,11,28'},
			{name: "魂魄妖梦", damage: 1292778, time: '2020,6,31,11,30'},
			{name: "一起学猫叫", damage: 1082842, time: '2020,6,31,11,30'},
			{name: "香浓朱古力", damage: 637141, time: '2020,6,31,11,31'},
			{name: "香浓朱古力", damage: 1104351, time: '2020,6,31,11,36'},
			{name: "黑椿", damage: 1092355, time: '2020,6,31,11,44'},
			{name: "以摸多", damage: 1159817, time: '2020,6,31,11,46'},
		]
	},
	{
		day: 4,
		bossIdx: 23,
		log: [
			{name: "以摸多", damage: 548455, time: '2020,6,31,11,48'},
			{name: "宋寂", damage: 823703, time: '2020,6,31,12,8'},
			{name: "Otaku", damage: 885721, time: '2020,6,31,12,10'},
			{name: "夜雨纷扬", damage: 875703, time: '2020,6,31,12,12'},
			{name: "初心如故", damage: 866850, time: '2020,6,31,12,26'},
			{name: "红豆沙", damage: 853405, time: '2020,6,31,12,34'},
			{name: "福尔康", damage: 875911, time: '2020,6,31,12,47'},
			{name: "灼眼的Saber", damage: 845553, time: '2020,6,31,12,58'},
			{name: "八云蓝", damage: 936918, time: '2020,6,31,13,16'},
			{name: "lala", damage: 849968, time: '2020,6,31,13,16'},
			{name: "好好先生", damage: 961570, time: '2020,6,31,13,34'},
			{name: "打个大西瓜", damage: 859354, time: '2020,6,31,13,36'},
		]
	},
	{
		day: 4,
		bossIdx: 24,
		log: [
			{name: "打个大西瓜", damage: 239023, time: '2020,6,31,13,37'},
			{name: "常磐丁香", damage: 1294511, time: '2020,6,31,13,40'},
			{name: "手手", damage: 1364304, time: '2020,6,31,13,43'},
			{name: "迪卢木多", damage: 1227512, time: '2020,6,31,13,53'},
			{name: "何等的寂寞", damage: 1179321, time: '2020,6,31,14,1'},
			{name: "坑神", damage: 1285278, time: '2020,6,31,18,9'},
			{name: "戏言君", damage: 1286593, time: '2020,6,31,18,24'},
			{name: "橙子", damage: 1201195, time: '2020,6,31,18,28'},
			{name: "长星夜烁", damage: 1154612, time: '2020,6,31,18,39'},
			{name: "我群最菜", damage: 1190819, time: '2020,6,31,19,18'},
			{name: "风月", damage: 1165698, time: '2020,6,31,19,19'},
		]
	},
	{
		day: 4,
		bossIdx: 25,
		log: [
			{name: "风月", damage: 213926, time: '2020,6,31,19,23'},
			{name: "宋寂", damage: 530998, time: '2020,6,31,19,26'},
			{name: "风月", damage: 479271, time: '2020,6,31,19,27'},
			{name: "福尔康", damage: 430137, time: '2020,6,31,19,30'},
			{name: "夜雨纷扬", damage: 546231, time: '2020,6,31,19,32'},
			{name: "金色之泪", damage: 493839, time: '2020,6,31,19,32'},
			{name: "我群最菜", damage: 441381, time: '2020,6,31,19,33'},
			{name: "初心如故", damage: 464248, time: '2020,6,31,19,33'},
			{name: "常磐丁香", damage: 466056, time: '2020,6,31,19,39'},
			{name: "灼眼的Saber", damage: 535847, time: '2020,6,31,19,41'},
			{name: "打个大西瓜", damage: 435856, time: '2020,6,31,19,41'},
			{name: "Otaku", damage: 531078, time: '2020,6,31,19,41'},
			{name: "以摸多", damage: 534499, time: '2020,6,31,19,46'},
			{name: "黑椿", damage: 490012, time: '2020,6,31,19,46'},
			{name: "八云蓝", damage: 510395, time: '2020,6,31,19,51'},
			{name: "长星夜烁", damage: 519201, time: '2020,6,31,19,51'},
			{name: "戏言君", damage: 510434, time: '2020,6,31,19,56'},
			{name: "何等的寂寞", damage: 559418, time: '2020,6,31,19,57'},
			{name: "红豆沙", damage: 466779, time: '2020,6,31,20,2'},
			{name: "橙子", damage: 524517, time: '2020,6,31,20,5'},
			{name: "香浓朱古力", damage: 431255, time: '2020,6,31,20,10'},
			{name: "坑神", damage: 521515, time: '2020,6,31,20,11'},
			{name: "灼眼的Saber", damage: 637587, time: '2020,6,31,20,25'},
			{name: "keiko", damage: 531405, time: '2020,6,31,20,26'},
			{name: "夜雨纷扬", damage: 672199, time: '2020,6,31,20,31'},
			{name: "红豆沙", damage: 711656, time: '2020,6,31,20,44'},
			{name: "坑神", damage: 679124, time: '2020,6,31,20,49'},
			{name: "八云蓝", damage: 647734, time: '2020,6,31,20,51'},
			{name: "好好先生", damage: 712835, time: '2020,6,31,20,52'},
			{name: "橙子", damage: 698419, time: '2020,6,31,21,3'},
			{name: "手手", damage: 502424, time: '2020,6,31,21,5'},
			{name: "一起学猫叫", damage: 724212, time: '2020,6,31,21,16'},
			{name: "戏言君", damage: 626651, time: '2020,6,31,21,33'},
			{name: "lala", damage: 546130, time: '2020,6,31,21,38'},
			{name: "我群最菜", damage: 712560, time: '2020,6,31,21,43'},
			{name: "魂魄妖梦", damage: 514606, time: '2020,6,31,21,52'},
			{name: "风月", damage: 505014, time: '2020,6,31,21,55'},
		]
	},
	{
		day: 4,
		bossIdx: 26,
		log: [
			{name: "风月", damage: 66991, time: '2020,6,31,21,56'},
			{name: "常磐丁香", damage: 1057389, time: '2020,6,31,21,59'},
			{name: "打个大西瓜", damage: 830875, time: '2020,6,31,21,59'},
			{name: "池霜", damage: 962994, time: '2020,6,31,22,0'},
			{name: "何等的寂寞", damage: 1059695, time: '2020,6,31,22,17'},
			{name: "长星夜烁", damage: 717278, time: '2020,6,31,22,18'},
			{name: "keiko", damage: 990385, time: '2020,6,31,22,44'},
			{name: "lala", damage: 559640, time: '2020,6,31,22,45'},
		]
	},
	{
		day: 4,
		bossIdx: 27,
		log: [
			{name: "lala", damage: 377127, time: '2020,6,31,22,46'},
			{name: "池霜", damage: 1288145, time: '2020,6,31,22,48'},
			{name: "keiko", damage: 1049686, time: '2020,6,31,22,50'},
			{name: "初心如故", damage: 1028894, time: '2020,6,31,22,55'},
		]
	},
	{
		day: 5,
		bossIdx: 27,
		log: [
			{name: "初心如故", damage: 1167197, time: '2020,7,1,8,7'},
			{name: "打个大西瓜", damage: 1176196, time: '2020,7,1,8,10'},
			{name: "金色之泪", damage: 1213574, time: '2020,7,1,9,38'},
			{name: "以摸多", damage: 1105797, time: '2020,7,1,9,40'},
		]
	},
	{
		day: 5,
		bossIdx: 28,
		log: [
			{name: "以摸多", damage: 298242, time: '2020,7,1,9,41'},
			{name: "Otaku", damage: 750141, time: '2020,7,1,9,57'},
			{name: "福尔康", damage: 825387, time: '2020,7,1,10,2'},
			{name: "宋寂", damage: 775709, time: '2020,7,1,10,12'},
			{name: "夜雨纷扬", damage: 837735, time: '2020,7,1,10,13'},
			{name: "幽蓝", damage: 786828, time: '2020,7,1,10,19'},
			{name: "常磐丁香", damage: 756633, time: '2020,7,1,10,40'},
			{name: "黑椿", damage: 824444, time: '2020,7,1,10,45'},
			{name: "金色之泪", damage: 813090, time: '2020,7,1,10,46'},
			{name: "lala", damage: 663689, time: '2020,7,1,11,12'},
			{name: "坑神", damage: 778473, time: '2020,7,1,11,14'},
			{name: "何等的寂寞", damage: 772974, time: '2020,7,1,11,35'},
			{name: "以摸多", damage: 771957, time: '2020,7,1,11,49'},
			{name: "红豆沙", damage: 796111, time: '2020,7,1,11,50'},
		]
	},
	{
		day: 5,
		bossIdx: 29,
		log: [
			{name: "红豆沙", damage: 616432, time: '2020,7,1,11,54'},
			{name: "何等的寂寞", damage: 1250932, time: '2020,7,1,11,58'},
			{name: "池霜", damage: 1246477, time: '2020,7,1,12,11'},
			{name: "手手", damage: 1232439, time: '2020,7,1,12,26'},
			{name: "黑椿", damage: 1163043, time: '2020,7,1,12,28'},
			{name: "灼眼的Saber", damage: 1111604, time: '2020,7,1,12,33'},
			{name: "迪卢木多", damage: 1230054, time: '2020,7,1,13,3'},
			{name: "橙子", damage: 1175958, time: '2020,7,1,14,29'},
			{name: "戏言君", damage: 1223244, time: '2020,7,1,16,52'},
			{name: "长星夜烁", damage: 1099075, time: '2020,7,1,17,4'},
			{name: "风月", damage: 1164705, time: '2020,7,1,17,8'},
		]
	},
	{
		day: 5,
		bossIdx: 30,
		log: [
			{name: "风月", damage: 198221, time: '2020,7,1,17,11'},
			{name: "灼眼的Saber", damage: 534894, time: '2020,7,1,17,12'},
			{name: "宋寂", damage: 515817, time: '2020,7,1,17,12'},
			{name: "常磐丁香", damage: 569192, time: '2020,7,1,17,13'},
			{name: "风月", damage: 539550, time: '2020,7,1,17,16'},
			{name: "金色之泪", damage: 506149, time: '2020,7,1,17,16'},
			{name: "我群最菜", damage: 571349, time: '2020,7,1,17,18'},
			{name: "黑椿", damage: 521640, time: '2020,7,1,17,24'},
			{name: "坑神", damage: 565027, time: '2020,7,1,17,30'},
			{name: "长星夜烁", damage: 505184, time: '2020,7,1,17,36'},
			{name: "幽蓝", damage: 541352, time: '2020,7,1,17,42'},
			{name: "红豆沙", damage: 534777, time: '2020,7,1,17,48'},
			{name: "手手", damage: 566463, time: '2020,7,1,17,54'},
			{name: "池霜", damage: 522183, time: '2020,7,1,18,0'},
			{name: "初心如故", damage: 530749, time: '2020,7,1,18,6'},
			{name: "Otaku", damage: 539296, time: '2020,7,1,18,12'},
			{name: "以摸多", damage: 571968, time: '2020,7,1,18,18'},
			{name: "夜雨纷扬", damage: 544272, time: '2020,7,1,18,20'},
			{name: "lala", damage: 540011, time: '2020,7,1,18,22'},
			{name: "香浓朱古力", damage: 486333, time: '2020,7,1,18,24'},
			{name: "何等的寂寞", damage: 485423, time: '2020,7,1,18,28'},
			{name: "打个大西瓜", damage: 533104, time: '2020,7,1,18,47'},
			{name: "橙子", damage: 514435, time: '2020,7,1,18,50'},
			{name: "灼眼的Saber", damage: 701786, time: '2020,7,1,18,50'},
			{name: "keiko", damage: 538377, time: '2020,7,1,18,52'},
			{name: "福尔康", damage: 577277, time: '2020,7,1,18,52'},
			{name: "好好先生", damage: 568669, time: '2020,7,1,18,55'},
			{name: "八云蓝", damage: 497872, time: '2020,7,1,19,0'},
			{name: "迪卢木多", damage: 562079, time: '2020,7,1,19,2'},
			{name: "池霜", damage: 661734, time: '2020,7,1,19,5'},
			{name: "手手", damage: 781627, time: '2020,7,1,19,10'},
			{name: "红豆沙", damage: 632830, time: '2020,7,1,19,13'},
			{name: "坑神", damage: 607977, time: '2020,7,1,19,16'},
			{name: "橙子", damage: 670549, time: '2020,7,1,19,17'},
			{name: "迪卢木多", damage: 775501, time: '2020,7,1,19,26'},
			{name: "戏言君", damage: 486333, time: '2020,7,1,19,33'},
		]
	},
	{
		day: 5,
		bossIdx: 31,
		log: [
			{name: "戏言君", damage: 37891, time: '2020,7,1,19,35'},
			{name: "香浓朱古力", damage: 1010704, time: '2020,7,1,19,45'},
			{name: "打个大西瓜", damage: 993429, time: '2020,7,1,19,51'},
			{name: "初心如故", damage: 1042282, time: '2020,7,1,20,0'},
			{name: "我群最菜", damage: 1152934, time: '2020,7,1,20,27'},
			{name: "好好先生", damage: 1060694, time: '2020,7,1,20,33'},
			{name: "八云蓝", damage: 1141290, time: '2020,7,1,20,34'},
		]
	},
	{
		day: 5,
		bossIdx: 32,
		log: [
			{name: "八云蓝", damage: 600841, time: '2020,7,1,20,36'},
			{name: "福尔康", damage: 1091101, time: '2020,7,1,20,36'},
			{name: "夜雨纷扬", damage: 1183745, time: '2020,7,1,20,37'},
			{name: "lala", damage: 1109774, time: '2020,7,1,20,37'},
			{name: "幽蓝", damage: 1154754, time: '2020,7,1,20,38'},
			{name: "香浓朱古力", damage: 1189956, time: '2020,7,1,20,38'},
			{name: "八云蓝", damage: 1145156, time: '2020,7,1,20,38'},
			{name: "好好先生", damage: 1120541, time: '2020,7,1,20,41'},
		]
	},
	{
		day: 5,
		bossIdx: 33,
		log: [
			{name: "好好先生", damage: 496935, time: '2020,7,1,20,42'},
			{name: "常磐丁香", damage: 926830, time: '2020,7,1,20,50'},
			{name: "戏言君", damage: 668336, time: '2020,7,1,20,56'},
			{name: "我群最菜", damage: 754526, time: '2020,7,1,21,8'},
			{name: "keiko", damage: 814746, time: '2020,7,1,21,16'},
			{name: "keiko", damage: 833998, time: '2020,7,1,21,20'},
			{name: "Otaku", damage: 718846, time: '2020,7,1,21,34'},
			{name: "魂魄妖梦", damage: 844451, time: '2020,7,1,21,57'},
			{name: "魂魄妖梦", damage: 792168, time: '2020,7,1,22,0'},
			{name: "魂魄妖梦", damage: 530624, time: '2020,7,1,22,16'},
			{name: "长星夜烁", damage: 657596, time: '2020,7,1,22,43'},
			{name: "一起学猫叫", damage: 827417, time: '2020,7,1,23,5'},
			{name: "风月", damage: 724412, time: '2020,7,1,23,9'},
			{name: "宋寂", damage: 589358, time: '2020,7,1,23,12'},
		]
	},
	{
		day: 5,
		bossIdx: 34,
		log: [
			{name: "宋寂", damage: 200340, time: '2020,7,1,23,12'},
			{name: "一起学猫叫", damage: 942075, time: '2020,7,1,23,17'},
			{name: "一起学猫叫", damage: 674873, time: '2020,7,1,23,28'},
		]
	},
	{
		day: 6,
		bossIdx: 34,
		log: [
			{name: "手手", damage: 1218386, time: '2020,7,2,6,0'},
			{name: "以摸多", damage: 1205849, time: '2020,7,2,10,55'},
			{name: "何等的寂寞", damage: 1006078, time: '2020,7,2,11,0'},
			{name: "魂魄妖梦", damage: 1138203, time: '2020,7,2,11,23'},
			{name: "Otaku", damage: 1199465, time: '2020,7,2,11,24'},
			{name: "迪卢木多", damage: 1245272, time: '2020,7,2,11,26'},
			{name: "八云蓝", damage: 1135423, time: '2020,7,2,11,30'},
			{name: "坑神", damage: 1241031, time: '2020,7,2,13,27'},
			{name: "戏言君", damage: 1203761, time: '2020,7,2,13,28'},
		]
	},
	{
		day: 6,
		bossIdx: 35,
		log: [
			{name: "戏言君", damage: 151315, time: '2020,7,2,13,30'},
			{name: "打个大西瓜", damage: 521165, time: '2020,7,2,13,30'},
			{name: "灼眼的Saber", damage: 566212, time: '2020,7,2,13,36'},
			{name: "幽蓝", damage: 546921, time: '2020,7,2,13,36'},
			{name: "红豆沙", damage: 544823, time: '2020,7,2,13,36'},
			{name: "戏言君", damage: 497124, time: '2020,7,2,13,37'},
			{name: "金色之泪", damage: 495966, time: '2020,7,2,13,38'},
			{name: "坑神", damage: 553747, time: '2020,7,2,13,39'},
			{name: "初心如故", damage: 514813, time: '2020,7,2,13,43'},
			{name: "夜雨纷扬", damage: 540482, time: '2020,7,2,13,43'},
			{name: "福尔康", damage: 552369, time: '2020,7,2,13,46'},
			{name: "黑椿", damage: 524174, time: '2020,7,2,13,50'},
			{name: "何等的寂寞", damage: 441275, time: '2020,7,2,13,53'},
			{name: "一起学猫叫", damage: 545380, time: '2020,7,2,13,55'},
			{name: "手手", damage: 575020, time: '2020,7,2,14,1'},
			{name: "我群最菜", damage: 557143, time: '2020,7,2,14,12'},
			{name: "迪卢木多", damage: 557398, time: '2020,7,2,14,14'},
			{name: "Otaku", damage: 533844, time: '2020,7,2,14,27'},
			{name: "keiko", damage: 573573, time: '2020,7,2,14,55'},
			{name: "橙子", damage: 528463, time: '2020,7,2,15,1'},
			{name: "手手", damage: 798696, time: '2020,7,2,15,10'},
			{name: "坑神", damage: 818614, time: '2020,7,2,15,23'},
			{name: "灼眼的Saber", damage: 740526, time: '2020,7,2,15,24'},
			{name: "Otaku", damage: 779592, time: '2020,7,2,15,31'},
			{name: "lala", damage: 537883, time: '2020,7,2,15,46'},
			{name: "戏言君", damage: 687040, time: '2020,7,2,15,52'},
			{name: "八云蓝", damage: 740135, time: '2020,7,2,15,58'},
			{name: "魂魄妖梦", damage: 646324, time: '2020,7,2,16,25'},
			{name: "以摸多", damage: 683919, time: '2020,7,2,16,27'},
			{name: "迪卢木多", damage: 746980, time: '2020,7,2,16,51'},
			{name: "福尔康", damage: 627532, time: '2020,7,2,16,55'},
			{name: "宋寂", damage: 715110, time: '2020,7,2,17,10'},
			{name: "一起学猫叫", damage: 690243, time: '2020,7,2,17,12'},
			{name: "香浓朱古力", damage: 466199, time: '2020,7,2,17,29'},
		]
	}
];
