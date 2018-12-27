<template>
  <v-layout row>
    <v-flex class="ml-4" md8 sm6 xs12 lg8>
      <v-card>
        <v-toolbar>
          <v-toolbar-title>Chapters</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon> <v-icon>search</v-icon> </v-btn>
        </v-toolbar>
        <v-list dense two-line subheader>
          <v-list-tile
            v-for="chapter in chapters"
            :key="chapter.title"
            @click="openManga(chapter['3'])"
          >
            <v-list-tile-content>
              <v-list-tile-sub-title>{{
                `Chapter - ${chapter["0"]}`
              }}</v-list-tile-sub-title>
              <v-list-tile-title>{{ chapter["2"] }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import axios from "axios";

// axios.get('https://www.mangaeden.com/api/list/0/').then(
//   res => console.log(res)
// )

export default {
  data() {
    return {};
  },
  name: "MangaList",
  props: ["chapters", "name", "mangaId"],
  methods: {
    openManga: function(chapterId) {
      this.$router.push(`/manga/${this.mangaId}/chapter/${chapterId}`);
    }
  }
};
</script>

<style scoped></style>
