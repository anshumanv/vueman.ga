<template>
  <v-flex xs12 class="mt-5">
    <v-tabs centered v-model="active" grow show-arrows dark icons-and-text>
      <v-tabs-slider color="blue"></v-tabs-slider>
      <v-tab v-for="tab in tabsData" :key="tab.type" :href="`#${tab.type}`">
        {{ tab.text }} ({{  mangaCount(tab.type).length }})
        <v-icon>{{ tab.icon }}</v-icon>
      </v-tab>
      <v-tab-item v-for="tab in tabsData" :value="tab.type" :key="tab.type">
        <v-card flat>
          <v-list dense two-line subheader>
          <v-list-tile
            v-for="manga in filterMangas(active)"
            :key="manga.mangaId"
            @click="openManga(manga.mangaId)"            
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ manga["name"] }}</v-list-tile-title>
              <v-list-tile-sub-title>{{
                `On - ${manga["progress"]}`
              }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-flex>
</template>

<style></style>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "UserManga",
  data() {
    return {
      active: 'ALL',
      // I hope I can make use of the below thing sometime
      tabsData: [
        { text: "ALL", type: "ALL", href: "#all", icon: "list" },
        { text: "READING", type: "READING", href: "#reading", icon: "loop" },
        {
          text: "COMPLETED",
          type: "COMPLETED",
          href: "#completed",
          icon: "done_all"
        },
        { text: "ON-HOLD", type: "ONHOLD", href: "#onhold", icon: "pause" },
        {
          text: "DROPPED",
          type: "DROPPED",
          href: "#dropped",
          icon: "delete_forever"
        },
        { text: "PLANNED", type: "PLANNED", href: "#planned", icon: "book" }
      ],
    };
  },
  methods: {
    openManga: function(mangaId) {
      this.$router.push(`/manga/${mangaId}`);
    },
    filterMangas: function() {
      if(!this.userProfile.mangas) return [];
      if(!this.active || this.active === 'ALL') return this.userProfile.mangas;
      return this.userProfile.mangas.filter(manga => manga.status == this.active);
    },
    mangaCount: function(type) {
      if(!this.userProfile.mangas) return 0
      if(type === 'ALL') return this.userProfile.mangas;
      return this.userProfile.mangas.filter(manga => manga.status == type);
    }
  },
  computed: {
    ...mapState({
      userProfile: state => state.profile.userProfile
    }), 
  }
};
</script>
