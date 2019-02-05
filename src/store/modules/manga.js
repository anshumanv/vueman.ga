import { updateStatusPromise } from "../../api/mangaAPI";

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
const actions = {
  updateStatus({ commit, state }, { mangaId, newStatus, token }) {
    updateStatusPromise({ mangaId, newStatus, token })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
};

// mutations

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
