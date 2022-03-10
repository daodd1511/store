<script setup>
import { onBeforeMount, ref } from "vue";
import { useStore } from "../store/store.js";
const store = useStore();
onBeforeMount(async () => {
  await store.getAllProducts();
});
</script>

<template>
  <ul>
    <li v-for="item in store.allProduct">
      {{ item._id }} - {{ item.general.name }} - {{ item.general.price }}$
      <br />
      <img :src="item.image.medium" alt="Product image" />
      <router-link :to="`/update?category=${item.category}&id=${item._id}`"
        ><button>Update</button></router-link
      >
      <button @click="store.deleteProduct(item._id)">Delete</button>
    </li>
  </ul>
  <router-link to="/add"><button>Add</button></router-link>
</template>

<style></style>
