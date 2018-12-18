<template>
  <div class="manga-card">
    <div class="manga-img-container">
      <v-img
        class="manga-img"
        :src="`https://cdn.mangaeden.com/mangasimg/${manga.im}`"
      >
        <v-layout
          slot="placeholder"
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
      </v-img>
    </div>
    <router-link :to="`/manga/${manga.i}`">{{ manga.t }}</router-link>
  </div>
</template>

<script>
export default {
  name: "MangaCard",
  props: ["manga"]
};
</script>

<style scoped>
.manga-card {
  margin: 0.5rem;
}
</style>
