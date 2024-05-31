import {createRouter, createWebHashHistory, Router} from "vue-router";
import HomePage from "../components/HomePage.vue";

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: HomePage
    }]
})

export default router;