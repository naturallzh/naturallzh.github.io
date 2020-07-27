// import {myFun}  from '../guild_battle_record'

let vm = new Vue({
  el: '#data-record-body',
  data: {
    nameMap: [],
    actionData: [],

    loadingMask: true,

    time: {
      updateTime: new Date(2020,6,20,9,20),
      startTime: new Date(2020,6,27,5),
      curTime: new Date(),
      endTime: new Date(2020,7,2,23,59,59),
      countdownTimer: null,
    },
    showListBox: [],  // 控制每个titlebox是否显示

    inputParaTitleBox: {
      day: '',
      bossIdx: '',
    },
    inputDamageItem: {
      name: '',
      damage: '',
      time: '',
      dateStr: '',
      H: '',
      M: ''
    },
    editIdx: [-1,-1],

    popupFlags: {
      addTitleBoxWin: false,
      editWin: false,
      outputStrWin: false,
    },
  },

  computed: {
  },

  beforeCreate () {},
  created () {
  },

  beforeMount () {},
  mounted () {
    this.loadingMask = false;

    this.init();

    // setTimeout(()=>{
      // const t = document.body.clientHeight;
      // document.getElementById('data-record-body').scrollTo( 50,0 );
      // window.scrollTo( 50,0 );
      // console.log(t)
    // },1000);

    //document.onscroll = function() {console.log(123)}
  },

  destroyed () {
  },

  methods: {
    init: function () {
      if (localStorage.getItem('data_cancer')) {
        const lenLocal = (localStorage.getItem('data_cancer')).length;
        const lenData = (JSON.stringify(DATA_actionData)).length;
        if (lenLocal+8<=lenData) {
          localStorage.setItem('data_cancer',JSON.stringify(DATA_actionData));
        }
      }
      else {
        localStorage.setItem('data_cancer',JSON.stringify(DATA_actionData));
      }
      this.actionData = JSON.parse(localStorage.getItem('data_cancer'));

      this.nameMap = DATA_nameMap;
      for (let i=0;i<this.actionData.length;i++) {
        this.showListBox[i] = true;
      }
    },

    addTitleBox: function () {
      const idx = this.actionData.length-1;
      this.inputParaTitleBox.day = this.actionData[idx].day;
      this.inputParaTitleBox.bossIdx = this.actionData[idx].bossIdx;
      this.openTitleWin();
    },
    confirmAddTitleBox: function () {
      const inputObj = this.inputParaTitleBox;
      const errorCheck = [
        [inputObj.day!=parseInt(inputObj.day),'日期输入有误'],
        [inputObj.bossIdx!=parseInt(inputObj.bossIdx),'日期输入有误'],
      ];
      for (let i=0;i<errorCheck.length;i++) {
        if (errorCheck[i][0]) {
          alert(errorCheck[i][1]);
          this.closeTitleWin();
          return;
        }
      }
      this.actionData.push({
        day: parseInt(inputObj.day),
        bossIdx: parseInt(inputObj.bossIdx),
        log: []
      });
      this.showListBox.push(true);
      localStorage.setItem('data_cancer',JSON.stringify(this.actionData));
      this.closeTitleWin();
    },

    resetData: function () {
      this.actionData = DATA_actionData;
      localStorage.setItem('data_cancer',JSON.stringify(DATA_actionData));
      alert('数据重置成功');
    },

    openTitleWin: function () {this.popupFlags.addTitleBoxWin = true},
    closeTitleWin: function () {this.popupFlags.addTitleBoxWin = false},
    openEditWin: function () {this.popupFlags.editWin = true;},
    closeEditWin: function () {this.popupFlags.editWin = false},
    openOutputStrWin: function () {
      this.popupFlags.outputStrWin = true;
      setTimeout(()=>{
        document.getElementById('outputStr').select();
        document.execCommand("Copy");
        alert('结果已复制');
      },100)
    },
    closeOutputStrWin: function () {this.popupFlags.outputStrWin = false},

    editValue: function (idx1, idx2) {
      this.editIdx = [idx1,idx2];
      if (idx1>=0 && idx2>=0) {
        const itemObj = JSON.parse(JSON.stringify(this.actionData[idx1].log[idx2]));
        const dateArr = itemObj.time.split(',');
        itemObj.dateStr = dateArr[0]+'-'+this.addZero(parseInt(dateArr[1])+1)+'-'+this.addZero(dateArr[2]);
        itemObj.H = dateArr[3];
        itemObj.M = dateArr[4];
        this.inputDamageItem = itemObj;
      }
      else {
        const today = new Date();
        const itemObj = {};
        itemObj.name = '';
        itemObj.damage = 0;
        itemObj.dateStr = '2020-'+this.addZero(today.getMonth()+1)+'-'+this.addZero(today.getDate());
        itemObj.H = today.getHours();
        itemObj.M = today.getMinutes();
        this.inputDamageItem = itemObj;
      }
      this.openEditWin();
    },
    confirmEdit: function () {
      if (this.editIdx[0]>=0 && this.editIdx[1]>=0) {}
      else {
        this.editIdx[0] = this.actionData.length-1;
        this.editIdx[1] = this.actionData[this.editIdx[0]].log.length;
      }
      const editObj = JSON.parse(JSON.stringify(this.inputDamageItem));
      const errorCheck = [
        [editObj.name.length<=0,'姓名输入有误'],
        [editObj.damage!=parseInt(editObj.damage),'伤害输入有误'],
        [editObj.dateStr.length<8,'日期输入有误'],
        [editObj.H!=parseInt(editObj.H) || parseInt(editObj.H)>23 || parseInt(editObj.H)<0,'小时输入有误'],
        [editObj.M!=parseInt(editObj.M) || parseInt(editObj.M)>59 || parseInt(editObj.M)<0,'分钟输入有误'],
      ];
      for (let i=0;i<errorCheck.length;i++) {
        if (errorCheck[i][0]) {
          alert(errorCheck[i][1]);
          this.closeTitleWin();
          return;
        }
      }
      const outputObj = {
        name: editObj.name,
        damage: parseInt(editObj.damage),
        time: this.dateStr2timeStamp(editObj.dateStr)+','+editObj.H+','+editObj.M
      }
      this.actionData[this.editIdx[0]].log[this.editIdx[1]] = outputObj;
      localStorage.setItem('data_cancer',JSON.stringify(this.actionData));
      this.closeEditWin();
    },

    timeStamp2timeStr: function (stamp) {
      const arr = stamp.split(',');
      return arr[0]+'年'+(parseInt(arr[1])+1)+'月'+arr[2]+'日 '+arr[3]+'时'+arr[4]+'分';
    },
    dateStr2timeStamp: function (str) {
      const arr = str.split('-');
      return arr[0]+','+(this.reduceZero(arr[1])-1)+','+this.reduceZero(arr[2])
    },

    collapseListBox: function (idx) {
      this.showListBox[idx] = !this.showListBox[idx];
      this.$forceUpdate();
    },

    addZero: function (num) {
      num = parseInt(num);
      if (num>=10) {return num+''}
      else {return '0'+num}
    },
    reduceZero: function (str) {
      if (str[0]==='0') {return parseInt(str[1])}
      else {return parseInt(str)}
    },
    collapseAll: function () {
      for (let i=0;i<this.actionData.length;i++) {this.showListBox[i]=false}
      this.$forceUpdate();
    }
  }
});
