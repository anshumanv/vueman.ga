<template>
  <v-flex xs12>
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div class="user-data" v-if="userProfile.username">
          <div class="headline">{{ userProfile.username }}</div>
          <span>Mangas added - {{ userProfile.mangas.length }}</span>
          <span>Favourites - {{ userProfile.favorites.length }}</span>
          <span>{{ userProfile.name }}</span>
          <span>{{ userProfile.email }}</span>
        </div>
      </v-card-title>
      <v-card-actions> <v-btn flat dark>Read More!</v-btn> </v-card-actions>
    </v-card>
  </v-flex>
</template>

<style>
.user-data {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "UserInfo",
  computed: {
    ...mapState({
      userProfile: state => state.profile.userProfile
    })
  }
};
</script>
