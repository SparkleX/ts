<template>
  <div id="app">
  	<router-link :to="{ name: 'NewLeave'}">New Leave Request</router-link>
    <data-table :title="'Leave Request List'" :columns="['a','b','c']" :rows="rows" >
		<template v-slot:a="data" >
			{{data.cell}}
		</template>
		<template v-slot:b="data" >
			<a :href="'#/leave/'+ data.cell">{{data.cell}}</a>
		</template>
		<template v-slot:c="data" >
			<button >Cancel</button>
		</template>
	</data-table>
	<p></p>
	<button v-on:click="onPressNew">New Leave Request</button>
  </div>
</template>

<script>
import DataTable from "@/share/components/DataTable.vue";
import axios from "axios";

export default {
	name: "app",
	components: {},
	data: function(){
		return {dataReady: false, rows:[]};
	},
	mounted: async function () {
	var rt = await axios.get("http://localhost:3000/assets/json/test.json");
	this.rows = rt.data.rows
	this.dataReady = true;
	},
	methods: {
		onPressNew: function() {
			this.$router.push({ name: 'NewLeave'});
		}
	}
};

</script>

<style scoped>
</style>
