const content = {
  state: {
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
    }
  },
  mutations: {
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
    }
  },
  getters: {
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
    getPayDialog (state) {
      return state.dialog.Pay
    }
  },
  actions: {
  }
}

export default content
