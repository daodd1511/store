<script setup>
import { useStore } from "../store/store";
const store = useStore();
const props = defineProps({
  data: Object,
});
const product = props.data;
</script>
<template>
  <div
    class="min-h-60 mx-auto flex w-11/12 flex-col gap-8 border-b border-[#e0e6ef] py-7 sm:flex-row md:w-4/5"
  >
    <!-- Image section -->
    <div class="mx-auto w-11/12 sm:w-1/3">
      <router-link :to="`/${product.category}/` + product._id">
        <img
          :src="product.image"
          alt="Product Image"
          class="mx-auto max-h-52 max-w-full"
        />
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
        class="text-3xl font-medium sm:text-2xl"
        v-if="!product.general.sale_price"
      >
        ${{ product.general.price }}
      </p>
      <div v-else class="w-full items-center text-sm sm:text-[13px]">
        <p
          class="mr-6 inline-block text-3xl font-medium sm:mr-2 sm:block sm:text-2xl"
        >
          ${{ product.general.sale_price }}
        </p>
        <!-- Discount box -->
        <div>
          <div
            class="mr-1 inline-block w-fit rounded bg-green-700 p-1 font-medium text-white"
          >
            Save ${{ product.general.price - product.general.sale_price }}
          </div>
          <span>Was ${{ product.general.price }}</span>
        </div>
      </div>
      <!-- Add to cart button -->
      <button
        class="my-6 h-12 w-full items-center rounded bg-yellow-300 text-center text-lg font-medium sm:h-8 sm:text-sm"
        @click="store.addToCart(product)"
      >
        <i class="fa-solid fa-cart-shopping p-2"></i>
        Add to cart
      </button>
    </div>
  </div>
</template>

<style scoped></style>
