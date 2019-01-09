<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase cursor-pointer" v-on:click="toHome">
        <span>VUEMAN</span> <span class="font-weight-light">.GA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab v-on:click="toHome" flat>
        <span><v-icon>home</v-icon></span>
      </v-btn>
      <LoginDialog />
    </v-toolbar>

    <v-content> <router-view /> </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>anshumanv &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import LoginDialog from "./components/LoginDialog"

export default {
  name: "App",
  data() {
    return {

};
  },
  components: {
    LoginDialog
  },
  methods: {
    toHome: function() {
      this.$router.replace("/");
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}

.cursor-pointer:hover {
  cursor: pointer;
}
</style>
