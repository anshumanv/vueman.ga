<template>
  <v-layout row>
    <v-flex ml-5>
      <v-card>
        <v-list dense two-line subheader>
          <v-subheader inset>Chapters</v-subheader>
          <v-list-tile v-for="chapter in chapters" :key="chapter.title" @click="openManga(chapter['3'])">
            <!-- <router-link :to="`/manga/${mangaId}/chapter/${chapter['3']}`"> -->
              <v-list-tile-content>
                <v-list-tile-sub-title>{{
                  `Chapter - ${chapter["0"]}`
                }}</v-list-tile-sub-title>
                <v-list-tile-title>{{ chapter["2"] }}</v-list-tile-title>
              </v-list-tile-content>
            <!-- </router-link> -->
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";

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
      this.$router.push(`/manga/${this.mangaId}/chapter/${chapterId}`)
    }
  }
};
</script>

<style scoped></style>
