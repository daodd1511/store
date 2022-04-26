<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../store/store.js";
import Navbar from "../../components/Navbar.vue";
import Spinner from "../../components/Spinner.vue";
const store = useStore();
const route = useRoute();
const productData = ref();
onBeforeMount(async () => {
  await store.getProductById(route.params.id, route.params.category);
  productData.value = store.product;
});
</script>
<template>
  <Navbar></Navbar>
  <div v-if="!productData">
    <Spinner></Spinner>
  </div>
  <div v-else class="mx-auto w-11/12 pt-20 sm:w-4/5">
    <div class="flex w-full flex-col py-7 sm:flex-row sm:gap-14">
      <!-- Name and image section -->
      <div class="w-full font-medium sm:w-2/3">
        <h2>{{ productData.general.brand }}</h2>
        <h1 class="text-2xl font-light">{{ productData.general.name }}</h1>
        <img :src="productData.image" class="py-12" />
      </div>
      <!-- Price and add to cart section -->
      <div class="h-full w-full sm:w-1/4">
        <p
          class="text-3xl font-medium sm:text-2xl"
          v-if="!productData.general.sale_price"
        >
          ${{ productData.general.price }}
        </p>
        <div v-else class="w-full items-center text-sm sm:text-[13px]">
          <p
            class="mr-6 inline-block text-3xl font-medium sm:mr-2 sm:block sm:text-2xl"
          >
            ${{ productData.general.sale_price }}
          </p>
          <!-- Discount box -->
          <div>
            <div
              class="mr-1 inline-block w-fit rounded bg-red-700 p-1 font-medium text-white"
            >
              Save ${{
                productData.general.price - productData.general.sale_price
              }}
            </div>
            <span>Was ${{ productData.general.price }}</span>
          </div>
        </div>
        <!-- Add to cart button -->
        <button
          class="my-6 h-12 w-full items-center rounded bg-yellow-300 text-center text-lg font-medium sm:h-8 sm:text-sm"
        >
          <i class="fa-solid fa-cart-shopping p-2"></i>
          Add to cart
        </button>
      </div>
    </div>
    <!-- Specification -->
    <div class="w-full">
      <button class="flex w-full justify-between text-2xl font-medium">
        <span>Specifications</span>
        <i class="fa-solid fa-angle-down"></i>
      </button>
      <div class="mx-auto w-11/12 py-4 sm:w-2/3">
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
          <!-- Laptop screen -->
          <li
            v-if="productData.category == 'laptop'"
            class="flex py-2 text-[16px]"
          >
            <div class="w-1/2 font-medium">Screen</div>
            <div class="w-1/2">{{ productData.screen }}"</div>
          </li>
          <!-- Laptop graphics -->
          <li
            v-if="productData.category == 'laptop'"
            class="flex py-2 text-[16px]"
          >
            <div class="w-1/2 font-medium">Graphics</div>
            <div class="w-1/2">{{ productData.graphics }}</div>
          </li>
          <!-- Phone camera -->
          <li
            v-if="productData.category == 'phone'"
            class="flex py-2 text-[16px]"
          >
            <div class="w-1/2 font-medium">Camera</div>
            <div class="w-1/2">{{ productData.camera }} MP</div>
          </li>
          <!-- Phone resolution -->
          <li
            v-if="productData.category == 'phone'"
            class="flex py-2 text-[16px]"
          >
            <div class="w-1/2 font-medium">Resolution</div>
            <div class="w-1/2">{{ productData.resolution }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
