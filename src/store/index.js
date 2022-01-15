import Vue from 'vue'
import Vuex from 'vuex'

import jwt_decode from "jwt-decode";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tag: [{
            name: "",
            id: ""
        }],
        menu: [
            {text: 'Trang chủ', icon: 'mdi-home', role: ["Student", "Monitor", "Teacher", "Department", "Admin"]},
            {text: 'Sơ yếu lý lịch', icon: 'mdi-account', role: ["Student", "Monitor", "Teacher", "Department"]},
            {text: 'Chấm điểm rèn luyện', icon: 'mdi-pen', role: ["Student", "Monitor", "Teacher"]},
            {text: 'Xem điểm rèn luyện', icon: 'mdi-heart', role: ["Student", "Monitor",]},
            {text: 'Danh sách sinh viên', icon: 'mdi-account-group', role: ["Monitor", "Teacher",]},
            {text: 'Danh sách lớp', icon: 'mdi-format-list-numbered', role: ["Monitor", "Teacher", "Department"]},
            {text: 'Danh sách giảng viên', icon: 'mdi-account-multiple', role: ["Department"]},
            {text: 'Phiếu xét điểm rèn luyện', icon: 'mdi-file', role: ["Admin"]},
            {text: 'Danh sách khoa', icon: 'mdi-format-list-bulleted', role: ["Admin"]},
            {text: 'Quản lý thời gian', icon: 'mdi-clock', role: ["Admin"]},
        ]
    },
    mutations: {
        GET_TAG(state, decoded){
            state.tag = decoded
            console.log("this.tag: ", state.tag)
            return state.menu
        },
        GET_MENU(state, role) {
            state.menu = state.menu.filter(item => {
                return item.role.includes(role)
            })

            return state.menu
        }
    },
    actions: {
        getTag({commit}) {
            var token = localStorage.getItem("token");
            var decoded = jwt_decode(token);

            commit('GET_TAG', decoded)
        },
        getMenu({commit}) {
            var token = localStorage.getItem("token");
            var decoded = jwt_decode(token);

            commit('GET_MENU', decoded.role)
        }
    },
    modules: {}
})

