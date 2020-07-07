// import {myFun}  from '../guild_battle_record'

let vm = new Vue({
  el: '#index-body',
  data: {
    nameMap: [],
    mobData: [],
    actionData: [],

    loadingMask: true,

    time: {
      updateTime: new Date(2020,6,6,21,54),
      startTime: new Date(2020,5,30,5),
      curTime: new Date(),
      endTime: new Date(2020,6,5,23,59,59),
      countdownTimer: null,
    },
    genSit: null,   // general situation

    historyDateObj: {},
    damageFigurePara: [],

    highlightLogName: '',   // 高亮详细战斗log的名字字符串

    damageByBoss: [],   // 每名玩家的伤害总计——按不同BOSS

    popupFlags: {
      damageFigure: false,
      historyLogDone: false,
      historyLogTodo: false,
      damageByBoss: false,
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
    this.initData();
    this.checkData();
    this.processDamageByBoss(0);
  },

  beforeMount () {},
  mounted () {
    this.loadingMask = false;
  },

  destroyed () {
    clearInterval(this.time.countdownTimer);
  },

  methods: {

    initData: initData,
    checkData: checkData,
    processDateStr: processDateStr,
    ms2timeStr: ms2timeStr,
    actionLogByDay: actionLogByDay,
    playerTotalDamageByDay: playerTotalDamageByDay,
    selectDamageFigureAll: selectDamageFigureAll,
    processColor: processColor,
    highlightLog: highlightLog,
    processDamageByBoss: processDamageByBoss,
    gotoUrl: gotoUrl,
    shiftHistoryLogDone: shiftHistoryLogDone,
    shiftHistoryLogTodo: shiftHistoryLogTodo,
    shiftDamageFigure: shiftDamageFigure,
    shiftDamageByBossFigure: shiftDamageByBossFigure,
  }
});
