import Vue from "vue";

Vue.prototype.$ShowSuccessSnackbar = function(config) {
  this.$store.dispatch("snackbar/ShowSuccessSnackbar", config);
};

Vue.prototype.$ShowErrorSnackbar = function(config) {
  this.$store.dispatch("snackbar/ShowErrorSnackbar", config);
};

Vue.prototype.$ShowSnackbar = function(config) {
  this.$store.dispatch("snackbar/ShowSnackbar", config);
};
