// var Vue = require('vue')

(function () { 'use strict'
  var createApp = function () {
    // ---------------------
    // 开始常用的应用代码
    // ---------------------
    // 主要的Vue实例必须返回，并且有一个根节点在id "app"上，这样客户端可以加载它。
    return new Vue({
      template: '<div id="app">你已经在这花了 {{ counter }} 秒。</div>',
      data: {
        counter: 0
      },
      created: function () {
        var vm = this
        setInterval(function () {
          vm.counter += 1
        }, 1000)
      }
    })
    // -------------------
    // 结束常用的应用代码
    // -------------------
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = createApp
  } else {
    this.app = createApp()
  }
}).call(this)
