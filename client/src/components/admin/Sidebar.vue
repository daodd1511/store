<script setup>
import { ref } from "vue";
let openMenu = ref(false);
</script>
<template>
  <aside
    class="fixed top-0 left-0 z-40 inline-block h-screen w-14 bg-gray-800 lg:w-60"
    :class="openMenu ? 'w-60' : ''"
  >
    <div
      class="flex h-14 w-full flex-1 flex-row items-center bg-gray-900 text-white dark:bg-transparent"
    >
      <div class="flex items-center gap-3 px-3">
        <!-- Burger menu for mobile devices -->
        <button
          class="inline-flex items-center lg:hidden"
          @click="openMenu = !openMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-7 w-7"
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
        <span
          @click="$emit('home')"
          class="cursor-pointer lg:inline-block"
          :class="openMenu ? '' : 'hidden'"
          >Admin</span
        >
      </div>
    </div>
    <div>
      <!-- General -->
      <!-- <p class="p-3 text-xs uppercase text-gray-400">General</p>
      <ul>
        <li
          class="flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50"
        >
          <i
            class="fa-solid fa-tv inline-flex h-6 w-12 flex-none items-center justify-center text-gray-300"
          ></i>
          <span class="grow text-gray-300">Dashboard</span>
        </li>
      </ul> -->
      <!-- Products -->
      <p class="hidden p-3 text-xs uppercase text-gray-400">Products</p>
      <ul>
        <router-link to="/admin/products/laptop">
          <li
            class="flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50"
            @click="$emit('laptop')"
          >
            <i
              class="fa-solid fa-laptop inline-flex h-6 w-12 flex-none items-center justify-center text-gray-300"
            ></i>
            <span
              class="grow text-gray-300 lg:inline-block"
              :class="openMenu ? 'inline-block' : 'hidden'"
              >Laptop</span
            >
          </li>
        </router-link>
        <router-link to="/admin/products/phone">
          <li
            class="flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50"
            @click="$emit('phone')"
          >
            <i
              class="fa-solid fa-mobile-screen inline-flex h-6 w-12 flex-none items-center justify-center text-gray-300"
            ></i>
            <span
              class="grow text-gray-300 lg:inline-block"
              :class="openMenu ? 'inline-block' : 'hidden'"
              >Phone</span
            >
          </li>
        </router-link>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped></style>
