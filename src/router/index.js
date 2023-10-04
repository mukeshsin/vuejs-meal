import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealsByIngredients from "../views/MealsByIngredients.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealDetails from "../views/MealDetails.vue"

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "home", // Removed the leading slash
        name: "home",
        component: Home,
      },
      {
        path: "by-name/:name?", // Removed the leading slash
        name: "byName",
        component: MealsByName,
      },
      {
        path: "by-letter/:letter?", // Removed the leading slash
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "by-ingredients/:ingredients?", // Removed the leading slash
        name: "byIngredients",
        component: MealsByIngredients,
      },
      {
        path:"/meal/:id",
        name:'mealDetails',
        component:MealDetails
      }
    ],
  },
  {
    path: '/guest',
    component: GuestLayout, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
