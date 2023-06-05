import Vue from "vue";
import {
  Button,
  Header,
  Container,
  Aside,
  Main,
  Empty,
  Drawer,
  Input,
  Select,
  Option,
  Pagination,
  Image,
  Tooltip,
  Progress,
  Badge,
  PageHeader
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
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Pagination);
Vue.use(Image);
Vue.use(Tooltip);
Vue.use(Progress);
Vue.use(Badge);
Vue.use(PageHeader);