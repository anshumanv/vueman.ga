<template>
  <v-container>
    <UserInfo />
    <UserMangas />
  </v-container>
</template>

<style scoped></style>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import UserInfo from "../components/UserInfo";
import UserMangas from "../components/UserMangas";

export default {
  name: "Profile",
  components: {
    UserInfo,
    UserMangas
  },
  data() {
    return {
      profileFetched: false
    };
  },
  computed: {
    ...mapState({
      userProfile: state => state.profile.userProfile,
      username: state => state.auth.user.username
    }),
    ...mapGetters("profile", {
      profile: "profile"
    })
  },
  created() {
    const username = this.username;
    const token = localStorage.getItem("jwtToken");
    this.$store.dispatch("profile/fetchProfile", { username, token });
  }
};
</script>
