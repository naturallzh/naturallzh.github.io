var vm = new Vue({
	el: '#main-body',
	data: {
		test: "welcome!"
	},
	created: function () {},
	computed: {},
	methods: {
		goToTest: function () {
			location.href = 'html/test.html';
		}
	}
});