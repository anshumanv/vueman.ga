<template>
  <div>
    <!-- Add a loader till the image is being fetched -->
    <v-img :src="`https://cdn.mangaeden.com/mangasimg/${pages[page-1]['1']}`"></v-img> 
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
  data() {
    return {
      page: 1,
      pages: [],
      manga: {},
      chapter: '',
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
    },
  },
  created() {
    const mangaId = window.location.pathname.split('/')[2];
    const chapterId = window.location.pathname.split('/')[4];

    axios.get(`https://www.mangaeden.com/api/manga/${mangaId}/`)
      .then(( { data } ) => {
        this.manga = data;
        //TODO: I can't find any other way than looping over each chapter and find the number
        data.chapters.forEach(chapter => {
          if(chapter['3'] === chapterId)
            this.chapter = chapter[0];
        })

      })


    axios.get(`https://www.mangaeden.com/api/chapter/${chapterId}/`)
      .then(( { data: { images } } ) => this.pages = images.reverse())

  }
}
</script>

<style scoped>

</style>

