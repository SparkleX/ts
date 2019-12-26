<template>
  <div id="app">
    <data-table :title="'Leave Request List'" :columns="['a','b','c']" :rows="rows" >
		<template v-slot:a="data" >
			{{data.cell}}
		</template>
		<template v-slot:b="data" >
			<a :href="'#/leave/'+ data.cell">{{data.cell}}</a>
		</template>
		<template v-slot:c="data" >
			<input :value="data.cell"/>
		</template>
	</data-table>
  </div>
</template>

<script>
import DataTable from "@/components/share/DataTable.vue";
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
  }
};

</script>

<style scoped>
</style>
