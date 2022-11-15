/*
 * @Description: element-ui库
 * @Author: YH
 * @Date: 2022-11-14 22:13:13
 * @LastEditTime: 2022-11-15 21:21:44
 * @LastEditors: YH
 * @Reference: 
 */
import Vue from 'vue'
import { Button, Select, Header, Container, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem, Empty, Breadcrumb, BreadcrumbItem, Card } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'mini' };

Vue.use(Button);
Vue.use(Select);
Vue.use(Header);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Empty);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);