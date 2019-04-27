Vue.component('auto-refresh', {
  template:
    '<div id="btn-refresh" @click="changeState">' +
      // '<transition name="progress-bar-decrease">' +
        // '<div id="progress-bar" v-if="showProgressBar"></div>' +
          '<div id="progress-bar" :class="heightClass"></div>' +
      // '</transition>' +
      '<span class="value">{{delay}}</span>' +
      '<span class="value">{{windowSize[0]}} * {{windowSize[1]}}</span>' +
      '<span class="value">({{mousePos[0]}} , {{mousePos[1]}})</span>' +
    '</div>',

  data: function () {
    return {
      refreshTimer: null,             // 刷新页面的计时器
      heightClass: "full-height",     // 高度样式 直接都用.style.cssText的方法修改css也可以
      currentState: this.state,       // 当前state状态，props中的state无法修改
      windowSize: [],                 // 浏览器可视区域大小
      mousePos: [" - "," - "],        // 鼠标位置
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
    currentState: {
      handler (newCurrentState, oldCurrentState) {
        if (newCurrentState) {
          this.refreshTimer = setTimeout(()=>{window.location.reload()},this.delay);
          setTimeout(()=>{
            this.heightClass = "zero-height";
            setStyle("#progress-bar",[0],"transition-duration:" + this.delay/1000 + "s");
          },0);
        }
        else {
          clearTimeout(this.refreshTimer);
          this.heightClass = "full-height";
          // setStyle("#progress-bar",[0],"transition: none");
        }
      },
      immediate: true
    }
  },
  methods: {
    changeState: function () {
      this.currentState = !this.currentState;
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

    window.addEventListener('resize', this.getWindowSize);
    window.addEventListener('mousemove', this.getMousePos);
  },
  beforeMount () {},
  mounted (){
  },
});