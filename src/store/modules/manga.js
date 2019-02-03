const state = {
  myMangas: []
};

// Adding getter
const getters = {
  myMangas: (state, getters, rootState) => {
    return rootState.auth.user.mangas;
  },
  myFavorites: (state, getters, rootState) => {
    return rootState.auth.user.favorites;
  }
};

// Actions
const actions = {};

// mutations

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
