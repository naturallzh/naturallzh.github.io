let vm = new Vue({
  el: '#event-timeline-body',
  data: {
    loadingMask: true,
    eventArr: [],
  },

  computed: {
  },

  beforeCreate () {},
  created () {
  },

  beforeMount () {},
  mounted () {

    // https://www.ququyou.com/gzljredive/101124.html
    // https://www.bilibili.com/read/cv6611233
    // https://www.9game.cn/gongzhulianjieredi/4559389.html

    this.loadingMask = false;
    this.initEventArr();

  },

  destroyed () {
  },

  methods: {
    init: function () {
    },

    initEventArr: function () {
      const eventArr = [
        {type: 1,},
      ];

      function addInfo(arr) {
      }
    },

  }
});