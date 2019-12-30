<template>
  <div>
  	<label>{{label}}</label>
	<select v-bind:value="value" @input="$emit('input', $event.target.value)">
	  <option v-bind:value="'A'">Annual Leave</option>
	  <option v-bind:value="'S'">Sick Leave</option>
	</select>
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
select {
	width: 40%
}
</style>
