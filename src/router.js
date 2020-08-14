import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

/*export default new Router({
   
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
      component: () => import('./views/About.vue')
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
      path: '/eventdetail/:id',
      name: 'eventdetail',
      component: () => import('./views/EventDetail')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('./views/Admin')
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: () => import('@/components/afterLogin/UserProfile'),
      meta: { requiresAuth: true }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },  
})*/

const routes = [
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
    component: () => import('./views/About.vue')
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
        component: () => import('./components/addevent/Events.vue')
      }
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('./views/SignIn.vue')
  },
  {
    path: '/eventdetail/:id',
    name: 'eventdetail',
    component: () => import('./views/EventDetail')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('./views/Admin'),
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import('@/components/UserProfile'),
    meta: { requiresAuth: true }
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URl,
  routes
})

export default router