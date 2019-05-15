let vm = new Vue({
  el: '#notes-body',
  data: {
    wideScr: document.body.offsetWidth > 1050,
    menuData: [],
  },
  created: function () {
    window.addEventListener('resize', this.checkWinWid);
    this.menuData = [
      {},
      {},
      {}
    ];
  },
  computed: {
  },
  methods: {
    checkWinWid: function () {
      this.wideScr = document.body.offsetWidth > 1050;
    },
  }
});