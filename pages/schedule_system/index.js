let vm = new Vue({
  el: '#index-body',
  data: {
  },

  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    var oXL = new ActiveXObject("Excel.application");
    const fileObj = oXL.Workbooks.open('data_list.xlsx');
    impexcel(fileObj);
    function impexcel(obj) {
      console.log(obj)
      if (!obj.files) {
        return;
      }
      var f = obj.files[0];
      //新建文件读取
      var reader = new FileReader();
      reader.onload = function(e) {
        var data = e.target.result;
        //将文件读取为二进制字符串
        wb = XLSX.read(data, {type : 'binary'});
        alert(wb.SheetNames[0]);
        // wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        // wb.Sheets[Sheet名]获取第一个Sheet的数据
        JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
        console.log(JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])));
      };
      reader.readAsBinaryString(f);
    }
  },

  /*
  destoryed(){
    console.log("---destoryed---");
  },
  */

  computed: {
  },
  methods: {
  }
});