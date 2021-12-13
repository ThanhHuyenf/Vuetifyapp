import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../login/Login";

import Sidebar from "@/pages/Sidebar";
import Profile from "@/pages/profile/Profile";
import ResultsHistory from "@/pages/resultsHistory/ResultsHistory";
import ListMembers from "@/pages/listMembers/ListMembers"
import ListMembersGV from "@/pages/listMembersGV/ListMembersGV";
import ListClassGV from "@/pages/listClassesGV/ListClassGV";

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
      },
      {
        path: '/listClassesGV',
        name: 'ListMembersGV',
        component: ListClassGV
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
