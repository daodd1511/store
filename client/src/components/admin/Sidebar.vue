<script setup></script>
<template>
  <aside class="fixed top-0 left-0 z-40 inline-block h-screen w-60 bg-gray-800">
    <div
      class="flex h-14 w-full flex-1 flex-row items-center bg-gray-900 text-white dark:bg-transparent"
    >
      <div class="flex-1 px-3">
        <span @click="$emit('home')" class="cursor-pointer">Admin</span>
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
      <p class="p-3 text-xs uppercase text-gray-400">Products</p>
      <ul>
        <router-link to="/admin/products/laptop">
          <li
            class="flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50"
            @click="$emit('laptop')"
          >
            <i
              class="fa-solid fa-laptop inline-flex h-6 w-12 flex-none items-center justify-center text-gray-300"
            ></i>
            <span class="grow text-gray-300">Laptop</span>
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
            <span class="grow text-gray-300">Phone</span>
          </li>
        </router-link>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped></style>
