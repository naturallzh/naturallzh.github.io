let vm = new Vue({
  el: '#data-structure-body',
  data: {
    dataArr: [
      {name: 'Number', value: Number},
      {name: 'String', value: String},
      {name: 'Boolean', value: Boolean},
      {name: 'Function', value: Function},
      {name: 'Array', value: Array},
      {name: 'Object', value: Object},
      {name: 'parseInt', value: parseInt},
      {name: 'parseInt()', value: parseInt()},
      {name: 'null', value: null},
      {name: 'undefined', value: undefined},
      {name: '12', value: 12},
      {name: '\'a string\'', value: 'a string'},
      {name: 'true', value: true},
      {name: 'NaN', value: NaN},
      {name: 'typeof undefined', value: typeof undefined},
      {name: '[]', value: []},
      {name: '[1,2,3]', value: [1,2,3]},
      {name: '[1,2,3].constructor', value: [1,2,3].constructor},
    ],
  },
  created: function () {
  },
  computed: {
  },
  methods: {
  }
});