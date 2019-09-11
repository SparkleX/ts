Vue.component('format-input', {
	props: {
		bind: String,
		value: String
	},
	methods: {
		onInput: function (event) {
			alert('a');
			this.$emit('input', event.target.value);
		}
	},	
	template: '<input type="text" :value="value" v-on:input="onInput"/>'
})