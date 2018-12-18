<template>
  <v-container grid-list-md>
    <v-layout row align-end>
      <v-flex xs6>
        <v-img :src="`https://cdn.mangaeden.com/mangasimg/${manga.image}`"></v-img>
      </v-flex>
      <v-flex class="ml-3">
        <v-layout column>
          <v-flex>
            <div class="display-2">
              {{ manga.title }}
            </div>
          </v-flex>
          <v-layout class="genres mt-1" row>
            <div v-for="genre in manga.categories" :key="genre" class="text-xs-center">
              <v-chip color="#212121" class="body-2 white--text">{{ genre }}</v-chip>
            </div>
          </v-layout>
          <div class="mt-2">
            {{ manga.description }}
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "MangaHeader",
  props: ["manga"]
};
</script>

<style scoped>
.genre-chips {
  display: flex;
  flex-wrap: wrap;
}

</style>
