import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../login/Login";
import ForgotPassWord from "@/login/ForgotPassWord";
import ResetPassword from "@/login/ResetPassword";
import Sidebar from "@/pages/Sidebar";

import Homepage from "@/pages/homepage/Homepage";

//Sinh vien
import Profile from "@/pages/profile/Profile";
import ResultsHistory from "@/pages/resultsHistory/ResultsHistory";

//Lop truong
import ListMembersMonitor from "@/pages/listMembers/ListMembers"
import FormDiemMonitor from "@/components/FormDiemLT";

//Giang vien
import ListMembersTeacher from "@/pages/listMembersTeacher/ListMembersTeacher";
import ListClassTeacher from "@/pages/listClassesTeacher/ListClassTeacher";

//Khoa
import ListClassesDepartment from "@/pages/listClassesDepartment/ListClassesDepartment";
import DetailClass from "@/pages/listClassesDepartment/DetailClass";
import ListClassesManagementDepartment from "@/pages/quanLyDuyetDepartment/ListClassesManagementDepartment";
import DetailClassDepartment from "@/pages/quanLyDuyetDepartment/DetailClassDepartment";

//Nha truong
import ManageTime from "@/pages/manageTime/ManageTime";
import ListFaculties from "@/pages/listFaculties/ListFaculties";
import DetailFaculty from "@/pages/listFaculties/DetailFaculty";

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: ForgotPassWord
    },
    {
        path: '/reset/:token',
        name: 'ResetPassword',
        component: ResetPassword
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Sidebar,
        redirect: '/profile',
        children: [
            {
                path: '/homepage',
                name: 'Homepage',
                component: Homepage
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
                path: '/listMembersMonitor',
                name: 'ListMembers',
                component: ListMembersMonitor,
            },
            {
                path: '/listMembersMonitor/user_id=:id',
                name: 'ListMembers.FormDiemLT',
                component: FormDiemMonitor,
            },
            {
                path: '/listMembersTeacher',
                name: 'ListMembersGV',
                component: ListMembersTeacher
            },
            {
                path: '/listClassesTeacher',
                name: 'ListMembersGV',
                component: ListClassTeacher
            },
            {
                path: '/listClassesDepartment',
                name: 'ListClassKhoa',
                component: ListClassesDepartment
            },
            {
                path: '/listClassesDepartment/khoa=:khoa/class=:class',
                name: 'DetailClass',
                component: DetailClass
            },
            {
                path: '/quanLyDuyetDepartment',
                name: 'QuanLyDuyetKhoa',
                component: ListClassesManagementDepartment
            },
            {
                path: '/quanLyDuyetDepartment/detail/class=:class/hocKy=:hocKy/namHoc=:namHoc',
                name: 'QuanLyDuyetKhoa.Detail',
                component: DetailClassDepartment

            },
            {
                path: '/listFaculties',
                name: 'ListFaculties',
                component: ListFaculties
            },
            {
                path: '/listFaculties/detail',
                name: 'DetailFaculty',
                component: DetailFaculty
            },
            {
                path: '/manageTime',
                name: 'ManageTime',
                component: ManageTime
            },
        ],

    },
    {path: '*', redirect: '/'}

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.name === 'Login') {
//         return next();
//     }
//     localStorage.setItem('me','abc')
//     const account = localStorage.getItem('me');
//     if (!account) {
//         return next({
//             name: 'Login',
//             query: {
//                 // eslint-disable-next-line no-restricted-globals
//                 redirect: '/profile',
//             },
//         });
//     }
//     return next()
// })

export default router
