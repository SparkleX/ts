import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DetailView from '@/components/DetailView'
import Login from '@/components/Login'
import LeaveList from '@/components/leave/LeaveList'
import LeaveDetail from '@/components/leave/LeaveDetail'

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
    {
		path: '/leave',
		name: 'LeaveList',
		component: LeaveList
	},	
    {
		path: '/leave/:id',
		name: 'LeaveDetail',
		component: LeaveDetail
	},		
  ]
})
