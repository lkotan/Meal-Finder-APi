<template>
  <div class="container">
    <div class="meals">
      <div class="meal" v-for="meal in getMeals" :key="meal.id">
        <img :src="meal.strMealThumb" />
        <router-link :to="{ name: 'Meal', params: { id: meal.idMeal } }" tag="div">
          <div class="meal-info" @click="getMeal(meal.idMeal)">
            <h3>{{ meal.strMeal }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "mealList",
  computed: {
    ...mapGetters(["getMeals"])
  },
  methods: {
    ...mapActions(["fetchMeal"]),
    getMeal(idMeal) {
      this.fetchMeal(idMeal);
    }
  }
};
</script>