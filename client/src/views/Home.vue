<script setup>
import { onBeforeMount, ref } from "vue";
import { useStore } from "../store/store.js";
const store = useStore();
const category = ref("");
const productsData = ref();
onBeforeMount(async () => {
  getAllLaptop();
});
const getAllPhone = async () => {
  category.value = "phone";
  await store.getAllProducts(category.value);
};
const getAllLaptop = async () => {
  category.value = "laptop";
  await store.getAllProducts(category.value);
};
</script>

<template>
  <nav>
    <button @click="getAllLaptop">Laptop</button>
    <button @click="getAllPhone">Phone</button>
  </nav>
  <ul>
    <li v-for="item in store.allProduct">
      {{ item._id }} - {{ item.general.name }} - {{ item.general.price }}$
      <br />
      <img :src="item.image" alt="Product image" />
      <router-link :to="`/update?category=${item.category}&id=${item._id}`"
        ><button>Update</button></router-link
      >
      <button @click="store.deleteProduct(item._id, item.category)">
        Delete
      </button>
    </li>
  </ul>
  <router-link to="/add?category=laptop"
    ><button>Add Laptop</button></router-link
  >
  <router-link to="/add?category=phone"><button>Add Phone</button></router-link>
</template>

<style></style>
