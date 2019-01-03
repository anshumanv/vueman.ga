<template>
    <v-layout row wrap class="mb-3" >
      <v-flex xs12 sm5 md3 lg3>
        <v-img
          :src="`https://cdn.mangaeden.com/mangasimg/${manga.image}`"
          class="grey lighten-2"
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
      </v-flex>
      <v-flex md8 sm6 xs12 lg8 :class="{'ma-0': $vuetify.breakpoint.xsOnly, 'ml-4': $vuetify.breakpoint.smAndUp}" >
        <v-layout column>
          <v-flex>
            <div class="display-1">{{ manga.title }}</div>
          </v-flex>
          <v-layout class="genres hidden-sm-and-down mt-1" row>
            <div
              v-for="genre in manga.categories"
              :key="genre"
              class="text-xs-center"
            >
              <v-chip color="#212121" class="body-2 white--text">{{
                genre
              }}</v-chip>
            </div>
          </v-layout>
          <div class="mt-2">{{ manga.description }}</div>
        </v-layout>
      </v-flex>
    </v-layout>
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
