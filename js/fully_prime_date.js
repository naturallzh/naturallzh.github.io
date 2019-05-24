let vm = new Vue({
  el: '#fpd-body',
  data: {
    primeList: [2,3,5,7],     // 质数表 页面创建时扩充为1-10000之间
    primeMD: [],              // 符合质数"月日"的日期 元素为num 懒得补零
    FPDList: [],              // 顺序记录 无分割 速度慢 放弃
    FPDListInIdx: [],         // 以指数增长的年份分割列表
    FPDListInCtr: [],         // 以世纪为单位分割列表
    inputYIdx: "",             // 输入的年份的位数
  },
  created: function () {
    this.generatePrimeList();
    this.generatePrimeMD();
    //this.generateFPDList();
    this.generateFPDListInIdx(6);
  },
  computed: {},
  methods: {
    // 扩充质数表至1-10000
    generatePrimeList: function () {
      const primeArr1 = this.primeList;
      let isPrime;
      for (let i = 11; i < 101; i++) {
        isPrime = true;
        for (let j = 0; j < primeArr1.length; j++) {
          if (i % primeArr1[j] === 0) {
            isPrime = false;
            break;
          }
        }
        isPrime?this.primeList.push(i):"";
      }
      const primeArr2 = this.primeList;
      for (let i = 101; i < 10001; i++) {
        isPrime = true;
        for (let j = 0; j < primeArr2.length; j++) {
          if (i % primeArr2[j] === 0) {
            isPrime = false;
            break;
          }
        }
        isPrime?this.primeList.push(i):"";
      }
    },

    // 生成质数"日月"的日期列表
    generatePrimeMD: function () {
      let mdn = [];
      let isPrimeMD;
      const dayArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      for (let m = 1; m < 12; m++) {
        for (let d = 1; d < dayArr[m-1]; d++) {
          if ((d%10 !== 3) && (d%10 !== 7)) {continue;}
          mdn = [d%10, d, (m%10)*100+d, m*100+d];
          isPrimeMD = true;
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 12; j++) {
              if (this.primeList[j] * this.primeList[j] > mdn[i]) {break;}
              if (mdn[i] % this.primeList[j] === 0) {
                isPrimeMD = false;
                break;
              }
            }
            if (!isPrimeMD) {break;}
          }
          isPrimeMD?this.primeMD.push(m*100+d):"";
        }
      }
    },

    // 生成所有FPD列表
    generateFPDList: function () {
      const PMDArr = this.primeMD;
      let ymdn = [];
      let isFPD;
      for (let y = 1; y < 9999; y++) {
        for (let i = 0; i < PMDArr.length; i++) {
          ymdn = [(y%10)*10000+PMDArr[i], (y%100)*10000+PMDArr[i], (y%1000)*10000+PMDArr[i], y*10000+PMDArr[i]];
          isFPD = true;
          for (let j = 0; j < 4; j++) {
            for (let k = 0; k < this.primeList.length; k++) {
              if (this.primeList[k] * this.primeList[k] > ymdn[j]) {break;}
              if (ymdn[j] % this.primeList[k] === 0) {
                isFPD = false;
                break;
              }
            }
            if (!isFPD) {break;}
          }
          isFPD?this.FPDList.push(y*10000 + PMDArr[i]):"";
        }
      }
    },

    // 生成以指数增长的年份分割列表
    generateFPDListInIdx: function (yIdx) {
      yIdx = parseInt(yIdx);
      const outputArr = [];
      let baseArr = [];
      let isFPD;
      let num;
      outputArr[0] = this.primeMD;
      for (let idx = 1; idx < yIdx+1; idx++) {
        console.log(idx);
        baseArr = baseArr.concat(outputArr[idx-1]);
        outputArr[idx] = [];
        for (let y = 1; y < 10; y++) {
          for (let n = 0; n < baseArr.length; n++) {
            isFPD = true;
            num = y*Math.pow(10,idx+3) + baseArr[n];
            for (let i = 0; i < this.primeList.length; i++) {
              if (this.primeList[i] * this.primeList[i] > num) {break;}
              if (num % this.primeList[i] === 0) {
                isFPD = false;
                break;
              }
            }
            isFPD?outputArr[idx].push(num):"";
          }
        }
      }
      console.log("计算结束");
      this.FPDListInIdx = outputArr;
    },

    // 生成以世纪为单位分割列表
    generateFPDListInCtr: function () {
    },

    submitYIdx: function () {
      this.generateFPDListInIdx(this.inputYIdx);
    }

  }
});