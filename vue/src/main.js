import Vue from 'vue'
//import vuex from 'vuex'
import App from './App'
import router from './router'

import DataTable from "@/share/components/DataTable"
Vue.component('data-table', DataTable);
Vue.use(DataTable);

import LabelSelect from "@/share/components/LabelSelect"
Vue.component('label-select', LabelSelect);
Vue.use(LabelSelect);

import LabelTextArea from "@/share/components/LabelTextArea"
Vue.component('label-textarea', LabelTextArea);
Vue.use(LabelTextArea);

import LabelInput from "@/share/components/LabelInput"
Vue.component('label-input', LabelInput);
Vue.use(LabelInput);

import LabelDatePicker from "@/share/components/LabelDatePicker"
Vue.component('label-datepicker', LabelDatePicker);
Vue.use(LabelDatePicker);

import ChooseDialog from "@/share/dialog/ChooseDialog"
Vue.component('choose-dialog', ChooseDialog);
Vue.use(ChooseDialog);

import Datepicker from 'vuejs-datepicker';
Vue.component('datepicker', Datepicker);

Vue.use(Datepicker);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
