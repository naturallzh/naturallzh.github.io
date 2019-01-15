let vm = new Vue({
	el: '#index-body',
	data: {
		url: {
			searchList: "html/search_list.html",
			newList: "html/new_list.html",
			comparePage: "html/compare_page.html",
		},
	},
	created: function () {},
	computed: {},
	methods: {
		openPage: function (url, tar) {
			// window.location.href = 'html/search_list.html';
			window.open(url, tar);
		},
		test: function () {
			$('.btn-search')[0].style.boxShadow = '0 0 80px 0 rgba(0, 0, 0, 0.5)';
		},
		test2: function () {
			$('.btn-search')[0].style.boxShadow = '';
		}
	}
});