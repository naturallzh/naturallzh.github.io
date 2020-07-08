let vm = new Vue({
  el: '#index-body',
  data: {
    loadingMask: true,
    certData: {
      name: '',
      battleInfo: [2020,7,'双子',''],
      actionData: [
        {title:"总出刀:",value:0},
        {title:"出勤率:",value:0},
        {title:"漏刀:",value:''},
        {title:"掉/吞刀:",value:''},
        {title:"总伤害:",value:0},
        {title:"日均伤害:",value:0},
      ],
      damageData: ['','','','','']
    },   // 离职证明相关数据
    showCert: false,

    inputCode: "", // 前往外部公会离职页面的验证码
  },

  computed: {
  },

  beforeCreate () {},
  created () {
  },

  beforeMount () {},
  mounted () {
    this.loadingMask = false;
    this.init();
  },

  destroyed () {
  },

  methods: {
    init: function () {
      if (getQueryString("code")) {
        this.inputCode = getQueryString("code");
      }

      const dateObj = new Date();
      let pubKey = navigator.plugins.length + navigator.userAgent.length + "";
      const d = addZero(dateObj.getDate());
      const h = addZero(dateObj.getHours());
      const m = addZero(dateObj.getMinutes());
      // pubKey逆序再填充至4位后(pubKey本来有几位就填充9-几)插入m d h的空格中，再用9999999999去减 共10位
      // 8号 11:35 pubKey 128 => 1647918883
      pubKey = pubKey.split('').reverse().join('');
      while (pubKey.length<4) {
        pubKey += 9-pubKey.length;
        // 3位填充一个6，2位填充76
      }
      let code = pubKey[0] + m + pubKey[1] + d + pubKey[2] + h + pubKey[3];
      code = 9999999999 - parseInt(code) + "";

      console.log("input   Code: " + this.inputCode);
      console.log("certVeriCode: " + code);

      function addZero(num) {
        if (num<10) {return '0'+num}
        else {return num+''}
      }
    },

    closeCert: function () {this.showCert = false},

    genCert: function () {
      const certData = this.certData;
      certData.bossMaxDamage = 0;
      const totalDayNum = 6;

      const flag1 = certData.name.length > 0
      const flag2 = certData.battleInfo[3].length > 0
      const flag3 = (certData.actionData[2].value == parseInt(certData.actionData[2].value)) && parseInt(certData.actionData[2].value)>=0 && parseInt(certData.actionData[2].value)<=18
      const flag4 = (certData.actionData[3].value == parseInt(certData.actionData[3].value)) && parseInt(certData.actionData[3].value)>=0 && parseInt(certData.actionData[3].value)<=18-parseInt(certData.actionData[2].value)
      let flag5 = true;
      for (let i=0;i<5;i++) {
        const flag = (certData.damageData[i] == parseInt(certData.damageData[i])) && parseInt(certData.damageData[i])>=0
        flag5 = flag5&&flag;
      }
      //console.log(flag1,flag2,flag3,flag4,flag5);

      if (flag1 && flag2 && flag3 && flag4 && flag5) {
        certData.actionData[2].value = parseInt(certData.actionData[2].value);
        certData.actionData[3].value = parseInt(certData.actionData[3].value);
        for (let i=0;i<5;i++) {
          certData.damageData[i] = parseInt(certData.damageData[i]);
        }
      }
      else {
        alert("输入有误")
        return
      }

      this.showCert = true;

      certData.actionData[0].value = 18 - certData.actionData[2].value;
      certData.actionData[1].value = (certData.actionData[0].value/3/totalDayNum*100).toFixed(2) + "%";
      for (let i=0;i<certData.damageData.length;i++) {
        if (certData.damageData[i]>certData.bossMaxDamage) {certData.bossMaxDamage=certData.damageData[i]}
        certData.actionData[4].value += certData.damageData[i];
      }
      certData.actionData[5].value = Math.floor(certData.actionData[4].value/totalDayNum);
      //console.log(certData);

      this.certData = certData;

      const myChart = echarts.init(document.getElementById('pie'));
      let myChartData = [];
      for (let i=0;i<5;i++) {
        if (certData.damageData[i]>0) {
          myChartData.push({value:certData.damageData[i], name:(i+1)+'王'})
        }
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
            label: {
              position: 'inside',
              formatter: '{b}: {d}%'
            },
          }
        ]
      })

    }
  }
});