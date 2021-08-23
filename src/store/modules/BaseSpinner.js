export default {
  namespaced: true,
  state: {
    status: false
  },
  getters: {
    getStatus (state) {
      return state.status
    }
  },
  mutations: {
    setToggleStatus (state) {
      state.status = !state.status
    }
  },
  actions: {
    setToggleStatus ({ commit }) {
      commit('setToggleStatus')
    }
  }
}
