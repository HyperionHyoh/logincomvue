import Vue from 'vue'
import VueRouter from 'vue-router'
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
    path: '#',
    redirect:'/login'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})

export default router
