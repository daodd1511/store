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
let isUpdating = ref(false);
onBeforeMount(async () => {
  store.status = 0;
  productData.value = store.allProduct.find(
    (product) => product._id == props.productId
  );
});
const update = async () => {
  isUpdating.value = true;
  store.status = 0;
  await store.updateProduct(route.query.id, productData.value);
  isUpdating.value = false;
};
</script>
<template>
  <div v-if="productData" class="container">
    <h1 class="pb-4 text-2xl">Update Laptop</h1>
    <form @submit.prevent="update">
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
          type="number"
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
        <label for="img_lg">Image</label>
        <input required type="text" id="img_lg" v-model="productData.image" />
        <a :href="productData.image" target="blank" class="preview">Preview</a>
      </div>
      <div>
        <label for="size">Screen Size</label>
        <input required type="text" id="size" v-model="productData.screen" />
      </div>
      <div>
        <label for="cpu">Processor</label>
        <input required type="text" id="cpu" v-model="productData.processor" />
      </div>
      <div>
        <label for="storageCap">Storage Capacity</label>
        <input
          required
          type="number"
          id="storageCap"
          v-model="productData.storage"
        />
        gigabytes
      </div>
      <div>
        <label for="memory">Memory Capacity</label>
        <input
          required
          type="number"
          id="memory"
          v-model="productData.memory"
        />
        gigabytes
      </div>
      <div>
        <label for="graphics">Graphics</label>
        <input
          required
          type="text"
          id="graphics"
          v-model="productData.graphics"
        />
      </div>
      <button type="submit" v-if="!isUpdating">Update</button>
      <button
        v-else
        disabled
        type="button"
        class="inline-flex h-10 items-center rounded-md bg-blue-600 px-5 text-center text-white"
      >
        <svg
          role="status"
          class="mr-3 inline h-3 w-3 animate-spin text-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Updating...
      </button>
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
  form button[type="submit"] {
    @apply h-10 w-28 rounded-md bg-blue-600 text-white hover:bg-blue-800;
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
