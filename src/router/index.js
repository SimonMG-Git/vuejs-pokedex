import { createRouter, createWebHistory } from "vue-router";
import Pokemon from "../components/Pokemon.vue";

const routes = [
  {
    path: "/",
    name: "Pokemon",
    component: Pokemon
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
