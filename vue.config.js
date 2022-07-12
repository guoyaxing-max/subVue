module.exports = {
  publicPath: "//localhost:20000/dist-customized-service/",
  devServer: {
    port: 20000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: "swgyx",
      libraryTarget: "umd",
    },
  },
};
