import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import LabelDatePicker from "@/share/LabelDatePicker"
import i18n from './i18n'
Vue.component('label-date-picker', LabelDatePicker);
Vue.use(LabelDatePicker);


new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
