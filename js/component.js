Vue.component('auto-refresh', {
  template: '<div id="btn-refresh" @click="changeState"><div id="progress-bar"></div><span class="value">{{delay}}</span><span class="value">{{windowSize[0]}} * {{windowSize[1]}}</span><span class="value">({{mousePos[0]}},{{mousePos[1]}})</span></div>',

  data: function () {
    return {
      refreshTimer: null,
      timeCount: 0,
      windowSize: [null,null],
      mousePos: ["-","-"],
    }
  },
  props: {
    delay: {
      type: Number,
      default: 3000
    },
    state: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: String,
      default: "50%"
    }
  },

  computed: {
  },
  watch: {
    timeCount() {
      $("#progress-bar")[0].style.height = (1-this.timeCount/this.delay)*100 + "%";
      if (this.timeCount === this.delay) {window.location.reload()}
    }
  },
  methods: {
    changeState: function () {
      this.state = !this.state;
    },

    // 获取浏览器窗口大小
    getWindowSize: function () {
      this.windowSize = [document.body.offsetWidth,document.body.offsetHeight];
    },

    // 获取鼠标位置
    getMousePos: function () {
      this.mousePos = [window.event.clientX, window.event.clientY];
    }
  },

  beforeCreate () {},
  created () {
    this.refreshTimer = setInterval(()=>{this.timeCount += 100},100);
    this.getWindowSize();
    //this.getMousePos();

    window.addEventListener('resize', this.getWindowSize);
    window.addEventListener('mousemove', this.getMousePos);
  },
  beforeMount () {},
  mounted (){},
});