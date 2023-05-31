import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/store/'),
    routes:[{
        path: "/",
        component: () => import ("../views/home.vue")
    },{
        path: "/log-in",
        component: () => import ("../views/log_in.vue")
    },{
        path: "/sign-up",
        component: () => import ("../views/sign_up.vue")
    },{
        path: "/start",
        component: () => import ("../views/start_view.vue"),
        children: [{
            path: "landing-page",
            component: () => import ("../views/products_view.vue")
        },{
            path: "cart",
            component: () => import("../views/cart_view.vue")
        }]
    }]
})
export default router