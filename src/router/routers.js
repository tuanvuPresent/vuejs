import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home";
import User from "../views/User";
import Book from "../views/Book";
import EduBook from "../views/EduBook";
import ComicsBook from "../views/ComicsBook";

Vue.use(VueRouter);
const routes = [
    {path: '/', component: Home},
    {path: '/user', component: User},
    {path: '/book', component: Book},
    {path: '/book/edu', component: EduBook},
    {path: '/book/comic', component: ComicsBook},
];
const router = new VueRouter({
    routes
});
export default router;
