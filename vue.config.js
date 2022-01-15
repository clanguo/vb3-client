module.exports = {
  // devServer: {
  //   proxy: "http://localhost:3001/",
  // },
  productionSourceMap: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "左耳东水良的个人博客";
      return args;
    });
  },
};
