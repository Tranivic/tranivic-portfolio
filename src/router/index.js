import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';
import AboutView from '../views/AboutView/AboutView.vue';
import ContactView from '../views/ContactView/ContactView.vue';
import WorkView from '../views/WorkView/WorkView.vue';
import store from '../store/index.js';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/pt',
      name: 'HomePt',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkView,
    },
    {
      path: '/:notFound(.*)',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('selectedLanguage')) {
    const currentSelectedLanguage = localStorage.getItem('selectedLanguage');
    store.commit('setSelectedLanguage', currentSelectedLanguage);
    console.log(store.state.selectedLanguage)
  }
  if (to.path === '/' && store.state.selectedLanguage === 'br') {
    next('/pt');
  } else if (to.path === '/pt' && store.state.selectedLanguage === 'en') {
    next('/');
  } else {
    next();
  }
});

export default router;
