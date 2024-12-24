import { createRouter, createWebHistory } from 'vue-router'
import section from '@/components/section.vue'
import page from '@/components/page.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/page',
      redirect: '/page/1'
    },
    {
      path: '/page/:nb?',
      name: 'page',
      component: page,
      children: [
        {
          path: 'section/:id',
          name: 'section',
          component: section
        },
      ]
    },
  ],
})

export default router
