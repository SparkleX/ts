var app = new Vue({
	el: '#app',
	data: {
	  message: 'Hello Vue!',
	  CardCode:'C001',
	  CardName:'Microsoft'
	},
	methods: {
		onGetValue: function (event) {
			alert(this.message);
			if (event) {
				alert(event.target.tagName)
			}
		}
	}	
  })