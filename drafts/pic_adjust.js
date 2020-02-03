let vm = new Vue({
  el: '#pic-adjust-body',
  data: {
  },
  created: function () {
  },
  computed: {
  },
  methods: {
    getImageData (fileDOM) {
      console.log(fileDOM.currentTarget.files[0]);
      console.log(fileDOM.target.files[0]);
      console.log(document.getElementById('img-uploader').files[0]);
    },
    imageUpload () {
      $('#img-uploader').click();
    }
  }
});

// function getImageData (fileDOM) {
//   console.log(fileDOM.files[0]);
// }