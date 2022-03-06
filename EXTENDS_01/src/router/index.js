import {createRouter, createWebHashHistory} from 'vue-router'
import IndexLayout from "../views/index.vue"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: IndexLayout,
      redirect: '/signup',
      children:[
        {
          path: '/signup',
          name: 'signUp',
          component:()=>import('../views/signup.vue')
        },
        {
          path: '/home',
          name: 'Home',
          component: ()=>import('../views/home.vue')
        },
        {
          path: '/login',
          name: 'Login',
          component: ()=>import('../views/login.vue')
        },
        {
          path: '/registerNew',
          name: 'registerNew',
          component: ()=>import('../views/registerNew.vue')
        },
        {
          path: '/homepage',
          name: 'homepage',
          component: ()=>import('../views/homepage.vue')
        }
      ]
    },
    
  ]
})
export default router