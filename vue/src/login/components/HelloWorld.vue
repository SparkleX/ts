<template>
  <div id="app">
    <div class="ui container">
		<router-link :to="{ name:'DetailView',params: { id: 1}}">跳转书籍详情\^o^/</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
