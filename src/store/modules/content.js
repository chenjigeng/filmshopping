const content = {
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload) {
      state.count = state.count + payload.count
    }
  },
  getters: {
    getCount (state) {
      return state.count + 1
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
