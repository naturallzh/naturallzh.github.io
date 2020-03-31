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
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = {
      backgroundColor: 'transparent',
      title: {
        text: '新型冠状病毒肺炎(Corona Virus Disease 2019)世界数据一览',
        link: '',
        subtext: '数据来源：全国新型肺炎疫情实时数据接口',
        sublink: 'https://github.com/BlankerL/DXY-COVID-19-Crawler',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip : {
        trigger: 'item'
      },
      bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
          styleJson: [
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": {
                "color": "#044161"
              }
            },
            {
              "featureType": "land",
              "elementType": "all",
              "stylers": {
                "color": "#004981"
              }
            },
            {
              "featureType": "boundary",
              "elementType": "geometry",
              "stylers": {
                "color": "#064f85"
              }
            },
            {
              "featureType": "railway",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "highway",
              "elementType": "geometry",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "highway",
              "elementType": "geometry.fill",
              "stylers": {
                "color": "#005b96",
                "lightness": 1
              }
            },
            {
              "featureType": "highway",
              "elementType": "labels",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "arterial",
              "elementType": "geometry",
              "stylers": {
                "color": "#004981"
              }
            },
            {
              "featureType": "arterial",
              "elementType": "geometry.fill",
              "stylers": {
                "color": "#00508b"
              }
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "green",
              "elementType": "all",
              "stylers": {
                "color": "#056197",
                "visibility": "off"
              }
            },
            {
              "featureType": "subway",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "manmade",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "local",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "arterial",
              "elementType": "labels",
              "stylers": {
                "visibility": "off"
              }
            },
            {
              "featureType": "boundary",
              "elementType": "geometry.fill",
              "stylers": {
                "color": "#029fd4"
              }
            },
            {
              "featureType": "building",
              "elementType": "all",
              "stylers": {
                "color": "#1a5787"
              }
            },
            {
              "featureType": "label",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            }
          ]
        }
      },
      series : [
        {
          name: 'pm2.5',
          type: 'scatter',
          coordinateSystem: 'bmap',
          // data: convertData(data),
          data: [],
          symbolSize: function (val) {
            return val[2] / 10;
          },
          label: {
            formatter: '{b}',
            position: 'right'
          },
          itemStyle: {
            color: '#ddb926'
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          // data: convertData(data.sort(function (a, b) {
          //   return b.value - a.value;
          // }).slice(0, 6)),
          data: [],
          symbolSize: function (val) {
            return val[2] / 10;
          },
          showEffectOn: 'emphasis',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            formatter: '{b}',
            position: 'right',
            show: true
          },
          itemStyle: {
            color: '#f4e925',
            shadowBlur: 10,
            shadowColor: '#333'
          },
          zlevel: 1
        },
        {
          type: 'custom',
          coordinateSystem: 'bmap',
          // renderItem: renderItem,
          itemStyle: {
            opacity: 0.5
          },
          animation: false,
          silent: true,
          data: [0],
          z: -10
        }
      ]
    };
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
  },

  computed: {
  },
  methods: {
  }
});

