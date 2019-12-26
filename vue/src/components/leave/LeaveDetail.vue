<template>
  <div id="app">
		{{$route.params.id}}
  </div>
</template>

<script>
export default {
	props: [],
	data : function () {
		return {value:'111'};
	}
}
</script>
<style scoped>

</style>
