// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: { title: "Página Inicial | MIDTec" },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
      meta: { title: "MIDTec | Expenses" },
    },
    {
      path: "/viagens",
      name: "viagens",
      component: () => import("../views/Dashboard.vue"),
      meta: { title: "MIDTec | Expenses" },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const title: string | undefined = to.meta.title
  if (title) {
    document.title = title
  }
  next()
})
export default router
