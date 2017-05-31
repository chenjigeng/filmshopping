import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from '../components/NotFoundComponent.vue'
import Home from '@/components/Home'

Vue.use(Router)

console.log(Home)
export default new Router({
  mode: 'history',
  routes: [
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
