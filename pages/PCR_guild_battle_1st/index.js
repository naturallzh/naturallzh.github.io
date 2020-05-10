let vm = new Vue({
  el: '#index-body',
  data: {
    nameMap: [],
    mobParas: [],
    combineRule: [],
    actionData: [],

    time: {
      startTime: new Date(2020,4,7,5),
      curTime: new Date(),
      endTime: new Date(2020,4,14,23,59),
      updateTime: new Date(2020,4,11,0,5),
      countdownTimer: null,
    },
    genSit: null,   // general situation
    combineParas: {
      remainHealth: "",
      damageA: "",
      damageB: "",
    },


    popupFlags: {
      showTodayDetail: false,
      showTodayTodo: false,
    },
  },

  computed: {
    combineRes: function () {
      const _this = this;
      let {remainHealth, damageA, damageB} = this.combineParas;
      let res = [];
      const flag1 = remainHealth==parseInt(remainHealth);
      const flag2 = damageA==parseInt(damageA);
      const flag3 = damageB==parseInt(damageB);
      const flag4 = (parseInt(damageA) + parseInt(damageB)) > parseInt(remainHealth);
      const flag5 = parseInt(remainHealth)>0 && parseInt(damageA)>0 && parseInt(damageB)>0;
      if (flag1 && flag2 && flag3 && flag4 && flag5) {
        const num1 = parseInt(damageB)/(parseInt(remainHealth)-parseInt(damageA));
        const num2 = parseInt(damageA)/(parseInt(remainHealth)-parseInt(damageB));
        res = [calcRefund(num1),calcRefund(num2)];
      }

      function calcRefund(num) {
        for (let i=0;i<_this.combineRule.length-1;i++) {
          if (num<_this.combineRule[i+1].factor) {
            return _this.combineRule[i+1].refund;
          }
        }
        return 90;
      }
      return res;
    }
  },

  beforeCreate () {},
  created () {
    this.initData();
  },
  beforeMount () {},

  mounted () {
    this.checkData();
    this.processGenSit();
    this.countdownTimer = setInterval(()=>{this.time.curTime = new Date()},498);
  },

  destroyed () {
    clearInterval(this.countdownTimer);
  },

  methods: {

    initData: function () {
      this.genSit = {
        curBossIdx: 1,
        remainHealth: "",
        remainHealthPer: "",
        actions: [
          {
            todo: [],
            doneNum: 0,
            todoNum: 90,
          }
        ]
      };

      this.nameMap = DATA_nameMap;
      this.mobParas = DATA_mobParas;
      this.combineRule = DATA_combineRule;
      this.actionData = DATA_actionData;
    },

    // 检查输入(人名和伤害)
    checkData: function () {
      const nameMap = this.nameMap;
      const mobParas = this.mobParas;
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
        if (actionData[i].bossIdx !== curBossIdx) {
          console.log("boss-" + curBossIdx + ": " + (mobParas[curBossIdx-1].health-healthSum));
          healthSum = 0;
          curBossIdx = actionData[i].bossIdx;
        }
        for (let j=0; j<actionData[i].log.length; j++) {
          healthSum += actionData[i].log[j].damage;
        }
      }
      this.genSit.remainHealth = mobParas[curBossIdx-1].health-healthSum;
      this.genSit.remainHealthPer = (this.genSit.remainHealth/mobParas[curBossIdx-1].health*100).toFixed(2);
      console.log("boss-" + curBossIdx + ": " + (mobParas[curBossIdx-1].health-healthSum));
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

    processGenSit: function () {
      const actionData = this.actionData;
      const nameMap = this.nameMap;
      const time = this.time;
      const genSit = this.genSit;

      genSit.curBossIdx = actionData[actionData.length-1].bossIdx;
      genSit.actions = actionNumCount();

      this.genSit = genSit;
      //console.log(genSit.actions);

      function actionNumCount() {
        const curDay = Math.ceil((time.curTime - time.startTime)/1000/3600/24)
        let actionsArr = [];
        actionsArr[0] = {
          todo: [],
          doneNum: 0,
          todoNum: 90,
        };
        for (let i=0; i<nameMap.length; i++) {
          actionsArr[0].todo[i] = {name: nameMap[i].name, todoNum: 3};
        }

        for (let i=0; i<actionData.length; i++) {
          if (actionData[i].day === curDay) {
            actionsArr.push(actionData[i]);
            for (let j=0; j<actionData[i].log.length; j++) {
              if (j===actionData[i].log.length-1 && i<actionData.length-1) {}
              else {
                actionsArr[0].doneNum++;
                actionsArr[0].todoNum--;
                for (let k=0; k<actionsArr[0].todo.length; k++) {
                  if (actionsArr[0].todo[k].name === actionData[i].log[j].name) {
                    actionsArr[0].todo[k].todoNum--;
                    if (actionsArr[0].todo[k].todoNum===0) {
                      // actionsArr[0].todo.splice(k,1);
                    }
                  }
                }
              }
              // 以上是尾刀校正
            }
          }
        }
        return actionsArr;
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
      timeStr = D+"天 "+(H>10?"":"0")+H+":"+(M>10?"":"0")+M+":"+(S>10?"":"0")+S;
      return timeStr;
    },

    shiftTodayDetail: function () {
      this.popupFlags.showTodayDetail = !this.popupFlags.showTodayDetail;
    },
    shiftTodayTodo: function () {
      this.popupFlags.showTodayTodo = !this.popupFlags.showTodayTodo;
    }
  }
});