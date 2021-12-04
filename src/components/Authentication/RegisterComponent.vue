<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Register</v-btn>
    </template>
    <v-card>
      <v-card-title> Register </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            required
            :rules="[(v) => !!v || 'Name is required']"
            v-model="account.name"
            label="Name"
          >
          </v-text-field>
          <v-text-field
            required
            :rules="[(v) => !!v || 'username is required']"
            v-model="account.username"
            label="Username"
          >
          </v-text-field>
          <v-text-field
            required
            :rules="mailRules"
            v-model="account.email"
            label="Mail"
          >
          </v-text-field>
          <v-text-field
            type="password"
            required
            :rules="[(v) => !!v || 'password is required']"
            v-model="account.password"
            label="Password"
          >
          </v-text-field>
          <v-text-field
            type="password"
            required
            :rules="passwordRules"
            v-model="account.confirmPassword"
            label="Confirm password"
          >
          </v-text-field>
          <v-select
            v-model="account.gender"
            :items="['Male', 'Female', 'Other']"
            :rules="[(v) => !!v || 'Gender is required']"
            label="Gender"
            required
          ></v-select>
          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-btn @click="cancel">Cancel</v-btn>
        <v-btn color="primary" @click="reset">Reset</v-btn>
        <v-btn color="success" @click="register">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "RegisterComponent",
  data() {
    return {
      checkbox: false,
      valid: false,
      dialog: false,
      account: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
      },
      mailRules: [
        (v) => !!v || "Mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Confirm Password is required",
        () =>
          this.account.password === this.account.confirmPassword ||
          "password not match",
      ],
    };
  },
  methods: {
    reset() {
      this.account = {};
      alert(this.account.name);
    },
    cancel() {
      this.dialog = false;
    },
    register() {
      if (this.$refs.form.validate()) {
        alert("register");
      }
    },
  },
};
</script>

<style scoped>
</style>
