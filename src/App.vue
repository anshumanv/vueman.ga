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
      <LoginDialog v-if="!loggedIn" />
    </v-toolbar>

    <v-content> <router-view /> </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>anshumanv &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import jwt_decode from 'jwt-decode';
import { mapState, mapGetters } from 'vuex'
import LoginDialog from "./components/LoginDialog"

export default {
  name: "App",
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      loggedIn: state => state.auth.loggedIn,
      user: state => state.auth.user
    }),
    ...mapGetters('auth', {
      loggedIn: 'loggedIn',
      user: 'user'
    })
  },
  components: {
    LoginDialog
  },
  methods: {
    toHome: function() {
      this.$router.replace("/");
    }
  },
  created() {
    if(localStorage.getItem('jwtToken')) {
      this.$store.dispatch('auth/saveUser', localStorage.getItem('jwtToken'))
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
