let vm = new Vue({
  el: '#index-body',
  data: {
  },

  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    this.initMap();
  },

  computed: {
  },
  methods: {
    initMap: function () {
      let dom = document.getElementById("map-container");
      let myChart = echarts.init(dom);

      let option = {
        backgroundColor: '#414141',
        title: {
          text: '新型冠状病毒肺炎(Corona Virus Disease 2019)世界数据一览',
          link: 'https://github.com/naturallzh/naturallzh.github.io/tree/master/pages/COVID_19_display',
          subtext: '数据来源：全国新型肺炎疫情实时数据接口',
          sublink: 'https://github.com/BlankerL/DXY-COVID-19-Crawler',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#fff'
          }
        },
        tooltip : {
          trigger: 'item'
        },
        series : [],
      };

      option.series[0] = $seriesMapSettings;
      option.series[0].nameMap = $nameMap;
      myChart.setOption(option, true);
    }
  }
});

