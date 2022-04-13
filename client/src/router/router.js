import { createRouter, createWebHistory } from "vue-router";
import Laptop from "../views/products/Laptop.vue";
import Phone from "../views/products/Phone.vue";
import AdminHome from "../views/admin/AdminHome.vue";
import AdminProduct from "../views/admin/AdminProduct.vue";
import Add from "../views/admin/Add.vue";
import Update from "../views/admin/Update.vue";
import ProductDetail from "../views/products/ProductDetail.vue";
const routes = [
  {
    path: "/laptop",
    name: "Laptop",
    component: Laptop,
  },
  {
    path: "/phone",
    name: "Phone",
    component: Phone,
  },
  {
    path: "/:category/:id",
    name: "Product Detail",
    component: ProductDetail,
  },
  {
    path: "/admin",
    name: "Admin Home",
    component: AdminHome,
    children: [
      {
        path: "products/:category",
        name: "Admin Product View",
        component: AdminProduct,
      },
      {
        path: "add",
        name: "Add",
        component: Add,
      },
      {
        path: "update",
        name: "Update",
        component: Update,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
