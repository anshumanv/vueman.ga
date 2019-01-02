<template>
    <v-layout column class="manga-info">
      <v-flex class="info-item">
        <div class="font-weight-bold body-2">Hits</div>
        <div class="caption">{{ manga.hits }}</div>
      </v-flex>
      <v-flex class="info-item">
        <div class="font-weight-bold body-2">Status</div>
        <div class="caption" v-if="manga.status == 2">Completed</div>
        <div class="caption" v-if="manga.status == 1">Ongoing</div>
        <div class="caption" v-if="manga.status == 0">Soon!</div>
      </v-flex>
      <v-flex class="info-item">
        <div class="font-weight-bold body-2">Author</div>
        <div class="caption">{{ manga.author }}</div>
      </v-flex>
      <v-flex class="info-item">
        <div class="font-weight-bold body-2">Chapters</div>
        <div class="caption">{{ manga.chapters_len }}</div>
      </v-flex>
      <v-flex class="info-item">
        <div class="font-weight-bold body-2">Released</div>
        <div class="caption">{{ manga.released }}</div>
      </v-flex>
      <v-flex class="info-item">
        <div class="font-weight-bold body-2">Created</div>
        <div class="caption">{{ new Date(manga.created).toDateString() }}</div>
      </v-flex>
      <!-- TOdo: Fix the dates so actual dates are displayed -->
      <v-flex class="info-item">
        <div class="font-weight-bold body-2">Last Chapter</div>
        <div class="caption">
          {{ new Date(manga.last_chapter_date).toDateString() }}
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: "MangaInfo",
  props: ["manga"]
};
</script>

<style scoped>
.info-item {
  display: flex;
  justify-content: space-between;
}

.manga-info {
  flex-basis: 15rem;
}
</style>
