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
			{name: "我群最菜", damage: 2813, time: '2020,6,2,12,29'},
		]
	},
	{
		day: 3,
		bossIdx: 15,
		log: [
			{name: "欧派果奶", damage: 659101, time: '2020,6,2,12,45'},
			{name: "初心如故", damage: 718082, time: '2020,6,2,12,56'},
			{name: "初心如故", damage: 469179, time: '2020,6,2,13,3'},
			{name: "何等的寂寞", damage: 673398, time: '2020,6,2,13,7'},
			{name: "机智的阿斗", damage: 752336, time: '2020,6,2,13,8'},
			{name: "机智的阿斗", damage: 479123, time: '2020,6,2,13,19'},
			{name: "以摸多", damage: 777862, time: '2020,6,2,13,28'},
			{name: "以摸多", damage: 453107, time: '2020,6,2,13,31'},
			{name: "爱丽丝", damage: 658334, time: '2020,6,2,13,45'},
			{name: "爱丽丝", damage: 412712, time: '2020,6,2,13,50'},
			{name: "迪卢木多", damage: 659115, time: '2020,6,2,14,2'},
			{name: "keiko", damage: 741647, time: '2020,6,2,14,4'},
			{name: "灼眼的Saber", damage: 687669, time: '2020,6,2,14,20'},
			{name: "金色之泪", damage: 425557, time: '2020,6,2,14,22'},
			{name: "香浓朱古力", damage: 683671, time: '2020,6,2,14,34'},
			{name: "黑椿", damage: 693810, time: '2020,6,2,14,34'},
			{name: "香浓朱古力", damage: 425215, time: '2020,6,2,14,36'},
			{name: "金色之泪", damage: 735918, time: '2020,6,2,14,55'},
			{name: "宋寂", damage: 683148, time: '2020,6,2,15,5'},
			{name: "我群最菜", damage: 775528, time: '2020,6,2,15,18'},
			{name: "夜雨纷扬", damage: 731382, time: '2020,6,2,15,23'},
			{name: "香浓朱古力", damage: 452481, time: '2020,6,2,15,32'},
			{name: "好好先生", damage: 698614, time: '2020,6,2,15,58'},
			{name: "八云蓝", damage: 763965, time: '2020,6,2,16,10'},
			{name: "池霜", damage: 784986, time: '2020,6,2,16,34'},
			{name: "福尔康", damage: 680746, time: '2020,6,2,16,38'},
			{name: "Otaku", damage: 670862, time: '2020,6,2,17,56'},
			{name: "一起学猫叫", damage: 748968, time: '2020,6,2,19,8'},
			{name: "长星夜烁", damage: 720687, time: '2020,6,2,19,19'},
			{name: "手手", damage: 770085, time: '2020,6,2,19,20'},
			{name: "长星夜烁", damage: 412712, time: '2020,6,2,19,27'},
		]
	},
	{
		day: 3,
		bossIdx: 16,
		log: [
			{name: "长星夜烁", damage: 43904, time: '2020,6,2,19,28'},
			{name: "魂魄妖梦", damage: 925887, time: '2020,6,2,19,41'},
			{name: "打个大西瓜", damage: 909581, time: '2020,6,2,19,47'},
			{name: "咸鱼", damage: 804046, time: '2020,6,2,19,49'},
			{name: "黑喵", damage: 841689, time: '2020,6,2,19,58'},
			{name: "幽蓝", damage: 950094, time: '2020,6,2,19,58'},
			{name: "常磐丁香", damage: 934339, time: '2020,6,2,20,10'},
			{name: "机智的阿斗", damage: 590460, time: '2020,6,2,20,14'},
		]
	},
	{
		day: 3,
		bossIdx: 17,
		log: [
			{name: "灼眼的Saber", damage: 991444, time: '2020,6,2,20,16'},
			{name: "何等的寂寞", damage: 966774, time: '2020,6,2,20,16'},
			{name: "黑椿", damage: 1009327, time: '2020,6,2,20,18'},
			{name: "魂魄妖梦", damage: 998810, time: '2020,6,2,20,18'},
			{name: "黑喵", damage: 861228, time: '2020,6,2,20,19'},
			{name: "戏言君", damage: 1111135, time: '2020,6,2,20,19'},
			{name: "常磐丁香", damage: 982748, time: '2020,6,2,20,19'},
			{name: "我群最菜", damage: 985285, time: '2020,6,2,20,19'},
			{name: "夜雨纷扬", damage: 1042726, time: '2020,6,2,20,19'},
		]
	},
	{
		day: 3,
		bossIdx: 18,
		log: [
			{name: "迪卢木多", damage: 694753, time: '2020,6,2,20,23'},
			{name: "福尔康", damage: 672188, time: '2020,6,2,20,24'},
			{name: "以摸多", damage: 674417, time: '2020,6,2,20,26'},
			{name: "机智的阿斗", damage: 126168, time: '2020,6,2,20,28'},
			{name: "魂魄妖梦", damage: 349401, time: '2020,6,2,20,29'},
			{name: "夜雨纷扬", damage: 696360, time: '2020,6,2,20,31'},
			{name: "初心如故", damage: 601692, time: '2020,6,2,20,33'},
			{name: "八云蓝", damage: 695999, time: '2020,6,2,20,33'},
			{name: "金色之泪", damage: 491121, time: '2020,6,2,20,34'},
			{name: "好好先生", damage: 686509, time: '2020,6,2,20,40'},
			{name: "Otaku", damage: 634859, time: '2020,6,2,20,46'},
			{name: "咸鱼", damage: 483540, time: '2020,6,2,20,50'},
			{name: "打个大西瓜", damage: 701894, time: '2020,6,2,20,58'},
			{name: "爱丽丝", damage: 647831, time: '2020,6,2,21,0'},
			{name: "幽蓝", damage: 673901, time: '2020,6,2,21,3'},
			{name: "keiko", damage: 625168, time: '2020,6,2,21,31'},
			{name: "欧派果奶", damage: 680947, time: '2020,6,2,21,33'},
		]
	},
	{
		day: 3,
		bossIdx: 19,
		log: [
			{name: "欧派果奶", damage: 163010, time: '2020,6,2,21,33'},
			{name: "幽蓝", damage: 561221, time: '2020,6,2,21,35'},
			{name: "宋寂", damage: 664837, time: '2020,6,2,21,39'},
			{name: "常磐丁香", damage: 676472, time: '2020,6,2,21,45'},
			{name: "八云蓝", damage: 638654, time: '2020,6,2,21,49'},
			{name: "长星夜烁", damage: 698768, time: '2020,6,2,21,50'},
			{name: "宋寂", damage: 710633, time: '2020,6,2,21,51'},
			{name: "一起学猫叫", damage: 736147, time: '2020,6,2,21,53'},
			{name: "好好先生", damage: 728789, time: '2020,6,2,22,58'},
			{name: "keiko", damage: 491867, time: '2020,6,2,23,10'},
			{name: "黑喵", damage: 497818, time: '2020,6,2,23,34'},
			{name: "戏言君", damage: 815740, time: '2020,6,2,23,35'},
			{name: "一起学猫叫", damage: 603127, time: '2020,6,2,23,39'},
			{name: "戏言君", damage: 747159, time: '2020,6,2,23,54'},
		]
	},
	{
		day: 4,
		bossIdx: 19,
		log: [
			{name: "手手", damage: 759099, time: '2020,6,3,6,37'},
			{name: "手手", damage: 889230, time: '2020,6,3,6,44'},
			{name: "欧派果奶", damage: 798487, time: '2020,6,3,7,17'},
			{name: "咸鱼", damage: 594449, time: '2020,6,3,8,20'},
			{name: "打个大西瓜", damage: 626799, time: '2020,6,3,8,21'},
		]
	},
	{
		day: 4,
		bossIdx: 20,
		log: [
			{name: "打个大西瓜", damage: 297872, time: '2020,6,3,8,22'},
			{name: "欧派果奶", damage: 868968, time: '2020,6,3,8,46'},
			{name: "初心如故", damage: 713373, time: '2020,6,3,9,4'},
			{name: "初心如故", damage: 437507, time: '2020,6,3,9,11'},
			{name: "灼眼的Saber", damage: 634971, time: '2020,6,3,12,40'},
			{name: "池霜", damage: 763792, time: '2020,6,3,12,42'},
			{name: "黑喵", damage: 393912, time: '2020,6,3,12,57'},
			{name: "一起学猫叫", damage: 770131, time: '2020,6,3,12,58'},
			{name: "黑椿", damage: 754370, time: '2020,6,3,13,21'},
			{name: "福尔康", damage: 426317, time: '2020,6,3,15,39'},
			{name: "香浓朱古力", damage: 698957, time: '2020,6,3,16,33'},
			{name: "爱丽丝", damage: 567044, time: '2020,6,3,16,40'},
			{name: "香浓朱古力", damage: 431582, time: '2020,6,3,16,43'},
			{name: "香浓朱古力", damage: 459910, time: '2020,6,3,16,50'},
			{name: "以摸多", damage: 551430, time: '2020,6,3,17,24'},
			{name: "迪卢木多", damage: 768758, time: '2020,6,3,17,34'},
			{name: "迪卢木多", damage: 508527, time: '2020,6,3,17,48'},
			{name: "福尔康", damage: 692048, time: '2020,6,3,18,1'},
			{name: "手手", damage: 729089, time: '2020,6,3,18,3'},
			{name: "夜雨纷扬", damage: 777649, time: '2020,6,3,18,7'},
			{name: "八云蓝", damage: 751511, time: '2020,6,3,18,19'},
			{name: "宋寂", damage: 708131, time: '2020,6,3,18,29'},
			{name: "灼眼的Saber", damage: 667508, time: '2020,6,3,18,36'},
			{name: "Otaku", damage: 647675, time: '2020,6,3,18,46'},
			{name: "我群最菜", damage: 781334, time: '2020,6,3,18,53'},
			{name: "金色之泪", damage: 810245, time: '2020,6,3,19,3'},
			{name: "长星夜烁", damage: 681034, time: '2020,6,3,20,9'},
			{name: "好好先生", damage: 764869, time: '2020,6,3,20,15'},
			{name: "何等的寂寞", damage: 742530, time: '2020,6,3,20,56'},
			{name: "幽蓝", damage: 792650, time: '2020,6,3,21,14'},
			{name: "打个大西瓜", damage: 406306, time: '2020,6,3,21,26'},
		]
	},
	{
		day: 4,
		bossIdx: 21,
		log: [
			{name: "打个大西瓜", damage: 294212, time: '2020,6,3,21,27'},
			{name: "常磐丁香", damage: 930541, time: '2020,6,3,21,30'},
			{name: "黑喵", damage: 904307, time: '2020,6,3,21,39'},
			{name: "咸鱼", damage: 891501, time: '2020,6,3,21,40'},
			{name: "机智的阿斗", damage: 992066, time: '2020,6,3,21,43'},
			{name: "keiko", damage: 880303, time: '2020,6,3,21,45'},
			{name: "戏言君", damage: 812103, time: '2020,6,3,21,49'},
			{name: "魂魄妖梦", damage: 721814, time: '2020,6,3,21,50'},
		]
	},
	{
		day: 4,
		bossIdx: 22,
		log: [
			{name: "何等的寂寞", damage: 998005, time: '2020,6,3,21,52'},
			{name: "打个大西瓜", damage: 997258, time: '2020,6,3,21,52'},
			{name: "魂魄妖梦", damage: 708715, time: '2020,6,3,21,52'},
			{name: "咸鱼", damage: 971307, time: '2020,6,3,21,52'},
			{name: "戏言君", damage: 1014480, time: '2020,6,3,21,53'},
			{name: "黑喵", damage: 949577, time: '2020,6,3,21,53'},
			{name: "常磐丁香", damage: 1019710, time: '2020,6,3,21,53'},
			{name: "黑椿", damage: 982467, time: '2020,6,3,21,53'},
			{name: "金色之泪", damage: 358481, time: '2020,6,3,22,1'},
		]
	},
	{
		day: 4,
		bossIdx: 23,
		log: [
			{name: "金色之泪", damage: 260077, time: '2020,6,3,22,5'},
			{name: "好好先生", damage: 650474, time: '2020,6,3,22,5'},
			{name: "池霜", damage: 693530, time: '2020,6,3,22,5'},
			{name: "爱丽丝", damage: 607609, time: '2020,6,3,22,8'},
			{name: "我群最菜", damage: 607892, time: '2020,6,3,22,8'},
			{name: "八云蓝", damage: 703510, time: '2020,6,3,22,8'},
			{name: "初心如故", damage: 692936, time: '2020,6,3,22,8'},
			{name: "金色之泪", damage: 421397, time: '2020,6,3,22,9'},
			{name: "夜雨纷扬", damage: 667057, time: '2020,6,3,22,9'},
			{name: "幽蓝", damage: 652988, time: '2020,6,3,22,13'},
			{name: "keiko", damage: 643455, time: '2020,6,3,22,14'},
			{name: "机智的阿斗", damage: 652185, time: '2020,6,3,22,15'},
			{name: "Otaku", damage: 655234, time: '2020,6,3,22,16'},
			{name: "欧派果奶", damage: 663695, time: '2020,6,3,22,28'},
			{name: "福尔康", damage: 643008, time: '2020,6,3,22,28'},
			{name: "长星夜烁", damage: 629196, time: '2020,6,3,22,31'},
			{name: "迪卢木多", damage: 155757, time: '2020,6,3,22,33'},
		]
	},
	{
		day: 4,
		bossIdx: 24,
		log: [
			{name: "长星夜烁", damage: 501087, time: '2020,6,3,22,37'},
			{name: "灼眼的Saber", damage: 720556, time: '2020,6,3,22,37'},
			{name: "迪卢木多", damage: 584781, time: '2020,6,3,22,38'},
			{name: "宋寂", damage: 693704, time: '2020,6,3,22,38'},
			{name: "黑椿", damage: 677007, time: '2020,6,3,22,39'},
			{name: "常磐丁香", damage: 577550, time: '2020,6,3,22,39'},
			{name: "魂魄妖梦", damage: 874599, time: '2020,6,3,22,39'},
			{name: "爱丽丝", damage: 617267, time: '2020,6,3,22,40'},
			{name: "夜雨纷扬", damage: 679433, time: '2020,6,3,22,43'},
			{name: "机智的阿斗", damage: 698214, time: '2020,6,3,22,44'},
			{name: "keiko", damage: 511844, time: '2020,6,3,22,44'},
			{name: "八云蓝", damage: 613301, time: '2020,6,3,22,44'},
			{name: "Otaku", damage: 732625, time: '2020,6,3,22,45'},
			{name: "魂魄妖梦", damage: 538681, time: '2020,6,3,22,45'},
			{name: "宋寂", damage: 581332, time: '2020,6,3,22,47'},
			{name: "何等的寂寞", damage: 813287, time: '2020,6,3,22,52'},
			{name: "池霜", damage: 605416, time: '2020,6,3,22,55'},
			{name: "幽蓝", damage: 526866, time: '2020,6,3,22,58'},
			{name: "以摸多", damage: 588110, time: '2020,6,3,23,0'},
		]
	},
	{
		day: 4,
		bossIdx: 25,
		log: [
			{name: "以摸多", damage: 109276, time: '2020,6,3,23,1'},
			{name: "以摸多", damage: 793278, time: '2020,6,3,23,9'},
			{name: "一起学猫叫", damage: 513111, time: '2020,6,3,23,16'},
			{name: "一起学猫叫", damage: 410523, time: '2020,6,3,23,19'},
			{name: "好好先生", damage: 500632, time: '2020,6,3,23,38'},
			{name: "戏言君", damage: 455119, time: '2020,6,3,23,38'},
			{name: "我群最菜", damage: 434573, time: '2020,6,3,23,54'},
		]
	},
	{
		day: 5,
		bossIdx: 25,
		log: [
			{name: "欧派果奶", damage: 812177, time: '2020,6,4,7,42'},
			{name: "灼眼的Saber", damage: 605591, time: '2020,6,4,8,18'},
			{name: "keiko", damage: 817479, time: '2020,6,4,9,46'},
			{name: "福尔康", damage: 479922, time: '2020,6,4,9,53'},
			{name: "手手", damage: 840867, time: '2020,6,4,10,20'},
			{name: "何等的寂寞", damage: 742189, time: '2020,6,4,10,22'},
			{name: "初心如故", damage: 435438, time: '2020,6,4,10,25'},
			{name: "初心如故", damage: 778582, time: '2020,6,4,10,28'},
			{name: "宋寂", damage: 681594, time: '2020,6,4,14,0'},
			{name: "Otaku", damage: 733487, time: '2020,6,4,14,19'},
			{name: "黑椿", damage: 639154, time: '2020,6,4,14,54'},
			{name: "夜雨纷扬", damage: 856849, time: '2020,6,4,15,3'},
			{name: "福尔康", damage: 718973, time: '2020,6,4,15,15'},
			{name: "金色之泪", damage: 753482, time: '2020,6,4,15,21'},
			{name: "八云蓝", damage: 740424, time: '2020,6,4,15,30'},
			{name: "池霜", damage: 784937, time: '2020,6,4,15,39'},
			{name: "我群最菜", damage: 790358, time: '2020,6,4,15,41'},
			{name: "机智的阿斗", damage: 759750, time: '2020,6,4,15,51'},
			{name: "以摸多", damage: 793587, time: '2020,6,4,15,57'},
			{name: "好好先生", damage: 741871, time: '2020,6,4,15,59'},
			{name: "黑喵", damage: 732235, time: '2020,6,4,16,15'},
			{name: "迪卢木多", damage: 749377, time: '2020,6,4,16,18'},
			{name: "戏言君", damage: 0, time: '2020,6,4,16,34'},
			{name: "魂魄妖梦", damage: 612860, time: '2020,6,4,16,53'},
			{name: "一起学猫叫", damage: 182305, time: '2020,6,4,16,56'},
		]
	},
	{
		day: 5,
		bossIdx: 26,
		log: [
			{name: "一起学猫叫", damage: 626599, time: '2020,6,4,17,3'},
			{name: "常磐丁香", damage: 997319, time: '2020,6,4,17,4'},
			{name: "爱丽丝", damage: 989796, time: '2020,6,4,17,12'},
			{name: "幽蓝", damage: 872322, time: '2020,6,4,17,21'},
			{name: "打个大西瓜", damage: 859216, time: '2020,6,4,17,34'},
			{name: "长星夜烁", damage: 871033, time: '2020,6,4,17,39'},
			{name: "咸鱼", damage: 956270, time: '2020,6,4,17,40'},
		]
	},
	{
		day: 5,
		bossIdx: 27,
		log: [
			{name: "咸鱼", damage: 200174, time: '2020,6,4,17,42'},
			{name: "灼眼的Saber", damage: 1010542, time: '2020,6,4,17,43'},
			{name: "常磐丁香", damage: 986035, time: '2020,6,4,17,43'},
			{name: "打个大西瓜", damage: 1019954, time: '2020,6,4,17,43'},
			{name: "咸鱼", damage: 861482, time: '2020,6,4,17,44'},
			{name: "欧派果奶", damage: 1080952, time: '2020,6,4,17,45'},
			{name: "keiko", damage: 970672, time: '2020,6,4,17,45'},
			{name: "我群最菜", damage: 1081304, time: '2020,6,4,17,50'},
			{name: "何等的寂寞", damage: 978993, time: '2020,6,4,17,51'},
		]
	},
	{
		day: 5,
		bossIdx: 28,
		log: [
			{name: "何等的寂寞", damage: 119477, time: '2020,6,4,17,52'},
			{name: "八云蓝", damage: 622927, time: '2020,6,4,17,57'},
			{name: "香浓朱古力", damage: 616661, time: '2020,6,4,17,58'},
			{name: "福尔康", damage: 738681, time: '2020,6,4,17,58'},
			{name: "好好先生", damage: 679226, time: '2020,6,4,17,58'},
			{name: "夜雨纷扬", damage: 643756, time: '2020,6,4,18,2'},
			{name: "黑喵", damage: 625028, time: '2020,6,4,18,2'},
			{name: "池霜", damage: 635654, time: '2020,6,4,18,4'},
			{name: "幽蓝", damage: 694181, time: '2020,6,4,18,5'},
			{name: "以摸多", damage: 688863, time: '2020,6,4,18,10'},
			{name: "初心如故", damage: 670016, time: '2020,6,4,18,12'},
			{name: "机智的阿斗", damage: 748115, time: '2020,6,4,18,14'},
			{name: "黑椿", damage: 676553, time: '2020,6,4,18,37'},
			{name: "爱丽丝", damage: 623683, time: '2020,6,4,18,47'},
			{name: "戏言君", damage: 658034, time: '2020,6,4,18,48'},
			{name: "长星夜烁", damage: 538573, time: '2020,6,4,18,53'},
			{name: "长星夜烁", damage: 20572, time: '2020,6,4,18,54'},
		]
	},
	{
		day: 5,
		bossIdx: 29,
		log: [
			{name: "长星夜烁", damage: 497322, time: '2020,6,4,18,56'},
			{name: "欧派果奶", damage: 772192, time: '2020,6,4,18,58'},
			{name: "手手", damage: 933234, time: '2020,6,4,18,59'},
			{name: "灼眼的Saber", damage: 608495, time: '2020,6,4,19,1'},
			{name: "池霜", damage: 661272, time: '2020,6,4,19,7'},
			{name: "机智的阿斗", damage: 671133, time: '2020,6,4,19,12'},
			{name: "金色之泪", damage: 677372, time: '2020,6,4,19,13'},
			{name: "打个大西瓜", damage: 617985, time: '2020,6,4,19,15'},
			{name: "以摸多", damage: 730528, time: '2020,6,4,19,16'},
			{name: "手手", damage: 810481, time: '2020,6,4,19,16'},
			{name: "香浓朱古力", damage: 617985, time: '2020,6,4,19,16'},
			{name: "宋寂", damage: 728750, time: '2020,6,4,19,17'},
			{name: "我群最菜", damage: 713709, time: '2020,6,4,19,17'},
			{name: "宋寂", damage: 719931, time: '2020,6,4,19,20'},
			{name: "一起学猫叫", damage: 650794, time: '2020,6,4,19,20'},
			{name: "爱丽丝", damage: 534305, time: '2020,6,4,19,21'},
			{name: "一起学猫叫", damage: 694209, time: '2020,6,4,19,24'},
			{name: "何等的寂寞", damage: 617359, time: '2020,6,4,19,26'},
		]
	},
	{
		day: 5,
		bossIdx: 30,
		log: [
			{name: "何等的寂寞", damage: 211890, time: '2020,6,4,19,29'},
			{name: "好好先生", damage: 436630, time: '2020,6,4,19,36'},
			{name: "八云蓝", damage: 454045, time: '2020,6,4,19,39'},
			{name: "keiko", damage: 445854, time: '2020,6,4,19,41'},
			{name: "咸鱼", damage: 460415, time: '2020,6,4,19,48'},
			{name: "戏言君", damage: 445505, time: '2020,6,4,19,51'},
			{name: "常磐丁香", damage: 482792, time: '2020,6,4,19,57'},
			{name: "夜雨纷扬", damage: 483926, time: '2020,6,4,19,59'},
			{name: "黑椿", damage: 521911, time: '2020,6,4,20,4'},
			{name: "Otaku", damage: 612065, time: '2020,6,4,20,21'},
			{name: "Otaku", damage: 467474, time: '2020,6,4,20,34'},
			{name: "金色之泪", damage: 370323, time: '2020,6,4,20,49'},
			{name: "幽蓝", damage: 403820, time: '2020,6,4,20,55'},
			{name: "魂魄妖梦", damage: 583664, time: '2020,6,4,22,15'},
			{name: "魂魄妖梦", damage: 405647, time: '2020,6,4,22,19'},
			{name: "迪卢木多", damage: 650881, time: '2020,6,4,22,29'},
			{name: "迪卢木多", damage: 471303, time: '2020,6,4,23,1'},
			{name: "香浓朱古力", damage: 542293, time: '2020,6,5,1,58'},
			{name: "黑喵", damage: 387573, time: '2020,6,5,3,0'},
		]
	},
	{
		day: 6,
		bossIdx: 30,
		log: [
			{name: "黑椿", damage: 741786, time: '2020,6,5,6,3'},
			{name: "福尔康", damage: 440903, time: '2020,6,5,7,34'},
			{name: "初心如故", damage: 746046, time: '2020,6,5,8,8'},
			{name: "金色之泪", damage: 741471, time: '2020,6,5,8,10'},
			{name: "初心如故", damage: 441313, time: '2020,6,5,8,20'},
			{name: "欧派果奶", damage: 776575, time: '2020,6,5,8,29'},
			{name: "夜雨纷扬", damage: 812536, time: '2020,6,5,8,32'},
			{name: "福尔康", damage: 670152, time: '2020,6,5,8,35'},
			{name: "手手", damage: 810930, time: '2020,6,5,8,40'},
			{name: "灼眼的Saber", damage: 679265, time: '2020,6,5,8,49'},
			{name: "我群最菜", damage: 810856, time: '2020,6,5,11,3'},
			{name: "宋寂", damage: 673440, time: '2020,6,5,11,17'},
			{name: "keiko", damage: 744822, time: '2020,6,5,11,23'},
			{name: "Otaku", damage: 680386, time: '2020,6,5,11,33'},
			{name: "好好先生", damage: 755917, time: '2020,6,5,11,35'},
			{name: "机智的阿斗", damage: 635591, time: '2020,6,5,11,42'},
		]
	},
	{
		day: 6,
		bossIdx: 31,
		log: [
			{name: "机智的阿斗", damage: 95902, time: '2020,6,5,11,43'},
			{name: "常磐丁香", damage: 883697, time: '2020,6,5,11,47'},
			{name: "打个大西瓜", damage: 859893, time: '2020,6,5,11,52'},
			{name: "咸鱼", damage: 970896, time: '2020,6,5,11,57'},
			{name: "戏言君", damage: 990047, time: '2020,6,5,12,4'},
			{name: "以摸多", damage: 949810, time: '2020,6,5,12,40'},
			{name: "迪卢木多", damage: 975059, time: '2020,6,5,13,2'},
			{name: "咸鱼", damage: 274696, time: '2020,6,5,13,14'},
		]
	},
	{
		day: 6,
		bossIdx: 32,
		log: [
			{name: "咸鱼", damage: 521385, time: '2020,6,5,13,16'},
			{name: "好好先生", damage: 1018355, time: '2020,6,5,13,17'},
			{name: "灼眼的Saber", damage: 1018732, time: '2020,6,5,13,17'},
			{name: "常磐丁香", damage: 1011808, time: '2020,6,5,13,18'},
			{name: "迪卢木多", damage: 972358, time: '2020,6,5,13,19'},
			{name: "何等的寂寞", damage: 1026621, time: '2020,6,5,13,19'},
			{name: "打个大西瓜", damage: 956894, time: '2020,6,5,13,19'},
			{name: "我群最菜", damage: 967865, time: '2020,6,5,13,19'},
			{name: "戏言君", damage: 941580, time: '2020,6,5,13,19'},
		]
	},
	{
		day: 6,
		bossIdx: 33,
		log: [
			{name: "福尔康", damage: 692295, time: '2020,6,5,13,21'},
			{name: "戏言君", damage: 337429, time: '2020,6,5,13,21'},
			{name: "以摸多", damage: 650218, time: '2020,6,5,13,22'},
			{name: "夜雨纷扬", damage: 635257, time: '2020,6,5,13,23'},
			{name: "欧派果奶", damage: 695826, time: '2020,6,5,13,23'},
			{name: "初心如故", damage: 682444, time: '2020,6,5,13,29'},
			{name: "八云蓝", damage: 707234, time: '2020,6,5,13,49'},
			{name: "香浓朱古力", damage: 653184, time: '2020,6,5,13,51'},
			{name: "金色之泪", damage: 500463, time: '2020,6,5,13,53'},
			{name: "keiko", damage: 670417, time: '2020,6,5,13,57'},
			{name: "长星夜烁", damage: 634700, time: '2020,6,5,14,37'},
			{name: "幽蓝", damage: 678633, time: '2020,6,5,14,42'},
			{name: "机智的阿斗", damage: 648937, time: '2020,6,5,16,42'},
			{name: "黑椿", damage: 705429, time: '2020,6,5,16,49'},
			{name: "黑喵", damage: 717395, time: '2020,6,5,17,15'},
			{name: "一起学猫叫", damage: 378548, time: '2020,6,5,17,16'},
			{name: "一起学猫叫", damage: 11591, time: '2020,6,5,17,19'},
		]
	},
	{
		day: 6,
		bossIdx: 34,
		log: [
			{name: "一起学猫叫", damage: 727785, time: '2020,6,5,17,22'},
			{name: "keiko", damage: 549912, time: '2020,6,5,17,23'},
			{name: "欧派果奶", damage: 755723, time: '2020,6,5,17,23'},
			{name: "手手", damage: 931511, time: '2020,6,5,17,30'},
			{name: "香浓朱古力", damage: 679832, time: '2020,6,5,17,30'},
			{name: "灼眼的Saber", damage: 683211, time: '2020,6,5,17,31'},
			{name: "八云蓝", damage: 644764, time: '2020,6,5,17,34'},
			{name: "我群最菜", damage: 714543, time: '2020,6,5,17,34'},
			{name: "宋寂", damage: 711737, time: '2020,6,5,17,39'},
			{name: "手手", damage: 858026, time: '2020,6,5,17,41'},
			{name: "宋寂", damage: 605977, time: '2020,6,5,17,44'},
			{name: "夜雨纷扬", damage: 754415, time: '2020,6,5,17,51'},
			{name: "池霜", damage: 840384, time: '2020,6,5,17,58'},
			{name: "幽蓝", damage: 653691, time: '2020,6,5,18,3'},
			{name: "长星夜烁", damage: 489805, time: '2020,6,5,18,9'},
			{name: "好好先生", damage: 549813, time: '2020,6,5,18,10'},
			{name: "金色之泪", damage: 632754, time: '2020,6,5,18,27'},
			{name: "打个大西瓜", damage: 216117, time: '2020,6,5,18,32'},
		]
	},
	{
		day: 6,
		bossIdx: 35,
		log: [
			{name: "打个大西瓜", damage: 233312, time: '2020,6,5,18,33'},
			{name: "咸鱼", damage: 412922, time: '2020,6,5,18,42'},
			{name: "池霜", damage: 617423, time: '2020,6,5,18,43'},
			{name: "爱丽丝", damage: 554166, time: '2020,6,5,18,47'},
			{name: "池霜", damage: 786992, time: '2020,6,5,18,53'},
			{name: "爱丽丝", damage: 393061, time: '2020,6,5,18,55'},
			{name: "长星夜烁", damage: 625403, time: '2020,6,5,19,0'},
			{name: "爱丽丝", damage: 559627, time: '2020,6,5,19,1'},
			{name: "幽蓝", damage: 746937, time: '2020,6,5,19,3'},
			{name: "常磐丁香", damage: 480479, time: '2020,6,5,19,33'},
			{name: "黑椿", damage: 472815, time: '2020,6,5,19,42'},
			{name: "香浓朱古力", damage: 599362, time: '2020,6,5,19,49'},
			{name: "戏言君", damage: 473761, time: '2020,6,5,19,53'},
			{name: "黑喵", damage: 563577, time: '2020,6,5,20,13'},
			{name: "黑喵", damage: 432351, time: '2020,6,5,20,26'},
			{name: "机智的阿斗", damage: 507639, time: '2020,6,5,20,39'},
			{name: "以摸多", damage: 479709, time: '2020,6,5,20,45'},
			{name: "魂魄妖梦", damage: 564790, time: '2020,6,5,20,53'},
			{name: "何等的寂寞", damage: 661553, time: '2020,6,5,20,53'},
		]
	},
];
