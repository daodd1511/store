<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../store/store.js";
const store = useStore();
const route = useRoute();
const productData = ref();
onBeforeMount(async () => {
  await store.getProductById(route.query.id, route.query.category);
  productData.value = store.product;
});
const update = async () => {
  await store.updateProduct(route.query.id, productData.value);
};
</script>
<template>
  <h2>Update Phone</h2>
  <div v-if="productData">
    <form @submit.prevent="update()">
      <div>
        <label for="name">Name</label>
        <input
          required
          type="text"
          id="name"
          v-model="productData.general.name"
        />
      </div>
      <div>
        <label for="brand">Brand</label>
        <input
          required
          type="text"
          id="brand"
          v-model="productData.general.brand"
        />
      </div>
      <div>
        <label for="price">Price</label>
        <input
          required
          type="text"
          id="price"
          v-model="productData.general.price"
        />
        $
      </div>
      <div>
        <label for="img">Image</label>
        <input required type="text" id="img" v-model="productData.image" />
        <a :href="productData.image" target="blank">Preview</a>
      </div>
      <div>
        <label for="os">Operating System</label>
        <input
          required
          type="text"
          id="os"
          v-model="productData.keyspecs.operating_system"
        />
      </div>
      <div>
        <label for="storage">Storage</label>
        <input
          required
          type="text"
          id="storage"
          v-model="productData.keyspecs.storage"
        />
        gigabytes
      </div>
      <div>
        <label for="memory">Memory</label>
        <input
          required
          type="number"
          id="memory"
          v-model="productData.keyspecs.memory"
        />
        gigabytes
      </div>
      <div>
        <label for="cpu">Processor</label>
        <input
          required
          type="text"
          id="cpu"
          v-model="productData.keyspecs.processor"
        />
      </div>
      <div>
        <label for="front_cam">Front Camera</label>
        <input
          required
          type="text"
          id="front_cam"
          v-model="productData.keyspecs.front_camera"
        />
        megapixels
      </div>
      <div>
        <label for="rear_cam">Rear Camera</label>
        <input
          required
          type="text"
          id="rear_cam"
          v-model="productData.keyspecs.rear_camera"
        />
        megapixels
      </div>
      <div>
        <label for="resolution">Resolution</label>
        <input
          required
          type="text"
          id="resolution"
          v-model="productData.resolution"
        />
        megapixels
      </div>
      <input required type="submit" value="Update" />
    </form>
    <p v-if="store.status == 200">Success!</p>
  </div>
</template>

<style scoped>
label {
  display: block;
}
input {
  width: 70%;
  margin-bottom: 10px;
}
</style>
