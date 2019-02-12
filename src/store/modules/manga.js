import { updateStatusPromise } from "../../api/mangaAPI";
import { addMangaPromise } from "../../api/mangaAPI";

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
  addManga({ commit, state }, { payload, token }) {
    console.log(payload, token);
    addMangaPromise({ payload, token })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateStatus({ commit, state }, { mangaId, newStatus, token }) {
    updateStatusPromise({ mangaId, newStatus, token })
      .then(res => {
        console.log(res);
        commit("updateMangaStatus", res.updatedManga);
      })
      .catch(err => console.error(err));
  }
};

// mutations
const mutations = {
  updateMangaStatus(state, updatedManga) {
    for (manga in state.myMangas) {
      if (manga.mangaId === updatedManga.mangaId) {
        manga.status = updatedManga.mangaId;
      }
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
