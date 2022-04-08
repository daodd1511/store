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
  {{ productData }}
  <div class="mx-auto flex w-4/5 gap-14 py-7">
    <!-- Name and image section -->
    <div class="w-2/3">
      <h2>{{ productData.general.brand }}</h2>
      <h1 class="text-xl font-light">{{ productData.general.name }}</h1>
      <img :src="productData.image" class="py-12" />
    </div>
    <!-- Price and add to cart section -->
    <div class="w-1/3">
      <p class="text-3xl font-medium">${{ productData.general.price }}</p>
      <div v-if="productData.general.sale_price" class="text-[13px]">
        <!-- Discount box -->
        <div
          class="mr-1 inline-block bg-red-700 p-1 text-sm font-medium text-white"
        >
          Save ${{ productData.general.price - productData.general.sale_price }}
        </div>
        <div class="text-[15px]">Was ${{ productData.general.sale_price }}</div>
      </div>
      <!-- Add to cart button -->
      <button class="my-6 h-8 w-full rounded bg-yellow-300 text-sm font-medium">
        <i class="fa-solid fa-cart-shopping p-2"></i>
        Add to cart
      </button>
    </div>
    <!-- Specification -->
  </div>
  <div class="mx-auto w-4/5">
    <button class="flex w-full justify-between text-2xl font-medium">
      <span>Specifications</span>
      <i class="fa-solid fa-angle-down"></i>
    </button>
  </div>
</template>

<style scoped></style>
