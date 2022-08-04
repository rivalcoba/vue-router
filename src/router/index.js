import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: route => ({...route.params, id: parseInt(route.params.id)}),
  },
  {
    path: "/Destination/:id/:slug/:experienceSlug",
    name: "experience.show",
    component: () => import("@/views/ExperienceShow.vue"),
    props: route => ({...route.params, id: parseInt(route.params.id)})
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
