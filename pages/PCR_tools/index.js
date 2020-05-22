let vm = new Vue({
  el: '#index-body',
  data: {
    mobParas: [],
    combineRule: [],
    playerLvlData: [],
    guildHomeData: {},

    loadingMask: true,

    combineParas: {
      remainHealth: "",
      damageA: "",
      damageB: "",
    },

    expCalcParas: {
      curLvl: "",
      curExp: "",
      tarLvl: "",
      wipeMaxLvlUpSpirit: true,
    },
    spiritGetParas: {
      dailyQuestSpiritDouble: false,
      dailyQuestExpDouble: false,
      tableLvl: 10,
      FoodNum: 3,
      stone: "",
    },

    popupFlags: {},
  },

  computed: {
    combineRes: function () {
      const _this = this;
      let {remainHealth, damageA, damageB} = this.combineParas;
      let res = ["--", "--"];
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
            return _this.combineRule[i].refund;
          }
        }
        return 90;
      }
      return res;
    },

    calcExpRequire: function () {
      const {curLvl, curExp, tarLvl, wipeMaxLvlUpSpirit} = this.expCalcParas;
      const flag1 = curLvl==parseInt(curLvl);
      const flag2 = curExp==parseInt(curExp) || curExp=== "";
      const flag3 = tarLvl==parseInt(tarLvl);
      const flag4 = curLvl < tarLvl && this.playerLvlData[curLvl].exp > curExp;
      const flag5 = curLvl >= 1 && tarLvl <= 85 && curExp >= 0;
      if (flag1 && flag2 && flag3 && flag4 && flag5) {
        const playerLvlData = this.playerLvlData;
        let expSum = -curExp;
        if (curExp === "") {expSum = 0}
        let spiritRecover = 0;
        for (let i=curLvl;i<tarLvl;i++) {
          i = parseInt(i);
          expSum += playerLvlData[i].exp;
          spiritRecover += playerLvlData[i+1].spirit;
        }
        if (wipeMaxLvlUpSpirit) {spiritRecover -= playerLvlData[tarLvl].spirit}
        return [expSum, spiritRecover];
      }
      else {
        return ["--", "--"];
      }
    },

    calcSpiritGet: function () {
      let sum = 0;
      sum+=240;
      sum+=this.spiritGetParas.dailyQuestSpiritDouble?400:200;
      sum+=this.guildHomeData.spiritTable[this.spiritGetParas.tableLvl-1].spirit;
      sum+=this.guildHomeData.dungeonFood[this.spiritGetParas.FoodNum].spirit;
      if (this.spiritGetParas.stone==="") {}
      else if (this.spiritGetParas.stone!=parseInt(this.spiritGetParas.stone)) {
        sum = "--"
      }
      else if (this.spiritGetParas.stone <= 30 && this.spiritGetParas.stone >= 0) {
        sum += this.spiritGetParas.stone*120;
      }
      else {sum = "--"}
      return sum+10;
    },

    predictLvlDays: function () {
      const expRequire = this.calcExpRequire[0];
      const spiritRecover = this.calcExpRequire[1];
      const expPerDay = this.calcSpiritGet;
      const flag = expRequire==parseInt(expRequire) && spiritRecover==parseInt(spiritRecover) && expPerDay==parseInt(expPerDay)
      if (flag) {
        return Math.ceil((expRequire - spiritRecover) / (expPerDay + (this.spiritGetParas.dailyQuestExpDouble?700:350)))
      }
      else {return false}
    }
  },

  beforeCreate () {},
  created () {
    this.initData();
  },

  beforeMount () {},
  mounted () {
    this.loadingMask = false;
  },

  destroyed () {
  },

  methods: {

    initData: function () {
      this.mobParas = DATA_mobParas;
      this.combineRule = DATA_combineRule;
      this.guildHomeData = {
        spiritTable: DATA_spiritTable,
        dungeonFood: DATA_dungeonFood,
      };

      this.processPlayerLvlData();
    },

    processPlayerLvlData: function () {
      const dataArr = DATA_playerLvlData;
      for (let i=53;i<65;i++) {
        dataArr[i] = {lvl: i, exp: 1770, spirit: dataArr[i-1].spirit+1};
      }
      for (let i=65;i<76;i++) {
        dataArr[i] = {lvl: i, exp: 2655, spirit: dataArr[i-1].spirit+1};
      }
      for (let i=76;i<86;i++) {
        dataArr[i] = {lvl: i, exp: 3540, spirit: dataArr[i-1].spirit+1};
      }
      this.playerLvlData = dataArr;
    },

    gotoAries: function () {
      window.open("./guild_battle_record/1st_Aries_20200507_20200514/index.html")
    }

  }
});