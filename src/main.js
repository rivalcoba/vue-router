import { createApp } from "vue";
// 1. Importando los paquetes del Vue Router
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
// 2. Creando el vue router
const router = createRouter({
  // 2.1 Configurando el modo historia
  history: createWebHistory(),
  // 2.3 Configurando las rutas
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});
// 3. Registrando el Vue Router
createApp(App).use(router).mount("#app");
