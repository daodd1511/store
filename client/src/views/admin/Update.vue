<script setup>
import { useRoute } from "vue-router";
import UpdateLaptopForm from "../../components/admin/UpdateLaptopForm.vue";
import UpdatePhoneForm from "../../components/admin/UpdatePhoneForm.vue";
const route = useRoute();
</script>
<template>
  <div>
    <UpdateLaptopForm
      v-if="route.query.category == 'laptop'"
      :productId="route.query.id"
    ></UpdateLaptopForm>
    <UpdatePhoneForm v-if="route.query.category == 'phone'"> </UpdatePhoneForm>
  </div>
</template>

<style scoped>
input {
  width: 70%;
}
</style>
