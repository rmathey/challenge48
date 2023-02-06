import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/MenuPage.vue")
  },
  {
    path: "/exercice-query-1",
    component: () => import("../pages/exos/Exo-query-1.vue")
  },
  {
    path: "/exercice-query-2",
    component: () => import("../pages/exos/Exo-query-2.vue")
  },
  {
    path: "/exercice-query-3",
    component: () => import("../pages/exos/Exo-query-3.vue")
  },
  {
    path: "/exercice-css-1",
    component: () => import("../pages/exos/Exo-css-1.vue")
  },
  {
    path: "/exercice-css-2",
    component: () => import("../pages/exos/Exo-css-2.vue")
  },
  {
    path: "/exercice-css-3",
    component: () => import("../pages/exos/Exo-css-3.vue")
  },
  {
    path: "/exercice-securite-1",
    component: () => import("../pages/exos/Exo-securite-1.vue")
  },
  {
    path: "/exercice-securite-2",
    component: () => import("../pages/exos/Exo-securite-2.vue")
  },
  {
    path: "/exercice-securite-3",
    component: () => import("../pages/exos/Exo-securite-3.vue")
  }
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router