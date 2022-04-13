<script setup>
import { onBeforeMount, ref } from "vue";
import { useStore } from "../../store/store.js";
import Sidebar from "../../components/admin/Sidebar.vue";
const store = useStore();
const category = ref("");
onBeforeMount(async () => {
  getAllLaptop();
  // getAllPhone();
});
const getAllPhone = async () => {
  category.value = "phone";
  await store.getAllProducts(category.value);
};
const getAllLaptop = async () => {
  category.value = "laptop";
  await store.getAllProducts(category.value);
};
const emit = defineEmits(["laptop", "phone"]);
</script>

<template>
  <main class="pb-16">
    <Sidebar @laptop="getAllLaptop" @phone="getAllPhone"></Sidebar>
    <div class="pl-60 pt-10">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped></style>
