import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "axios";
import _ from 'lodash';
import moment from "moment/moment";
import services from "@/services";

//VueCroppie dung chinh sua anh
import VueCroppie from 'vue-croppie'
import 'croppie/croppie.css'

import {use} from "echarts/core";
import {PieChart} from "echarts/charts";
import {CanvasRenderer} from "echarts/renderers";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from "echarts/components";
import ECharts from 'vue-echarts'
use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent
]);
export const eventbus = new Vue()

Vue.config.productionTip = false
Vue.prototype.$lodash = _;
Vue.prototype.$moment = moment;
Vue.prototype.$services = services;

// Setting up for axios
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

//Set up vuecroppie
Vue.config.productionTip = false
Vue.use(VueCroppie)

Vue.component('v-chart',ECharts)




new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
