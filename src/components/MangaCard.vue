<template>
  <router-link :to="`/manga/${manga.i}`">
    <img
      v-if="manga.im"
      class="manga-img"
      :alt="manga.t"
      :src="`https://cdn.mangaeden.com/mangasimg/${manga.im}`"
    />
    <img v-else class="manga-img" src="noimage.jpg" alt="no image" />
    <div class="subheading font-weight-medium white--text text-truncate my-2">
      {{ manga.t }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MangaCard",
  props: ["manga"]
};
</script>

<style scoped>
.manga-img {
  display: block;
  margin: 0;
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>
