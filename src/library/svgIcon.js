import Vue from "vue";
import SvgIcon from "@/components/SvgIcon"; // svg图标组件

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("../assets/icons", false, /\.svg$/);
requireAll(req);

Vue.component(SvgIcon.name, SvgIcon);
