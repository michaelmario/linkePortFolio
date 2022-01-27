import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/about",
        name: "About",
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/resume",
        name: "Resume",
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "resume" */ "../components/Resume.vue"),
      },
       { 
     path: "/contact",
    name: "Contact",
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../components/Contact.vue"),
  },
      {
        path: "/portfolio",
        name: "Portfolio",
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "portfolio" */ "../components/Portfolio.vue"          ),
       
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
