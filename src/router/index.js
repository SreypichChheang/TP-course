import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/Categories/:categoryId",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
      props: true, 
    },
    {
      path: "/products/:productId",
      name: "product",
      component: () => import("../views/ProductView.vue")
    }
  ]
});

export default router;
