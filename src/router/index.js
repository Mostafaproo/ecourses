import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'

const routes = [

  {
    path:'/',
    name: "Home",
    component: Home
  },
  {
    path:'/rigster',
    name: 'Register',
    component: Register
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
