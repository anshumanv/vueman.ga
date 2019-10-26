<template>
  <v-snackbar v-model="show" :timeout="timeout" :color="color" top>
    {{ text }}
    <v-btn flat @click="close"> Close </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "snackbar",
  computed: {
    ...mapState("snackbar", ["text", "color", "timeout"]),
    show: {
      get() {
        return this.$store.getters["snackbar/isShowing"];
      },
      set() {
        this.close();
      }
    }
  },
  methods: {
    ...mapActions("snackbar", ["close"])
  }
};
</script>
