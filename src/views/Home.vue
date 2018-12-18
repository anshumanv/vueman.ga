<template>
  <v-container>
    <v-layout column align-center justify-center>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-light ma-3">vueman.ga</h1>
      </v-flex>
      <v-flex xs4 sm3 md4>
        <v-text-field
          label="Search Manga"
          placeholder="Search"
          solo
        ></v-text-field>
        <v-autocomplete
        solo
        v-model="model"
        :items="allMangas"
        :search-input.sync="search"
        color="gray"
        hide-no-data
        hide-selected
        item-text="t"
        menu-props="openOnClick"
        label="Public APIs"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
      </v-flex>
    </v-layout>
    <MangaCards :mangas="mangas" />
  </v-container>
</template>

<script>
import axios from 'axios'
import MangaCards from "../components/MangaCards";
export default {
  data() {
    return {
      mangas: [],
      allMangas: [],
      search: '',
      model: null,
      titles: [],
    }
  },
  components: {
    MangaCards
  },
  created() {
    axios
      .get("https://www.mangaeden.com/api/list/0/")
      .then(({ data }) => {
        const titles = []
        data.manga.forEach(manga => titles.push(manga.t))
        this.titles = titles
        this.allMangas = data.manga;
        console.log(titles)
        this.mangas = data.manga.slice(0, 12)
      });
  },
  watch: {
    model(manga) {
      this.$router.replace(`/manga/${manga.i}`)
    }
  }
};
</script>
