<script setup>
import { useRouter } from "vue-router";
import Sidebar from "../../components/admin/Sidebar.vue";
const router = useRouter();

const emit = defineEmits(["laptop", "phone"]);
</script>

<template>
  <main class="pb-16">
    <Sidebar
      @laptop="router.replace('/admin/products/laptop')"
      @phone="router.replace('/admin/products/phone')"
    ></Sidebar>
    <div class="pl-60 pt-10">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped></style>
