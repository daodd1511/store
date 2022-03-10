<script setup>
import { useStore } from "../store/store.js";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();
let productData = ref();
store.status = 0;
onBeforeMount(async () => {
  await store.getProduct(route.query.id, route.query.category);
  productData.value = store.product;
});
const update = async () => {
  await store.updateProduct(route.params.id);
};
</script>
<template>
  <div v-if="productData">
    <form @submit.prevent="update()">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="productData.general.name" />
      </div>
      <div>
        <label for="price">Price</label>
        <input type="text" id="price" v-model="productData.general.price" />
      </div>
      <div>
        <label for="img_md">Image</label>
        <input type="text" id="img_md" v-model="productData.image.medium" />
        <a :href="productData.image.medium" target="blank">Preview</a>
      </div>
      <div>
        <label for="img_lg">Image</label>
        <input type="text" id="img_lg" v-model="productData.image.large" />
        <a :href="productData.image.large" target="blank">Preview</a>
      </div>
      <input type="submit" value="Update" />
    </form>
    <br />
    <p v-if="store.status == 200">Success!</p>
  </div>
</template>

<style scoped>
input {
  width: 70%;
}
</style>
