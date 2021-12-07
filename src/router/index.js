import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../login/Login";

import Sidebar from "@/pages/Sidebar";

import Profile from "@/pages/profile/Profile";

import ResultsHistory from "@/pages/resultsHistory/ResultsHistory";

import ListMembers from "@/pages/listMembers/ListMembers"

import ListMembersGV from "@/pages/listMembersGV/ListMembersGV";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Sidebar,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/resultsHistory',
        name: 'ResultsHistory',
        component: ResultsHistory
      },
      {
        path: '/listMembers',
        name: 'ListMembers',
        component: ListMembers
      },
      {
        path: '/listMembersGV',
        name: 'ListMembersGV',
        component: ListMembersGV
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
