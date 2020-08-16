import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'ePortfolio | Justin? WHO?' }
  },
  {
    path: '/aboutme',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'About Me | Justin? WHO?' }
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import(/* webpackChunkName: "about" */ '../views/Education.vue'),
    meta: { title: 'Education | Justin? WHO?' }
  },
  {
    path: '/workexperience',
    name: 'WorkExperience',
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkExperience.vue'),
    meta: { title: 'Work Experience | Justin? WHO?' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue'),
    meta: { title: 'Projects | Justin? WHO?' }
  },
  {
    path: '/connect',
    name: 'Connect',
    component: () => import(/* webpackChunkName: "about" */ '../views/Connect.vue'),
    meta: { title: 'Connect | Justin? WHO?' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Change the tab title based on what page we are on after navigating to it
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
