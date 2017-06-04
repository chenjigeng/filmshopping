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
      LRDialog: false
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
      }
    },
    changeUserInfo (state, payload) {
      state.userinfo = Object.assign(state.userinfo, payload)
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
