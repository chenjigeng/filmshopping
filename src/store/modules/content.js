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
    },
    yueinfo: {
      messsage: '',
      phone: ''
    },
    seatInfo: null,
    updateSeats: false
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
    },
    applyY (state, payload) {
      state.yueinfo = payload
    },
    setOrder (state, payload) {
      state.seatInfo = payload
    },
    toggleUpdateSeats (state, payload) {
      state.updateSeats = !state.updateSeats
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
    getYInfo (state) {
      return state.yueinfo
    },
    getPayDialog (state) {
      return state.dialog.Pay
    },
    getSeatInfo (state) {
      return state.seatInfo
    },
    getUpdateSeats (state) {
      return state.updateSeats
    }
  },
  actions: {
  }
}

export default content
