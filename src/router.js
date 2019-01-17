import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PuppieList from "@/views/PuppieList.vue";
import Details from "@/views/Details.vue";
import FAQ from "@/views/FAQ.vue";
import VueScrollactive from "vue-scrollactive";
import VueScrollTo from "vue-scrollto";

Vue.use(Router);
Vue.use(VueScrollactive);
Vue.use(VueScrollTo);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/puppies/:breed_slug",
      name: "puppie-list",
      component: PuppieList
    },
    {
      path: "/details/:puppy_slug",
      name: "details",
      component: Details
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
