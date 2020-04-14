import Vue from "vue";
import App from "./App.vue";
import router from "./router/routers";
import vuetify from "./plugins/vuetify";
import VueCompositionApi from "@vue/composition-api";
Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
