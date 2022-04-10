<script setup>
import Header from "../../components/Header.vue";
import { onBeforeMount, ref } from "vue";
import { useStore } from "../../store/store.js";
import Product from "../../components/Product.vue";
const store = useStore();
const category = ref("");
onBeforeMount(async () => {
  getAllPhone();
});
const getAllPhone = async () => {
  category.value = "phone";
  await store.getAllProducts(category.value);
};
</script>
<template>
  <Header></Header>
  <Product
    v-for="item in store.allProduct"
    :key="item._id"
    :data="item"
  ></Product>
</template>

<style lang="scss" scoped></style>
