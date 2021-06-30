import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Top from "../views/Top.vue";
import TravelsTop from "@/views/TravelsTop.vue"

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/travelsTop",
    name: "TravelsTop",
    component: TravelsTop,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
