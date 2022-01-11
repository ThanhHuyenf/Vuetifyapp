import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const LoginService = Vue.resource('api/auth/login', {}, {
    query: {method: 'POST', url: 'api/auth/login'},
    forgotPassword : { method: 'POST', url: 'api/common/create-reset-password'},
    resetPassword : { method: 'POST', url: 'api/common/reset-password'}
})
const services = {
    LoginService
}
export default services
