const content = {
  state: {
    count: 0,
    dialogVisible: false,
    userinfo: {
      phone: '',
      username: '',
      gender: '',
      login: false
    }
  },
  mutations: {
    increment (state, payload) {
      state.count = state.count + payload.count
    },
    toggleDiglog (state) {
      state.dialogVisible = !state.dialogVisible
    },
    changeUserInfo (state, payload) {
      state.userinfo = Object.assign(state.userinfo, payload)
    }
  },
  getters: {
    getCount (state) {
      return state.count + 1
    },
    getdialogVisible (state) {
      return state.dialogVisible
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
