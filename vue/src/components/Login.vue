<template>
  <div id="app">
    <div>
      <label for="user" style="display:inline-block; width:100px">User</label>
      <input id="user" placeholder="user" v-model="user" />
      <p></p>
      <label for="password" style="display:inline-block; width:100px">Password</label>
      <input id="password" type="password" placeholder="password" v-model="password" />
      <p></p>
      <label style="display:inline-block; width:100px"></label>
      <button v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
	  return {
    	user: "manager",
		password: "1234"
	  }
  },
  methods: {
    login: function() {
	  alert(user.value);
	  alert(password.value);
	  this.$router.push({ name: 'DetailView', params: { id: '100' }});
    }
  }
};
</script>
<style scoped>
</style>
