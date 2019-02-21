module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui", // 按需引入element-ui组件
        "styleLibraryName": "theme-chalk" // 默认主题
      }
    ]
  ]
}
