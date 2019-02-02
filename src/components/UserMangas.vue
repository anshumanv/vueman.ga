<template>
  <v-flex xs12>
    <v-tabs centered v-model="active" grow dark icons-and-text>
      <v-tabs-slider color="blue"></v-tabs-slider>
      <v-tab v-for="n in tabsData" :key="n.type" :href="`#${n.type}`">
        {{ n.text }}
        <v-icon>{{ n.icon }}</v-icon>
      </v-tab>
      <v-tab-item v-for="i in tabsData" :value="i.type" :key="i.type">
        <v-card flat>
          <v-card-text>{{ i.type }}</v-card-text>
          <v-list dense two-line subheader>
          <v-list-tile
            v-for="manga in userProfile.mangas"
            :key="manga.mangaId"
            @click="openManga(manga.mangaId)"            
          >
            <v-list-tile-content>
              <v-list-tile-sub-title>{{
                `Manga - ${manga["name"]}`
              }}</v-list-tile-sub-title>
              <v-list-tile-title>{{ manga["status"] }}</v-list-tile-title>
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
      active: null,
      // I hope I can make use of the below thing sometime
      tabsData: [
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
      ]
    };
  },
  methods: {
    openManga: function(mangaId) {
      this.$router.push(`/manga/${mangaId}`);
    }
  },
  computed: {
    ...mapState({
      userProfile: state => state.profile.userProfile
    })
  }
};
</script>
