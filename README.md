# responsive-element
开箱即用的`element-ui`响应式模板，基于`vue-cli 3`搭建，使用`webpack 4`，更多配置见[配置参考](https://cli.vuejs.org/zh/config/)。

### 响应式思路
通过`pxtorem`将`element-ui`中的单位转为`rem`以配合响应式。

### 项目配置
- 安装依赖
```
npm install
```

#### 配置响应式
- 文件目录 `public/index.html`

```
  const designWidth = 1920 // 设计稿宽度 1920px
  const rem2px = 100 // rem基数 1rem = 100px 基数请与wepack中pxtorem的rootValue保持一致
```

#### 配置`pxtorem`
- 文件目录: `./vue.config.js`

```
  // 将element px转换为rem
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 100, // 基数请与 public/index.html 中的rem2px保持一致
            propList: ['*']
          })
        ]
      }
    }
  },
```

### :rocket:启动项目(开发环境)
```
npm run dev
```

### 编译项目（生成环境）
```
npm run build
```