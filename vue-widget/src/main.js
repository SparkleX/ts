import Vue from 'vue'

import Relax from './widget'
Vue.config.productionTip = false

Vue.use(Relax)
//Vue.use(ViewComponet)
//Vue.use(VueHighlightJS)

new Vue({
 /* router,
  render: h => h(App)*/
}).$mount("#app")