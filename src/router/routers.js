import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home";
import User from "../views/User";
import EduBook from "../views/EduBook";
import HelloWorld from "../components/Demo/HelloWorld";
import ButtonDemo from "../components/Demo/ButtonDemo";
import ComicsBook from "../views/ComicsBook";
import ButtonSheetDemo from "../components/Demo/ButtonSheetDemo";
import ButtonToggleDemo from "../components/Demo/ButtonToggleDemo";
import CheckboxDemo from "../components/Demo/CheckboxDemo";
import ChipsDemo from "../components/Demo/ChipsDemo";
import ChoiceDemo from "../components/Demo/ChoiceDemo";
import BadgesDemo from "../components/Demo/BadgesDemo";
import DataIteratorDemo from "../components/Demo/DataIteratorDemo";
import DatePicker from "../components/Demo/DatePicker";
import DialogDemo from "../components/Demo/DialogDemo";
import FormDemo from "../components/Demo/FormDemo";
import IconsDemo from "../components/Demo/IconsDemo";
import LayoutDemo from "../components/Demo/LayoutDemo";
import ProgressCircularDemo from "../components/Demo/ProgressCircularDemo";
import ProgressLinearDemo from "../components/Demo/ProgressLinearDemo";
import SliderDemo from "../components/Demo/SliderDemo";
import SnackBarDemo from "../components/Demo/SnackBarDemo";
import ToolBarDemo from "../components/Demo/ToolBarDemo";
import Carousels from "../components/Demo/Carousels";
import Ratting from "../components/Demo/Ratting";
import PageNotFound from "../components/Demo/PageNotFound";
import GridDemo from "../components/Demo/GridDemo";
import LoginComponent from "../components/Authentication/LoginComponent";

Vue.use(VueRouter);
const routes = [
    {path: "*", component: PageNotFound},
    {path: '/', component: Home, name: 'home'},
    {path: '/user', component: User},
    {path: '/book/edu', component: EduBook},
    {path: '/book/comic', component: ComicsBook},
    {path: '/example/HelloWord', component: HelloWorld},
    {path: '/example/Buttons', component: ButtonDemo},
    {path: '/example/ButtonSheet', component: ButtonSheetDemo},
    {path: '/example/ButtonToggle', component: ButtonToggleDemo},
    {path: '/example/Checkbox', component: CheckboxDemo},
    {path: '/example/Chips', component: ChipsDemo},
    {path: '/example/Choice', component: ChoiceDemo},
    {path: '/example/Badges', component: BadgesDemo},
    {path: '/example/DataIterator', component: DataIteratorDemo},
    {path: '/example/DatePicker', component: DatePicker},
    {path: '/example/Dialog', component: DialogDemo},
    {path: '/example/Form', component: FormDemo},
    {path: '/example/Icon', component: IconsDemo},
    {path: '/example/Layout', component: LayoutDemo},
    {path: '/example/ProgressCircular', component: ProgressCircularDemo},
    {path: '/example/ProgressLinear', component: ProgressLinearDemo},
    {path: '/example/Slider', component: SliderDemo},
    {path: '/example/SnackBar', component: SnackBarDemo},
    {path: '/example/ToolBar', component: ToolBarDemo},
    {path: '/example/Carousels', component: Carousels},
    {path: '/example/Ratting', component: Ratting},
    {path: '/example/Grid', component: GridDemo},
    {path: '/login', component: LoginComponent, name: 'login'},
];
const router = new VueRouter({
    mode: "history",
    routes
});
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    console.log('token: ' + token)
    if (to.path !== '/login') {
        if (token) {
            next();
        } else {
            next('/login');
        }
    } else {
        if (token) {
            next('/')
        } else {
            next()
        }
    }
});

export default router;
