import Vue from "vue";
import {
  Button,
  Header,
  Container,
  Aside,
  Main,
  Empty,
  Card,
  Drawer,
  Input,
  Select,
  Option,
  Pagination
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
Vue.use(Empty);
Vue.use(Card);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Pagination);
