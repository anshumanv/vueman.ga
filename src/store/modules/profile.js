import { profilePromise } from "../../api/profileAPI";

const state = {
  userProfile: {}
};

// Adding getter
const getters = {
  userManga: (state, getters, rootState) => {
    return state.userProfile.mangas;
  }
};

// Actions
const actions = {
  fetchProfile({ commit, state }, { username }) {
    console.log(username);
    profilePromise(username)
      .then(res => {
        commit("profileFetched", res.data.user);
      })
      .catch(err => console.log(err));
  }
};

// mutations

const mutations = {
  profileFetched(state, profile) {
    state.userProfile = profile;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
