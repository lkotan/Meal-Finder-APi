import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

import Home from "../components/Home"
import Meal from "../components/Meal"
import MealRandom from "../components/MealRandom"

export default new Router({
  routes: [{
      path: "/",
      component: Home,
      name: "Home"
    },
    {
      path: "/meal/:id",
      component: Meal,
      name: "Meal"
    },
    {
      path: "/meal-random/:id",
      component: MealRandom,
      name: "MealRandom"
    },
  ],
  mode: "history"
})
