<template>
  <div class="manga-card">
    <router-link :to="`/manga/${manga.i}`">
      <v-img
        v-if="manga.im"
        class="manga-img"
        :src="`https://cdn.mangaeden.com/mangasimg/${manga.im}`"
        height="100%"
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
      <v-img v-else class="manga-img" src="noimage.jpg" height="100%"></v-img>
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-layout>
      <!--    </router-link>-->
      <!--    <router-link :to="`/manga/${manga.i}`" :title="manga.t">-->
      <div class="subheading font-weight-medium white--text text-truncate">
        {{ manga.t }}
      </div>
    </router-link>
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
  /*margin: 0.5rem;*/
}
</style>
