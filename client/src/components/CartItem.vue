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
    class="min-h-60 relative flex w-full justify-between gap-4 border-b border-[#e0e6ef] py-7 lg:gap-8"
  >
    <!-- Image section -->
    <div class="w-1/3 sm:w-1/4">
      <router-link :to="`/${product.category}/` + product._id">
        <img :src="product.image" alt="Product Image" class="mx-auto" />
      </router-link>
    </div>
    <div class="flex w-2/3 flex-col justify-around gap-2 sm:flex-row">
      <!-- Content section -->
      <div
        class="text-sm text-blue-600 sm:static sm:h-full sm:w-8/12 md:text-base lg:text-lg"
      >
        <router-link :to="`/${product.category}/` + product._id"
          >{{ product.general.name }}
          <span v-if="product.category == 'laptop'">
            - {{ product.processor }} - {{ product.memory }}GB memory -
            {{ product.storage }}GB SSD</span
          >
        </router-link>
      </div>
      <!-- Price section -->
      <div class="sm:static sm:h-full sm:w-3/12">
        <p
          class="text-sm font-medium md:text-xl"
          v-if="!product.general.sale_price"
        >
          ${{ product.general.price }}
        </p>
        <div v-else class="items-center text-sm">
          <p class="mr-6 block text-sm font-medium sm:mr-2 md:text-xl">
            ${{ product.general.sale_price }}
          </p>
          <!-- Discount box -->
          <div>
            <div
              class="mr-1 w-fit rounded bg-green-700 p-1 text-xs font-medium text-white md:text-sm"
            >
              Save ${{ product.general.price - product.general.sale_price }}
            </div>
            <span class="text-xs sm:text-sm"
              >Was ${{ product.general.price }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center sm:items-start">
      <button
        class="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 align-middle text-xs text-white sm:h-9 sm:w-9 sm:text-base"
        @click="store.removeFromCart(props.index), $emit('delete')"
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
