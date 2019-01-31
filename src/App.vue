<template>
  <v-app dark>
    <!-- Toolbar -->
    <v-toolbar app>
      <v-toolbar-title
        class="headline text-uppercase cursor-pointer"
        v-on:click="toHome"
      >
        <span>VUEMAN</span> <span class="font-weight-light">.GA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab v-on:click="toHome" flat>
        <span><v-icon>home</v-icon></span>
      </v-btn>
      <LoginDialog v-if="!loggedIn" />
      <v-menu
      transition="slide-y-transition"
      bottom
    >
      <v-btn
        slot="activator"
        class="purple"
        color="primary"
        dark
      >
        ✨
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, i) in dropdown_options"
          :key="i"
          @click="toolbarDropdown(item.path)"
        >
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-toolbar>

    <!-- Router -->
    <v-content> <router-view /> </v-content>

    <!-- Footer -->
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>anshumanv &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import jwt_decode from "jwt-decode";
import { mapState, mapGetters } from "vuex";
import LoginDialog from "./components/LoginDialog";

export default {
  name: "App",
  data() {
    return {
      dropdown_options: [
        { text: "Profile", path: "profile" },
        { text: "Logout", path: "logout" },
        { text: "Settings", path: "settings" }
      ]
    };
  },
  computed: {
    ...mapState({
      loggedIn: state => state.auth.loggedIn,
      user: state => state.auth.user
    }),
    ...mapGetters("auth", {
      loggedIn: "loggedIn",
      user: "currentUser"
    })
  },
  components: {
    LoginDialog
  },
  methods: {
    toHome: function() {
      this.$router.push({ path: "/" });
    },
    toolbarDropdown: function(path) {
      this.$router.push({ path });
    }
  },
  created() {
    if (localStorage.getItem("jwtToken")) {
      this.$store.dispatch("auth/saveUser", localStorage.getItem("jwtToken"));
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
