<script setup>
import { ref, computed, onBeforeMount, watch } from "vue";
import { useStore } from "../../store/store.js";
import { useRoute } from "vue-router";
import ProductTable from "../../components/admin/ProductTable.vue";
const route = useRoute();
const store = useStore();
const category = ref("");
onBeforeMount(async () => {
  if (route.params.category == "laptop") {
    getAllLaptop();
  } else if (route.params.category == "phone") {
    getAllPhone();
  }
});
watch(
  () => route.params,
  (toParams, previousParams) => {
    if (toParams.category == "laptop") {
      getAllLaptop();
    } else if (toParams.category == "phone") {
      getAllPhone();
    }
  }
);
const getAllPhone = async () => {
  category.value = "phone";
  await store.getAllProducts(category.value);
};
const getAllLaptop = async () => {
  category.value = "laptop";
  await store.getAllProducts(category.value);
};
let filteredText = ref("");
const filteredData = computed(() => {
  let filter = new RegExp(filteredText.value, "i");
  return store.allProduct.filter((product) =>
    product.general.name.match(filter)
  );
});
</script>
<template>
  <div class="mx-auto w-10/12">
    <!-- Heading -->
    <h1 class="text-2xl font-medium capitalize">
      {{ route.params.category }}s
    </h1>
    <div class="flex items-center justify-between py-4">
      <!-- Search section -->
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative mt-1">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <svg
            class="h-5 w-5 text-gray-500 dark:text-gray-400"
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
          id="table-search"
          class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search for items"
          v-model="filteredText"
        />
      </div>
      <!-- Add button -->
      <router-link :to="'/admin/add?category=' + route.params.category">
        <button class="float-right h-8 rounded-md bg-blue-600 px-4 text-white">
          <i class="fa-solid fa-plus"></i>
          Add
        </button>
      </router-link>
    </div>
    <!-- Product table   -->
    <ProductTable :data="filteredData"></ProductTable>
  </div>
</template>

<style scoped></style>
