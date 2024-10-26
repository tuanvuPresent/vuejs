import VueRouter from 'vue-router';
import Vue from "vue";

import Home from "../views/Home.vue";
import User from "../views/User.vue";
import EduBook from "../views/EduBook.vue";
import HelloWorld from "../components/Demo/HelloWorld.vue";
import ButtonDemo from "../components/Demo/ButtonDemo.vue";
import ComicsBook from "../views/ComicsBook.vue";
import ButtonSheetDemo from "../components/Demo/ButtonSheetDemo.vue";
import ButtonToggleDemo from "../components/Demo/ButtonToggleDemo.vue";
import CheckboxDemo from "../components/Demo/CheckboxDemo.vue";
import ChipsDemo from "../components/Demo/ChipsDemo.vue";
import ChoiceDemo from "../components/Demo/ChoiceDemo.vue";
import BadgesDemo from "../components/Demo/BadgesDemo.vue";
import DataIteratorDemo from "../components/Demo/DataIteratorDemo.vue";
import DatePicker from "../components/Demo/DatePicker.vue";
import DialogDemo from "../components/Demo/DialogDemo.vue";
import FormDemo from "../components/Demo/FormDemo.vue";
import IconsDemo from "../components/Demo/IconsDemo.vue";
import LayoutDemo from "../components/Demo/LayoutDemo.vue";
import ProgressCircularDemo from "../components/Demo/ProgressCircularDemo.vue";
import ProgressLinearDemo from "../components/Demo/ProgressLinearDemo.vue";
import SliderDemo from "../components/Demo/SliderDemo.vue";
import SnackBarDemo from "../components/Demo/SnackBarDemo.vue";
import ToolBarDemo from "../components/Demo/ToolBarDemo.vue";
import Carousels from "../components/Demo/Carousels.vue";
import Ratting from "../components/Demo/Ratting.vue";
import PageNotFound from "../components/Demo/PageNotFound.vue";
import GridDemo from "../components/Demo/GridDemo.vue";
import NoneLayout from "../layout/NoneLayout.vue";
import LoginComponent from "../components/Authentication/LoginComponent.vue";
import Common from "../layout/CommonLayout.vue";
import AuthStore from "@/store/AuthStore";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Common,
    children: [
      {
        path: "",
        component: Home
      },
      {
        path: "home",
        component: Home
      },
      {
        path: "/user",
        component: User
      },
      {
        path: "/book/edu",
        component: EduBook
      },
      {
        path: "/book/comic",
        component: ComicsBook
      },
      {
        path: "/example/HelloWord",
        component: HelloWorld
      },
      {
        path: "/example/Buttons",
        component: ButtonDemo
      },
      {
        path: "/example/ButtonSheet",
        component: ButtonSheetDemo
      },
      {
        path: "/example/ButtonToggle",
        component: ButtonToggleDemo
      },
      {
        path: "/example/Checkbox",
        component: CheckboxDemo
      },
      {
        path: "/example/Chips",
        component: ChipsDemo
      },
      {
        path: "/example/Choice",
        component: ChoiceDemo
      },
      {
        path: "/example/Badges",
        component: BadgesDemo
      },
      {
        path: "/example/DataIterator",
        component: DataIteratorDemo
      },
      {
        path: "/example/DatePicker",
        component: DatePicker
      },
      {
        path: "/example/Dialog",
        component: DialogDemo
      },
      {
        path: "/example/Form",
        component: FormDemo
      },
      {
        path: "/example/Icon",
        component: IconsDemo
      },
      {
        path: "/example/Layout",
        component: LayoutDemo
      },
      {
        path: "/example/ProgressCircular",
        component: ProgressCircularDemo
      },
      {
        path: "/example/ProgressLinear",
        component: ProgressLinearDemo
      },
      {
        path: "/example/Slider",
        component: SliderDemo
      },
      {
        path: "/example/SnackBar",
        component: SnackBarDemo
      },
      {
        path: "/example/ToolBar",
        component: ToolBarDemo
      },
      {
        path: "/example/Carousels",
        component: Carousels
      },
      {
        path: "/example/Ratting",
        component: Ratting
      },
      {
        path: "/example/Grid",
        component: GridDemo
      }
    ]
  },
  {
    path: "/",
    component: NoneLayout,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "*",
        component: PageNotFound
      }
    ]
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
// router.beforeEach((to, from, next) => {
//   const token = AuthStore().token;
//   if (to.path !== "/login") {
//     if (token) {
//       next();
//     } else {
//       next("/login");
//     }
//   } else {
//     if (token) {
//       next("/");
//     } else {
//       next();
//     }
//   }
// });

export default router;
