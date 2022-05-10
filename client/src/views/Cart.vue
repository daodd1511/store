<script setup>
import { ref } from "vue";
import { useStore } from "../store/store.js";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import CartItem from "../components/CartItem.vue";
import Toast from "../components/Toast.vue";

const router = useRouter();
const store = useStore();
const toastMessages = ref([]);
const toastId = ref(0);
const renderToast = (name) => {
  toastId.value++;
  toastMessages.value.push({
    id: toastId.value,
    name: name,
  });
  // Confuse, dont know how it works, but it works :D,
  // May 10th 2022
  // As I do some research, each time renderToast is called, it will create time out on whole toastMessages
  // Example: timeout(toast[toast1],5000), timeout(toast[toast1,toast2],5000),... => Every 5 second it will shift(remove first element) of the same array/data (it call to the same data source -> toastMessages). Kinda interesting
  autoCloseToast();
};
const autoCloseToast = () => {
  setTimeout(() => {
    toastMessages.value.shift();
    // Add log to see when close 1 or many toast manually, it still call the shift function and log the same amount of toast messages have been close manually
    // Here the drawback, when we close toast messages manually, if we add new toast when the timeout of deleted toast still running, the new toast will close depend on the current running timeout, add at the right time it can close instantly
    // console.log(toastMessages.value.length);
  }, 5000);
};
const closeToast = (i) => {
  toastMessages.value = toastMessages.value.filter(
    (toast, index) => index !== i
  );
};
const checkout = () => {
  window.alert("This feature is under development. Please comeback later");
};
</script>
<template>
  <Navbar></Navbar>
  <div class="flex flex-col items-center pt-20 sm:items-baseline lg:flex-row">
    <div class="w-full p-4 md:mx-auto md:w-11/12 lg:mx-0 lg:w-2/3 lg:pl-10">
      <CartItem
        v-for="(item, index) in store.cart"
        :product="item"
        :index="index"
        :key="item._id"
        @delete="renderToast(item.general.name)"
      ></CartItem>
    </div>
    <!-- Summary -->
    <div
      class="right-0 h-fit w-full items-center px-10 text-center md:mx-auto md:w-2/3 lg:fixed lg:w-1/3"
    >
      <!-- Header -->
      <h1
        class="border-b border-[#cbd1d9] py-2 text-xl font-medium md:text-2xl"
      >
        Order Summary
      </h1>
      <!-- Price -->
      <ul
        v-if="store.cart.length != 0"
        class="border-b border-[#cbd1d9] py-2 text-sm md:text-base"
      >
        <li class="flex justify-between">
          <span>Original Price</span>
          <span>${{ store.originalPrice }}</span>
        </li>
        <li class="flex justify-between">
          <span>Savings</span>
          <span>${{ store.saving }}</span>
        </li>
        <li class="flex justify-between">
          <span>Shipping</span>
          <span>FREE</span>
        </li>
      </ul>
      <!-- Total -->
      <div class="flex justify-between py-2 text-base font-medium md:text-lg">
        <h2>Total</h2>
        <span>${{ store.originalPrice - store.saving }}</span>
      </div>
      <!-- Checkout button -->
      <button
        class="my-6 h-12 w-full items-center rounded text-center font-medium"
        :class="store.cart.length ? 'bg-yellow-300' : 'bg-blue-700 text-white'"
        @click="store.cart.length ? checkout() : router.replace('/')"
      >
        <span v-if="store.cart.length">Checkout</span>
        <span v-else>Shopping</span>
      </button>
    </div>
  </div>
  <!-- Toast message -->
  <div class="fixed top-14 right-0 z-50 p-5">
    <Toast
      v-for="(toast, index) in toastMessages"
      :key="toast.id"
      @closeToastByButton="closeToast(index)"
    >
      {{ toast.name }} has been deleted.
    </Toast>
  </div>
</template>

<style scoped></style>
