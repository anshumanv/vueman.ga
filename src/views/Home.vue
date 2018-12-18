<template>
  <div>
    <v-flex mb-4>
      <h1 class="display-2 font-weight-bold mb-3">vueman.ga</h1>
    </v-flex>
    <MangaCards />
  </div>
</template>

<script>
import MangaCards from "../components/MangaCards";
export default {
  components: {
    MangaCards
  }
};
</script>
