<template>
  <div class="container">
    <div class="single-meal">
      <h1>{{ getMeal.strMeal }}</h1>
      <img :src="getMeal.strMealThumb" :alt="getMeal.strMeal" />
      <div class="single-meal-info">
        <p>{{ getMeal.strCategory }} || {{ getMeal.strArea }}</p>
      </div>
      <div class="main">
        <p>{{ getMeal.strInstructions }}</p>
        <h2>Ingredients(Malzemeler)</h2>
        <ul>
          <li v-for="ing in ingred" :key="ing">{{ ing }}</li>
        </ul>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import Footer from "./shared/Footer";
import Header from "./shared/Header";
import MealList from "./MealList";

export default {
  name: "meal",
  components: {
    "app-footer": Footer,
    "app-header": Header,
    "app-meal-list": MealList
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapGetters(["getMeal"]),
    ingred() {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (this.getMeal[`strIngredient${i}`]) {
          ingredients.push(
            `${this.getMeal[`strIngredient${i}`]} - ${
              this.getMeal[`strMeasure${i}`]
            }`
          );
        } else {
          break;
        }
      }
      return ingredients;
    }
  }
};
</script>
