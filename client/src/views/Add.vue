<script setup>
import AddPhoneForm from "../components/AddPhoneForm.vue";
import AddLaptopForm from "../components/AddLaptopForm.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <AddPhoneForm v-if="route.query.category == 'phone'"></AddPhoneForm>
  <AddLaptopForm v-if="route.query.category == 'laptop'"></AddLaptopForm>
</template>

<style scoped></style>
