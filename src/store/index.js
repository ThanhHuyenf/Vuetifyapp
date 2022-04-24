import Vue from 'vue'
import Vuex from 'vuex'

import jwt_decode from "jwt-decode";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tag: [],
        drawer: true,
        availableForMark: false
    },
    mutations: {
        GET_TAG(state, decoded) {
            state.tag = decoded
            return state.tag
        },
        SET_DRAWER(state){
            state.drawer = !state.drawer
        },
        GET_DRAWER(state){
            return state.drawer
        },
        GET_AVAILABLEFORMARK(state){
            return state.availableForMark
        },
        SET_AVAILABLEFORMARK(state){
            state.availableForMark = true
        },
        SET_UNAVAILABLEFORMARK(state){
            state.availableForMark = false
        }

    },
    actions: {
        getTag({commit}) {
            var token = localStorage.getItem("token");
            var decoded = jwt_decode(token);
            commit('GET_TAG', decoded)
        },
        getDrawer({commit}){
            commit('GET_DRAWER')
        }
    },
    modules: {}
})

