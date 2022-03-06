<script setup>
import { ref } from "vue";
import router from "../router/router.js";
import { useStore } from "../store/store.js";
const store = useStore();
let name = ref("");
let price = ref();
let image = ref("");
store.status = 0;
const post = async () => {
  const productData = {
    name: name.value,
    price: price.value,
    image: image.value,
  };
  await store.addProduct(productData);
  router.push("/");
};
</script>
<template>
  <div>Add</div>
  <form @submit.prevent="post()">
    <label for="name">Name</label>
    <input autocomplete="off" type="text" id="name" v-model="name" />
    <br />
    <label for="price">Price</label>
    <input type="text" id="price" v-model="price" /><br />
    <label for="image">Image</label>
    <input type="text" id="image" v-model="image" /><br />
    <input type="submit" value="Add" />
  </form>
</template>

<style scoped></style>
