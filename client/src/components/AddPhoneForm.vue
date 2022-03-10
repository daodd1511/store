<script setup>
import { ref } from "vue";
import router from "../router/router.js";
import { useStore } from "../store/store.js";
const store = useStore();
let name = ref("");
let brand = ref("");
let price = ref();
let img_md = ref("");
let img_lg = ref("");
let os = ref("");
let storage = ref();
let memory = ref(null);
let cpu = ref();
let front_cam = ref();
let rear_cam = ref();
let resolution = ref();
const post = async () => {
  const productData = {
    category: "phone",
    general: {
      name: name.value,
      brand: brand.value,
      price: price.value,
    },
    image: {
      medium: img_md.value,
      large: img_lg.value,
    },
    keyspecs: {
      operating_system: os.value,
      storage: storage.value,
      memory: memory.value,
      processor: cpu.value,
      front_camera: front_cam.value,
      rear_camera: rear_cam.value,
    },
    resolution: resolution.value,
  };
  await store.addProduct(productData);
  router.push("/");
};
</script>
<template>
  <h2>Add Phone</h2>
  <div>
    <form @submit.prevent="post()">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="brand">Brand</label>
        <input type="text" id="brand" v-model="brand" />
      </div>
      <div>
        <label for="price">Price</label>
        <input type="text" id="price" v-model="price" />
        $
      </div>
      <div>
        <label for="img_md">Image</label>
        <input type="text" id="img_md" v-model="img_md" />
        <a href="#" target="blank">Preview</a>
      </div>
      <div>
        <label for="img_lg">Image</label>
        <input type="text" id="img_lg" v-model="img_lg" />
        <a href="#" target="blank">Preview</a>
      </div>
      <div>
        <label for="os">Operating System</label>
        <input type="text" id="os" v-model="os" />
      </div>
      <div>
        <label for="storage">Storage</label>
        <input type="text" id="storage" v-model="storage" />
        GB
      </div>
      <div>
        <label for="memory">Memory</label>
        <input type="number" id="memory" v-model="memory" />
        GB
      </div>
      <div>
        <label for="cpu">Processor</label>
        <input type="text" id="cpu" v-model="cpu" />
      </div>
      <div>
        <label for="front_cam">Front Camera</label>
        <input type="text" id="front_cam" v-model="front_cam" />
        MP
      </div>
      <div>
        <label for="rear_cam">Rear Camera</label>
        <input type="text" id="rear_cam" v-model="rear_cam" />
        MP
      </div>
      <div>
        <label for="resolution">Resolution</label>
        <input type="text" id="resolution" v-model="resolution" />
        MP
      </div>
      <input type="submit" value="Update" />
    </form>
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
