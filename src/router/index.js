import { createRouter, createWebHistory } from "vue-router";
import GridView from "../views/GridView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: () => {
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return { path: "/gridview" };
      },
    },
    {
      path: "/gridview",
      name: "gridview",
      component: GridView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/listview",
      name: "listview",
      component: () => import("../views/ListView.vue"),
    },
    {
      path: '/patterns/:id',
      name: "patterndetails",
      component: () => import("../views/PatternDetailView.vue")
    }
  ],
});

export default router;
