import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/example01/experiment01.vue')
  },
  {
    path: '/example03_01',
    component: () => import('@/views/example03/example03_01.vue')
  },
  {
    path: '/example03_02',
    component: () => import('@/views/example03/example03_02.vue')
  },
  {
    path: '/example03_03',
    component: () => import('@/views/example03/example03_03.vue')
  },
  {
    path: '/experiment02',
    component: () => import('@/views/experitment02/experiment02.vue')
  },
  {
    path: '/example02_01',
    component: () => import('@/views/example02/experiment02_01.vue')
  },
  {
    path: '/example02_02',
    component: () => import('@/views/example02/example02_02.vue')
  },
  {
    path: '/example02_03',
    component: () => import('@/views/example02/example02_03.vue')
  },
  {
    path: '/example02_04',
    component: () => import('@/views/example02/example02_04.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
