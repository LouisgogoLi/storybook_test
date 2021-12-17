import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import PropsApp from "@/views/PropsApp.vue";
import PropsAndEmit from "@/views/PropsAndEmit.vue";
import DirectiveTest from "@/views/DirectiveTest.vue";
import SlotTest from "@/views/SlotTest.vue";
import ProvideInjectTest from "@/views/ProvideInjectTest.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/index.html",
    name: "index",
    redirect: { name: "Home" },
  },
  {
    path: "/PropsApp",
    name: "PropsApp",
    component: PropsApp,
  },
  {
    path: "/PropsAndEmit",
    name: "PropsAndEmit",
    component: PropsAndEmit,
  },
  {
    path: "/DirectiveTest",
    name: "DirectiveTest",
    component: DirectiveTest,
  },
  {
    path: "/SlotTest",
    name: "SlotTest",
    component: SlotTest,
  },
  {
    path: "/ProvideInjectTest",
    name: "ProvideInjectTest",
    component: ProvideInjectTest,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
