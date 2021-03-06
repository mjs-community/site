import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/line-awesome/css/line-awesome.min.css";
import "./assets/font.css"

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
