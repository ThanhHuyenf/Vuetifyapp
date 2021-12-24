import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../login/Login";
import Sidebar from "@/pages/Sidebar";

//Sinh vien
import Profile from "@/pages/profile/Profile";
import ResultsHistory from "@/pages/resultsHistory/ResultsHistory";

//Lop truong
import ListMembers from "@/pages/listMembers/ListMembers"
import FormDiemLT from "@/components/FormDiemLT";

//Giang vien
import ListMembersGV from "@/pages/listMembersGV/ListMembersGV";
import ListClassGV from "@/pages/listClassesGV/ListClassGV";

//Khoa
import ListClassesKhoa from "@/pages/listClassesKhoa/ListClassesKhoa";
import DetailClass from "@/pages/listClassesKhoa/DetailClass";
import ListClassesManagementKhoa from "@/pages/quanLyDuyetKhoa/ListClassesManagementKhoa";
import DetailClassKhoa from "@/pages/quanLyDuyetKhoa/DetailClassKhoa";

//Nha truong
import ManageTime from "@/pages/manageTime/ManageTime";

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
        component: ListMembers,
      },
      {
        path: '/listMembers/user_id=:id',
        name: 'ListMembers.FormDiemLT',
        component: FormDiemLT,
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
      {
        path: '/manageTime',
        name: 'ManageTime',
        component: ManageTime
      },
      {
        path: '/ListClassesKhoa',
        name: 'ListClassKhoa',
        component: ListClassesKhoa
      },
      {
        path: '/ListClassesKhoa/khoa=:khoa/class=:class',
        name: 'DetailClass',
        component: DetailClass
      },
      {
        path: '/quanLyDuyetKhoa',
        name: 'QuanLyDuyetKhoa',
        component: ListClassesManagementKhoa
      },
      {
        path: '/quanLyDuyetKhoa/detail/class=:class/hocKy=:hocKy/namHoc=:namHoc',
        name: 'QuanLyDuyetKhoa.Detail',
        component: DetailClassKhoa

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
