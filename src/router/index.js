import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/main'
        },
        {
            path:'/main',
            component:Main,
            children:[
                {
                    path:'/',
                    redirect:'/home'
                },
                {
                    path:'/home',
                    component:Home
                },
                {
                    path:'/user',
                    component:User
                }
            ]
        }
    ]
})