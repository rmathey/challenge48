import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/MenuPage.vue")
  },
  {
    path: "/:id",
    component: () => import("../pages/ExercicePage.vue")
  },
  {
    path: "/test",
    component: () => import("../pages/MenuPage.vue")
  }
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router