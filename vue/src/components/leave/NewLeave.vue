<template>
  <div id="app">
	New Leave<p></p>

	<label-select label="Leave Type 1" v-model="type">
	</label-select>
	<label-datepicker label="From" placeholder="Select Date" v-model="from" />
	<label-datepicker label="To" placeholder="Select Date" v-model="to" />
	<label-input label="Manager" v-model="manager"></label-input>

	<label-textarea label="Note" v-model="note"></label-textarea>

<!--	<label>Leave Type</label>
	<select v-model="type">
	  <option v-bind:value="'A'">Annual Leave</option>
	  <option v-bind:value="'S'">Sick Leave</option>
	</select>
	<p></p>

	<label>From</label>
	<datepicker placeholder="Select Date" v-model="from" ></datepicker>
	<p></p>

	<label>To</label>
	<input type="date" />
	<p></p>

	<label>Send To</label>
	<input v-model="manager"/>
	<p></p>

	

	<label>Note</label>
	<textarea v-model="note" placeholder="messages"></textarea>
	<p></p>--->

		<button v-on:click="onPressSend">Send</button>

  </div>
</template>

<script>
export default {
	props: [],
	data : function () {
		return {
			type:'A',
			manager:'',
			note:'',
			from: new Date(),
			to: new Date()
			};
	},
	methods : {
		onPressSend : function () {
			alert(JSON.stringify(this.$data));
		}
	}
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
select {
	width: 40%
}
textarea {
	width: 40%
}

datepicker {
	width: 40%
}
</style>
