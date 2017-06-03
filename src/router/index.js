import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from '../views/NotFoundComponent.vue'
import Home from '@/views/Home'

Vue.use(Router)

console.log(Home)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
