<template>
  <div>
    <div>{{ anime }}</div>
    <div>{{ chapter }}</div>
    <v-img src="https://picsum.photos/510/300?random" contain></v-img>
  </div>
</template>


<script>
export default {
  name: 'MangaChapter',
  props: ['anime', 'chapter'],
  data() {
    return {
      page: 1
    }
  }
}
</script>

<style scoped>

</style>

