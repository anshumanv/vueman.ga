<template>
  <Stack
    :column-min-width="225"
    :gutter-width="8"
    :gutter-height="8"
    monitor-images-loaded
  >
    <StackItem v-for="manga in mangas" :key="manga.i" class="img-container">
      <MangaCard :manga="manga"></MangaCard>
    </StackItem>
  </Stack>
</template>

<script>
import MangaCard from "./MangaCard";
import { Stack, StackItem } from "vue-stack-grid";

export default {
  name: "MangaCards",
  props: ["mangas"],
  components: {
    MangaCard,
    Stack,
    StackItem
  }
};
</script>

<style scoped>
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  object-fit: fill;
  cursor: pointer;
}
</style>
