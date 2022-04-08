<script setup>
import { onBeforeMount, ref } from "vue";
import { useStore } from "../../store/store.js";
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
</script>

<template>
  <nav class="navbar">
    <img src="../../assets/logo.png" alt="" />
    <div class="navbar-link">
      <div @click="getAllLaptop" class="navbar-item">LAPTOP</div>
      <div @click="getAllPhone" class="navbar-item">PHONE</div>
    </div>
  </nav>
  <router-link to="/admin/add?category=laptop" v-if="category == 'laptop'"
    ><button class="btn">Add Laptop</button></router-link
  >
  <router-link to="/admin/add?category=phone" v-if="category == 'phone'"
    ><button class="btn">Add Phone</button></router-link
  >
  <ul class="product-container">
    <li v-for="item in store.allProduct">
      <div class="product-img">
        <img :src="item.image" alt="Product image" />
      </div>
      <p class="product-name">{{ item.general.name }}</p>
      <div class="product-button">
        <button class="btn">
          <router-link
            :to="`/admin/update?category=${item.category}&id=${item._id}`"
            >Update</router-link
          >
        </button>
        <button
          @click="store.deleteProduct(item._id, item.category)"
          class="btn"
        >
          Delete
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
img {
  max-width: 100%;
}

.navbar {
  display: flex;
  background-color: #131313;
  height: 80px;
  color: white;
  align-items: center;
  padding: 0 20px;
}
.navbar img {
  height: 70%;
}
.navbar-link {
  display: flex;
  padding-left: 10%;
  gap: 40px;
}
.navbar-item {
  cursor: pointer;
}
.product-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 20px;
  gap: 20px;
}
.product-container li {
  list-style-type: none;
}
.product-name {
  padding-top: 20px;
}
</style>
