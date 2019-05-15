<template>
  <v-container>
    <div class="loader" v-if="!mangas.length">
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </div>
    <div v-else>
      <v-layout column align-center justify-center>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-light ma-3">vueman.ga</h1>
        </v-flex>
        <v-flex xs4 sm3 md4>
          <v-autocomplete
            dense
            class="half-width"
            solo
            v-model="model"
            :items="allMangas"
            :search-input.sync="search"
            color="gray"
            item-text="t"
            placeholder="Search Manga  🔍"
            return-object
          ></v-autocomplete>
        </v-flex>
      </v-layout>
      <MangaCards :mangas="mangas" />
      <v-flex class="text-xs-center">
        <v-btn v-on:click="loadMore" color="#212121">MORE</v-btn>
      </v-flex>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import MangaCards from "../components/MangaCards";
export default {
  data() {
    return {
      mangas: [],
      allMangas: [],
      search: "",
      model: null,
      page: 1
    };
  },
  components: {
    MangaCards
  },
  methods: {
    // TODO: Add cornet case checks for loading more mangas
    loadMore: function() {
      const newMangas = this.allMangas.slice(
        23 * this.page + 1,
        23 * this.page + 25
      );
      this.mangas.push(...newMangas);
      this.page++;
    }
  },
  created() {
    axios.get("https://www.mangaeden.com/api/list/0/").then(({ data }) => {
      this.allMangas = data.manga;
      this.mangas = data.manga.slice(0, 24);
    });
  },
  watch: {
    model(manga) {
      this.$router.replace(`/manga/${manga.i}`);
    }
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

.half-width {
  width: 50vw;
}
</style>
