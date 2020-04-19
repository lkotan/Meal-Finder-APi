<template>
  <div class="container">
    <div class="container">
      <div class="single-meal">
        <h1>{{ getMealRandom.strMeal }}</h1>
        <img :src="getMealRandom.strMealThumb" :alt="getMealRandom.strMeal" />
        <div class="single-meal-info">
          <p>{{ getMealRandom.strCategory }} || {{ getMealRandom.strArea }}</p>
        </div>
        <div class="main">
          <p>{{ getMealRandom.strInstructions }}</p>
          <h2>Ingredients(Malzemeler)</h2>
          <ul>
            <li v-for="ing in ingred" :key="ing">{{ ing }}</li>
          </ul>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import Footer from "./shared/Footer";

export default {
  name: "mealRandom",
  components: {
    "app-footer": Footer
  },
  computed: {
    ...mapGetters(["getMealRandom"]),
    ingred() {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (this.getMealRandom[`strIngredient${i}`]) {
          ingredients.push(
            `${this.getMealRandom[`strIngredient${i}`]} - ${
              this.getMealRandom[`strMeasure${i}`]
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
