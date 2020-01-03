<template>
	<v-container>
		<p>{{ $t('hello.aaa') }}</p>
		<v-chip draggable>Default</v-chip>
		<v-tabs>
			<v-tab>{{ $t('hello.aaa') }}</v-tab>
			
			<v-tab-item>
				<v-btn small color="error" v-on:click="onPressTest" >Test</v-btn>
				<v-text-field label="Label" ></v-text-field>  
				<v-select :items="[1,2,3,4]" label="Standard" ></v-select>
				<label-date-picker label="Date From" v-model="dateFrom"></label-date-picker>
			</v-tab-item>		
			<v-tab>付款</v-tab>
			<v-tab-item>
				<v-btn small color="error" v-on:click="onPressTest" >Test</v-btn>
			</v-tab-item>				
			<v-tab>财务</v-tab>
		</v-tabs>
	</v-container>
</template>

<script>
export default {
	name: 'HelloWorld',
	data: function() {
		return {
			dateFrom: "06/06/2020"
		}
	},
	methods: {
		onPressTest : function () {
			alert(this.dateFrom);
			//this.$emit('input', event);
		}
	},  
};
</script>
