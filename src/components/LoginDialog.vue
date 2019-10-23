<template>
  <div>
    <v-btn v-on:click="showLoginDialog = true" flat> LOGIN </v-btn>
    <v-dialog dark width="50%" v-model="showLoginDialog">
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
            type="submit"
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
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "LoginDialog",
  data() {
    return {
      showLoginDialog: false,
      valid: false,
      email: "",
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length >= 5 && v.length <= 16 ) || "Length of password must be between 5 and 16"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  computed: {
    ...mapState({
      loggedIn: state => state.auth.loggedIn
    }),
    ...mapGetters("auth", {
      loggedIn: "loggedIn",
      user: "currentUser"
    })
  },
  methods: {
    submitForm() {
      console.log(this);
      if (this.$refs.form.validate()) {
        const { email, password } = this;
        console.log(email, password);
        const payload = {
          email,
          password
        };
        this.$store.dispatch("auth/login", payload);
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
