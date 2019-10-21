let vm = new Vue({
  el: '#drag-body',
  data: {
    listData: [],
  },
  created () {},
  mounted () {
    this.initData();
  },
  computed: {},
  methods: {
    initData () {
      this.listData = ['#1','#2','#3','#4','#5','#6','#7'];
    },
  }
});