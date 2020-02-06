Vue.component('blank-block', {
  template:
    '<div id="blank-block"></div>',

  data: function () {
    return {
    }
  },
  props: {
    width: {
      type: String,
      default: "20px"
    },
    height: {
      type: String,
      default: "20px"
    },
    color: {
      type: String,
    },
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },

  beforeCreate () {},
  created () {
  },
  beforeMount () {},
  mounted (){
    setStyle("#blank-block",[0],"width:" + this.width + ";height:" + this.height + ";background:" + this.color);
  },
});