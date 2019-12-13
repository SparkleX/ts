import Vue from 'vue'
import Main from './Main'

new Vue({
	el: '#app',
	render: (createEl)=>createEl(Main)
}).$mount('#app');