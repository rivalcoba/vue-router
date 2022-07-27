import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: () => import("@/views/Brazil.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import("@/views/Panama.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("@/views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () => import("@/views/Jamaica.vue"),
  },
  {
    path: "/Destination/:id",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue")
  }
];

// 2. Creando el vue router
const router = createRouter({
  // 2.1 Configurando el modo historia
  history: createWebHistory(),
  // 2.3 Configurando las rutas
  routes
});
export default router;
