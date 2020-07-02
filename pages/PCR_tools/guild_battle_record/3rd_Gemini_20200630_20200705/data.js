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
			{name: "初心如故", damage: 1036626, time: '2020,5,30,12,21'},
			{name: "我群最菜", damage: 1007968, time: '2020,5,30,12,21'},
		]
	},
	{
		day: 1,
		bossIdx: 3,
		log: [
			{name: "keiko", damage: 1000518, time: '2020,5,30,12,27'},
			{name: "keiko", damage: 723730, time: '2020,5,30,12,34'},
			{name: "灼眼的Saber", damage: 990674, time: '2020,5,30,12,35'},
			{name: "我群最菜", damage: 565828, time: '2020,5,30,12,35'},
			{name: "宋寂", damage: 767649, time: '2020,5,30,12,40'},
			{name: "戏言君", damage: 996437, time: '2020,5,30,13,15'},
			{name: "一起学猫叫", damage: 810733, time: '2020,5,30,14,7'},
			{name: "好好先生", damage: 1070270, time: '2020,5,30,15,7'},
			{name: "初心如故", damage: 985761, time: '2020,5,30,15,24'},
			{name: "福尔康", damage: 888276, time: '2020,5,30,15,25'},
			{name: "机智的阿斗", damage: 701249, time: '2020,5,30,16,30'},
			{name: "爱丽丝", damage: 498875, time: '2020,5,30,16,30'},
		]
	},
	{
		day: 1,
		bossIdx: 4,
		log: [
			{name: "爱丽丝", damage: 191060, time: '2020,5,30,16,30'},
			{name: "宋寂", damage: 871921, time: '2020,5,30,16,42'},
			{name: "欧派果奶", damage: 825191, time: '2020,5,30,16,43'},
			{name: "八云蓝", damage: 879196, time: '2020,5,30,16,47'},
			{name: "初心如故", damage: 841586, time: '2020,5,30,16,55'},
			{name: "福尔康", damage: 833599, time: '2020,5,30,17,13'},
			{name: "手手", damage: 860538, time: '2020,5,30,17,17'},
			{name: "以摸多", damage: 876722, time: '2020,5,30,17,38'},
			{name: "黑椿", damage: 868955, time: '2020,5,30,17,47'},
			{name: "夜雨纷扬", damage: 907633, time: '2020,5,30,17,52'},
			{name: "我群最菜", damage: 905869, time: '2020,5,30,18,13'},
			{name: "灼眼的Saber", damage: 891737, time: '2020,5,30,18,33'},
			{name: "戏言君", damage: 832754, time: '2020,5,30,18,37'},
			{name: "好好先生", damage: 931525, time: '2020,5,30,18,41'},
			{name: "长星夜烁", damage: 481714, time: '2020,5,30,18,57'},
		]
	},
	{
		day: 1,
		bossIdx: 5,
		log: [
			{name: "长星夜烁", damage: 220534, time: '2020,5,30,18,57'},
			{name: "欧派果奶", damage: 1029124, time: '2020,5,30,19,1'},
			{name: "宋寂", damage: 980624, time: '2020,5,30,19,4'},
			{name: "爱丽丝", damage: 956600, time: '2020,5,30,19,6'},
			{name: "池霜", damage: 1039049, time: '2020,5,30,19,6'},
			{name: "长星夜烁", damage: 1066751, time: '2020,5,30,19,8'},
			{name: "池霜", damage: 995050, time: '2020,5,30,19,11'},
			{name: "幽蓝", damage: 1028491, time: '2020,5,30,19,12'},
			{name: "池霜", damage: 876304, time: '2020,5,30,19,13'},
			{name: "灼眼的Saber", damage: 958791, time: '2020,5,30,19,18'},
			{name: "手手", damage: 1055145, time: '2020,5,30,19,19'},
			{name: "幽蓝", damage: 1035787, time: '2020,5,30,19,20'},
			{name: "黑椿", damage: 925372, time: '2020,5,30,19,23'},
			{name: "香浓朱古力", damage: 891398, time: '2020,5,30,19,27'},
			{name: "黑椿", damage: 1059520, time: '2020,5,30,19,28'},
			{name: "长星夜烁", damage: 821268, time: '2020,5,30,19,28'},
			{name: "常磐丁香", damage: 926663, time: '2020,5,30,19,44'},
			{name: "八云蓝", damage: 985523, time: '2020,5,30,19,44'},
			{name: "手手", damage: 1019465, time: '2020,5,30,19,48'},
			{name: "Otaku", damage: 950486, time: '2020,5,30,19,53'},
			{name: "我群最菜", damage: 1012882, time: '2020,5,30,20,3'},
			{name: "打个大西瓜", damage: 800432, time: '2020,5,30,20,5'},
		]
	},
	{
		day: 1,
		bossIdx: 6,
		log: [
			{name: "咸鱼", damage: 876373, time: '2020,5,30,20,20'},
			{name: "魂魄妖梦", damage: 805319, time: '2020,5,30,20,20'},
			{name: "迪卢木多", damage: 908284, time: '2020,5,30,20,22'},
			{name: "以摸多", damage: 582154, time: '2020,5,30,20,26'},
			{name: "常磐丁香", damage: 885623, time: '2020,5,30,20,28'},
			{name: "打个大西瓜", damage: 272296, time: '2020,5,30,20,31'},
			{name: "魂魄妖梦", damage: 475667, time: '2020,5,30,20,40'},
			{name: "魂魄妖梦", damage: 600755, time: '2020,5,30,20,51'},
			{name: "黑喵", damage: 766721, time: '2020,5,30,20,52'},
		]
	},
	{
		day: 1,
		bossIdx: 7,
		log: [
			{name: "打个大西瓜", damage: 1001999, time: '2020,5,30,20,55'},
			{name: "机智的阿斗", damage: 1092870, time: '2020,5,30,20,57'},
			{name: "黑喵", damage: 219690, time: '2020,5,30,20,57'},
			{name: "咸鱼", damage: 960401, time: '2020,5,30,20,58'},
			{name: "常磐丁香", damage: 612783, time: '2020,5,30,21,7'},
			{name: "夜雨纷扬", damage: 1109192, time: '2020,5,30,21,8'},
			{name: "黑喵", damage: 913457, time: '2020,5,30,21,10'},
			{name: "金色之泪", damage: 636302, time: '2020,5,30,21,22'},
			{name: "金色之泪", damage: 522716, time: '2020,5,30,21,29'},
			{name: "戏言君", damage: 935966, time: '2020,5,30,21,30'},
		]
	},
	{
		day: 1,
		bossIdx: 8,
		log: [
			{name: "戏言君", damage: 18684, time: '2020,5,30,21,32'},
			{name: "爱丽丝", damage: 560803, time: '2020,5,30,22,4'},
			{name: "咸鱼", damage: 414116, time: '2020,5,30,22,7'},
			{name: "夜雨纷扬", damage: 715809, time: '2020,5,30,22,10'},
			{name: "幽蓝", damage: 425331, time: '2020,5,30,22,33'},
			{name: "何等的寂寞", damage: 398979, time: '2020,5,30,22,33'},
			{name: "香浓朱古力", damage: 493566, time: '2020,5,30,22,47'},
			{name: "黑喵", damage: 329477, time: '2020,5,30,22,48'},
			{name: "香浓朱古力", damage: 392600, time: '2020,5,30,23,10'},
			{name: "Otaku", damage: 454583, time: '2020,5,30,23,21'},
			{name: "一起学猫叫", damage: 677912, time: '2020,6,1,0,5'},
			{name: "一起学猫叫", damage: 516785, time: '2020,6,1,0,7'},
			{name: "迪卢木多", damage: 489388, time: '2020,6,1,0,9'},
			{name: "迪卢木多", damage: 445586, time: '2020,6,1,1,6'},
		]
	},
	{
		day: 2,
		bossIdx: 8,
		log: [
			{name: "爱丽丝", damage: 620846, time: '2020,6,1,14,20'},
			{name: "黑喵", damage: 610458, time: '2020,6,1,18,11'},
			{name: "黑椿", damage: 679373, time: '2020,6,1,18,13'},
			{name: "八云蓝", damage: 668897, time: '2020,6,1,18,16'},
			{name: "香浓朱古力", damage: 634840, time: '2020,6,1,18,17'},
			{name: "戏言君", damage: 451967, time: '2020,6,1,18,19'},
		]
	},
	{
		day: 2,
		bossIdx: 9,
		log: [
			{name: "戏言君", damage: 227517, time: '2020,6,1,18,21'},
			{name: "机智的阿斗", damage: 683022, time: '2020,6,1,18,27'},
			{name: "欧派果奶", damage: 739473, time: '2020,6,1,18,28'},
			{name: "八云蓝", damage: 696262, time: '2020,6,1,18,30'},
			{name: "池霜", damage: 762740, time: '2020,6,1,18,35'},
			{name: "手手", damage: 968985, time: '2020,6,1,18,45'},
			{name: "手手", damage: 754663, time: '2020,6,1,19,5'},
			{name: "Otaku", damage: 650396, time: '2020,6,1,19,12'},
			{name: "灼眼的Saber", damage: 586968, time: '2020,6,1,19,19'},
			{name: "迪卢木多", damage: 675817, time: '2020,6,1,19,20'},
			{name: "爱丽丝", damage: 607105, time: '2020,6,1,19,27'},
			{name: "我群最菜", damage: 692355, time: '2020,6,1,19,28'},
			{name: "香浓朱古力", damage: 592610, time: '2020,6,1,19,28'},
			{name: "打个大西瓜", damage: 651693, time: '2020,6,1,19,36'},
			{name: "黑椿", damage: 687102, time: '2020,6,1,19,37'},
			{name: "宋寂", damage: 707485, time: '2020,6,1,19,37'},
			{name: "幽蓝", damage: 617652, time: '2020,6,1,19,41'},
			{name: "keiko", damage: 698155, time: '2020,6,1,19,45'},
		]
	},
	{
		day: 2,
		bossIdx: 10,
		log: [
			{name: "keiko", damage: 32545, time: '2020,6,1,19,46'},
			{name: "长星夜烁", damage: 585021, time: '2020,6,1,19,53'},
			{name: "长星夜烁", damage: 525452, time: '2020,6,1,19,58'},
			{name: "初心如故", damage: 756993, time: '2020,6,1,20,1'},
			{name: "何等的寂寞", damage: 613593, time: '2020,6,1,20,4'},
			{name: "初心如故", damage: 462437, time: '2020,6,1,20,10'},
			{name: "好好先生", damage: 592204, time: '2020,6,1,20,11'},
			{name: "金色之泪", damage: 673055, time: '2020,6,1,20,14'},
			{name: "黑椿", damage: 700722, time: '2020,6,1,20,15'},
			{name: "香浓朱古力", damage: 549072, time: '2020,6,1,20,19'},
			{name: "咸鱼", damage: 478724, time: '2020,6,1,20,23'},
			{name: "幽蓝", damage: 733352, time: '2020,6,1,20,31'},
			{name: "以摸多", damage: 795863, time: '2020,6,1,20,31'},
			{name: "福尔康", damage: 458113, time: '2020,6,1,20,35'},
			{name: "以摸多", damage: 492848, time: '2020,6,1,20,38'},
			{name: "夜雨纷扬", damage: 452011, time: '2020,6,1,20,40'},
			{name: "好好先生", damage: 596180, time: '2020,6,1,20,46'},
			{name: "以摸多", damage: 608907, time: '2020,6,1,20,49'},
			{name: "Otaku", damage: 736883, time: '2020,6,1,20,51'},
			{name: "我群最菜", damage: 780375, time: '2020,6,1,20,52'},
			{name: "何等的寂寞", damage: 728222, time: '2020,6,1,20,58'},
			{name: "池霜", damage: 602709, time: '2020,6,1,20,58'},
			{name: "欧派果奶", damage: 826857, time: '2020,6,1,21,0'},
			{name: "灼眼的Saber", damage: 680355, time: '2020,6,1,21,2'},
			{name: "机智的阿斗", damage: 764408, time: '2020,6,1,21,6'},
			{name: "福尔康", damage: 699960, time: '2020,6,1,21,7'},
			{name: "八云蓝", damage: 705736, time: '2020,6,1,21,10'},
			{name: "一起学猫叫", damage: 720839, time: '2020,6,1,21,14'},
			{name: "咸鱼", damage: 720330, time: '2020,6,1,21,17'},
			{name: "一起学猫叫", damage: 455632, time: '2020,6,1,21,18'},
			{name: "何等的寂寞", damage: 480833, time: '2020,6,1,21,18'},
			{name: "打个大西瓜", damage: 674822, time: '2020,6,1,21,25'},
			{name: "手手", damage: 727843, time: '2020,6,1,21,27'},
		]
	},
	{
		day: 2,
		bossIdx: 11,
		log: [
			{name: "爱丽丝", damage: 881237, time: '2020,6,1,21,37'},
			{name: "常磐丁香", damage: 995716, time: '2020,6,1,21,38'},
			{name: "夜雨纷扬", damage: 897836, time: '2020,6,1,21,45'},
			{name: "手手", damage: 684933, time: '2020,6,1,21,47'},
			{name: "迪卢木多", damage: 943268, time: '2020,6,1,21,47'},
			{name: "金色之泪", damage: 400821, time: '2020,6,1,21,56'},
			{name: "魂魄妖梦", damage: 806651, time: '2020,6,1,22,5'},
			{name: "keiko", damage: 649025, time: '2020,6,1,22,6'},
		]
	},
	{
		day: 2,
		bossIdx: 12,
		log: [
			{name: "keiko", damage: 414638, time: '2020,6,1,22,10'},
			{name: "福尔康", damage: 932781, time: '2020,6,1,22,10'},
			{name: "打个大西瓜", damage: 978144, time: '2020,6,1,22,11'},
			{name: "灼眼的Saber", damage: 1014738, time: '2020,6,1,22,12'},
			{name: "池霜", damage: 1105105, time: '2020,6,1,22,12'},
			{name: "我群最菜", damage: 972789, time: '2020,6,1,22,12'},
			{name: "欧派果奶", damage: 1008616, time: '2020,6,1,22,12'},
			{name: "Otaku", damage: 988867, time: '2020,6,1,22,13'},
			{name: "常磐丁香", damage: 980230, time: '2020,6,1,22,13'},
		]
	},
	{
		day: 2,
		bossIdx: 13,
		log: [
			{name: "咸鱼", damage: 637866, time: '2020,6,1,22,16'},
			{name: "迪卢木多", damage: 712466, time: '2020,6,1,22,17'},
			{name: "常磐丁香", damage: 263512, time: '2020,6,1,22,18'},
			{name: "幽蓝", damage: 670255, time: '2020,6,1,22,18'},
			{name: "宋寂", damage: 491904, time: '2020,6,1,22,18'},
			{name: "魂魄妖梦", damage: 637338, time: '2020,6,1,22,18'},
			{name: "宋寂", damage: 632853, time: '2020,6,1,22,21'},
			{name: "一起学猫叫", damage: 495409, time: '2020,6,1,22,22'},
			{name: "初心如故", damage: 641853, time: '2020,6,1,22,23'},
			{name: "机智的阿斗", damage: 672250, time: '2020,6,1,22,24'},
			{name: "夜雨纷扬", damage: 720022, time: '2020,6,1,22,24'},
			{name: "金色之泪", damage: 491529, time: '2020,6,1,22,25'},
			{name: "戏言君", damage: 613638, time: '2020,6,1,22,27'},
			{name: "黑喵", damage: 576319, time: '2020,6,1,22,32'},
			{name: "魂魄妖梦", damage: 374694, time: '2020,6,1,22,37'},
			{name: "常磐丁香", damage: 393279, time: '2020,6,1,22,39'},
			{name: "黑喵", damage: 358021, time: '2020,6,1,22,43'},
			{name: "戏言君", damage: 321759, time: '2020,6,1,22,44'},
			{name: "好好先生", damage: 295033, time: '2020,6,1,23,17'},
		]
	},
	{
		day: 2,
		bossIdx: 14,
		log: [
			{name: "好好先生", damage: 257000, time: '2020,6,1,23,18'},
			{name: "长星夜烁", damage: 523634, time: '2020,6,1,23,21'},
			{name: "keiko", damage: 466373, time: '2020,6,2,1,15'},
		]
	},
	{
		day: 3,
		bossIdx: 14,
		log: [
			{name: "何等的寂寞", damage: 624744, time: '2020,6,2,6,17'},
			{name: "欧派果奶", damage: 730468, time: '2020,6,2,7,41'},
			{name: "打个大西瓜", damage: 534564, time: '2020,6,2,7,58'},
			{name: "手手", damage: 910136, time: '2020,6,2,8,8'},
			{name: "手手", damage: 773680, time: '2020,6,2,8,27'},
			{name: "Otaku", damage: 710070, time: '2020,6,2,8,38'},
			{name: "咸鱼", damage: 617413, time: '2020,6,2,8,48'},
			{name: "福尔康", damage: 668117, time: '2020,6,2,9,46'},
			{name: "迪卢木多", damage: 712601, time: '2020,6,2,10,4'},
			{name: "夜雨纷扬", damage: 695705, time: '2020,6,2,10,33'},
			{name: "黑椿", damage: 683546, time: '2020,6,2,10,49'},
			{name: "我群最菜", damage: 716100, time: '2020,6,2,12,13'},
			{name: "灼眼的Saber", damage: 690330, time: '2020,6,2,12,14'},
			{name: "池霜", damage: 988481, time: '2020,6,2,12,19'},
			{name: "池霜", damage: 694225, time: '2020,6,2,12,23'},
		]
	},
];
