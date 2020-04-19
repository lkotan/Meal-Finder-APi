import Vue from "vue"
import Vuex from "vuex"
import meals from "./modules/meals"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    meals
  }
})
