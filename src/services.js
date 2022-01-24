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

const DepartmentSevice = Vue.resource('api/class',{}, {
    getClasses : {method: 'GET', url:'api/class'},
    getDetailClass: {method: 'GET', url: 'api/class/{id}'},
})

const AdminService= Vue.resource('api/department', {}, {
    getDepartments : {method: 'GET', url: 'api/department'}
})

const services = {
    LoginService,
    ProfileService,
    DepartmentSevice,
    AdminService
}
export default services
