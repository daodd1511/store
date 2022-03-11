import { defineStore } from "pinia";
import env from "../../env.js";
import axios from "axios";
export const useStore = defineStore("store", {
  state: () => {
    return {
      allProduct: {},
      product: {},
      status: 0,
    };
  },
  actions: {
    async addProduct(productData) {
      await axios
        .post(`${env.API_URL}/add`, productData)
        .then((response) => (this.status = response.status))
        .catch((error) => console.error(error));
    },
    async getAllProducts(category) {
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
    async getProductById(id, category) {
      await axios
        .get(`${env.API_URL}/find/?category=${category}&id=${id}`)
        .then((response) => {
          this.product = {};
          this.product = response.data;
        });
    },
  },
});
