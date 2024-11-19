// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/HomeComponent.vue";
import LoginComponent from "../components/LoginComponent.vue";
import SignUp from "../components/SignUp.vue";
import DashboardComponent from "../components/DashboardComponent.vue";
import TaskboardComponent from "@/components/TaskboardComponent.vue";
const routes = [
  { path: "/", name: "Home", component: HomeComponent },

  { path: "/login", name: "Login", component: LoginComponent },
  { path: "/signup", name: "Signup", component: SignUp },
  { path: "/dashboard", name: "Dashboard", component: DashboardComponent},
  { path: "/taskboard", name: "Taskboard", component: TaskboardComponent},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
