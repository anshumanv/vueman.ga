<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VUEMAN</span> <span class="font-weight-light">.GA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-on:click="toHome" flat>
        <span><v-icon>home</v-icon></span>
      </v-btn>
    </v-toolbar>

    <v-content> <router-view /> </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>anshumanv &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
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
</style>
