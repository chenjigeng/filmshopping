// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store/index'
import './styles/common.css'

/* 引入库 */
Vue.config.productionTip = false
Vue.use(ElementUI)

var app = new Vue({
  render: h => h(App),
  router,
  store
})

router.onReady(() => {
  app.$mount('#app')
})
export default app
