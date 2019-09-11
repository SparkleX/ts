Vue.component('label-input', {
    props: {
		value: [String, Number],
		label: String
	},
	template: '<div><label>{{label}}<format-input v-model="displayValue"></format-input></label></div>',
    computed: {
        displayValue: {
            get: function() {
                return this.value.toString();
            },
            set: function(modifiedValue) {
                this.$emit('input', modifiedValue);
            }
        }
    }	
	
});