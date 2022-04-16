<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../store/store.js";
const store = useStore();
const route = useRoute();
const props = defineProps({
  productId: String,
});
const productData = ref();
onBeforeMount(async () => {
  store.status = 0;
  productData.value = store.allProduct.find(
    (product) => product._id == props.productId
  );
});
const update = async () => {
  await store.updateProduct(route.query.id, productData.value);
};
</script>
<template>
  <div v-if="productData" class="container">
    <h1 class="pb-4 text-2xl">Update Phone</h1>
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
      <button type="submit">Update</button>
    </form>
    <p v-if="store.status == 200">Success!</p>
  </div>
</template>

<style scoped>
@tailwind components;
@layer components {
  label {
    @apply mb-1 block text-sm font-medium text-gray-900;
  }
  input {
    @apply mr-2 w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-400;
  }
  form div {
    @apply mb-4;
  }
  form button {
    @apply h-10 w-28 rounded-md bg-blue-600 text-white;
  }
}
.container {
  padding: 15px;
}
.preview {
  color: blue;
  text-decoration: none;
}
</style>
