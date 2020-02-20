<template>
  <div>
    <v-row justify="center">
      <v-card>
        <v-card-text>
          <v-card-title>Please sign in</v-card-title>
          <v-card-text>
            <v-text-field :rules="emailRules" v-model="email" label="Name">
            </v-text-field>
            <v-text-field
              type="password"
              :rules="passwordRules"
              v-model="password"
              label="Password"
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <RegisterComponent />
            <v-btn color="success" @click="signin">Sign in</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import router from "../../router/routers";
import RegisterComponent from "./RegisterComponent";
import axios from "axios";

export default {
  name: "LoginComponent",
  components: { RegisterComponent },
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        v => !!v || "Mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    async signin() {
      let token = null;
      // axios.get('http://192.168.0.152:8000/account/')
      //     .then(function (response) {
      //         console.log(response);
      //     })
      //     .catch(function (error) {
      //         console.log(error);
      //     });
      console.log("START");
      await axios
        .post("http://192.168.0.152:8000/auth/login/", {
          username: this.email,
          password: this.password
        })
        .then(function(response) {
          let data = response.data.data;
          token = data.token;
        })
        .catch(function(error) {
          console.log(error);
        });
      console.log("END");
      console.log("token: " + token);
      if (token !== null) {
        localStorage.setItem("token", token);
        await router.push("/");
      }
    }
  }
};
</script>

<style scoped></style>
