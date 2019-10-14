let vm = new Vue({
  el: '#wave-body',
  data: {
    Q1: 0,        // 相位
  },
  created () {},
  mounted () {
    window.requestAnimationFrame(this.drawCanvas1);
    // mounted只用看上面这一行 下面不用看
    return;

    var canvas = document.getElementById("myCanvas"),
      ctx = canvas.getContext('2d'),
      width = canvas.width = canvas.offsetWidth,
      height = canvas.height = canvas.offsetHeight;

    var A = 30,
      W = 1 / 200,
      Q = 0,
      H = height / 2;

    var A2 = 30,
      W2 = 1 / 300,
      Q2 = 0,
      H2 = height / 2;

    var speed = -0.01;
    var speed2 = -0.02;

    // var lingrad = ctx.createLinearGradient(0,0,width,0);
    // lingrad.addColorStop(0, 'rgba(0,186,128,0.8)');
    // lingrad.addColorStop(1, 'rgba(111,224,195,1)');
    //
    // var lingrad2 = ctx.createLinearGradient(0,0,width,0);
    // lingrad2.addColorStop(0,'rgba(111,224,195,1)');
    // lingrad2.addColorStop(1, 'rgba(0,186,128,0.8)');

    var lingrad = ctx.fillStyle="rgba(255,255,255,0.5)";
    var lingrad2 = ctx.fillStyle="#FFF";

    (function draw(){
      window.requestAnimationFrame(draw);
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      // ctx.strokeStyle="#000";
      ctx.fillStyle = lingrad;
      ctx.lineWidth = 1;
      // ctx.moveTo(0, height / 2);
      ctx.moveTo(0, A*Math.sin(Q) +H);

      for (let x = 0; x <=  width; x++) {
        // var s = 0.1*Math.sin(x/150)+1;
        var s = 1;
        var y = A*Math.sin(W*x+Q) +H;
        y=y*s;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
      // ctx.stroke();

      ctx.globalCompositeOperation = "destination-over";

      ctx.beginPath();
      // ctx.strokeStyle="#000";
      ctx.lineWidth = 1;
      ctx.fillStyle = lingrad2;

      for (let x = 0; x < width; x++) {
        var y = A2*Math.sin(x*W2+Q2) +H2;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width,height);
      ctx.lineTo(0,height);

      //ctx.stroke();
      ctx.fill();
      ctx.closePath();

      Q+=speed;
      Q2+=speed2;

    })()
  },
  computed: {},
  methods: {

    drawCanvas1 () {
      // 回调自己 无限循环 以产生动画
      window.requestAnimationFrame(this.drawCanvas1);

      // 通过id获取canvas画布
      const canvas = document.getElementById("myCanvas1"),
        ctx = canvas.getContext('2d'),
        // 设置画布宽高 并用2个变量储存这2个值
        width = canvas.width = canvas.offsetWidth,
        height = canvas.height = canvas.offsetHeight;

      const A = 30,   // 振幅
        // 函数的角频率W=2π/T T为函数的周期
        // 注意这里的"周期"指的是一个完成的余弦波(从波峰到波峰或从波谷到波谷)长度是多少个像素
        // 而不是图像运动的快慢
        // 这里相当于将一个完整的正弦波长度设置为500px
        W = 2 * Math.PI / 500,
        // 读取相位值
        Q = this.Q1,
        // 纵坐标偏移值 因为余弦波图像只有一半大于0，所以需要整体平移
        H = height / 2;

      // 这里的speed才是图像运动的速度
      // 正负号可以控制图像偏移的方向 负号向右 正号向左
      const speed = - 0.01;

      // 设置canvas填充样式
      ctx.fillStyle = "rgba(255,255,255,0.5)";

      // 清空画布
      ctx.clearRect(0, 0, width, height);
      // 开始画路径
      ctx.beginPath();

      // 将画笔移动到初始位置 需要画一个封闭的边框 然后填充
      // 这个起始位置就是横坐标为0时y的值
      ctx.moveTo(0, A*Math.sin(Q) +H);
      // 首先画出余弦线部分 通过逐步增大x的值一点点绘制出余弦曲线图
      for (let x = 1; x <=  width; x++) {
        const y = A*Math.sin(W*x+Q) +H;
        ctx.lineTo(x, y);
      }
      // 画线到右下角 即画出右边框
      ctx.lineTo(width, height);
      // 画线到左下角 即画出底边框
      ctx.lineTo(0, height);
      // 完成路径绘制 即补全左边框
      ctx.closePath();
      // 填充
      ctx.fill();

      // 以下3行可以显示边框笔迹路径 解除注释可以就能看到边框
      // canvas就是在这个封闭的范围内用fillStyle的样式填充出了图形
      // 仔细体会顶部的余弦边框是如何生成的
      // ctx.lineWidth = 1;
      // ctx.strokeStyle="#000";
      // ctx.stroke();

      // 更新全局变量Q 相当于随着时间的流逝改变函数相位 即平移了函数图像
      this.Q1+=speed;
    },

  }
});