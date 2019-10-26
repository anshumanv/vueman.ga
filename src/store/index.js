import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import profile from "./modules/profile";
import mangas from "./modules/manga";
import snackbar from "./modules/snackbar";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    profile,
    mangas,
    snackbar
  },
  strict: debug
});
