import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import UserDashboardView from '../views/UserDashboardView.vue';

import { userSessionStore } from '../store/userSessionStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Dashboard',
      name: 'User Dashboard',
      component: UserDashboardView
    },
  ]
})

router.beforeEach((to, from, next) => {
  const userSession = userSessionStore()

  if (to.meta.needsAuth) {
    if (userSession.session) {
      return next()
    } else {
      return next('/')
    }
  }

  return next()
})

export default router
