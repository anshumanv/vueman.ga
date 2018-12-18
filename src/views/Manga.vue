<template>
  <div>
    <MangaHeader :manga="manga" />
    <v-container>
      <v-layout row>
        <v-flex xs3>
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

const mangaId = window.location.pathname.split("/")[2];

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
      .then(({ data }) => (this.manga = data));
  }
};
</script>

<style scoped></style>
