import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Doktori from '../views/Doktori.vue'
import DodajDoktora from '../views/DodajDoktora.vue'
import Doktor from '../views/Doktor.vue'
import Profile from '../views/Profile.vue'


function requireAuth(to,from,next){
  if(localStorage.getItem('usertoken')==null){
    next({
      path:"/login"
    })
  }else{
    next()
  }

}
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:Login,
  },
  {
    path: '/Doktori',
    name: 'Doktori',
    component:Doktori
  },
  {
    path: '/Doktor/:id',
    name: 'Doktor',
    component:Doktor,
  },
  {
    path: '/register',
    name: 'register',
    component:Register,
  },
  {
    path: '/DodajDoktora',
    name: 'DodajDoktora',
    component:DodajDoktora,
    beforeEnter:requireAuth,  
  },
  {
    path: '/profile',
    name: 'profile',
    component:Profile,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
