<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="manga in mangas" :key="manga.i" xs3>
        <MangaCard :manga="manga" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import MangaCard from "./MangaCard";

export default {
  name: "MangaCards",
  components: {
    MangaCard
  },
  data() {
    return {
      mangas: []
    };
  },
  created() {
    axios
      .get("https://www.mangaeden.com/api/list/0/?p=2")
      .then(({ data }) => (this.mangas = data.manga.slice(30, 40)));
  }
};
</script>

<style scoped></style>

4e70ea10c092255ef7004aa2
