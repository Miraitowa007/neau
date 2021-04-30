import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        isLogin:false,
        userName:''
    },
    mutations:{
        getUserName(state,name){
            state.userName=name
        }
    },
    actions:{

    },
    getters:{
        getIsLogin(state){
            return state.isLogin
        },
        getUserName(state){
            return state.userName
        }
    }
})