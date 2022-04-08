<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../store/store.js";
const store = useStore();
const route = useRoute();
const productData = ref();
onBeforeMount(async () => {
  await store.getProductById(route.params.id, route.params.category);
  productData.value = store.product;
});
</script>
<template>
  <div class="mx-auto flex w-4/5 gap-14 py-7">
    <!-- Name and image section -->
    <div class="w-2/3">
      <h2>{{ productData.general.brand }}</h2>
      <h1 class="text-xl font-light">{{ productData.general.name }}</h1>
      <img :src="productData.image" class="py-12" />
    </div>
    <!-- Price and add to cart section -->
    <div class="w-1/3">
      <p class="text-2xl font-medium" v-if="!productData.general.sale_price">
        ${{ productData.general.price }}
      </p>
      <div v-else class="text-[13px]">
        <p class="text-2xl font-medium">
          ${{ productData.general.sale_price }}
        </p>
        <!-- Discount box -->
        <div class="mr-1 inline-block bg-red-700 p-1 font-medium text-white">
          Save ${{ productData.general.price - productData.general.sale_price }}
        </div>
        <span>Was ${{ productData.general.price }}</span>
      </div>
      <!-- Add to cart button -->
      <button class="my-6 h-8 w-full rounded bg-yellow-300 text-sm font-medium">
        <i class="fa-solid fa-cart-shopping p-2"></i>
        Add to cart
      </button>
    </div>
  </div>
  <!-- Specification -->
  <div class="mx-auto w-4/5">
    <button class="flex w-full justify-between pb-3 text-2xl font-medium">
      <span>Specifications</span>
      <i class="fa-solid fa-angle-down"></i>
    </button>
    <div class="mx-auto w-2/3">
      <ul>
        <li class="flex py-2 text-[16px]">
          <div class="w-1/2 font-medium">Product Name</div>
          <div class="w-1/2">{{ productData.general.name }}</div>
        </li>
        <li class="flex py-2 text-[16px]">
          <div class="w-1/2 font-medium">Brand</div>
          <div class="w-1/2">{{ productData.general.brand }}</div>
        </li>
        <li class="flex py-2 text-[16px]">
          <div class="w-1/2 font-medium">Price</div>
          <div class="w-1/2">${{ productData.general.price }}</div>
        </li>
        <li class="flex py-2 text-[16px]">
          <div class="w-1/2 font-medium">Screen</div>
          <div class="w-1/2">{{ productData.screen }}"</div>
        </li>
        <li class="flex py-2 text-[16px]">
          <div class="w-1/2 font-medium">Processor</div>
          <div class="w-1/2">{{ productData.processor }}</div>
        </li>
        <li class="flex py-2 text-[16px]">
          <div class="w-1/2 font-medium">Storage</div>
          <div class="w-1/2">{{ productData.storage }} GB</div>
        </li>
        <li class="flex py-2 text-[16px]">
          <div class="w-1/2 font-medium">Memory</div>
          <div class="w-1/2">{{ productData.memory }} GB</div>
        </li>
        <li class="flex py-2 text-[16px]">
          <div class="w-1/2 font-medium">Graphics</div>
          <div class="w-1/2">{{ productData.graphics }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
