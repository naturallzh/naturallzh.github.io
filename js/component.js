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

Vue.component('top-bar', {
  template:
    '<div id="top-bar">' +
      '<div id="top-bar-blank"></div>' +
      '<div id="top-bar-front">' +
        '<div id="top-bar-left"></div>' +
        '<div id="top-bar-right"></div>' +
      '</div>' +
    '</div>',

  data: function () {
    return {
    }
  },
  props: {},
  computed: {},
  watch: {},
  methods: {},

  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted (){},
});

Vue.component('blank-block', {
  template:
    '<div id="blank-block"></div>',

  data: function () {
    return {
    }
  },
  props: {
    width: {
      type: String,
      default: "20px"
    },
    height: {
      type: String,
      default: "20px"
    },
    color: {
      type: String,
    },
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },

  beforeCreate () {},
  created () {
  },
  beforeMount () {},
  mounted (){
    setStyle("#blank-block",[0],"width:" + this.width + ";height:" + this.height + ";background:" + this.color);
  },
});

Vue.component('image-view', {
  template:
    '<div id="image-view-block">' +
      '<img id="small-pic" @click="showFull()" :src="url" />' +
      '<div class="mask56 bg" @click="closeFull()" v-show="showFullPic">' +
        '<img id="full-pic" :src="url"/>' +
        '<a id="download-btn" download="" @click.stop @touchmove.prevent :href="url">' +
          '<div class="down-arrow"></div>' +
        '</a>' +
      '</div>' +
    '</div>',

  data: function () {
    return {
      showFullPic: false,  // 显示真实图片
      bgImgStyle: "background-image:url('" + this.url + "')",
    }
  },
  props: {
    url: {
      type: String,
    },
  },
  computed: {
  },
  watch: {
  },
  methods: {
    showFull: function () {
      this.showFullPic = true;
    },
    closeFull: function () {
      this.showFullPic = false;
    },
  },

  beforeCreate () {},
  created () {
  },
  beforeMount () {},
  mounted (){
  },
});

Vue.component('display-board', {
  template:
    '<div id="display-board-block">' +
      '<div class="header" :style="bgStr[0]">' +
        '<div class="text">{{data_obj.title}}</div>' +
        '<transition name="fade-up">' +
          '<div class="bottom-up" v-show="data_obj.open" @click="switchState()"></div>' +
        '</transition>' +
        '<transition name="fade-down">' +
          '<div class="bottom-down" v-show="!data_obj.open" @click="switchState()"></div>' +
        '</transition>' +
      '</div>' +
      '<transition name="switch-content">' +
        '<div class="content" v-show="data_obj.open" @click="reportSize()" :style="bgStr[1]">' +
          '<ul>' +
            '<li class="list-item" v-for="(item2, index2) in data_obj.body">' +
              '{{item2}}' +
            '</li>' +
          '</ul>' +
        '</div>' +
      '</transition>' +
    '</div>',

  data: function () {
    return {
      bgStr: [
        "background:" + this.bg_clr,
        "background: linear-gradient(0deg, rgba(255, 255, 255, 0), " + this.bg_clr + " 20px);"
      ],
    }
  },
  props: {
    data_obj: {
      type: Object,
    },
    bg_clr: {
      type: String,
      default: "white"
    },
    idx: {
      type: Number,
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {

    switchState: function () {
      this.data_obj.open = !this.data_obj.open;
    },

    reportSize: function () {
      const hei = document.getElementsByClassName("content")[this.idx].offsetHeight;
      console.log(hei);
    }

  },

  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted (){},
});