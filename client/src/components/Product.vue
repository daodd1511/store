<script setup>
const props = defineProps({
  data: Object,
});
const product = props.data;
</script>
<template>
  <div class="min-h-60 mx-auto flex w-4/5 gap-8 py-7">
    <!-- Image section -->
    <div class="w-1/3">
      <router-link :to="`/laptop/` + product._id">
        <img
          :src="product.image"
          alt="Product Image"
          class="mx-auto max-h-52 max-w-full"
        />
      </router-link>
    </div>
    <!-- Content section -->
    <div class="h-full w-2/5 text-blue-600">
      <router-link :to="`/laptop/` + product._id">{{
        product.general.name
      }}</router-link>
    </div>
    <!-- Price section -->
    <div class="h-full w-1/5">
      <p class="text-2xl font-medium">${{ product.general.price }}</p>
      <div v-if="product.general.sale_price" class="text-[13px]">
        <!-- Discount box -->
        <div class="mr-1 inline-block bg-red-700 p-1 font-medium text-white">
          Save ${{ product.general.price - product.general.sale_price }}
        </div>
        <span>Was ${{ product.general.sale_price }}</span>
      </div>
      <!-- Add to cart button -->
      <button class="my-6 h-8 w-full rounded bg-yellow-300 text-sm font-medium">
        <i class="fa-solid fa-cart-shopping p-2"></i>
        Add to cart
      </button>
    </div>
  </div>
</template>

<style scoped></style>
