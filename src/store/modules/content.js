const content = {
  state: {
    count: 0,
    userinfo: {
      phone: '',
      username: '',
      gender: '',
      login: false
    },
    dialog: {
      YDialog: false,
      LRDialog: false,
      OrderDetail: false,
      Pay: false
    },
    yueinfo: null
    }
  },
  mutations: {
    increment (state, payload) {
      state.count = state.count + payload.count
    },
    toggleDiglog (state, payload) {
      console.log(payload)
      if (payload === 'LR') {
        state.dialog.LRDialog = !state.dialog.LRDialog
      } else if (payload === 'Y') {
        state.dialog.YDialog = !state.dialog.YDialog
      } else if (payload === 'OrderDetail') {
        state.dialog.OrderDetail = !state.dialog.OrderDetail
      } else if (payload === 'Pay') {
        state.dialog.Pay = !state.dialog.Pay
      }
    },
    changeUserInfo (state, payload) {
      state.userinfo = Object.assign(state.userinfo, payload)
    },
    applyY (state, payload) {
      state.yueinfo = payload
      state.dialog.YDialog = !state.dialog.YDialog
      console.log('yueinfo', state)
    }
  },
  getters: {
    getCount (state) {
      return state.count + 1
    },
    getLRDialog (state) {
      return state.dialog.LRDialog
    },
    getYDialog (state) {
      return state.dialog.YDialog
    },
    getUserInfo (state) {
      return state.userinfo
    },
    getOrderDetailDialog (state) {
      return state.dialog.OrderDetail
    },
    getYInfo (state) {
      return state.yueinfo
    },
    getPayDialog (state) {
      return state.dialog.Pay
    }
  },
  actions: {
    doubleCount (context, payload) {
      setTimeout(function () {
        context.state.count += payload.count
        context.commit('increment', payload)
      }, 1000)
    }
  }
}

export default content
