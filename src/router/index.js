import { createRouter, createWebHistory } from "vue-router";
// Imporntando datos
import sourceData from "@/data.json";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },{
    // definiendo una ruta protegida
    path: "/protected",
    name: "protected",
    component: () => import('@/views/Protected.vue'),
    meta: {
      requiresAuth : true
    }
  },
  {
    path: "/Destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    // Route Hook
    beforeEnter(to, from) {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      // Si no se encuentra el destino se redirecciona a "Not Found"
      if (!exists)
        return {
          name: "NotFound",
          // Permite conservar la URL de origen en una pagina diferente
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: "/Destination/:id/:slug/:experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

// 2. Creando el vue router
const router = createRouter({
  // 2.1 Configurando el modo historia
  history: createWebHistory(),
  // 2.2 Configurando las rutas
  routes,
  // 2.3 Comportamiento del scroll
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300);
      })
    );
  },
});
export default router;
