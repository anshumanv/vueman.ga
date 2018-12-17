<template>
  <div>
    <div>{{ anime }}</div>
    <div>{{ chapter }}</div>
    <v-img src="https://picsum.photos/510/300?random" contain></v-img>
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

