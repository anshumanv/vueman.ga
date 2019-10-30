<template>
  <v-layout fill-height justify-center="">
    <v-flex align-center d-flex xs12 sm9 md6 lg5 xl4 justify-center>
      <v-card>
        <v-form
          class="ma-3"
          ref="form"
          v-model="valid"
          lazy-validation
          v-on:submit.prevent="submitForm"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            solo
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            solo
            required
          ></v-text-field>

          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Username"
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

          <v-btn :disabled="!valid" color="success" @click="submitForm">
            Submit
          </v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "SignUp",
  data: () => ({
    valid: true,
    name: "",
    email: "",
    password: "",
    username: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 20) || "Name must be less than 10 characters"
    ],
    usernameRules: [
      v => !!v || "Username is required",
      v => (v && v.length >= 3) || "Username must be greater than 3 characters"
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 5) || "Password must be greater than 5 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
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
        const { email, username, password, name } = this;
        console.log(email, password);
        const payload = {
          email,
          username,
          password,
          name
        };
        this.$store.dispatch("auth/signup", payload).then(() => {
          this.reset();
          this.$router.push("/");
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
