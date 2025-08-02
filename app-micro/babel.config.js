module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["> 0.25%", "ie >= 11"], // Ensure ES5 compatibility
        },
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
};
