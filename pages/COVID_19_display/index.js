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
        backgroundColor: 'transparent',
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
        geo3D: {
          map: 'world',
          environment: '#aaa',
          shading: 'lambert',
          light: {
            main: {
              intensity: 5,
              shadow: true,
              shadowQuality: 'high',
              alpha: 30
            },
            ambient: {
              intensity: 0
            },
            ambientCubemap: {
              texture: 'data-gl/asset/canyon.hdr',
              exposure: 1,
              diffuseIntensity: 0.5
            }
          },
          viewControl: {
            distance: 50,
            panMouseButton: 'left',
            rotateMouseButton: 'right'
          },
          groundPlane: {
            show: true,
            color: '#666'
          },
          postEffect: {
            enable: true,
            bloom: {
              enable: false
            },
            SSAO: {
              radius: 1,
              intensity: 1,
              enable: true
            },
            depthOfField: {
              enable: false,
              focalRange: 10,
              blurRadius: 10,
              fstop: 1
            }
          },
          temporalSuperSampling: {
            enable: true
          },
          itemStyle: {
            color: '#ddd',
            borderWidth: 0.7,
            borderColor: '#aaa',
          },

          regionHeight: 0.5
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
          }
        ],
        // bmap: {
        //   center: [104.114129, 37.550339],
        //   zoom: 5,
        //   roam: true,
        //   mapStyle: {
        //     styleJson: [],
        //   }
        // },
      };

      myChart.setOption(option, true);

      // $.ajax({
      //   url: 'bmapStyle.json',
      //   type: 'get',
      //   dataType: 'json',
      //   success: function (ret) {
      //     option.bmap.mapStyle.styleJson = ret;
      //     myChart.setOption(option, true);
      //   }
      // });

    }
  }
});

