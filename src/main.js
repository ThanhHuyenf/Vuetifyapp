import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "axios";
import _ from 'lodash';
import moment from "moment/moment";
import services from "@/services";

export const eventbus = new Vue()

Vue.config.productionTip = false
Vue.prototype.$lodash = _;
Vue.prototype.$moment = moment;
Vue.prototype.$services = services;

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

const envElement = document.getElementById('env');
const env = JSON.parse(envElement.innerHTML);

Vue.prototype.$axios = instance;
Vue.url.options.root = env.apiEndpoint;



new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
