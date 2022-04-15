<script setup>
import { ref } from "vue";
import { useStore } from "../../store/store.js";
import Modal from "../Modal.vue";
import DeleteModal from "../DeleteModal.vue";
const store = useStore();
const props = defineProps({
  data: Array,
});
const emits = defineEmits(["closeModal"]);
let isOpenProductModal = ref(false);
let isOpenDeleteModal = ref(false);
let productData = ref({});
const openProductModal = (id) => {
  isOpenProductModal.value = true;
  productData.value = store.allProduct.find((product) => product._id == id);
};
</script>
<template>
  <div v-if="props.data">
    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
      <div class="p-4">
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
          />
        </div>
      </div>
      <table
        class="w-full text-left text-[15px] text-gray-500 dark:text-gray-400"
      >
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Image</th>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">Sale Price</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Details</span>
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Update</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in props.data"
            :key="product._id"
            class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
          >
            <td class="w-28 py-4 px-4">
              <img :src="product.image" alt="Product Image" class="" />
            </td>
            <th
              scope="row"
              class="w-1/3 whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {{ product.general.name }}
            </th>
            <td class="px-6 py-4">${{ product.general.price }}</td>
            <td class="px-6 py-4" v-if="product.general.sale_price">
              ${{ product.general.sale_price }}
            </td>
            <td class="px-6 py-4" v-else>None</td>
            <td class="px-6 py-4 text-right">
              <button
                @click="openProductModal(product._id)"
                class="w-1/3 font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Details
              </button>
            </td>
            <td class="text-right text-white">
              <div class="flex gap-2 px-6 py-4">
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
                  @click="isOpenDeleteModal = true"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Modal v-if="isOpenProductModal" @closeModal="isOpenProductModal = false">
    <template #header> Details </template>
    <template #content>
      <div class="mx-auto py-4">
        <ul>
          <li class="flex py-2 text-[16px]">
            <div class="w-1/3 font-medium">Product Name:</div>
            <div class="">{{ productData.general.name }}</div>
          </li>
          <li class="flex py-2 text-[16px]">
            <div class="w-1/3 font-medium">Brand:</div>
            <div class="">{{ productData.general.brand }}</div>
          </li>
          <li class="flex py-2 text-[16px]">
            <div class="w-1/3 font-medium">Price:</div>
            <div class="">${{ productData.general.price }}</div>
          </li>

          <li class="flex py-2 text-[16px]">
            <div class="w-1/3 font-medium">Processor:</div>
            <div class="">{{ productData.processor }}</div>
          </li>
          <li class="flex py-2 text-[16px]">
            <div class="w-1/3 font-medium">Storage:</div>
            <div class="">{{ productData.storage }} GB</div>
          </li>
          <li class="flex py-2 text-[16px]">
            <div class="w-1/3 font-medium">Memory:</div>
            <div class="">{{ productData.memory }} GB</div>
          </li>
          <!-- Laptop screen -->
          <li
            v-if="productData.category == 'laptop'"
            class="flex py-2 text-[16px]"
          >
            <div class="w-1/3 font-medium">Screen:</div>
            <div class="">{{ productData.screen }}"</div>
          </li>
          <!-- Laptop graphics -->
          <li
            v-if="productData.category == 'laptop'"
            class="flex py-2 text-[16px]"
          >
            <div class="w-1/3 font-medium">Graphics:</div>
            <div class="">{{ productData.graphics }}</div>
          </li>
          <!-- Phone camera -->
          <li
            v-if="productData.category == 'phone'"
            class="flex py-2 text-[16px]"
          >
            <div class="w-1/3 font-medium">Camera</div>
            <div class="">{{ productData.camera }} MP</div>
          </li>
          <!-- Phone resolution -->
          <li
            v-if="productData.category == 'phone'"
            class="flex py-2 text-[16px]"
          >
            <div class="w-1/3 font-medium">Resolution</div>
            <div class="">{{ productData.resolution }}</div>
          </li>
        </ul>
      </div>
    </template>
  </Modal>
  <DeleteModal v-if="isOpenDeleteModal" @closeModal="isOpenDeleteModal = false">
    <button
      type="button"
      class="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
      @click="store.deleteProduct(product._id, product.category)"
    >
      Yes, I'm sure
    </button>
    <button
      type="button"
      class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
      @click="isOpenDeleteModal = false"
    >
      No, cancel
    </button>
  </DeleteModal>
</template>

<style scoped></style>
