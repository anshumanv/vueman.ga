<template>
  <div>
    <MangaHeader />
    <MangaList />
  </div>
</template>


<script>
import MangaHeader from '../views/MangaHeader'
import MangaList from '../views/MangaList'

export default {
  name: 'Manga',
  components: {
    MangaHeader,
    MangaList
  }
}
</script>

<style scoped>

</style>
