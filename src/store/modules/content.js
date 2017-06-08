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
    updateSeats: false,
    scheduleInfo: {
      startTime: '',
      endTime: '',
      cinemaName: '',
      movieName: ''
    },
    tickets: []
  },
  mutations: {
    toggleDiglog (state, payload) {
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
    setScheduleInfo (state, payload) {
      state.scheduleInfo = payload
    },
    setTickets (state, payload) {
      state.tickets = payload
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
    },
    getScheduleInfo (state) {
      return state.scheduleInfo
    },
    getTickets (state) {
      return state.tickets
    }
  },
  actions: {
  }
}

export default content
