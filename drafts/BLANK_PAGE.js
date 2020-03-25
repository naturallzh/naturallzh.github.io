let vm = new Vue({
  el: '#BLANK-PAGE-body',
  data: {
    arr: ['abcabcd','acbaabcde','abdabcdefabc'],
  },


  beforeCreate () {
    // console.log('---beforeCreate---');
  },
  created () {
    // console.log('---created---');
  },
  beforeMount () {
    // console.log('---beforeMount---');
  },
  mounted () {
    this.fun1(this.arr);
  },

  computed: {
  },
  methods: {
    fun1: function (arr) {
      for (let i=0;i<arr.length-1;i++) {
        if (arr[i][0]!==arr[i+1][0]) {
         console.log("");
          return
        }
      }
      let outputStr = arr[0][0];
      let strLen = 1;
      let subStr = "";
        for (let i=0;i<arr[0].length-1;i++) {
        let flag = true;
        for (let j=1;j<arr[0].length-i;j++) {
          subStr = arr[0].slice(i,j+i+1);
          flag = true;
          for (let k=1;k<arr.length;k++) {
            flag = flag&&this.fun2(subStr,arr[k]);
          }
          if (flag) {
            if (subStr.length>strLen) {
              outputStr = subStr;
              strLen = subStr.length;
            }
          }
        }
      }
        console.log(outputStr);
    },
    fun2: function (subStr,str2) {
      if (subStr.length>str2.length) {return false}
      for (let i=0;i<str2.length-subStr.length+1;i++) {
        if (str2.slice(i,subStr.length+i)===subStr) {return true}
      }
      return  false;
    }
  }
});