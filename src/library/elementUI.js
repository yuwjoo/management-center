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
import "@/assets/css/varElementUI.scss";

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
