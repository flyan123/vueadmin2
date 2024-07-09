import Vue from "vue"
import VueRouter from 'vue-router'
import Layout from '../views/layout/layoutPage.vue'
import Login from '../views/login/loginPage.vue'

Vue.use(VueRouter)

const routes =[
    {
        path:'/',
        component:Layout
    },
    {
        path:'/login',
        name:'login',
        component:Login
    }
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router