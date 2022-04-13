<script setup>
import { onBeforeMount, ref } from "vue";
import { useStore } from "../../store/store.js";
import { useRoute } from "vue-router";
import Sidebar from "../../components/admin/Sidebar.vue";
const store = useStore();
const route = useRoute();
const category = ref("");
onBeforeMount(async () => {
  if (route.params.category == "laptop") {
    getAllLaptop();
  } else if (route.params.category == "phone") {
    getAllPhone();
  }
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
