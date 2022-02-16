import { createApp } from "vue";
// 1. Importando los paquetes del Vue Router
import router from "@/router"
import App from "./App.vue";

// 3. Registrando el Vue Router
createApp(App).use(router).mount("#app");
