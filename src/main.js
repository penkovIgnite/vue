import Vue from "vue";
import axios from "./plugins/axios";
import App from "./App.vue";
import Vuelidate from 'vuelidate'
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(axios);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
