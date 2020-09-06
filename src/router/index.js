import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Upload from '../views/Upload.vue'
import Results from '../views/Results.vue'
import {Auth} from 'aws-amplify';
Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/upload',
        name: 'Uploader',
        component: Upload,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/results',
        name: 'Results',
        component: Results,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeResolve((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        Auth.currentAuthenticatedUser().then(()=>{
            next();
        }).catch(() => {
            next({path: '/login'});
        });
    }
     next();
})

export default router
