Vue.component('label-input', {
	props: {
		label: String,
		bind: String,
		value: String
	},
	template: '<div><label>{{label}}</label><format-input/></div>'
})