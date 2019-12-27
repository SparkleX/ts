<template>
  <div>
  	<label>{{label}}</label>
	<input v-bind:value="value" @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
export default {
	props: ['label','dataBind','value']
}
</script>

<style scoped>
label {
	width: 40%;
	overflow:hidden;
	display: inline-block
}
input {
	width: 40%
}
</style>