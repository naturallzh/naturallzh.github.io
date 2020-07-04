// exports.myFun = function () {
// 	console.log('this is my function')
// }

function initData () {
	if (new Date() > this.time.endTime) {
		this.time.curTime = this.time.endTime;
	}
	else {
		this.time.countdownTimer = setInterval(()=>{
			if (new Date() > this.time.endTime) {
				this.time.curTime = this.time.endTime;
				clearInterval(this.time.countdownTimer);
			}
			else {
				this.time.curTime = new Date();
			}
		},498);
	}

	if (getQueryString("title")) {document.title = getQueryString("title");}

	this.nameMap = DATA_nameMap;
	this.mobData = DATA_mobData;
	this.actionData = DATA_actionData;

	this.genSit = {
		curDay: Math.ceil((this.time.curTime - this.time.startTime)/1000/3600/24),
		curBossIdx: this.actionData[this.actionData.length-1].bossIdx,
		remainHealth: "",
		remainHealthPer: "",
	};

	this.historyDateObj = {
		curSelect: 0,
		dateArr: [],
	};
	for (let i=1;i<=this.genSit.curDay;i++) {
		this.historyDateObj.dateArr[i-1] = i;
		this.damageFigurePara[i-1] = false;
	}
	this.damageFigurePara[this.genSit.curDay-1] = true;
}

// 检查输入(人名和伤害)
function checkData () {
	const nameMap = this.nameMap;
	const mobData = this.mobData;
	const actionData = this.actionData;

	for (let i=0; i<actionData.length; i++) {
		for (let j=0; j<actionData[i].log.length; j++) {
			const nameStr = actionData[i].log[j].name;
			if (!checkName(nameStr)) {
				console.log(actionData[i].day + "-" + actionData[i].bossIdx + "-" + nameStr);
			}
		}
	}
	console.log("name check finish");
	console.log("%==============================%");

	let healthSum = 0;
	let curBossIdx = 1;
	for (let i=0; i<actionData.length; i++) {
		let maxDamage = 0;
		let totalDamage = 0;
		for (let j=0; j<actionData[i].log.length; j++) {
			healthSum += actionData[i].log[j].damage;
			totalDamage += actionData[i].log[j].damage;
			if (actionData[i].log[j].damage>maxDamage) {
				maxDamage = actionData[i].log[j].damage;
			}
			if (actionData[i].log[j].damage===0) {
				actionData[i].log[j].desc = "吞刀";
			}
		}
		actionData[i].maxDamage = maxDamage;
		const remainHealth = (mobData[curBossIdx-1].health-healthSum);
		if (remainHealth <= 0) {
			if (remainHealth === 0) {
				actionData[i].log[actionData[i].log.length-1].desc = "尾刀";
			}
			else if (remainHealth < 0) {
				actionData[i].log[actionData[i].log.length-1].desc = "合刀";
				actionData[i].log[actionData[i].log.length-1].realDamage = actionData[i].log[actionData[i].log.length-1].damage + remainHealth;
				totalDamage += remainHealth;
			}
			console.log("boss-" + curBossIdx + ": " + remainHealth);
			healthSum = 0;
			curBossIdx++;
			// bossIdx 扩容
			if (curBossIdx===mobData.length) {
				mobData[curBossIdx] = {bossIdx: curBossIdx+1, health: 6000000, scoreFactor: 1.2, name: "龙", round: curBossIdx/5+1, bossNum: 1, bgC: "background: #322"}
				mobData[curBossIdx+1] = {bossIdx: curBossIdx+2, health: 8000000, scoreFactor: 1.2, name: "鸟", round: curBossIdx/5+1, bossNum: 2, bgC: "background: #622"}
				mobData[curBossIdx+2] = {bossIdx: curBossIdx+3, health: 10000000, scoreFactor: 1.5, name: "花", round: curBossIdx/5+1, bossNum: 3, bgC: "background: #c22"}
				mobData[curBossIdx+3] = {bossIdx: curBossIdx+4, health: 12000000, scoreFactor: 1.7, name: "巨", round: curBossIdx/5+1, bossNum: 4, bgC: "background: #922"}
				mobData[curBossIdx+4] = {bossIdx: curBossIdx+5, health: 20000000, scoreFactor: 2, name: "双", round: curBossIdx/5+1, bossNum: 5, bgC: "background: #f22"}
			}
		}
		actionData[i].totalDamage = totalDamage;
	}
	this.genSit.curBossIdx = curBossIdx;
	this.genSit.remainHealth = mobData[curBossIdx-1].health-healthSum;
	this.genSit.remainHealthPer = (this.genSit.remainHealth/mobData[curBossIdx-1].health*100).toFixed(2);
	console.log("boss-" + curBossIdx + ": " + (mobData[curBossIdx-1].health-healthSum));
	console.log("mob health check finish");
	console.log("%==============================%");

	function checkName(nameStr) {
		for (let i=0; i<nameMap.length; i++) {
			if (nameMap[i].name === nameStr) {
				return true;
			}
		}
		return false;
	}
}

