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