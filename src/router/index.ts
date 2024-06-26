import {createRouter, createWebHashHistory, Router} from "vue-router";
import HomePage from "../components/HomePage.vue";

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: HomePage,
        children:[{
            path: '/some',
            name: 'some',
            component: () => import('../components/SomePage.vue')
        }]
    }, {
        path: '/login',
        name: 'login',
        component: () => import('../components/LoginPage.vue')
    }]
})

export default router;