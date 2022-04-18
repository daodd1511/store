<script setup>
import { ref } from "vue";
import { useStore } from "../../store/store.js";
import Modal from "../Modal.vue";
import DeleteModal from "../DeleteModal.vue";
import Spinner from "../Spinner.vue";
const store = useStore();
const props = defineProps({
  data: Array,
});
const emits = defineEmits(["closeModal"]);
let isOpenProductModal = ref(false);
let isOpenDeleteModal = ref(false);
let isDeleting = ref(false);
let productData = ref({});
const openProductModal = (id) => {
  productData.value = store.allProduct.find((product) => product._id == id);
};
const deleteProduct = async (id, category) => {
  isDeleting.value = true;
  await store.deleteProduct(id, category);
  isOpenDeleteModal.value = false;
  isDeleting.value = false;
};
</script>
<template>
  <div v-if="props.data.length == 0">
    <Spinner></Spinner>
  </div>
  <div v-else>
    <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
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
                @click="
                  openProductModal(product._id), (isOpenProductModal = true)
                "
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
                  @click="
                    // Get product data from product modal
                    (isOpenDeleteModal = true), openProductModal(product._id)
                  "
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
    <!-- Is deleting button -->
    <button
      v-if="isDeleting"
      disabled
      type="button"
      class="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:ring-blue-300"
    >
      <svg
        role="status"
        class="mr-3 inline h-3 w-3 animate-spin text-white"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
      Deleting...
    </button>
    <!-- Default delete button -->
    <button
      v-else
      type="button"
      class="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
      @click="deleteProduct(productData._id, productData.category)"
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
