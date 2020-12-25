<template>
  <div>
    <v-row justify="center">
      <v-card>
        <v-card-text>
          <v-card-title>Please sign in</v-card-title>
          <v-card-text>
            <v-text-field label="Name" @input="inputUsername($event)">
            </v-text-field>
            <v-text-field
              type="password"
              label="Password"
              @input="inputPassword($event)"
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
  import {createComponent, inject, provide} from "@vue/composition-api";
  import RegisterComponent from "@/components/Authentication/RegisterComponent";
  import AuthKey from "@/store/AuthKey";
  import authStore from "@/store/AuthStore";
  import router from "@/router/routers";

  export default createComponent({
  setup() {
    provide(AuthKey, authStore());
    const auth = inject(AuthKey);
    if (!auth) {
      throw new Error(`${AuthKey} is not provided`);
    }

    const inputUsername = e => {
      auth.inputUsername(e);
    };
    const inputPassword = e => {
      auth.inputPassword(e);
    };

    const signin = async () => {
      await auth.login();
      if (auth.token) {
        router.push("/");
      }
    };

    return {
      inputUsername,
      inputPassword,
      signin
    };
  },

  components: { RegisterComponent }
});
</script>

<style scoped></style>
