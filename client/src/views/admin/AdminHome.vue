<script setup>
import { useRouter, useRoute } from "vue-router";
import Sidebar from "../../components/admin/Sidebar.vue";
const router = useRouter();
const route = useRoute();
const emit = defineEmits(["laptop", "phone", "home"]);
</script>

<template>
  <main class="pb-16">
    <div v-if="route.path == '/admin'" class="h-[77vh] pl-60 pt-10 text-center">
      <h1 class="p-8 text-3xl">Welcome to admin page</h1>
      <h2 class="text-xl">Please select product category on the sidebar</h2>
    </div>

    <Sidebar
      @home="router.replace('/admin')"
      @laptop="router.replace('/admin/products/laptop')"
      @phone="router.replace('/admin/products/phone')"
    ></Sidebar>
    <div class="pl-60 pt-10">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped></style>
