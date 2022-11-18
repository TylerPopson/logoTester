import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '../views/AuthView.vue';
import UserDashboardView from '../views/UserDashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Auth',
      name: 'login/signup',
      component: AuthView
    },
    {
      path: '/Dashboard',
      name: 'User Dashboard',
      component: UserDashboardView
    },
  ]
})

export default router
