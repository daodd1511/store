<script setup>
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <router-view></router-view>
  <Footer v-if="route.path != '/'"></Footer>
</template>

<style></style>
