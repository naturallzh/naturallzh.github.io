let vm = new Vue({
  el: '#index-body',
  data: {
    nameMap: [],
    mobData: [],
    actionData: [],

    loadingMask: true,

    time: {
      updateTime: new Date(2020,5,2,12,34),
      startTime: new Date(2020,5,2,5),
      curTime: new Date(),
      endTime: new Date(2020,5,7,23,59,59),
      countdownTimer: null,
    },
    genSit: null,   // general situation

    historyDateObj: {},
    damageFigurePara: [],

    popupFlags: {
      damageFigure: false,
      historyLogDone: false,
      historyLogTodo: false,
    },
  },

  computed: {
    damageFigureData :function () {
      return this.playerTotalDamageByDay(this.damageFigurePara);
    },

    damageFigureSelectAll: {
      get: function() {
        let flag = true;
        for (let i=0;i<this.damageFigurePara.length;i++) {
          flag = flag&&this.damageFigurePara[i];
        }
        return flag;
      },
      set: function () {}
    },
  },

  beforeCreate () {},
  created () {
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

    this.initData();
    this.checkData();
  },

  beforeMount () {},
  mounted () {
    this.loadingMask = false;

    // boss伤害分数系数
    // const dateNumArr = [4,5,6,7,8];
    // const nameArr = ["池霜"];
    // const res = this.calcBossContributeFactor(dateNumArr, nameArr);
    // console.log(res);
  },

  destroyed () {
    clearInterval(this.time.countdownTimer);
  },

  methods: {

    initData: function () {
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
        this.damageFigurePara[i-1] = true;
      }
      this.damageFigurePara[this.genSit.curDay-1] = true;
    },

    // 检查输入(人名和伤害)
    checkData: function () {
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
        for (let j=0; j<actionData[i].log.length; j++) {
          healthSum += actionData[i].log[j].damage;
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
          }
          console.log("boss-" + curBossIdx + ": " + remainHealth);
          healthSum = 0;
          curBossIdx++;
        }
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
    },

    processDateStr: function (dateObj) {
      let dateStr = "";
      dateStr += dateObj.getFullYear() + "年";
      dateStr += (dateObj.getMonth()+1) + "月";
      dateStr += dateObj.getDate() + "日 ";
      dateStr += dateObj.getHours() + ":";
      dateStr += dateObj.getMinutes()<10?"0"+dateObj.getMinutes():dateObj.getMinutes();
      return dateStr;
    },

    ms2timeStr: function (ms) {
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
    },

    actionLogByDay: function (date) {

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
    },

    playerTotalDamageByDay: function (dateArr) {
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
    },

    selectDamageFigureAll: function() {
      const arr = [];
      for (let i=0;i<this.damageFigurePara.length;i++) {
        arr[i] = !this.damageFigureSelectAll;
      }
      this.damageFigurePara = arr;
    },

    // 根据进度百分比(剩余时间、血量等)计算rgb字符串 100%为绿 0%为红
    processColor: function (perc) {
      let rgbStr = "rgb(";
      rgbStr += parseInt((1-perc) * 255) + ",";
      rgbStr += parseInt(perc * 255) + ",0)";
      return rgbStr;
    },

    shiftHistoryLogDone: function (date) {
      this.popupFlags.historyLogDone = !this.popupFlags.historyLogDone;
      date!==null?this.historyDateObj.curSelect = date:"";
    },
    shiftHistoryLogTodo: function (date) {
      this.popupFlags.historyLogTodo = !this.popupFlags.historyLogTodo;
      date!==null?this.historyDateObj.curSelect = date:"";
    },
    shiftDamageFigure: function () {
      this.popupFlags.damageFigure = !this.popupFlags.damageFigure;
    },

    // 计算代数余子式
    calcCofactor: function (arr, i, j) {
      const resArr = [];  // 剩余矩阵
      for (let m=0;m<arr.length;m++) {
        if (m===i) {continue}
        const colArr = [];
        for (let n=0;n<arr[0].length;n++) {
          if (n===j) {continue}
          colArr.push(arr[m][n])
        }
        resArr.push(colArr);
      }

      // 代数余子式前面的 (-1)^(i+1 + j+1)系数
      const factor = (i+j+2)%2===0?1:-1;
      return factor * this.calcDet(resArr);
    },

    // 计算行列式
    calcDet: function (arr) {
      if (arr.length===1) {return arr[0]}
      let res = 0;
      for (let j=0;j<arr.length;j++) {
        res += arr[0][j] * this.calcCofactor(arr, 0, j);
      }
      return res;
    },

    // 计算伴随矩阵
    calcAdjointMatrix: function (arr) {
      const resArr = [];
      for (let i=0;i<arr.length;i++) {
        resArr[i] = [];
        for (let j=0;j<arr.length;j++) {
          resArr[i][j] = this.calcCofactor(arr, j, i);
        }
      }
      return resArr;
    },

    // 计算多元一次方程的解
    calcMatrixFactor: function (arrA, arrB) {
      const resArr = [];
      const adjointMatrixA = this.calcAdjointMatrix(arrA);
      const detA = this.calcDet(arrA);
      for (let i=0;i<adjointMatrixA.length;i++) {
        let sum = 0;
        for (let j=0;j<arrB.length;j++) {
          sum += adjointMatrixA[i][j] * arrB[j];
        }
        resArr[i] = sum/detA;
      }
      return resArr;
    },

    // 计算BOSS伤害贡献值系数
    calcBossContributeFactor: function (dateNumArr, nameArr) {
      const N = 5;
      const DAY = this.genSit.curDay;

      // 将dateNumArr转换成为[[t,f,f,f],[f,t,f,f],[f,f,t,f],[f,f,f,t]]形式
      const dateArr = [];
      for (let i=0;i<dateNumArr.length;i++) {
        dateArr[i] = [];
        for (let j=0;j<DAY;j++) {
          dateArr[i][j] = j + 1 === dateNumArr[i];
        }
      }

      const dataArrAll = [];
      for (let i=0;i<5;i++) {
        dataArrAll[i] = [];
        const dataAll = this.playerTotalDamageByDay(dateArr[i]);
        for (let j=0;j<dataAll.length;j++) {
          for (let k=0;k<nameArr.length;k++) {
            if (dataAll[j].name === nameArr[k]) {
              dataAll[j].matrixASub = [0,0,0,0,0];
              for (let l=0;l<dataAll[j].detail.length;l++) {
                dataAll[j].matrixASub[(dataAll[j].detail[l].bossIdx-1)%5] += dataAll[j].detail[l].damage;
              }
              dataArrAll[i].push(dataAll[j]);
            }
          }
        }
      }

      const dataArr = [];
      for (let i=0;i<nameArr.length;i++) {
        dataArr[i] = {};
        dataArr[i].name = nameArr[i];
        dataArr[i].matrixA = [];
        dataArr[i].matrixB = [];
        for (let j=0;j<5;j++) {
          for (let k=0;k<dataArrAll[j].length;k++) {
            if (dataArrAll[j][k].name === dataArr[i].name) {
              dataArr[i].matrixA.push(dataArrAll[j][k].matrixASub);
              dataArr[i].matrixB.push(1000000);
            }
          }
        }
        dataArr[i].factorArr = this.calcMatrixFactor(dataArr[i].matrixA,dataArr[i].matrixB);

        // for (let j=1;j<5;j++) {
        //   dataArr[i].factorArr[j] = dataArr[i].factorArr[j]/dataArr[i].factorArr[0];
        // }
        // dataArr[i].factorArr[0] = 1;
      }
      console.log(dataArr[0].matrixA);
      console.log(dataArr[0].factorArr);
    }

  }
});