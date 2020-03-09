import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../views/logIn.vue";
import noServer from "../views/NoServer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "logIn",
    component: LogIn
  },
  {
    path: "/noServer",
    name: "NoServer",
    component: noServer
  },
  {
    path: "/about",
    name: "console",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "abstract",
  routes
});

export default router;
