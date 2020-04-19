<template>
  <router-view>
    <app-home></app-home>
  </router-view>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "app",
  components: {
    "app-home": Home
  }
};
</script>
