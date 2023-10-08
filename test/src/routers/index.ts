import {h} from "vue";
import {createRouter, createWebHistory} from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import Sign from "../pages/Sign.vue";
import pinia from "../stores"
import loginStore from "../stores/loginStore.ts";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/sign",
        name: "Sign",
        component: Sign
    }
]

const router = createRouter (
    {
        history: createWebHistory() ,
        routes: routes
    }
);

export default router;