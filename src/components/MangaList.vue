<template>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="gray" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>{{ name }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>view_module</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line subheader>
          <v-subheader inset>Chapters</v-subheader>

          <v-list-tile
            v-for="chapter in chapters"
            :key="chapter.title"
            avatar
            @click=""
          >
            

            <v-list-tile-content>
              <v-list-tile-title>{{ chapter.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ chapter.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            
          </v-list-tile>



        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

import axios from 'axios';

axios.get('https://www.mangaeden.com/api/list/0/?p=10').then(
  res => console.log(res)
)

export default {
    data () {
      return {
        chapters: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
        ],
      }
    },
    name: 'MangaList',
    props: ['name']
  }
</script>

<style scoped>

</style>
