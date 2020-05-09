let vm = new Vue({
  el: '#index-body',
  data: {
    nameMap: [],
    mobParas: [],
    actionData: [],
    genSit: {},   // general situation
    time: {
      startTime: new Date(2020,4,7,5),
      curTime: new Date(),
      endTime: new Date(2020,4,14,23,59),
      updateTime: new Date(2020,4,9,8,50),
    },
    showTodayDetail: false,
  },

  beforeCreate () {},
  created () {
    this.genSit = {
      curRound: "",
      curBoss: "",
      remainHealth: "",
      actions: [
        {
          todo: [],
          doneNum: 0,
          todoNum: 90,
        }
      ]
    };
    this.importData();
    this.time.updateTimeStr = this.processDateStr(this.time.updateTime);
  },
  beforeMount () {},

  mounted () {
    this.checkData();
    this.processGenSit();
  },

  computed: {},

  methods: {

    importData: function () {
      this.nameMap = DATA_nameMap;
      this.mobParas = DATA_mobParas;
      this.actionData = DATA_actionData;
    },

    // 检查输入(人名和伤害)
    checkData: function () {
      const nameMap = this.nameMap;
      const mobParas = this.mobParas;
      const actionData = this.actionData;
      const genSit = this.genSit;

      for (let i=0; i<actionData.length; i++) {
        for (let j=0; j<actionData[i].log.length; j++) {
          const nameStr = actionData[i].log[j].name;
          if (!checkName(nameStr)) {
            console.log(actionData[i].day + "-" + actionData[i].bossIdx + "-" + nameStr);
          }
        }
      }
      console.log("name check finish");
      console.log("==============================");

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
      console.log("boss-" + curBossIdx + ": " + (mobParas[curBossIdx-1].health-healthSum));
      console.log("mob health check finish");
      console.log("==============================");

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

      const curBossIdx = actionData[actionData.length-1].bossIdx;
      let genSit = this.genSit;
      genSit.curRound = Math.ceil(curBossIdx / 5);
      genSit.curBoss = curBossIdx - (genSit.curRound - 1) * 5;
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
              }
              // 以上是尾刀校正
              for (let k=0; k<actionsArr[0].todo.length; k++) {
                if (actionsArr[0].todo[k].name === actionData[i].log[j].name) {
                  actionsArr[0].todo[k].todoNum--;
                  if (actionsArr[0].todo[k].todoNum===0) {
                    actionsArr[0].todo.splice(k,1);
                  }
                }
              }
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

    shiftTodayDetail: function () {
      this.showTodayDetail = !this.showTodayDetail;
    }
  }
});