import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import List from '@/components/List'
import Total from '../components/Total'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path:'/total',
      name:'Total',
      component:Total
    }
  ]
})
