/**
 * create By 陈纪庚 178854407@qq.com
 * 用来引入modules里注册的模块
 */

import Vuex from 'vuex'
import Vue from 'vue'
import content from './modules/content'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    content: content
  }
})

export default store
