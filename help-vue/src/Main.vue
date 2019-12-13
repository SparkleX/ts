<template>
	<div>
		<h1>Hello</h1>
		<input v-model="id"/>
	</div>
</template>

<script>
export default {
  name: 'Main',
  data : function () {
	  return {
		  id : 100
	  }
  }
}
</script>

<style>
</style>
