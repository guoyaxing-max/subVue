module.exports = {
  publicPath: "/dist-customized-service/",
  devServer: {
    port: 20000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: "customized-module",
      libraryTarget: "umd",
    },
  },
};
