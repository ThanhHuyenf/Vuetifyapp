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
    query: {method: 'GET', url: 'api/training/detail-users'},
    updateProfile: {method: 'PUT', url: 'api/training/detail-users/update'},
    getAvatar:{method: 'GET', url: 'api/training/common/avatars/{fileId}'}

})
const ImgService = Vue.resource('api/training/common/avatar', {}, {
    changeAvatar: {method : 'POST', url: 'api/training/common/avatar',headers: {
            'Content-Type': 'multipart/form-data'
    }}
})

const PointingService = Vue.resource('api/training', {}, {
    getPoint: {method: 'POST', url: 'api/training/mark/get-detail-mark'},
    getPointSefl: {method: 'POST', url: 'api/training/mark/get-detail-mark'},
    submitPoint : {method: 'POST', url: 'api/training/mark'},
    getHistory : {method: "POST", url: 'api/training/mark/history'},
    getPointFrame: {method: "GET", url: 'api/training/point-frame?page=1&perPage=20'},
    createPointFrame: {method: "POST", url: 'api/training/point-frame'},
    deletePointFrame: {method: 'DELETE', url: 'api/training/point-frame/{id}'},
    updatePointFrame: {method: 'PUT', url: 'api/training/point-frame/{id}'},
    completeStudent: {method: 'POST', url: 'api/training/mark'},
    completeMonitor: {method: 'POST', url: 'api/training/mark/monitor/{studentId}'},
    completeTeacher: {method: 'POST', url: 'api/training/mark/teacher/{studentId}'},
})

const MonitorService = Vue.resource('api/training/detail-users/monitor',{}, {
    getMembers : {method: "GET", url: "api/training/detail-users/monitor/list-students"}
})

const TeacherService = Vue.resource('api/training/class', {}, {
    getClasses : {method: "GET", url: "api/training/class/head-master"},
    getMembers: {method: "GET", url: "api/training/detail-users/head-master/list-students/0"},
    assignMonitor: {method: "GET", url: "api/training/detail-users/head-master/list-students/assign-monitor/{id}"},
    getListClass: {method: 'GET', url: 'api/training/mark/list-class-department'},
})

const DepartmentSevice = Vue.resource('api/training/class',{}, {
    getClasses : {method: 'GET', url:'api/training/class'},
    getDetailClass: {method: 'GET', url: 'api/training/class/{id}'},
    getMembers: {method: 'GET', url:'api/class/common'},
    getTeachers: {method: "GET", url : "api/training/department/list-teachers"},
    listBrowseMark: {method: "GET", url: 'api/training/mark/get-mark/{markId}'},
    browseMark: {method: "GET", url: 'api/training/mark/approved-mark/{markId}'},
})

const AdminService= Vue.resource('api/training', {}, {
    getDepartments : {method: 'GET', url: 'api/training/department'},
    getTime: {method: "GET", url: "api/training/time"},
    fixTime: {method: "PUT", url:"api/training/time/{id}" },
    addDepartment: {method: 'POST'},
    setupTime: {method: "GET", url: "api/training/time/active"},
    createNewTime: {method: 'POST', url: 'api/training/time'},
    deleteTime: {method: 'DELETE', url: 'api/training/time/{id}'},
    getListTeachers: {method: "GET", url: "api/training/admin/list-teacher"},
    createDepartmentManual: {method: 'POST',url: 'api/training/department' },
    getListStudent: {method: 'GET', url: 'api/training/admin/list-student'},
    uploadListStudent: {mehod: 'POST', url: 'api/training/detail-users/upload'}
})

const services = {
    LoginService,
    ChangePassword,
    ProfileService,
    ImgService,
    PointingService,
    MonitorService,
    TeacherService,
    DepartmentSevice,
    AdminService
}
export default services
