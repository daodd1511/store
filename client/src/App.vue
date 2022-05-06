<script setup>
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer v-if="route.path != '/'"></Footer>
</template>

<style>
.main {
  min-height: 92vh;
}
</style>
