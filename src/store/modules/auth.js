import { register } from '../../api/authAPI';

const state = {
  user: {},
  loggedIn: false
}

// Adding getter
const getters = {
  loggedIn: (state, getters, rootState) => {
    return state.loggedIn
  },
  currentUser: (state, getters, rootState) => {
    return state.user;
  }
}


// Actions
const actions = {
  signup ({ commit, state }, payload) {
    register(payload)
      .then(res => {
        console.log(res.data.user)
        commit('userSignedUp', res.data.user)
      })
  }
}


// mutations

const mutations = {
  userSignedUp (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
