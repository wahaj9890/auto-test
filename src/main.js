import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./store/store";
Vue.config.productionTip = false;
Vue.prototype.moment = moment;
Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
  store: store,
})
  // .use(store)
  .$mount("#app");
