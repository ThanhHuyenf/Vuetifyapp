import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "axios";
import _ from 'lodash';
import moment from "moment/moment";

export const eventbus = new Vue()

Vue.config.productionTip = false
Vue.prototype.$lodash = _;
Vue.prototype.$moment = moment;

const instance = axios.create();
instance.interceptors.request.use(
    (config) => {
        const TOKEN = localStorage.getItem('token');
        // eslint-disable-next-line no-param-reassign
        config.headers.authorization = TOKEN ? `Bearer ${TOKEN}` : '';
        return config;
    },
    error => Promise.reject(error),
);

Vue.prototype.$axios = instance;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
