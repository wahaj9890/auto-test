
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
const store = new Vuex.Store({
  state() {
    return {
      showCard: false,
    };
  },
  mutations: {
    changeCardStatus(state, data) {
      state.showCard = data;
    },
  },
});

export default store;
