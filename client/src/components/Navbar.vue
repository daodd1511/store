<script setup>
import { useRoute } from "vue-router";
import { useStore } from "../store/store.js";
import { ref } from "vue";
const store = useStore();
const route = useRoute();
let isOpenMenu = ref(false);
</script>
<template>
  <nav class="fixed w-full border-gray-200 bg-gray-800 px-2 py-4 sm:px-4">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <router-link to="/" class="flex items-center"
        ><img src="../assets/logo.png" alt="" class="mr-3 h-6 sm:h-9" />
        <span
          class="self-center whitespace-nowrap text-xl font-semibold text-white"
          ><span class="text-[#42b883]">Vue</span>Store</span
        >
      </router-link>
      <div class="flex md:order-2">
        <div class="relative mr-3 hidden md:mr-0 md:block">
          <slot></slot>
        </div>
        <button
          type="button"
          class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
          @click="isOpenMenu = !isOpenMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="w-full items-center justify-between md:order-1 md:flex md:w-auto"
        :class="isOpenMenu ? '' : 'hidden'"
      >
        <ul
          class="md:text-md mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:font-medium"
        >
          <li>
            <router-link
              to="/laptops"
              class="block rounded py-2 pr-4 pl-3 hover:text-white md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent"
              :class="
                route.path === '/laptops'
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-400 hover:bg-gray-700'
              "
              >Laptops</router-link
            >
          </li>
          <li>
            <router-link
              to="/phones"
              class="block rounded py-2 pr-4 pl-3 hover:text-white md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent"
              :class="
                route.path === '/phones'
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-400 hover:bg-gray-700'
              "
              >Phones</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
