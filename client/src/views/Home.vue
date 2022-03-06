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
    <li v-for="(item, i) in store.allProduct">
      {{ item._id }} - {{ item.name }} - {{ item.price }}$
      <img :src="item.image" alt="Product image" />
      <router-link :to="`/update/` + item._id"
        ><button>Update</button></router-link
      >
      <button @click="store.deleteProduct(item._id)">Delete</button>
    </li>
  </ul>
  <router-link to="/add"><button>Add</button></router-link>
</template>

<style></style>
