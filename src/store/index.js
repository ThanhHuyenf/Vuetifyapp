import Vue from 'vue'
import Vuex from 'vuex'

import jwt_decode from "jwt-decode";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tag: [],
    },
    mutations: {
        GET_TAG(state, decoded) {
            state.tag = decoded
            return state.tag
        },
    },
    actions: {
        getTag({commit}) {
            var token = localStorage.getItem("token");
            var decoded = jwt_decode(token);

            commit('GET_TAG', decoded)
        },
    },
    modules: {}
})

