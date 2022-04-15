<script setup>
import { useStore } from "../../store/store.js";
import { useRoute } from "vue-router";
import ProductTable from "../../components/admin/ProductTable.vue";
const route = useRoute();
const store = useStore();
</script>
<template>
  <div class="mx-auto w-10/12">
    <!-- <router-link :to="'/admin/add?category=' + route.params.category">
      <button class="float-right h-8 w-20 rounded-md bg-green-400">
        <i class="fa-solid fa-plus"></i>
        Add
      </button>
    </router-link> -->
    <ProductTable :data="store.allProduct"></ProductTable>
  </div>
</template>

<style scoped></style>
