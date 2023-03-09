import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';
import AboutView from '../views/AboutView/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
  ],
});

export default router;
