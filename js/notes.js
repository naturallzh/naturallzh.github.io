let vm = new Vue({
  el: '#notes-body',
  data: {
    windowWidth: document.body.offsetWidth,
  },
  created: function () {
    window.addEventListener('resize', this.getWindowWidth);
  },
  computed: {},
  methods: {
    getWindowWidth: function () {
      this.windowWidth = document.body.offsetWidth;
    },

    report: function () {
      console.log("CLICK");
    }
  }
});