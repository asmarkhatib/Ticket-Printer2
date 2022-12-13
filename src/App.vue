<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;

  background-image: url("assets/wp1905639.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
