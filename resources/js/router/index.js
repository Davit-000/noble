import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import VNavbar from "@/components/VNavbar"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/auth/Register.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    components: {
      navbar: VNavbar,
      default: () => import(/* webpackChunkName: "report" */ '@/views/Reports.vue')
    }
  },
  {
    path: '/game',
    name: 'Game',
    components: {
      navbar: VNavbar,
      default: () => import(/* webpackChunkName: "game" */ '@/views/Game.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
