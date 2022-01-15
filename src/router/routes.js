import Home from "../views/Home";
import Blog from "../views/Blog";
import Archive from "../views/Archives";
import NotFound from "../views/404";
import Tag from "../views/Tag";
import BlogByTag from "../views/Tag/BlogByTag";
import Category from "../views/Category";
import BlogByCategory from "../views/Category/BlogByCategory";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    name: "Blog",
    path: "/blog/:id",
    component: Blog,
  },
  {
    path: "/archive",
    component: Archive,
  },
  {
    name: "Tag",
    path: "/tag",
    component: Tag,
  },
  {
    name: "BlogByTag",
    path: "/tag/:id",
    component: BlogByTag,
  },
  {
    name: "Categoty",
    path: "/category",
    component: Category,
  },
  {
    name: "BlogByCategory",
    path: "/category/:id",
    component: BlogByCategory,
  },
  {
    path: "*",
    component: NotFound,
  },
];
