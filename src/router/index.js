import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from '../views/NotFoundComponent.vue'
import Home from '@/views/Home'
import MovieDetail from '@/views/MovieDetail'
import TheaterDetail from '@/views/TheaterDetail'
import SelectSeat from '@/views/SelectSeat'

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
      component: NotFoundComponent
    }
  ]
})
