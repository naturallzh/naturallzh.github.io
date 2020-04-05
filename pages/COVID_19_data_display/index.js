let vm = new Vue({
  el: '#index-body',
  data: {
    myChart: null,      // 地图DOM
    mapOption: {},      // 地图配置项
    dataScaleMode: -1,  // 0为显示绝对数据 1为每百万人数据
    visualType: null,   // 显示的数据类型 currentConfirmedCount confirmedCount suspectedCount curedCount deadCount
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
      this.myChart = echarts.init(dom);

      this.mapOption = $optionChina;

      const _this = this;
      $.ajax({
        url: 'data/DXYArea_China_P.json',
        type: 'get',
        dataType: 'json',
        success: function (ret) {
          _this.mapOption.series[0].data = ret;
          _this.changeVisualData("currentConfirmedCount");
          _this.changeDataScale();
        },
      });
    },

    changeVisualData: function (typeStr) {
      let data = this.mapOption.series[0].data;
      for (let i=0;i<data.length;i++) {
        data[i].value = fun1(data[i], typeStr);
      }
      this.mapOption.series[0].data = data;
      this.updateMap();

      function fun1 (obj, typeStr) {
        switch (typeStr) {
          case "currentConfirmedCount":
            return obj.currentConfirmedCount;
          case "confirmedCount":
            return obj.confirmedCount;
          case "suspectedCount":
            return obj.suspectedCount;
          case "curedCount":
            return obj.curedCount;
          case "deadCount":
            return obj.deadCount;
        }
      }
    },

    changeDataScale: function () {
      const _this = this;
      this.dataScaleMode = 1 - this.dataScaleMode;
      if (this.dataScaleMode!==0&&this.dataScaleMode!==1) {this.dataScaleMode = 0}

      this.mapOption.series[0].tooltip.formatter = function (params) {
        if (!params.data) {return;}
        const data = params.data;
        const tooltipStrArr = processTooltipStrArr();
        let str = '';
        for (let i=0;i<tooltipStrArr.length;i++) {
          str += "<p>"+tooltipStrArr[i]+"</p>"
        }
        return str;
        function processTooltipStrArr() {
          const res = [];
          res[0] = data.name + (_this.dataScaleMode===0?' (绝对数值)':' (每百万人)');
          res[1] = '当前确诊：' + numCalc(data.currentConfirmedCount);
          res[2] = '累计确诊：' + numCalc(data.confirmedCount);
          res[3] = '疑似病例：' + numCalc(data.suspectedCount);
          res[4] = '治愈病例：' + numCalc(data.curedCount);
          res[5] = '死亡病例：' + numCalc(data.deadCount);
          //res[6] = '最后更新：' + data.updateTimeStr;
          return res;
        }
        function numCalc(num) {
          num = _this.dataScaleMode===0?num:num/data.pop*100;
          num = num.toFixed(2);
          if (num-parseInt(num)===0) {return parseInt(num)}
          else {return num}
        }
      };
      this.updateMap();
    },

    updateMap: function () {
      this.myChart.setOption(this.mapOption, true);
    }

  }
});

