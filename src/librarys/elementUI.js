/*
 * @Description: element-ui库
 * @Author: YH
 * @Date: 2022-11-14 22:13:13
 * @LastEditTime: 2023-05-31 17:41:17
 * @LastEditors: YH
 * @Reference:
 */
import Vue from "vue";
import {
  Button,
  Select,
  Header,
  Container,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Empty,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Drawer,
} from "element-ui";
import "element-ui/lib/theme-chalk/display.css";
import "@/assets/css/variablesElementUI.scss";

Vue.prototype.$ELEMENT = { size: "mini" };

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Drawer);

Vue.use(Button);
Vue.use(Select);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Empty);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
