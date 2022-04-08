<script setup>
import { onBeforeMount, ref } from "vue";
import { useStore } from "../store/store.js";
import Product from "../components/Product.vue";
const store = useStore();
const category = ref("");
onBeforeMount(async () => {
  getAllLaptop();
  // getAllPhone();
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
  <Product
    v-for="item in store.allProduct"
    :key="item._id"
    :data="item"
  ></Product>
</template>

<style scoped></style>
