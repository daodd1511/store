<script setup>
import { useStore } from "../store/store.js";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();
onBeforeMount(async () => {
  store.status = 0;
  await store.getProductById(route.params.id);
});
</script>
<template>
  <form @submit.prevent="store.updateProduct(route.params.id)">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="store.product.name" />
    <br />
    <label for="price">Price</label>
    <input type="text" id="price" v-model="store.product.price" /><br />
    <label for="image">Image</label>
    <input type="text" id="image" v-model="store.product.image" />
    <a :href="store.product.image" target="blank">Preview</a><br />
    <input type="submit" value="Update" /><br />
  </form>
  <p v-if="store.status == 200">Success!</p>
</template>

<style lang="scss" scoped></style>
