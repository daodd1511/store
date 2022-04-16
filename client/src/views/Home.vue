<script setup></script>
<template>
  <div class="w-full flex-col sm:flex sm:flex-row">
    <router-link to="/laptops"
      ><button
        class="h-[50vh] w-screen bg-teal-300 text-4xl sm:h-screen sm:w-[50vw]"
      >
        Laptops
      </button></router-link
    >
    <router-link to="/phones"
      ><button
        class="h-[50vh] w-screen bg-rose-300 text-4xl sm:h-screen sm:w-[50vw]"
      >
        Phones
      </button></router-link
    >
  </div>
</template>

<style scoped></style>
