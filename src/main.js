import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "axios";
import _ from 'lodash';
import moment from "moment/moment";
import services from "@/services";
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

//set up for echart

// import {
//     CanvasRenderer
// } from 'echarts/renderers'
// import {
//     PieChart
// } from 'echarts/charts'
// import {
//     GridComponent,
//     TooltipComponent
// } from 'echarts/components'
//
// use([
//     CanvasRenderer,
//     PieChart,
//     GridComponent,
//     TooltipComponent
// ]);
// import 'echarts/lib/component/toolbox';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/chart/line';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/heatmap';
// import 'echarts/lib/chart/graph';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/effectScatter';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/calendar';
// import 'echarts/lib/component/visualMap';
// import 'echarts/lib/component/legend/ScrollableLegendModel';
// import 'echarts/lib/component/legend/ScrollableLegendView';
// import 'echarts/lib/component/legend/scrollableLegendAction';

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


Vue.component('v-chart',ECharts)



new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
