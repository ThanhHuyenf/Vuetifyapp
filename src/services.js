import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
const TOKEN = localStorage.getItem('token')
Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', `Bearer ${TOKEN}`)
    request.headers.set('Accept', 'application/json')
    next()
})
//http://api.lethanhhuyen.nvcd.xyz/api/auth/auth/login
const LoginService = Vue.resource('api/auth/auth/login', {}, {
    query: {method: 'POST', url: 'api/auth/auth/login'},
    forgotPassword : { method: 'POST', url: 'api/training/common/create-reset-password'},
    resetPassword : { method: 'POST', url: 'api/training/common/reset-password'}
})
const ChangePassword = Vue.resource('api/training/users/change-password', {}, {
    changePassword : { method: 'POST', url: 'api/training/users/change-password'},
})
const ProfileService = Vue.resource('api/training/detail-users', {}, {
    query: {method: 'GET', url: 'api/training/detail-users'}
})
const StudentService = Vue.resource('api/rating/mark', {}, {
    submitPoint : {method: 'POST', url: 'api/rating/mark'}
})

const MonitorService = Vue.resource('api/training/detail-users/monitor',{}, {
    getMembers : {method: "GET", url: "api/training/detail-users/monitor/list-students"}
})

const TeacherService = Vue.resource('api/class', {}, {
    getClasses : {method: "GET", url: "api/class/head-master"},
    getMembers: {method: "GET", url: "api/detail-users/head-master/list-students/0"}
})

const DepartmentSevice = Vue.resource('api/class/common',{}, {
    getClasses : {method: 'GET', url:'api/class/common'},
    getDetailClass: {method: 'GET', url: 'api/class/common/{id}'},
    getMembers: {method: 'GET', url:'api/class/common'},
    getTeachers: {method: "GET", url : "api/department/common/list-teachers"}
})

const AdminService= Vue.resource('api/training', {}, {
    getDepartments : {method: 'GET', url: 'api/training/department'},
    getTime: {method: "GET", url: "api/training/time"},
    fixTime: {method: "PUT", url:"api/training/time/{id}" },
    addDepartment: {method: 'POST'}
})

const services = {
    LoginService,
    ChangePassword,
    ProfileService,
    StudentService,
    MonitorService,
    TeacherService,
    DepartmentSevice,
    AdminService
}
export default services
