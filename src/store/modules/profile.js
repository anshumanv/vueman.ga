import { profilePromise } from "../../api/profileAPI";

const state = {
  userProfile: {}
};

// Adding getter
const getters = {
  profile: (state, getters, rootState) => {
    console.log(rootState);
    return state.profile;
  }
};

// Actions
const actions = {
  fetchProfile({ commit, state }, { username, token }) {
    console.log(username, token);
    profilePromise(username, token)
      .then(res => {
        console.log(res.data.user);
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