function processDateStr (dateObj) {
	let dateStr = "";
	dateStr += dateObj.getFullYear() + "年";
	dateStr += (dateObj.getMonth()+1) + "月";
	dateStr += dateObj.getDate() + "日 ";
	dateStr += dateObj.getHours() + ":";
	dateStr += dateObj.getMinutes()<10?"0"+dateObj.getMinutes():dateObj.getMinutes();
	return dateStr;
}

function ms2timeStr (ms) {
	let timeStr = "";
	const D = Math.floor(ms/1000/3600/24);
	ms -= D*1000*3600*24;
	const H = Math.floor(ms/1000/3600);
	ms -= H*1000*3600;
	const M = Math.floor(ms/1000/60);
	ms -= M*1000*60;
	const S = Math.floor(ms/1000);
	timeStr = D+"天 "+(H>=10?"":"0")+H+":"+(M>=10?"":"0")+M+":"+(S>=10?"":"0")+S;
	return timeStr;
}

function actionLogByDay (date) {

	const actionData = this.actionData;
	const nameMap = this.nameMap;

	const actionLog = {
		todo: [],
		done: [],
		todoNum: 0,
		doneNum: 0,
	};

	for (let i=0; i<nameMap.length; i++) {
		actionLog.todo[i] = {name: nameMap[i].name, todoNum: 3};
		actionLog.todoNum += 3;
	}

	for (let i=0; i<actionData.length; i++) {
		if (actionData[i].day !== date) {continue;}
		actionLog.done.push(actionData[i]);
		for (let j=0; j<actionData[i].log.length; j++) {
			if (actionData[i].log[j].desc==="合刀" || actionData[i].log[j].desc==="尾刀") {}
			else {
				actionLog.doneNum++;
				actionLog.todoNum--;
				for (let k=0; k<actionLog.todo.length; k++) {
					if (actionLog.todo[k].name === actionData[i].log[j].name) {
						actionLog.todo[k].todoNum--;
					}
				}
			}
		}
	}
	return actionLog;
}

function playerTotalDamageByDay (dateArr) {
	const nameMap = this.nameMap;
	const mobData = this.mobData;
	const actionData = this.actionData;

	const dateArr2Num = [];
	for (let i=0;i<dateArr.length;i++) {
		if (dateArr[i]) {
			dateArr2Num.push(i+1);
		}
	}
	dateArr = dateArr2Num;

	const outputArr = [];
	for (let i=0;i<nameMap.length;i++) {
		outputArr[i] = {
			name: nameMap[i].name,
			total: 0,
			detail: []
		}
	}

	let dateIdx = 0;
	for (let i=0;i<actionData.length;i++) {
		if (dateArr[dateIdx] < actionData[i].day) {dateIdx++}
		if (dateIdx>dateArr.length-1) {break;}
		if (dateArr[dateIdx] > actionData[i].day) {continue}

		for (let j=0;j<actionData[i].log.length;j++) {
			for (let k=0;k<outputArr.length;k++) {
				if (actionData[i].log[j].name===outputArr[k].name) {
					outputArr[k].total += actionData[i].log[j].realDamage?actionData[i].log[j].realDamage:actionData[i].log[j].damage;
					let flag = true;
					for (let l=0;l<outputArr[k].detail.length;l++) {
						if (outputArr[k].detail[l].bossIdx===actionData[i].bossIdx) {
							outputArr[k].detail[l].damage += actionData[i].log[j].realDamage?actionData[i].log[j].realDamage:actionData[i].log[j].damage;
							flag = false;
							break;
						}
					}
					if (flag) {
						outputArr[k].detail.push({bossIdx: actionData[i].bossIdx, damage: actionData[i].log[j].realDamage?actionData[i].log[j].realDamage:actionData[i].log[j].damage});
					}
				}
			}
		}
	}

	// 排序
	let resArr = [];
	resArr[0] = outputArr[0];
	for (let i=1;i<outputArr.length;i++) {
		if (outputArr[i].total >= resArr[0].total) {
			resArr.splice(0,0,outputArr[i]);
			continue;
		}
		if (outputArr[i].total <= resArr[resArr.length-1].total) {
			resArr.push(outputArr[i]);
			continue;
		}
		for (let j=0;j<resArr.length-1;j++) {
			if (outputArr[i].total > resArr[j+1].total && outputArr[i].total < resArr[j].total) {
				resArr.splice(j+1,0,outputArr[i]);
				break;
			}
		}
	}
	// this.damageFigureData = resArr;
	// console.log(resArr)
	return resArr;
}

