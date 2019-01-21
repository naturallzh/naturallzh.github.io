let vm = new Vue({
	el: '#index-body',
	data: {
		testData: false,
	},
	created: function () {},
	computed: {},
	methods: {
		test: function () {
			this.testData = true;
			console.log(this.testData);
		}
	}
});