<script setup>
import Navbar from "../../components/Navbar.vue";
import { onBeforeMount, ref, computed } from "vue";
import { useStore } from "../../store/store.js";
import Product from "../../components/Product.vue";
import Spinner from "../../components/Spinner.vue";
const store = useStore();
const category = ref("");
onBeforeMount(async () => {
  getAllPhone();
});
const getAllPhone = async () => {
  category.value = "phone";
  await store.getAllProducts(category.value);
};
const filteredData = computed(() => {
  let filter = new RegExp(store.filterText, "i");
  return store.allProduct.filter((product) =>
    product.general.name.match(filter)
  );
});
</script>
<template>
  <Navbar>
    <div
      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
    >
      <svg
        class="h-5 w-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
    <input
      type="text"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      placeholder="Search..."
      v-model="store.filterText"
    />
  </Navbar>
  <div v-if="filteredData.length == 0">
    <Spinner></Spinner>
  </div>
  <div v-else>
    <Product
      v-for="item in filteredData"
      :key="item._id"
      :data="item"
    ></Product>
  </div>
</template>

<style lang="scss" scoped></style>
