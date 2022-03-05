<script setup>
import { ref } from "vue";
import axios from "axios";
import env from "../../env.js";
let data = ref();
axios
  .get(`${env.API_URL}/products`)
  .then((response) => (data.value = response.data));
</script>

<template>
  <p>{{ data }}</p>
</template>

<style></style>
