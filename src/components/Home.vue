<template>
  <div class="container">
    <app-header></app-header>
    <app-meal-list></app-meal-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import MealList from "./MealList";

export default {
  name: "home",
  components: {
    "app-footer": Footer,
    "app-header": Header,
    "app-meal-list": MealList
  }
};
</script>
