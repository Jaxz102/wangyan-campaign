import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Howtovote from '../views/Howtovote.vue'
import Testnav from '../components/Navbar2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { lang: 0 }
  },
//   {
//     path: '/zh',
//     name: 'home',
//     component: Home,
//   },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/how-to-vote',
    name: 'HowtoVote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Howtovote,
  },
  {
      path: '/testnav',
      name: 'testnav',
      component: Testnav,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {

//     if (to.meta.lang == 0){
//         next({name: 'home'})
//     }else{
//         next()
//     }
// })

export default router
