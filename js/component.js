Vue.component('auto-refresh', {
  template:
    '<div id="btn-refresh" @click="changeState">' +
      '<transition name="progress-bar-decrease">' +
        '<div id="progress-bar" v-if="showProgressBar"></div>' +
      '</transition>' +
      '<span class="value">{{delay}}</span>' +
      '<span class="value">{{windowSize[0]}} * {{windowSize[1]}}</span>' +
      '<span class="value">({{mousePos[0]}} , {{mousePos[1]}})</span>' +
    '</div>',

  data: function () {
    return {
      refreshTimer: null,
      windowSize: [],
      mousePos: [" - "," - "],
      progressBarStyleObj: {},
      showProgressBar: true,
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
    this.getWindowSize();
    //this.getMousePos();
    this.refreshTimer = setTimeout(()=>{window.location.reload()},this.delay);

    window.addEventListener('resize', this.getWindowSize);
    window.addEventListener('mousemove', this.getMousePos);
  },
  beforeMount () {},
  mounted (){
    //setStyle("#progress-bar",[0],"height:10%");
    this.showProgressBar = false;
  },
});