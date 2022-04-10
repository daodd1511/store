<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../store/store.js";
const store = useStore();
const route = useRoute();
const productData = ref();
onBeforeMount(async () => {
  store.status = 0;
  await store.getProductById(route.query.id, route.query.category);
  productData.value = store.product;
});
const update = async () => {
  await store.updateProduct(route.query.id, productData.value);
};
</script>
<template>
  <div v-if="productData" class="container">
    <h1 class="text-2xl">Update Phone</h1>
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
        <label for="sale_price">Sale Price</label>
        <input
          type="number"
          id="sale_price"
          v-model="productData.general.sale_price"
        />
        $
      </div>
      <div>
        <label for="img">Image</label>
        <input required type="text" id="img" v-model="productData.image" />
        <a :href="productData.image" target="blank" class="preview">Preview</a>
      </div>

      <div>
        <label for="storage">Storage</label>
        <input
          required
          type="text"
          id="storage"
          v-model="productData.storage"
        />
        gigabytes
      </div>
      <div>
        <label for="memory">Memory</label>
        <input
          required
          type="number"
          id="memory"
          v-model="productData.memory"
        />
        gigabytes
      </div>
      <div>
        <label for="cpu">Processor</label>
        <input required type="text" id="cpu" v-model="productData.processor" />
      </div>
      <div>
        <label for="camera">Camera</label>
        <input required type="text" id="camera" v-model="productData.camera" />
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
  width: 50%;
  height: 25px;
  margin-bottom: 10px;
  border: 1px solid black;
}
.container {
  padding: 15px;
}
.preview {
  color: blue;
  text-decoration: none;
}
</style>
