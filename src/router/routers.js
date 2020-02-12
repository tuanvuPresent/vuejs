import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home";
import User from "../views/User";
import Book from "../views/Book";

Vue.use(VueRouter);
const routes = [
    {path: '/', component: Home},
    {path: '/user', component: User},
    {path: '/book', component: Book},
];
const router = new VueRouter({
    routes
});
export default router;
