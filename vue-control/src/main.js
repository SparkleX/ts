import Vue from 'vue'
//import App from './docs/App'
//import router from './docs/router'
//import './docs/style/global.less'
//import ViewComponet from './docs/component'

import Relax from './components'
//import './package/theme/style.less'

//import VueHighlightJS from 'vue-highlight.js'
//import 'vue-highlight.js/lib/allLanguages'
Vue.config.productionTip = false

Vue.use(Relax)
//Vue.use(ViewComponet)
//Vue.use(VueHighlightJS)

new Vue({
 /* router,
  render: h => h(App)*/
}).$mount("#app")