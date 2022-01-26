import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
const TOKEN = localStorage.getItem('token')
Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', `Bearer ${TOKEN}`)
    request.headers.set('Accept', 'application/json')
    next()
})

const LoginService = Vue.resource('api/auth/login', {}, {
    query: {method: 'POST', url: 'api/auth/login'},
    forgotPassword : { method: 'POST', url: 'api/common/create-reset-password'},
    resetPassword : { method: 'POST', url: 'api/common/reset-password'}
})

const ProfileService = Vue.resource('api/detail-users', {}, {
    query: {method: 'GET', url: 'api/detail-users'}
})

const MonitorService = Vue.resource('api/detail-users/monitor',{}, {
    getMembers : {method: "GET", url: "api/detail-users/monitor/list-students"}
})

const TeacherService = Vue.resource('api/class', {}, {
    getClasses : {method: "GET", url: "api/class/head-master"},
    getMembers: {method: "GET", url: "api/detail-users/head-master/list-students/0"}
})

const DepartmentSevice = Vue.resource('api/class',{}, {
    getClasses : {method: 'GET', url:'api/class'},
    getDetailClass: {method: 'GET', url: 'api/class/{id}'},
    getMembers: {method: 'GET', url:'api/class'},
    getTeachers: {method: "GET", url : "api/department/list-teachers"}
})

const AdminService= Vue.resource('api/department', {}, {
    getDepartments : {method: 'GET', url: 'api/department'},
    getTime: {method: "GET", url: "api/time"},
    fixTime: {method: "PUT", url:"api/time/{id}" }
})

const services = {
    LoginService,
    ProfileService,
    MonitorService,
    TeacherService,
    DepartmentSevice,
    AdminService
}
export default services
