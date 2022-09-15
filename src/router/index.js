import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView'
import Third from '../views/ThirdView'
import Forth from '../views/ForthView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/swhy-service/swap-summary',
    name: 'home',
    component: HomeView
  },
  {
    path: '/swhy-service/swap-funds',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/swhy-service/swap-funds',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Third
  },
  {
    path: '/swhy-service/swap-funds',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Forth
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
