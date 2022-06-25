import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: {
      path: "/Home",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: {
      path: "/Home",
    },
  },
  {
    path: "/Home",
    component: () => import("@/components/Home.vue"),
    meta: {
      title: "文字說明"
    },
  },
  {
    path: "/HelloWorld",
    component: () => import("@/components/HelloWorld.vue"),
    meta: {
      title: "功能展示"
    },
  },
]

const router = createRouter({
  history: createWebHistory("/VueThreeDemo/"),
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title || "VueThreeDemo";
})

export default router;