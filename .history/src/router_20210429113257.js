import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Sale from './views/sale'
import Detail from './views/sale/details'
import Communication from './views/communication'
import Class from './views/class'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'index',
            redirect: '/index',
            meta:{}
        },
        {
            path:'/index',
            name:'home',
            component:Home,
            meta:{}
        },
        {
            path:'/sale',
            name:'sale',
            component:Sale,
            meta:{},
            children:[
                {
                    path:'/detail',
                    name:'detail',
                    component:Detail,
                    meta:{},
                }
            ]
        },
        {
            path:'/class',
            name:'class',
            component:Class,
            meta:{}
        },
        {
            path:'/communication',
            name:'communication',
            component:Communication,
            meta:{}
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{}
        }
    ]
})