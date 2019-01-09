<template>
  <div>
    <v-btn v-on:click="showLoginDialog = true" flat>
        LOGIN
      </v-btn>
    <v-dialog
      dark
      width="50%"
      v-model="showLoginDialog"
    >
      <v-card>
        <v-card-title class="headline">Login</v-card-title>

        <v-form
          class="mu-3 ml-3 mr-3"
          ref="form"
          v-model="valid"
          lazy-validation
          v-on:submit.prevent="submitForm"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            solo
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            :rules="passwordRules"
            label="Password"
            solo
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            @click="submitForm"
          >
            Submit
          </v-btn>

        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "LoginDialog",
  data() {
    return {
      showLoginDialog: false
    }
  }
}
</script>
