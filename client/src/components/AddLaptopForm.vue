<script setup>
import { ref } from "vue";
import router from "../router/router.js";
import { useStore } from "../store/store.js";
const store = useStore();
let name = ref("");
let brand = ref("");
let price = ref();
let img = ref("");
let size = ref();
let resolution = ref("");
let cpu_model = ref("");
let cpu = ref("");
let storageType = ref("");
let storgeCapacity = ref();
let memoryType = ref("");
let memoryCapacity = ref();
let graphicsType = ref("");
let graphics = ref();
const post = async () => {
  const productData = {
    category: "laptop",
    general: {
      name: name.value,
      brand: brand.value,
      price: price.value,
    },
    image: img.value,
    screen: {
      size: size.value,
      resolution: resolution.value,
    },
    processor: {
      model: cpu_model.value,
      model_number: cpu.value,
    },
    storage: {
      storageType: storageType.value,
      capacity: storgeCapacity.value,
    },
    memory: {
      memoryType: memoryType.value,
      capacity: memoryCapacity.value,
    },
    graphics: {
      graphicsType: graphicsType.value,
      graphics: graphics.value,
    },
  };
  await store.addProduct(productData);
  router.push("/");
};
</script>
<template>
  <div class="container">
    <h2>Add Laptop</h2>
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
        <label for="img">Image</label>
        <input required type="text" id="img" v-model="img" />
        <a :href="img" target="blank" class="preview">Preview</a>
      </div>
      <div>
        <label for="size">Screen Size</label>
        <input required type="text" id="size" v-model="size" />
      </div>
      <div>
        <label for="resolution">Resolution</label>
        <input required type="text" id="resolution" v-model="resolution" />
      </div>
      <div>
        <label for="cpu_model">Processor Model</label>
        <input required type="text" id="cpu_model" v-model="cpu_model" />
      </div>
      <div>
        <label for="cpu">Processor</label>
        <input required type="text" id="cpu" v-model="cpu" />
      </div>
      <div>
        <label for="storage">Storage</label>
        <input required type="text" id="storage" v-model="storageType" />
      </div>
      <div>
        <label for="storageCap">Storage Capacity</label>
        <input required type="text" id="storageCap" v-model="storgeCapacity" />
        gigabytes
      </div>
      <div>
        <label for="memory">Memory</label>
        <input required type="text" id="memory" v-model="memoryType" />
      </div>
      <div>
        <label for="memory">Memory Capacity</label>
        <input required type="text" id="memory" v-model="memoryCapacity" />
        gigabytes
      </div>
      <div>
        <label for="graphics_type">Graphics Type</label>
        <input required type="text" id="graphics_type" v-model="graphicsType" />
      </div>
      <div>
        <label for="graphics">Graphics</label>
        <input required type="text" id="graphics" v-model="graphics" />
      </div>
      <input required type="submit" value="Add" />
    </form>
  </div>
</template>

<style scoped>
label {
  display: block;
}
input {
  width: 50%;
  height: 20px;
  margin-bottom: 10px;
}
.container {
  padding: 15px;
}
.preview {
  color: blue;
  text-decoration: none;
}
</style>
