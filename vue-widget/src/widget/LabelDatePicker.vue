<template>
  <div>
  	<label>{{label}}</label>
	<datepicker placeholder="Select Date" format="yyyy-MM-dd" v-bind:value="value" @input="onInput($event)"/>
  </div>
</template>

<script>
export default {
	props: ['label','dataBind','value'],
	methods: {
		onInput : function (event) {
			this.$emit('input', event);
		}
	}
}
</script>

<style>
</style>

<style scoped>
label {
	width: 40%;
	overflow:hidden;
	display: inline-block
}
.vdp-datepicker {
	width: 40%;
	display: inline-block
}
.vdp-datepicker>>>input {
	width: 100%;
}
</style>