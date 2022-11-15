/*
 * @Description: element-ui库
 * @Author: YH
 * @Date: 2022-11-14 22:13:13
 * @LastEditTime: 2022-11-15 18:04:38
 * @LastEditors: YH
 * @Reference: 
 */
import Vue from 'vue'
import { Button, Select, Header, Container, Aside, Main, Menu, SubMenu } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'mini' };

Vue.use(Button);
Vue.use(Select);
Vue.use(Header);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(SubMenu);