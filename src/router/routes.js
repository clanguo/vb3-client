import Home from "../views/Home";
import NotFound from "../views/404";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    name: "Blog",
    path: "/blog/:id",
    component: () => import(/* webpackChunkName: "blog" */"../views/Blog"),
  },
  {
    path: "/archive",
    component: () => import(/* webpackChunkName: "archive" */"../views/Archives"),
  },
  {
    name: "Tag",
    path: "/tag",
    component: () => import(/* webpackChunkName: "tag */"../views/Tag"),
  },
  {
    name: "BlogByTag",
    path: "/tag/:id",
    component: () => import(/* webpackChunkName: "tag" */"../views/Tag/BlogByTag"),
  },
  {
    name: "Categoty",
    path: "/category",
    component: () => import(/* webpackChunkName: "category" */"../views/Category"),
  },
  {
    name: "BlogByCategory",
    path: "/category/:id",
    component: () => import(/* webpackChunkName: "category" */"../views/Category/BlogByCategory"),
  },
  {
    path: "*",
    component: NotFound,
  },
];
