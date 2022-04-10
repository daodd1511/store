<script setup></script>
<template>
  <nav class="flex h-20 items-center bg-stone-900 px-5 text-white">
    <img src="../assets/logo.png" alt="" class="h-3/4" />
    <div class="flex gap-10 pl-24">
      <button>
        <router-link to="/laptop">LAPTOP</router-link>
      </button>
      <button>
        <router-link to="/phone">PHONE</router-link>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
