<template>
  <v-container grid-list-md text-xs-center>
    <div class="loader" v-if="!pages.length">
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </div>
    <v-layout column no-wrap v-else>
      <v-layout row wrap>
        <v-flex class="headline font-weight-medium">
          {{ manga.title }} / Chapter {{ chapter }} / Page {{ page }}
        </v-flex>
      </v-layout>
      <v-flex xs12>
        <!-- Add a loader till the image is being fetched -->
        <v-img
          :src="`https://cdn.mangaeden.com/mangasimg/${pages[page - 1]['1']}`"
        >
          <v-layout
            slot="placeholder"
            fill-height
            align-center
            justify-center
            ma-0
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-layout>
        </v-img>
      </v-flex>
      <div class="chapter-bottom">
        <!-- <v-layout>

        </v-layout> -->
        <v-flex align-self-center>
          <!-- <v-img width="50px" :src="`https://cdn.mangaeden.com/mangasimg/${manga.image}`"></v-img>  -->
          {{ manga.title }}
        </v-flex>
        <v-flex>
          <v-btn v-on:click="prevPage" color="#212121">PREV</v-btn>
          <v-btn v-on:click="nextPage" color="#212121">NEXT</v-btn>
        </v-flex>
      </div>
      <div class="text-xs-center">
        <v-pagination v-model="page" :length="pages.length"></v-pagination>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "MangaChapter",
  data() {
    return {
      page: 1,
      pages: [],
      manga: {},
      chapter: ""
    };
  },
  methods: {
    nextPage: function() {
      if (this.pages.length > this.page) this.page++;
    },
    prevPage: function() {
      if (this.page > 0) this.page--;
    }
  },
  created() {
    // Find the manga
    const mangaId = window.location.pathname.split("/")[2];
    const chapterId = window.location.pathname.split("/")[4];

    axios
      .get(`https://www.mangaeden.com/api/manga/${mangaId}/`)
      .then(({ data }) => {
        this.manga = data;
        //TODO: I can't find any other way than looping over each chapter and find the number
        data.chapters.forEach(chapter => {
          if (chapter["3"] === chapterId) {
            this.chapter = chapter[0];
            // Set the document title
            document.title = `${data.title} - Chapter ${chapter[0]}`
          }
        });
      });

    // Get the anime pages and set them to the state
    axios
      .get(`https://www.mangaeden.com/api/chapter/${chapterId}/`)
      .then(({ data: { images } }) => (this.pages = images.reverse()));
    
  }
};
</script>

<style scoped>
.chapter-bottom {
  display: flex;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
