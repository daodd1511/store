import { defineStore } from "pinia";
import env from "../../env.js";
import axios from "axios";
export const useStore = defineStore("store", {
  state: () => {
    return {
      allProduct: [],
      filterText: "",
      product: {},
      status: 0,
      cart: [],
    };
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
    originalPrice: (state) => {
      let price = 0;
      state.cart.forEach((item) => {
        price += item.general.price;
      });
      return price;
    },
    saving: (state) => {
      let saving = 0;
      let sale_price = 0;
      state.cart.forEach((item) => {
        sale_price = item.general.sale_price
          ? item.general.sale_price
          : item.general.price;
        saving += item.general.price - sale_price;
      });
      return saving;
    },
  },
  actions: {
    async addProduct(productData) {
      await axios
        .post(`${env.API_URL}/add`, productData)
        .then((response) => (this.status = response.status))
        .catch((error) => console.error(error));
    },
    async getAllProducts(category) {
      this.allProduct = [];
      await axios
        .get(`${env.API_URL}/products?category=${category}`)
        .then((response) => (this.allProduct = response.data));
    },
    async updateProduct(id, data) {
      await axios
        .put(`${env.API_URL}/update?id=${id}`, data)
        .then((response) => {
          this.status = response.status;
        });
    },
    async deleteProduct(id, category) {
      await axios
        .delete(`${env.API_URL}/delete?category=${category}&id=${id}`)
        .then((response) => {
          this.allProduct = response.data;
          this.status = response.status;
        });
    },
    // Optional - Get product from server
    async getProductById(id, category) {
      await axios
        .get(`${env.API_URL}/find/?category=${category}&id=${id}`)
        .then((response) => {
          this.product = {};
          this.product = response.data;
        });
    },
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(i) {
      this.cart = this.cart.filter((item, index) => index !== i);
    },
  },
});
