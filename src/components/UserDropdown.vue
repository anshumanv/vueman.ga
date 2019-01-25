<template>
  <v-overflow-btn
          :items="menuItems"
          label="👇"
          target="#dropdown-example"
        ></v-overflow-btn>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      menuItems: [
        {title: 'Profile'},
        {title: 'Logout'}
      ]
    }
  },
  computed: {
    ...mapGetters('auth', {
      loggedIn: 'loggedIn',
      user: 'currentUser'
    })
  }
}
</script>

