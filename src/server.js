import Vue from 'vue'
import App from './main'

export default function (options) {
  const VueApp = Vue.extend(App)

  const app = new VueApp(Object.assign({}, options))
  return new Promise(resolve => {
    resolve(app)
  })
}
