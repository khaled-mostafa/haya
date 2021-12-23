import { createApp, h } from "vue"
import { createRouter, createWebHistory, RouterView } from "vue-router"
// @ts-expect-error
import _ from "lodash"

console.log(_)

createApp({
  setup() {
    return () => {
      return h(RouterView)
    }
  },
})
  .use(
    createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          component: () => import("./pages/home"),
        },
        {
          path: "/about",
          component: () => import("./pages/about"),
        },
      ],
    }),
  )
  .mount("#app")
