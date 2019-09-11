Vue.component('format-input', {
    props: ["value"],
    template: '<input type="text" v-model="displayValue" @blur="isInputActive = false" @focus="isInputActive = true"></input>',
    data: function() {
        return {
            isInputActive: false
        }
    },
    computed: {
        displayValue: {
            get: function() {
                if (this.isInputActive) {
                    return this.value.toString();
                } else {
                    return "$ " + this.value;
                }
            },
            set: function(modifiedValue) {
                let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""));
                if (isNaN(newValue)) {
                    newValue = 0
                }
                this.$emit('input', newValue);
            }
        }
    }
});