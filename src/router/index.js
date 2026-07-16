import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/proyectos/:tipo?',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      props: true
    },
    {
      path: '/servicios/:tipo',
      name: 'service',
      component: () => import('../views/ServiceView.vue'),
      props: true
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CVView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
