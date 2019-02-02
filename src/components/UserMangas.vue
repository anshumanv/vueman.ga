<template>
  <v-flex xs12>
    <v-tabs centered v-model="active" grow dark icons-and-text>
      <v-tabs-slider color="blue"></v-tabs-slider>
      <v-tab v-for="n in tabsData" :key="n.type" :href="`#${n.type}`">
        Item {{ n.type }}
        <v-icon>{{ n.icon }}</v-icon>
      </v-tab>
      <v-tab-item v-for="i in tabsData" :value="i.type" :key="i.type">
        <v-card flat>
          <v-card-text>{{ i.type }}</v-card-text>
        </v-card>
      </v-tab-item>
      <!-- Well this sucks, rendering loops in tab doesn't work for some reason -->
      <!-- <v-tab v-for="tab in tabsData">
      {{ tab.text }}
      <v-icon>done_all</v-icon>
    </v-tab> -->
      <!-- <v-tab href="#READING">
      READING
      <v-icon>loop</v-icon>
    </v-tab>

    <v-tab href="#COMPLETED">
      COMPLETED
      <v-icon>done_all</v-icon>
    </v-tab>

    <v-tab href="#ONHOLD">
      ON-HOLD
      <v-icon>pause</v-icon>
    </v-tab>

    <v-tab href="#DROPPED">
      DROPPED
      <v-icon>delete_forever</v-icon>
    </v-tab>
    <v-tab href="#PLANNED">
      PLANNED
      <v-icon>book</v-icon>
    </v-tab> -->
      <!-- <v-tab-items :v-model="active">
      <v-tab-item
        :value="active"
      >
        <v-card flat>
          <v-card-text>asd</v-card-text>
          <v-list two-line subheader>
            <v-subheader>General</v-subheader>

            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Profile photo</v-list-tile-title>
                <v-list-tile-sub-title>Change your Google+ profile photo</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Show your status</v-list-tile-title>
                <v-list-tile-sub-title>Your status is visible to everyone</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-tab-item>
    </v-tab-items> -->
    </v-tabs>
  </v-flex>
</template>

<style></style>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "UserManga",
  data() {
    return {
      active: null,
      // I hope I can make use of the below thing sometime
      tabsData: [
        { text: "READING", type: "READING", href: "#reading", icon: "loop" },
        {
          text: "COMPLETED",
          type: "COMPLETED",
          href: "#completed",
          icon: "done_all"
        },
        { text: "ON-HOLD", type: "ONHOLD", href: "#onhold", icon: "pause" },
        {
          text: "DROPPED",
          type: "DROPPED",
          href: "#dropped",
          icon: "delete_forever"
        },
        { text: "PLANNED", type: "PLANNED", href: "#planned", icon: "book" }
      ]
    };
  },
  computed: {
    ...mapState({
      userProfile: state => state.profile.userProfile
    })
  }
};
</script>
