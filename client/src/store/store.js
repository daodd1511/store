import { defineStore } from "pinia";
import env from "../../env.js";
import axios from "axios";
export const useStore = defineStore("store", {
  state: () => {
    return {
      allProduct: [],
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
    async getAllProducts() {
      await axios
        .get(`${env.API_URL}/products`)
        .then((response) => (this.allProduct = response.data));
    },
    async updateProduct(id) {
      const productData = this.product;
      await axios
        .put(`${env.API_URL}/update/${id}`, productData)
        .then((response) => {
          this.status = response.status;
        });
    },
    async deleteProduct(id) {
      await axios.delete(`${env.API_URL}/delete/${id}`).then((response) => {
        this.allProduct = response.data;
        this.status = response.status;
      });
    },
    async getProductById(id) {
      await axios.get(`${env.API_URL}/find/${id}`).then((response) => {
        this.product = response.data;
      });
    },
  },
});
