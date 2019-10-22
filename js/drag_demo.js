let vm = new Vue({
  el: '#drag-body',
  data: {
    listData: [],
  },
  created () {},
  mounted () {
    this.init();
  },
  computed: {},
  methods: {
    init () {
      this.listData = ['#1','#2','#3','#4','#5','#6','#7'];

      const ele = document.getElementById('listBlock');
      ele.addEventListener("mousedown", this.mousedownCheck, false);
      // obj.addEventListener("mouseup", function () {console.log('up');});
      // obj.addEventListener("mousemove", function () {console.log('move');});
      // setTimeout(()=>{console.log(obj.offsetHeight);},0);
    },
    mousedownCheck () {
      const ele = document.getElementById('listBlock');
      // ele.addEventListener("mouseup", function () {console.log('up');});

      console.log("long time mousedown detected");
    },
  }
});