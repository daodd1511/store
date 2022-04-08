import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/router.js";
import { createPinia } from "pinia";
const app = createApp(App);
app.use(router).use(createPinia()).mount("#app");
