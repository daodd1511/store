import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/admin/Add.vue";
import AdminHome from "../views/admin/AdminHome.vue";
import Update from "../views/admin/Update.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin Home",
    component: AdminHome,
  },
  {
    path: "/admin/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/admin/update",
    name: "Update",
    component: Update,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
