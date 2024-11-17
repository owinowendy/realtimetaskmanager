// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../views/HomeComponent.vue";
import LoginComponent from "../views/LoginComponent.vue";
import SignUp from "../views/SignUp.vue";
import DashboardComponent from "../views/DashboardComponent.vue";

const routes = [
  { path: "/", name: "Home", component: HomeComponent },
  { path: "/login", name: "Login", component: LoginComponent },
  { path: "/signup", name: "Signup", component: SignUp },
  { path: "/dashboard", name: "Dashboard", component: DashboardComponent},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
