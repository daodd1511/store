<script setup>
import { useStore } from "../../store/store.js";
import { useRoute } from "vue-router";
import ProductTable from "../../components/admin/ProductTable.vue";
const route = useRoute();
const store = useStore();
</script>
<template>
  <div>
    <router-link :to="'/admin/add?category=' + route.params.category">
      <button class="h-8 w-20 rounded-md bg-green-500">
        <i class="fa-solid fa-plus"></i>
        Add
      </button>
    </router-link>
  </div>
  <ProductTable :data="store.allProduct"></ProductTable>
</template>

<style scoped></style>
