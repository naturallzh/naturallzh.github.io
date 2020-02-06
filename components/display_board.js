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