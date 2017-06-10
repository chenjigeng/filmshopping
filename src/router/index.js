import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import MovieDetail from '@/views/MovieDetail'
import TheaterDetail from '@/views/TheaterDetail'
import SelectSeat from '@/views/SelectSeat'
import Order from '@/views/Order'

Vue.use(Router)

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
      path: '/order',
      component: Order
    },
    {
      path: '/movie-detail/:id',
      component: MovieDetail
    },
    {
      path: '/theater-detail/:id',
      component: TheaterDetail
    },
    {
      path: '/select-seat/:id',
      component: SelectSeat
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
