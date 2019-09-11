import Vue from 'vue';
import ListView from '../infra/view/list-view.vue'

Vue.component('list-view', ListView);

var app4 = new Vue({
	el: '#container',
	data: {
		CardCode: 'C001',
		CardName: 'NAME',
		Balance: 1.01,
		BalanceFC: 2.02
	}
});

