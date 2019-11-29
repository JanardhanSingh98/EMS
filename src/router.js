import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
   
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
      path: '/organisers',
      name: 'organisers',
      component: () => import('./views/Organisers.vue')
    },
    {
      path: '/addevent',
      name: 'addevent',
      component: () => import('./views/AddEvent.vue'),
      children: [
        {
          path: 'events',
          name: 'events',
          component: () => import('@/components/afterLogin/Events.vue')
        }
      ]
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/SignIn.vue')
    },
    {
      path: '/eventdetail',
      name: 'eventdetail',
      component: () => import('./views/EventDetail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  
})
