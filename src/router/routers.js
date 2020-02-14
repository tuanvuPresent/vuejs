import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home";
import User from "../views/User";
import Book from "../views/Book";
import EduBook from "../views/EduBook";
import HelloWorld from "../components/demo/HelloWorld";
import ButtonDemo from "../components/demo/ButtonDemo";
import ComicsBook from "../views/ComicsBook";
import ButtonSheetDemo from "../components/demo/ButtonSheetDemo";
import ButtonToggleDemo from "../components/demo/ButtonToggleDemo";
import CheckboxDemo from "../components/demo/CheckboxDemo";
import ChipsDemo from "../components/demo/ChipsDemo";
import ChoiceDemo from "../components/demo/ChoiceDemo";
import BadgesDemo from "../components/demo/BadgesDemo";
import DataIteratorDemo from "../components/demo/DataIteratorDemo";
import DatePicker from "../components/demo/DatePicker";
import DialogDemo from "../components/demo/DialogDemo";
import FormDemo from "../components/demo/FormDemo";
import IconsDemo from "../components/demo/IconsDemo";
import LayoutDemo from "../components/demo/LayoutDemo";
import ProgressCircularDemo from "../components/demo/ProgressCircularDemo";
import ProgressLinearDemo from "../components/demo/ProgressLinearDemo";
import SliderDemo from "../components/demo/SliderDemo";
import SnackBarDemo from "../components/demo/SnackBarDemo";
import ToolBarDemo from "../components/demo/ToolBarDemo";
import Carousels from "../components/demo/Carousels";
import Ratting from "../components/demo/Ratting";
import PageNotFound from "../components/demo/PageNotFound";
import GridDemo from "../components/demo/GridDemo";

Vue.use(VueRouter);
const routes = [
    {path: "*", component: PageNotFound},
    {path: '/', component: Home},
    {path: '/user', component: User},
    {path: '/book', component: Book},
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
];
const router = new VueRouter({
    mode: "history",
    routes
});
export default router;
