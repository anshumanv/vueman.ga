<template>
  <div class="loader" v-if="!manga.title">
    <v-progress-circular indeterminate color="white"></v-progress-circular>
  </div>
  <div v-else>
    <v-container grid-list-md>
      <v-layout row wrap>
        <MangaHeader :manga="manga" />
        <v-flex xs12 sm5 md3 lg3>
          <MangaInfo :manga="manga"></MangaInfo>
        </v-flex>
        <MangaList
          :chapters="manga.chapters"
          :name="manga.title"
          :mangaId="mangaId"
        />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import MangaHeader from "../components/MangaHeader";
import MangaList from "../components/MangaList";
import MangaInfo from "../components/MangaInfo";

// const mangaId = window.location.pathname.split("/")[2];

export default {
  name: "Manga",
  data() {
    return {
      manga: {},
      mangaId: ""
    };
  },
  components: {
    MangaHeader,
    MangaList,
    MangaInfo
  },
  created() {
    const mangaId = window.location.pathname.split("/")[2];
    this.mangaId = mangaId;
    axios
      .get(`https://www.mangaeden.com/api/manga/${mangaId}/`)
      .then(({ data }) => {
        this.manga = data;
        document.title = data.title;
      });
  }
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
