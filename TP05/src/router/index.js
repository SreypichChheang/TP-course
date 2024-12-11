import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import Page1 from '../components/page1.vue';
import Page2 from '../components/page2.vue';
import Page3 from '../components/page3.vue';

const routes = [
  {
    path: '/page1',
    name: 'Page1',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2,
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3,
  },
  {
    path: '/',
    redirect: '/page1', // Default route redirects to Page1
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
