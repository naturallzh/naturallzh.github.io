let vm = new Vue({
  el: '#drag-body',
  data: {
    listData: [],
    dragParas: {
      childBlock: {value:null}
    },
  },
  created () {},
  mounted () {
    this.init();
  },
  computed: {},
  methods: {

    init () {
      this.listData = [
        {value: '#1', mode: 0},
        {value: '#2', mode: 0},
        {value: '#3', mode: 0},
        {value: '#4', mode: 0},
        {value: '#5', mode: 0},
        {value: '#6', mode: 0},
        {value: '#7', mode: 0},
      ];

      this.dragParas.ele = document.getElementById('listBlock');
      this.dragParas.mode = 0;

      this.dragParas.ele.addEventListener("mousedown", this.mousedown, false);
      this.dragParas.ele.addEventListener("mousemove", this.mouseMove, false);
    },

    mousedown () {
      this.dragParas.ele.addEventListener("mouseup", this.breakMousedown, false);
      this.dragParas.ele.addEventListener("mousemove", this.breakMousedown, false);
      this.dragParas.timer =  setTimeout(()=>{
        clearTimeout(this.dragParas.timer);

        console.log("long time mousedown detected");
        this.dragParas.mode = 1;
        this.dragParas.selectedIdx = this.dragParas.mouseY;
        this.listData[this.dragParas.mouseY].mode = 1;
        this.dragParas.childBlock = this.listData[this.dragParas.selectedIdx];
        this.listData.splice(this.dragParas.selectedIdx, 1);
        this.dragParas.motherBlock = this.listData;
        this.dragParas.floatEle = document.getElementById('floatBlock');
        this.dragParas.floatEle.style.top = 40*this.dragParas.mouseY + 'px';
        this.processList();
        this.$forceUpdate();
        this.dragParas.ele.removeEventListener("mouseup", this.breakMousedown, false);
        this.dragParas.ele.removeEventListener("mousemove", this.breakMousedown, false);
        this.dragParas.ele.addEventListener("mouseup", this.blockMoveEnd, false);
      },500);
    },

    breakMousedown () {
      clearTimeout(this.dragParas.timer);
      this.dragParas.ele.removeEventListener("mouseup", this.breakMousedown, false);
      this.dragParas.ele.removeEventListener("mousemove", this.breakMousedown, false);

      console.log("long time mousedown break");
    },

    processList () {
      const arr1 = this.dragParas.motherBlock.slice(0, this.dragParas.mouseY);
      arr1.push(this.dragParas.childBlock);
      this.listData = arr1.concat(this.dragParas.motherBlock.slice(this.dragParas.mouseY));
    },

    mouseMove () {
      this.dragParas.mouseY = Math.floor((window.event.clientY - 50) / 40);

      if (this.dragParas.mode) {
        this.dragParas.floatEle.style.top = window.event.clientY - 50 - this.dragParas.mouseYStart + this.dragParas.selectedIdx*40 + 'px';
        this.processList ();
      }

      if (!this.dragParas.mode) {
        this.dragParas.mouseYStart = window.event.clientY - 50;
      }

      console.log(this.dragParas.mouseY);
    },

    blockMoveEnd () {
      this.listData[this.dragParas.mouseY].mode = 0;
      this.dragParas.mode = 0;

      this.dragParas.ele.removeEventListener("mouseup", this.blockMoveEnd, false);
      console.log('move end');
    },

  }
});