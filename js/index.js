let vm = new Vue({
  el: '#index-body',
  data: {
  },

  beforeCreate: function () {
    // 可以简写成 beforeCreate(){} es6新特性 下同
    // console.log('---beforeCreate---');
  },
  created: function () {
    // console.log('---created---');
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

  }
});