<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="manga in mangas" :key="manga.i" xs3 grow align-self-end>
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
  props: ['mangas'],
  components: {
    MangaCard
  },
};
</script>

<style scoped>
.manga-flex {
  align-items: flex-end;
}
</style>
