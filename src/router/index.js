import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Doktori from "../views/Doktori.vue";
import DodajDoktora from "../views/DodajDoktora.vue";
import Doktor from "../views/Doktor.vue";
import Profile from "../views/Profile.vue";
import NajboljiDoktori from "../views/NajboljiDoktori.vue";
import DodajClanak from "../views/DodajClanak.vue";
import Clanak from "../views/Clanak.vue";
import Chat from "../views/Chat.vue";

function requireAuth(to, from, next) {
  if (localStorage.getItem("usertoken") == null) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
}
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/Doktori",
    name: "Doktori",
    component: Doktori,
    beforeEnter: requireAuth,
  },
  {
    path: "/Doktor/:id",
    name: "Doktor",
    component: Doktor,
    beforeEnter: requireAuth,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/DodajDoktora",
    name: "DodajDoktora",
    component: DodajDoktora,
    beforeEnter: requireAuth,
  },
  {
    path: "/najbolji",
    name: "najbolji",
    component: NajboljiDoktori,
    beforeEnter: requireAuth,
  },
  {
    path: "/DodajClanak",
    name: "DodajClanak",
    component: DodajClanak,
    beforeEnter: requireAuth,
  },
  {
    path: "/clanak",
    name: "clanak",
    component: Clanak,
    beforeEnter: requireAuth,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
