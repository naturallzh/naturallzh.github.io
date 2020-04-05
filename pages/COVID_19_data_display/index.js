let vm = new Vue({
  el: '#index-body',
  data: {
    dataScaleMode: 0,   // 1为显示绝对数据 2为每百万人数据
    myChart: null,      // 地图DOM
    mapOption: {},      // 地图配置项
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
      if (this.dataScaleMode===0) {this.dataScaleMode = 1}
      else {this.dataScaleMode = 3 - this.dataScaleMode}
      switch (this.dataScaleMode) {
        case 1:
          this.mapOption.series[0].tooltip.formatter = function (params) {
            const data = params.data;
            let str = "<p>"+data.name+"</p>"+
              "<p>当前确诊："+data.currentConfirmedCount+"</p>"+
              "<p>累计确诊："+data.confirmedCount+"</p>"+
              "<p>疑似病例："+data.suspectedCount+"</p>"+
              "<p>治愈病例："+data.curedCount+"</p>"+
              "<p>死亡病例："+data.deadCount+"</p>"+
              "<p>最后更新："+data.updateTimeStr+"</p>";
            return str;
          };
          this.updateMap();
          return;
        case 2:
          this.mapOption.series[0].tooltip.formatter = function (params) {
            const data = params.data;
            let str = "<p>"+data.name+"</p>"+
              "<p>当前确诊："+(data.currentConfirmedCount/data.pop*100).toFixed(3)+"</p>"+
              "<p>累计确诊："+(data.confirmedCount/data.pop*100).toFixed(3)+"</p>"+
              "<p>疑似病例："+(data.suspectedCount/data.pop*100).toFixed(3)+"</p>"+
              "<p>治愈病例："+(data.curedCount/data.pop*100).toFixed(3)+"</p>"+
              "<p>死亡病例："+(data.deadCount/data.pop*100).toFixed(3)+"</p>"+
              "<p>最后更新："+data.updateTimeStr+"</p>";
            return str;
          };
          this.updateMap();
          return;
      }
    },

    updateMap: function () {
      this.myChart.setOption(this.mapOption, true);
    }

  }
});

