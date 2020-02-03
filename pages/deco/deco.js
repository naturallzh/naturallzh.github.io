let vm = new Vue({
  el: '#deco-body',
  data: {
    wideScr: document.body.offsetWidth > 1050,
    menuData: [],
  },
  created: function () {
    window.addEventListener('resize', this.checkWinWid);
    this.menuData = [
      {title:"平面图", anchorName:"#anchor-1"},
      {title:"供水", anchorName:"#anchor-2"},
      {title:"灯具和开关", anchorName:"#anchor-3"},
      {title:"插座", anchorName:"#anchor-4"},
      {title:"电视机墙面", anchorName:"#anchor-5"}
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