<script setup>
import { ref } from "vue";
import router from "../../router/router.js";
import { useStore } from "../../store/store.js";
const store = useStore();
let name = ref("");
let brand = ref("");
let price = ref();
let sale_price = ref();
let img = ref("");
let screen = ref();
let cpu = ref("");
let storgeCapacity = ref();
let memoryCapacity = ref();
let graphics = ref();
const post = async () => {
  const productData = {
    category: "laptop",
    general: {
      name: name.value,
      brand: brand.value,
      price: price.value,
      sale_price: sale_price.value,
    },
    image: img.value,
    screen: screen.value,
    processor: cpu.value,
    storage: storgeCapacity.value,
    memory: memoryCapacity.value,
    graphics: graphics.value,
  };
  await store.addProduct(productData);
  router.push("/admin/products/laptop");
};
</script>
<template>
  <div class="container">
    <h1 class="pb-4 text-2xl">Add Laptop</h1>
    <form @submit.prevent="post()">
      <div>
        <label for="name">Name</label>
        <input required type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="brand">Brand</label>
        <input required type="text" id="brand" v-model="brand" />
      </div>
      <div>
        <label for="price">Price</label>
        <input required type="text" id="price" v-model="price" />
        $
      </div>
      <div>
        <label for="sale_price">Sale Price</label>
        <input type="text" id="sale_price" v-model="sale_price" />
        $
      </div>
      <div>
        <label for="img">Image</label>
        <input required type="text" id="img" v-model="img" />
        <a :href="img" target="blank" class="preview">Preview</a>
      </div>
      <div>
        <label for="size">Screen Size</label>
        <input required type="text" id="size" v-model="screen" />
      </div>
      <div>
        <label for="cpu">Processor</label>
        <input required type="text" id="cpu" v-model="cpu" />
      </div>
      <div>
        <label for="storageCap">Storage Capacity</label>
        <input required type="text" id="storageCap" v-model="storgeCapacity" />
        gigabytes
      </div>
      <div>
        <label for="memory">Memory Capacity</label>
        <input required type="text" id="memory" v-model="memoryCapacity" />
        gigabytes
      </div>
      <div>
        <label for="graphics">Graphics</label>
        <input required type="text" id="graphics" v-model="graphics" />
      </div>
      <button type="submit">Add</button>
    </form>
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
