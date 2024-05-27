import { createRouter, createWebHistory } from "vue-router";
import ListOfWorks from "@/components/ListOfWorks.vue";
import ErrorView from "@/components/ErrorView.vue";

const routes = [
  {
    path: "/",
    component: ListOfWorks,
  },
  {
    path: "/error",
    component: ErrorView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
