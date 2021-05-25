import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import EvolvingCyborgs from "../views/EvolvingCyborgs.vue"
import ML_Tournament from "../views/ML_Tournament.vue"
import GU_Workshops from "../views/GU_Workshops.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/evolvingcyborgs",
    name: "Evolving Cyborgs",
    component: EvolvingCyborgs
  },
  {
    path:"/mltournament",
    name: "ML Tournament",
    component: ML_Tournament,
  },
  {
    path:"/guworkshops",
    name: "GU Workshops",
    component: GU_Workshops,
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
