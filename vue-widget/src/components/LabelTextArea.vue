<template>
  <div>
  	<label>{{label}}</label>
	<textarea v-bind:value="value" @input="$emit('input', $event.target.value)">
	</textarea>
  </div>
</template>

<script>
export default {
	props: ['label','dataBind','value']
}
</script>

<style scoped>
label {
	vertical-align: top;
	width: 40%;
	height: 100%;
	overflow:hidden;
	display: inline-block
}
textarea {
	width: 40%
}
</style>
