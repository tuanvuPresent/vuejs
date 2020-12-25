import { reactive } from "@vue/composition-api";
import axios from "axios";
import router from "../router/routers";

export default function authStore() {
  type state = {};
  const state = reactive({
    url:process.env.VUE_APP_API_LOGIN,
    loading: false,
    authError: "",
    token: null,
    loginBody: {
      username: "",
      password: ""
    },
    login_status: false
  });

  const axiosinstance = axios.create({
    baseURL :process.env.VUE_APP_API_ROOT,
});

  axiosinstance.defaults.timeout = 3500;
  axiosinstance.interceptors.response.use(
    function(response) {
      // 200 OK
      console.log("INSTANCE-response", response);
      return response;
    },
    function(err) {
      const isTimeout = err.code === "ECONNABORTED";
      if (isTimeout) {
        state.loading = false;
        router.push("/timeout-error");
        return err;
      }
      if (!err.response) {
        state.loading = false;
        router.push("/network-error");
        return err;
      } else {
        state.loading = false;
        state.authError = err.response;
      }
    }
  );
  return {
    get loading() {
      return state.loading;
    },

    get loginStatus() {
      return state.login_status;
    },
    get token() {
      return state.token;
    },
    get username() {
      return state.loginBody.username;
    },
    get password() {
      return state.loginBody.password;
    },

    inputUsername(e: string) {
      state.loginBody.username = e;
    },
    inputPassword(e: string) {
      state.loginBody.password = e;
    },

    login() {
      console.log("Login");
      state.loading = true;
      const params = state.loginBody;
      axiosinstance
        .post(state.url,params)
        .then(response => (state.token = response.data.data.token))
        .then(() => (state.loading = false));
    }
  };
}

export type AuthStore = ReturnType<typeof authStore>;
