<script setup>
import { useStore } from "../../store/store.js";
const store = useStore();
const props = defineProps({
  data: Object,
});
</script>
<template>
  <div v-if="props.data">
    <table class="w-full table-auto">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Sale Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in props.data" :key="product._id">
          <td class="w-28">
            <img :src="product.image" alt="Product Image" class="" />
          </td>
          <td>{{ product.general.name }}</td>
          <td>${{ product.general.price }}</td>
          <td v-if="product.general.sale_price">
            ${{ product.general.sale_price }}
          </td>
          <td v-else>None</td>
          <td class="my-auto flex gap-2 text-sm text-white">
            <router-link
              :to="
                '/admin/update?category=' +
                product.category +
                '&id=' +
                product._id
              "
            >
              <button
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 align-middle"
              >
                <i class="fa-solid fa-wrench"></i>
              </button>
            </router-link>
            <button
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 align-middle"
              @click="store.deleteProduct(product._id, product.category)"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
