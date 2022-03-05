import { createRouter, createWebHistory } from "vue-router";
import Add from "../views/Add.vue";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
