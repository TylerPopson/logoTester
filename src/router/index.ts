import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import UserDashboardView from "../views/UserDashboardView.vue";
import AuthView from "../views/AuthView.vue";

import { userSessionStore } from "../store/userSession";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
			meta: {
				needsAuth: false as boolean,
			},
		},
		{
			path: "/Dashboard",
			name: "User Dashboard",
			component: UserDashboardView,
			meta: {
				needsAuth: true as boolean,
			},
		},
		{
			path: "/auth",
			name: "Login/Signup",
			component: AuthView,
			meta: {
				needsAuth: false as boolean,
			},
		},
	]
});

router.beforeEach((to, from, next) => {
	const userSession = userSessionStore();

	if (to.meta.needsAuth) {
		if (userSession.session || to.path == "/auth") {
			return next();
		} else {
			return next("/auth");
		}
	}

	return next();
});

export default router;
