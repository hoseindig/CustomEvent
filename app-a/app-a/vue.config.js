const path = require("path");

module.exports = {
  publicPath: "", // برای استفاده در embed
  configureWebpack: {
    output: {
      filename: "my-widget.js", // خروجی فقط یک فایل
      library: "MyWidget", // استفاده به صورت window.MyWidget
      libraryTarget: "umd", // سازگار با script و require و import
      globalObject: "this", // برای کار با Node/Browser
    },
  },
  transpileDependencies: true, // اطمینان از transpile کامل
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .use("babel-loader")
      .tap((options) => {
        options.presets = [
          [
            "@babel/preset-env",
            {
              targets: { ie: "11" }, // پشتیبانی از IE 11
              useBuiltIns: "entry",
              corejs: 3,
            },
          ],
        ];
        return options;
      });
  },
  filenameHashing: false, // ثابت ماندن نام فایل خروجی
  productionSourceMap: false, // حذف سورس‌مپ در خروجی نهایی
};
