<script setup>
import { useStore } from "../store/store.js";
const store = useStore();
const props = defineProps({
  product: Object,
  index: Number,
});
let product = props.product;
</script>
<template>
  <div
    class="min-h-60 relative mx-auto flex w-11/12 flex-col gap-8 border-b border-[#e0e6ef] py-7 sm:flex-row md:w-4/5"
  >
    <!-- Image section -->
    <div class="mx-auto w-11/12 sm:w-1/5">
      <router-link :to="`/${product.category}/` + product._id">
        <img :src="product.image" alt="Product Image" class="mx-auto" />
      </router-link>
    </div>
    <!-- Content section -->
    <div class="h-full w-full text-xl text-blue-600 sm:w-2/5 sm:text-base">
      <router-link :to="`/${product.category}/` + product._id"
        >{{ product.general.name }}
        <span v-if="product.category == 'laptop'">
          - {{ product.processor }} - {{ product.memory }}GB memory -
          {{ product.storage }}GB SSD</span
        >
      </router-link>
    </div>
    <!-- Price section -->
    <div class="h-full w-full sm:w-1/4">
      <p
        class="text-3xl font-medium sm:text-xl"
        v-if="!product.general.sale_price"
      >
        ${{ product.general.price }}
      </p>
      <div v-else class="w-full items-center sm:text-[13px]">
        <p class="mr-6 block text-3xl font-medium sm:mr-2 sm:text-xl">
          ${{ product.general.sale_price }}
        </p>
        <!-- Discount box -->
        <div>
          <div
            class="mr-1 w-fit rounded bg-green-700 p-1 font-medium text-white"
          >
            Save ${{ product.general.price - product.general.sale_price }}
          </div>
          <span>Was ${{ product.general.price }}</span>
        </div>
      </div>
    </div>
    <div>
      <button
        class="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 align-middle text-white"
        @click="store.removeFromCart(props.index)"
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
