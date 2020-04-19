<template>
  <div>
    <h1>Meal Finder Api</h1>
    <div class="flex">
      <form class="flex" @submit.prevent="onSubmit">
        <input type="text" v-model="search" placeholder="Lütfen bir yemek arayınız..." />
        <button :disabled="enable" class="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
      <router-link :to="randomPath">
        <button class="random-btn" @click="getRandom">
          <i class="fas fa-random"></i>
        </button>
      </router-link>
    </div>
    <p
      v-if="this.$store.state.meals.resultHeading"
    >{{search}} ile ilgili herhangi bir sonuç bulunamadı.Lütfen tekrar deneyiniz..!</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "header",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapGetters(["getMealRandom"]),
    randomPath() {
      return `/meal-random/${this.getMealRandom.idMeal}`;
    },
    enable() {
      if (this.search == "") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions(["fetchMeals", "fetchMealRandom"]),
    onSubmit() {
      this.fetchMeals(this.search);
      setTimeout(() => {
        this.search = "";
        this.$store.state.meals.resultHeading = false;
      }, 2500);
    },
    getRandom() {
      this.fetchMealRandom();
    }
  },
  created() {
    this.fetchMealRandom();
  }
};
</script>
