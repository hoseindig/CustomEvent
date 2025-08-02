module.exports = {
  outputDir: "public",
  configureWebpack: {
    output: {
      library: "MyVueWidget",
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
  },
};
