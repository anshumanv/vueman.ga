<template>
  <v-layout fill-height justify-center="">
    <v-flex align-center d-flex xs12 sm9 md6 lg5 xl4 justify-center>
      <v-card>
        <v-form
          class="ma-3"
          ref="form"
          v-model="valid"
          lazy-validation
          v-on:submit.prevent="submit"
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

          <v-btn
            :disabled="!valid"
            color="success"
            @click="submit"
          >
            Submit
          </v-btn>

        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    name: "SignUp",
    data: () => ({
      valid: true,
      name: '',
      email: '',
      password: '',
      username: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 3) || 'Username must be greater than 3 characters'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be greater than 5 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),

    methods: {
      submit () {
        console.log(this)
        if (this.$refs.form.validate()) {
          const { email, username, password, name } = this;
          console.log(email, password);
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    }
  }
</script>
