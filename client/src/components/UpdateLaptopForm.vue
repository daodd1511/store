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
  <h2>Update Laptop</h2>
  <div v-if="productData">
    <form @submit.prevent="update">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="productData.general.name" />
      </div>
      <div>
        <label for="brand">Brand</label>
        <input type="text" id="brand" v-model="productData.general.brand" />
      </div>
      <div>
        <label for="price">Price</label>
        <input type="number" id="price" v-model="productData.general.price" />
        $
      </div>
      <div>
        <label for="img_lg">Image</label>
        <input type="text" id="img_lg" v-model="productData.image" />
        <a :href="productData.image" target="blank">Preview</a>
      </div>
      <div>
        <label for="size">Screen Size</label>
        <input type="text" id="size" v-model="productData.screen.size" />
      </div>
      <div>
        <label for="resolution">Resolution</label>
        <input
          type="text"
          id="resolution"
          v-model="productData.screen.resolution"
        />
      </div>
      <div>
        <label for="cpu_model">Processor Model</label>
        <input
          type="text"
          id="cpu_model"
          v-model="productData.processor.model"
        />
      </div>
      <div>
        <label for="cpu">Processor</label>
        <input
          type="text"
          id="cpu"
          v-model="productData.processor.model_number"
        />
      </div>
      <div>
        <label for="storage">Storage</label>
        <input
          type="text"
          id="storage"
          v-model="productData.storage.storageType"
        />
      </div>
      <div>
        <label for="storageCap">Storage Capacity</label>
        <input
          type="number"
          id="storageCap"
          v-model="productData.storage.capacity"
        />
        gigabytes
      </div>
      <div>
        <label for="memory">Memory</label>
        <input
          type="text"
          id="memory"
          v-model="productData.memory.memoryType"
        />
      </div>
      <div>
        <label for="memory">Memory Capacity</label>
        <input
          type="number"
          id="memory"
          v-model="productData.memory.capacity"
        />
        gigabytes
      </div>
      <div>
        <label for="graphics_type">Graphics Type</label>
        <input
          type="text"
          id="graphics_type"
          v-model="productData.graphics.graphicsType"
        />
      </div>
      <div>
        <label for="graphics">Graphics</label>
        <input
          type="text"
          id="graphics"
          v-model="productData.graphics.graphics"
        />
      </div>
      <input type="submit" value="Update" />
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
