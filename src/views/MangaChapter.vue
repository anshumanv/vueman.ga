<template>
  <div>
    <div>{{ anime }}</div>
    <div>{{ chapter }}</div>
    <v-img :src="`https://cdn.mangaeden.com/mangasimg/${pages[page-1]['1']}`" contain></v-img>
    <button v-on:click="prevPage">Prev</button>
    <button v-on:click="nextPage">Next</button>
    <div class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="pages.length"
      ></v-pagination>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'MangaChapter',
  props: ['anime', 'chapter'],
  data() {
    return {
      page: 1,
      pages: [],
      chapters: [],
    }
  },
  methods: {
    nextPage: function() {
      if(this.pages.length > this.page)
        this.page++
    },
    prevPage: function() {
      if(this.page > 0)
        this.page--
    }
  },
  created() {
    const mangaId = window.location.pathname.split('/')[2];
    const chapterId = window.location.pathname.split('/')[4];

    axios.get(`https://www.mangaeden.com/api/manga/${mangaId}/`)
      .then(( { data: { chapters } } ) => this.chapters = chapters)

    axios.get(`https://www.mangaeden.com/api/chapter/${chapterId}/`)
      .then(( { data: { images } } ) => this.pages = images.reverse())

  }
}
</script>

<style scoped>

</style>

