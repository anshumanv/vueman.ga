const state = {
  show: false,
  text: "",
  color: "success",
  timeout: 3000
};

const getters = {
  isShowing: state => {
    return state.show;
  }
};

const actions = {
  ShowSnackbar({ commit }, config) {
    commit("setSnackbar", { show: true, ...config });
  },
  ShowSuccessSnackbar({ commit }, config) {
    commit("setSnackbar", { show: true, color: "success", ...config });
  },
  ShowErrorSnackbar({ commit }, config) {
    commit("setSnackbar", { show: true, color: "error", ...config });
  },
  close({ commit }) {
    commit("setSnackbar", { show: false });
  }
};

const mutations = {
  setSnackbar(state, { text, show, color, timeout }) {
    if (text) {
      state.text = text;
    }
    if (color) {
      state.color = color;
    }
    if (timeout !== undefined) {
      state.timeout = timeout;
    }
    state.show = show;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
