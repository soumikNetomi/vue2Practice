import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
