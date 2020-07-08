let vm = new Vue({
  el: '#index-body',
  data: {
    mobData: [],
    combineRule: [],
    playerLvlData: [],
    guildHomeData: {},

    loadingMask: true,

    combineParas: {
      remainHealth: "",
      damageA: "",
      damageB: "",
    },

    progressParas: {
      guildBattleIdx: 1,
      round: 1,
      bossNum: 1,
      remainHealth: 6000000,
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
      tableLvl: 11,
      FoodNum: 3,
      stone: "",
    },

    popupFlags: {},

    certVeriCode: "3321", // 前往外部公会离职页面的验证码
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
        // const num1 = parseInt(damageB)/(parseInt(remainHealth)-parseInt(damageA));
        // const num2 = parseInt(damageA)/(parseInt(remainHealth)-parseInt(damageB));
        // res = [calcRefund(num1),calcRefund(num2)];
        const num1 = Math.ceil(100 - ((parseInt(remainHealth)-parseInt(damageA)) / parseInt(damageB)) * 90);
        const num2 = Math.ceil(100 - ((parseInt(remainHealth)-parseInt(damageB)) / parseInt(damageA)) * 90);
        res = [num1, num2];
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
      let {curLvl, curExp, tarLvl, wipeMaxLvlUpSpirit} = this.expCalcParas;
      const flag1 = curLvl==parseInt(curLvl); flag1?curLvl=parseInt(curLvl):'';
      const flag2 = curExp==parseInt(curExp) || curExp=== "";
      const flag3 = tarLvl==parseInt(tarLvl); flag3?tarLvl=parseInt(tarLvl):'';
      const flag4 = curLvl < tarLvl && this.playerLvlData[curLvl].exp > curExp;
      const flag5 = curLvl >= 1 && tarLvl <= 100 && curExp >= 0;
      // console.log(flag1, flag2, flag3, flag4, flag5);
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
      else {return "--"}
    },

    progressScore: {
      get: function () {
        let {guildBattleIdx, round, bossNum, remainHealth} = this.progressParas;
        guildBattleIdx = parseInt(guildBattleIdx);
        round = parseInt(round);
        bossNum = parseInt(bossNum);
        remainHealth = parseInt(remainHealth);

        const bossIdx = (round-1)*5 + bossNum;
        let mobData = this.mobData[guildBattleIdx-1].data;
        while (bossIdx > mobData.length) {
          mobData = this.extendMobData(mobData);
        }
        if (remainHealth > mobData[bossIdx-1].health) {
          this.progressParas.remainHealth = mobData[bossIdx-1].health;
        }

        let score = 0;
        for (let i=0;i<bossIdx-1;i++) {
          score += mobData[i].health * mobData[i].scoreFactor;
        }
        score += (mobData[bossIdx-1].health-remainHealth) * mobData[bossIdx-1].scoreFactor
        return Math.floor(score);
      },
      set: function (val) {
        let bossIdx = 1;
        let mobData = this.mobData[this.progressParas.guildBattleIdx-1].data;
        let score = parseInt(val);
        let remainHealth = 0;

        let i=0;
        while (score >= mobData[i].health * mobData[i].scoreFactor) {
          bossIdx++;
          score -= mobData[i].health * mobData[i].scoreFactor;
          i++;
          mobData = this.extendMobData(mobData);
        }
        remainHealth = Math.floor(mobData[i].health - score/mobData[i].scoreFactor);

        // for (let i=0;i<mobData.length;i++) {
        //   if (score<mobData[i].health * mobData[i].scoreFactor) {
        //     remainHealth = Math.floor(mobData[i].health - score/mobData[i].scoreFactor);
        //     break;
        //   }
        //   else {
        //     bossIdx++;
        //     score -= mobData[i].health * mobData[i].scoreFactor;
        //   }
        // }
        if (bossIdx>65) {bossIdx=65}
        this.progressParas= {
          guildBattleIdx: this.progressParas.guildBattleIdx,
          round: Math.ceil(bossIdx/5),
          bossNum: bossIdx - (Math.ceil(bossIdx/5)-1)*5,
          remainHealth: remainHealth,
        }
      }
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
      this.combineRule = DATA_combineRule;
      this.guildHomeData = {
        spiritTable: DATA_spiritTable,
        dungeonFood: DATA_dungeonFood,
      };

      this.processPlayerLvlData();
      this.processMobData();
    },

    processPlayerLvlData: function () {
      const dataArr = DATA_playerLvlData;
      for (let i=53;i<65;i++) {
        dataArr[i] = {lvl: i, exp: 1770, spirit: dataArr[i-1].spirit+1};
      }
      for (let i=65;i<76;i++) {
        dataArr[i] = {lvl: i, exp: 2655, spirit: dataArr[i-1].spirit+1};
      }
      for (let i=76;i<101;i++) {
        dataArr[i] = {lvl: i, exp: 3540, spirit: dataArr[i-1].spirit+1};
      }
      this.playerLvlData = dataArr;
    },

    processMobData: function () {
      const dataArr = [];
      dataArr[0] = {
        idx: 1,
        desc: '白羊座 20200507~20200514',
        data: DATA_mobData_Aries
      };

      this.mobData = dataArr;
    },
    extendMobData: function(mobData) {
      const newArr = mobData.slice(-5,-4);
      newArr[0].bossIdx += 5;
      newArr[0].round ++;

      return mobData.concat(newArr);
    },

    calcProgress: function () {},

    inputCheck: function () {},

    gotoAries: function () {
      let url = "./guild_battle_record/1st_Aries_20200507_20200514/index.html";
      url += "?title=白羊座 20200507~20200514";
      window.open(url);
    },
    gotoTaurus: function () {
      let url = "./guild_battle_record/2nd_Taurus_20200602_20200607/index.html";
      url += "?title=金牛座 20200602~20200607";
      window.open(url);
    },
    gotoGemini: function () {
      let url = "./guild_battle_record/3rd_Gemini_20200630_20200705/index.html";
      url += "?title=双子座 20200630~20200705";
      window.open(url);
    },
    gotoLeaveCert: function () {
      const pubKey = navigator.plugins.length + navigator.userAgent.length;
      console.log(pubKey);
      let url = "leave_cert.html";
      url += "?code="+this.certVeriCode;
      window.open(url);
    }

  }
});