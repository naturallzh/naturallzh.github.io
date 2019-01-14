var vm = new Vue({
	el: '#main-body',
	data: {
		test: "welcome!"
	},
	created: function () {},
	computed: {},
	methods: {
		goToTest: function () {
			//window.location.href = 'html/test.html';
			window.open('html/test.html');
		}
	}
});