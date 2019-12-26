// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import vuex from 'vuex'
import App from './App'
import router from './router'

//import {ServerTable, ClientTable, Event} from 'vue-tables-2';


//Vue.use(ClientTable);

import DataTable from "./components/share/DataTable"
Vue.component('data-table', DataTable);
Vue.use(DataTable);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
