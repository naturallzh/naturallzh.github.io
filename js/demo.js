let vm = new Vue({
  el: '#demo-body',
  data: {
    displayData: [],
  },
  created: function () {
    this.setDisplayData();
  },
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

  }
});