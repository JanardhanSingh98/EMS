import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
  }
  ,
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/allevents',
      name: 'allevents',
      component: () => import('./views/AllEvents.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/SignIn.vue')
    }
  ],
  
})
