import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/MenuPage.vue")
  },
  {
    path: "/exotest",
    component: () => import("../pages/exos/ExoTest.vue")
  }
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router