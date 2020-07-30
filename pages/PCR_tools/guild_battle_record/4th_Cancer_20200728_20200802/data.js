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
		]
	}
];
