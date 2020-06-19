import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Catalogo from '../views/PDF.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: Catalogo
    },
    // {
    //   path: '/catalogo',
    //   name: 'catalogo',
    //   component: () => import(/* webpackChunkName: "catalogo" */ '../views/PDF.vue')
    // }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
