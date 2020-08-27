// import {myFun}  from '../guild_battle_record'

let vm = new Vue({
  el: '#index-body',
  data: {
    nameMap: [],
    mobData: [],
    actionData: [],

    loadingMask: true,

    time: {
      updateTime: new Date(2020,7,27,12,51),
      startTime: new Date(2020,7,24,5),
      curTime: new Date(),
      endTime: new Date(2020,7,29,23,59,59),
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
      leaveCert: false,
      certLowDefBg: true,
    },

    certId: "",     // 离职证明的识别码
    certData: {
      battleInfo: [],
      actionData: [],
      damageData: []
    },   // 离职证明相关数据
    bgColorArr: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae'],
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

    const bgImg = new Image();
    bgImg.src = "../../cert_bg.jpg";
    let bgLoadTimer = setInterval(()=>{
      if(bgImg.complete)
      {
        clearInterval(bgLoadTimer);
        //this.popupFlags.certLowDefBg = false;
        console.log('加载完毕');
      }
    },100);

    //this.genCert();
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

    closeCert: function () {this.popupFlags.leaveCert = false},

    genCert: function () {
      const nameMap = this.nameMap;
      const actionData = this.actionData;
      const certData = {};

      const flag1 = (this.certId.length!==6) || (this.certId!=parseInt(this.certId));
      let lastNum = "";
      for (let i=0;i<6;i++) {
        lastNum += 9-parseInt(this.certId[5-i]);
      }
      lastNum = parseInt(lastNum);
      let flag2 = true;
      let idx;
      for (let i=0;i<nameMap.length;i++) {
        if ((nameMap[i].id-lastNum)%1000000===0) {flag2=false;idx=i;break}
      }
      if (flag1 || flag2) {alert("错误的识别码");return}

      this.popupFlags.leaveCert = true;
      // console.log(nameMap[idx]);
      certData.name = nameMap[idx].name;
      certData.battleInfo = ["2020","8","巨蟹","5g时代咋还妹来"];
      certData.actionData = [
        {title:"总出刀:",value:0},
        {title:"出勤率:",value:0},
        {title:"漏刀:",value:0},
        {title:"掉/吞刀:",value:0},
        {title:"总伤害:",value:0},
        {title:"日均伤害:",value:0},
      ];
      certData.damageData = [0,0,0,0,0];
      certData.bossMaxDamage = 0;

      const totalDayNum = 6;
      for (let i=0;i<actionData.length;i++) {
        for (let j=0;j<actionData[i].log.length;j++) {
          if (actionData[i].log[j].name === nameMap[idx].name) {
            certData.actionData[0].value++;
            certData.actionData[4].value += actionData[i].log[j].damage;
            certData.damageData[(actionData[i].bossIdx-1)%5] += actionData[i].log[j].damage;
            if (actionData[i].log[j].desc === "尾刀" || actionData[i].log[j].desc === "合刀") {
              certData.actionData[0].value--;
            }
            if (actionData[i].log[j].desc === "合刀") {
              certData.actionData[4].value -= actionData[i].log[j].damage;
              certData.actionData[4].value += actionData[i].log[j].realDamage;
              certData.damageData[(actionData[i].bossIdx-1)%5] -= actionData[i].log[j].damage;
              certData.damageData[(actionData[i].bossIdx-1)%5] += actionData[i].log[j].realDamage;
            }
            if (actionData[i].log[j].desc === "吞刀") {
              certData.actionData[3].value++;
            }
          }
        }
      }
      certData.actionData[1].value = (certData.actionData[0].value/3/totalDayNum*100).toFixed(2) + "%";
      certData.actionData[2].value = 3*totalDayNum - certData.actionData[0].value;
      certData.actionData[5].value = Math.floor(certData.actionData[4].value/totalDayNum);

      for (let i=0;i<certData.damageData.length;i++) {
        if (certData.damageData[i]>certData.bossMaxDamage) {certData.bossMaxDamage=certData.damageData[i]}
      }

      this.certData = certData;

      const myChart = echarts.init(document.getElementById('pie'));
      let myChartData = [];
      for (let i=0;i<5;i++) {
        myChartData.push({value:certData.damageData[i], name:(i+1)+'王'})
      }
      myChart.setOption({
        series : [
          {
            name: '访问来源',
            type: 'pie',    // 设置图表类型为饼图
            radius: '85%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            data: myChartData,   // 数据数组，name 为数据项名称，value 为数据项值
            hoverAnimation: false,
            legendHoverLink: false,
            animation: false,
            label: {
              position: 'inside',
              //formatter: '{b}: {d}%'
              formatter(v) {
                if (v.percent===0) {
                  return "";
                }
                else {
                  return v.name +": "+ v.percent + '%';
                }
              }
            },
          }
        ]
      });
    },

    downCert: function () {
      const btn = document.getElementById('download-btn');
      html2canvas(document.getElementById("cert-page")).then(function(canvas) {
        btn.href = canvas.toDataURL();
        btn.download='离职证明 '+vm.certData.name+'@'+vm.certData.battleInfo[3];
        btn.click();
      });
    },

    gotoDataRecord: function () {
      window.open('data_record.html');
    }

  }
});
