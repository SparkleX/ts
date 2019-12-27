<template>
  <div id="app">

 



	Create Sales Order<p></p>

	<label-input label="Business Partner" v-model="CardCode"/>
	<label-datepicker label="Due Date" placeholder="Select Date" v-model="DueDate" />
	<label-datepicker label="Doc Date" placeholder="Select Date" v-model="DocDate" />

	<label-textarea label="Note" v-model="Note"></label-textarea>

<!--	<div v-for="(row, index) in Details" :key="index">
		<input v-model="row.LineNum" >
	</div>	
	<table>
		<template v-for="e in Details" >
			<tr :key="e">
				<td>
					<input v-model="e.LineNum"/>
				</td>
			</tr>
		</template>
	</table>--->
	<button v-on:click="onPressNewLine">+</button>
    <data-table :title="'Items'" :columns="['LineNum','ItemCode','Price','LineTotal']" :rows="Details" >
		<template v-slot:LineNum="data" >
			<input v-model="data.row.LineNum"/>
		</template>
		<template v-slot:ItemCode="data" >
			<input v-model="data.row.ItemCode"/>
		</template>
		<template v-slot:Price="data" >
			<input v-model="data.row.Price"/>
		</template>
	</data-table>	
	<button v-on:click="onPressSend">Add</button>
	<button id="show-modal" @click="showModal = true">Open Dialog</button>
	<!-- use the modal component, pass in the prop -->
	<choose-dialog v-if="showModal" @close="showModal = false">
		<h3 slot="header">custom header</h3>
	</choose-dialog>
  </div>

</template>

<script>
export default {
	props: [],
	data : function () {
		return {
			showModal: false,
			CardCode:'C001',
			Note:'Sales Order',
			DueDate: new Date(),
			DocDate: new Date(),
			Details:[
				{
					LineNum:1,
					ItemCode:"I001",
					Price:100.01
				},
				{
					LineNum:2,
					ItemCode:"I002",
					Price:200.01
				}
			]
			};
	},
	methods : {
		onPressSend : function () {
			alert(JSON.stringify(this.$data));
		},
		onPressNewLine : function () {
			this.$data.Details.push({});
		},
		onPressOpenDialog: function () {
		},
		myDialogClose () {
		}
	}
}
</script>
<style scoped>
input {
	width: 100%;
	height: 100%;
	border: 0px solid;
}
</style>
