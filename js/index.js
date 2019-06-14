let vm = new Vue({
  el: '#index-body',
  data: {
    show: true,
    displayData: [],
  },

  beforeCreate: function () {
    // 可以简写成 beforeCreate(){} es6新特性 下同
    // console.log('---beforeCreate---');
  },
  created: function () {
    // console.log('---created---');
    this.setDisplayData();
  },
  beforeMount: function (){
    // console.log('---beforeMount---');
  },
  mounted: function (){
    // console.log('---mounted---');
  },

  /*
  beforeUpdate(){
    console.log('---beforeUpdate---');
  },
  updated(){
    console.log('---updated---');
  },
  beforeDestory(){
    console.log("---beforeDestory---");
  },
  destoryed(){
    console.log("---destoryed---");
  },
  */

  computed: {},
  methods: {

    setDisplayData: function () {
      this.displayData = [
        {
          title: "title1",
          body: ["asdqwe","qweqwe","gggee","qaq"],
          open: false,
        },
        {
          title: "标题2",
          body: ["5584","6722","361"],
          open: true,
        },
        {
          title: "暗黑3",
          body: ["皇家华戒","杨弓","收割刀","收割刀","收割刀"],
          open: true,
        }
      ];
    },

    switchState: function (idx) {
      this.displayData[idx].open = !this.displayData[idx].open;
    },

    reportSize: function (idx) {
      const hei = document.getElementsByClassName("content")[idx].offsetHeight;
      console.log(hei);
    }

  }
});