import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KonserList from '../views/KonserList.vue'
import TiketSaya from '../views/TiketSaya.vue'

const routes = [
  {
    path: '/konser',
    component: KonserList,
     meta: { auth: true }
  },
  {
    path: '/tiket-saya',
    component: TiketSaya,
     meta: { auth: true }
  },
  {
  path: '/',
  name: 'home',
  component: () => import('../views/HomeView.vue'),
   meta: { auth: true }
  },
  {
  path: '/login',
  name: 'login',
  component: () => import('../views/LoginView.vue')
  } 

]


const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('login') === 'true'

  if (to.meta.auth && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
