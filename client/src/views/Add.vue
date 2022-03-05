<script setup>
import axios from "axios";
import { ref } from "vue";
import env from "../../env.js";
import router from "../router/router.js";
let name = ref("");
let price = ref();
const post = async () => {
  const data = {
    name: name.value,
    price: price.value,
  };
  await axios
    .post(`${env.API_URL}/add`, data)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
  router.push("/");
};
</script>
<template>
  <div>Add</div>
  <form @submit.prevent="post()">
    <label for="name">Name</label>
    <input autocomplete="off" type="text" id="name" v-model="name" />
    <label for="price">Price</label>
    <input type="text" id="price" v-model="price" />
    <input type="submit" value="Submit" />
  </form>
</template>

<style scoped></style>
