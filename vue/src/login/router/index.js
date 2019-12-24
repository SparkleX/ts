import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DetailView from '@/components/DetailView'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
	},
    {
		path: '/login',
		name: 'Login',
		component: Login
	},	
    {
      path: '/detail/:id',
      name: 'DetailView',
      component: DetailView
    },
  ]
})
