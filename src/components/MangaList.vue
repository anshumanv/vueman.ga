<template>
  <v-layout row>
    <v-flex sm6 offset-sm3>
      <v-card>
        <v-toolbar color="gray" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>{{ name }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon> <v-icon>search</v-icon> </v-btn>

          <v-btn icon> <v-icon>view_module</v-icon> </v-btn>
        </v-toolbar>

        <v-list two-line subheader>
          <v-subheader inset>Chapters</v-subheader>
          <v-list-tile v-for="chapter in chapters" :key="chapter.title" avatar>
            <router-link :to="`/manga/${mangaId}/chapter/${chapter['3']}`">
              <v-list-tile-content>
                <v-list-tile-sub-title>{{
                  `Chapter - ${chapter["0"]}`
                }}</v-list-tile-sub-title>
                <v-list-tile-title>{{ chapter["2"] }}</v-list-tile-title>
              </v-list-tile-content>
            </router-link>
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
  props: ["chapters", "name", "mangaId"]
};
</script>

<style scoped></style>
