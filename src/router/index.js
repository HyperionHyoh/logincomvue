import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'
import Logado from '../components/Logado'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login'),
    meta:{
      title: 'Cadastro WEB - Login',
      requirestAuth: false
    }
  },
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/logado',
    name: 'Logado',
    component: Logado
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})

export default router