function selectDamageFigureAll () {
	const arr = [];
	for (let i=0;i<this.damageFigurePara.length;i++) {
		arr[i] = !this.damageFigureSelectAll;
	}
	this.damageFigurePara = arr;
}

// 根据进度百分比(剩余时间、血量等)计算rgb字符串 100%为绿 0%为红
function processColor (perc) {
	let rgbStr = "rgb(";
	if (perc>=0.5) {
		perc = (1-perc) * 2;
		rgbStr += perc*255 + ",255,0)";
	}
	else {
		perc = perc * 2;
		rgbStr += "255," + perc*255 + ",0)";
	}
	return rgbStr;
}

function highlightLog (nameStr) {
	this.highlightLogName = nameStr;
	//this.$forceUpdate();
}

function processDamageByBoss (bossNum) {
	const nameMap = this.nameMap;
	const mobData = this.mobData;
	const actionData = this.actionData;
	const dataArr = [];

	for (let i=0;i<nameMap.length;i++) {
		dataArr[i] = {name: nameMap[i].name, damage: 0};
	}
	for (let i=0;i<actionData.length;i++) {
		if (bossNum !== (actionData[i].bossIdx-1)%5) {continue;}
		for (let j=0;j<actionData[i].log.length;j++) {
			for (let k=0;k<dataArr.length;k++) {
				if (dataArr[k].name === actionData[i].log[j].name) {
					dataArr[k].damage += actionData[i].log[j].realDamage?actionData[i].log[j].realDamage:actionData[i].log[j].damage;
					break;
				}
			}
		}
	}

	let resArr = [];
	resArr[0] = dataArr[0];
	for (let i=1;i<dataArr.length;i++) {
		if (dataArr[i].damage > resArr[0].damage) {
			resArr = [dataArr[i]].concat(resArr);
		}
		else if (dataArr[i].damage < resArr[resArr.length-1].damage) {
			resArr.push(dataArr[i]);
		}
		else {
			for (let j=0;j<resArr.length-1;j++) {
				if (dataArr[i].damage <= resArr[j].damage && dataArr[i].damage >= resArr[j+1].damage) {
					resArr.splice(j+1,0,dataArr[i]);
					break;
				}
			}
		}
	}
	// console.log(resArr);
	this.damageByBoss = resArr;
	// return resArr;
}

function gotoUrl (urlStr) {
	window.open(urlStr);
}

function shiftHistoryLogDone (date) {
	this.popupFlags.historyLogDone = !this.popupFlags.historyLogDone;
	date!==null?this.historyDateObj.curSelect = date:"";
}
function shiftHistoryLogTodo (date) {
	this.popupFlags.historyLogTodo = !this.popupFlags.historyLogTodo;
	date!==null?this.historyDateObj.curSelect = date:"";
}
function shiftDamageFigure () {
	this.popupFlags.damageFigure = !this.popupFlags.damageFigure;
}
function shiftDamageByBossFigure () {
	this.popupFlags.damageByBoss = !this.popupFlags.damageByBoss;
}