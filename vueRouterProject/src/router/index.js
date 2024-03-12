import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/Index.vue'
import ProfileView from '../views/Profile.vue'
import AboutView from '../views/About.vue'
import Products from '../views/Products.vue'
import ProductView from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/products',
      name: 'product',
      component: Products,
    },
    {
      path: '/product/:id',
      name: 'productview',
      component: ProductView
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
