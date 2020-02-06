Vue.component('auto-refresh', {
  template:
    '<div id="btn-refresh" @click="shiftSwitch">' +
      '<div id="progress-bar" :class="heightClass"></div>' +
      '<span class="value">{{delay}}</span>' +
      '<span class="value">{{windowSize[0]}} * {{windowSize[1]}}</span>' +
      '<span class="value">({{mousePos[0]}} , {{mousePos[1]}})</span>' +
    '</div>',

  data: function () {
    return {
      refreshTimer: null,             // 刷新页面的计时器
      heightClass: "full-height",     // 高度样式 直接都用.style.cssText的方法修改css也可以
      windowSize: [],                 // 浏览器可视区域大小
      mousePos: [" - "," - "],        // 鼠标位置
    }
  },
  props: {
    delay: {
      type: Number,
      default: 3000
    },
    switch: {
      type: String,
      default: "on"
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
    // 开启自动刷新时
    switchOn: function () {
      this.refreshTimer = setTimeout(()=>{window.location.reload()},this.delay);
      setTimeout(()=>{
        this.heightClass = "zero-height";
        setStyle("#progress-bar",[0],"transition-duration:" + this.delay/1000 + "s");
      },0);
    },

    // 关闭自动刷新时
    switchOff: function () {
      clearTimeout(this.refreshTimer);
      this.heightClass = "full-height";
    },

    // 切换是否刷新
    shiftSwitch: function () {
      if (sessionStorage.getItem('currentSwitch') === "on") {
        this.switchOff();
        sessionStorage.setItem('currentSwitch','off');
      }
      else {
        this.switchOn();
        sessionStorage.setItem('currentSwitch','on');
      }
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
    if ((sessionStorage['currentSwitch'] || this.switch) === "on") {
      // sessionStorage 的另一种取值写法 一定要用括号 ===计算优先级高于||
      this.switchOn();
      sessionStorage.setItem('currentSwitch','on');
      // else 中为另一种赋值写法
    }
    else {
      this.switchOff();
      sessionStorage['currentSwitch'] = 'off';
    }

    this.getWindowSize();
    //this.getMousePos();

    window.addEventListener('resize', this.getWindowSize);
    window.addEventListener('mousemove', this.getMousePos);
  },
  beforeMount () {},
  mounted () {},
});