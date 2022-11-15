<!--
 * @Description: 菜单导航栏
 * @Author: YH
 * @Date: 2022-11-15 18:01:47
 * @LastEditTime: 2022-11-15 20:01:20
 * @LastEditors: YH
 * @Reference: 
-->
<script>
export default {
  props: {
    // 是否收起收起菜单
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuList: [], // 菜单列表
    };
  },
  created() {
    this.menuList = [
      { title: "首页", icon: "el-icon-s-home", name: "home" },
      {
        title: "图表",
        icon: "el-icon-pie-chart",
        name: "charts"
      },
    ];
  },
  render(h) {
    // 创建子菜单项
    const createMenuItem = (menu) => {
      const childrens = menu.children || [];
      const titleSlot = (
        <template slot="title">
          {menu.icon && <i class={menu.icon}></i>}
          <span>{menu.title}</span>
        </template>
      );
      return childrens.length ? (
        <el-submenu index={menu.name || menu.title}>
          {titleSlot}
          {childrens.map((children) => createMenuItem(children))}
        </el-submenu>
      ) : (
        <el-menu-item
          index={menu.name || menu.title}
          route={{ name: menu.name }}
        >
          {titleSlot}
        </el-menu-item>
      );
    };
    return (
      <el-menu
        default-active={this.$route.name}
        router
        collapse={this.isCollapse}
      >
        {this.menuList.map((menu) => createMenuItem(menu))}
      </el-menu>
    );
  },
};
</script>