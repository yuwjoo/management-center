const modules = require.context("./", false, /\.js$/);
const routerList = modules
  .keys()
  .filter((key) => key !== "./index.js")
  .map((key) => modules(key).default);
const handlerFlatRouter = (arr, parent) => {
  let list = [];
  arr.forEach((item) => {
    const children = item?.children || [];
    if (parent) {
      item.path = `${parent.path}/${item.path}`;
    }
    if (children.length > 0) {
      delete item.children;
      list.push(item, ...handlerFlatRouter(children, item));
    } else {
      list.push(item);
    }
  });
  return list;
};

export default handlerFlatRouter(routerList, null);
