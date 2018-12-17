<template>
  <div>
    <MangaHeader />
    <MangaList name="One Piece"/>
  </div>
</template>


<script>
import MangaHeader from '../components/MangaHeader'
import MangaList from '../components/MangaList'

export default {
  name: 'Manga',
  data() {
    return {
      name: 'One Piece'
    }
  },
  components: {
    MangaHeader,
    MangaList
  }
}
</script>

<style scoped>

</style>
