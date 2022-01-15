import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 网站主题颜色、文字大小等配置
import "./style/theme.css";
import "./style/reset.css";

// 网页canvans背景
import "./dom/canvas.bg";

// 设置moment为中文显示
import "./utils/momentLocal";

import "./filter";

import "./api";

// import Test from "./Test.vue";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
