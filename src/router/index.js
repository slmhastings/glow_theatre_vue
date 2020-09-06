import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/ProductsIndex.vue";
import ProductShow from "../views/ProductShow.vue";
import Login from "../views/UserLogin.vue";
import Logout from "../views/Logout.vue";
import Signup from "../views/Signup.vue";
import UserAccount from "../views/UserAccount.vue";
import Featured from "../views/Featured.vue";
import Question from "../views/Question.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:id",
    name: "ProductShow",
    component: ProductShow,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/account",
    name: "account",
    component: UserAccount,
  },
  {
    path: "/featured",
    name: "featured",
    component: Featured,
  },
  {
    path: "/question",
    name: "question",
    component: Question,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
