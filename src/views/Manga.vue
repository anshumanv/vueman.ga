<template>
  <div>
    <MangaHeader :manga="manga" />
    <MangaList :chapters="manga.chapters" :name="manga.title"/>
  </div>
</template>


<script>
import axios from 'axios'
import MangaHeader from '../components/MangaHeader'
import MangaList from '../components/MangaList'

const mangaId = window.location.pathname.split('/')[2]

export default {
  name: 'Manga',
  data() {
    return {
      manga: {}
    }
  },
  components: {
    MangaHeader,
    MangaList
  },
  beforeCreate() {
    const mangaId = window.location.pathname.split('/')[2]
    axios.get(`https://www.mangaeden.com/api/manga/${mangaId}/`)
      .then(( { data } ) => this.manga = data)
  }
}
</script>

<style scoped>

</style>
