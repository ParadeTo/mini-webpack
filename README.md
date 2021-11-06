### 关于源码的调试
- 新建debugger.js文件，文件名称可以自定义。引入node_modules/webpack/bin/webpack，使用debug模式运行debugger.js即可

### loaders目录
loaders目录里面都是各种手写loader，目前手写的 loader 有：
- babel-loader
- file-loader
- url-loader
- less-loader 对应的官方less-loader版本5.0.0
- css-loader 对应的官方css-loader版本5.2.7。其中css loader开发稍稍复杂，可以参考 [css loader原理指南](https://github.com/lizuncong/mini-webpack/blob/master/loaders/css-loader/readme.md)
- style-loader 对应的官方style-loader版本2.0.0
- 如果需要查看 loader 基础知识，可以查看[这篇文章](https://github.com/lizuncong/mini-webpack/blob/master/loaders/loader%E6%8C%87%E5%8D%97.md)
- 如果需要了解 plugin 和 loader 的区别，可以查看[这篇文章](https://github.com/lizuncong/Front-End-Development-Notes/blob/master/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB(%E5%85%A8%E9%9D%A2)/webpack/loader%E5%92%8Cplugin%E7%9A%84%E5%8C%BA%E5%88%AB.md)

### less loader
index.less
```less
@color: red;
@import './common.less';
body{
    background: @color;
    background: url('./2.jpg');
}
```
common.less
```less
img {
    height: 400px;
    overflow: hidden;
}
```
从打包后的源码可以看出，通过 @import xxx.less 引入的less文件，经过less loader打包，不会单独打包成一个独立的xxx.css module。但是通过 @import xxx.css引入的css文件，则会被打包成一个独立的xxx.css module

### plugins目录
plugins目录里面都是各种手写常见的webpack plugin，目前手写的plugin有：
- mini-css-extract-plugin 对应的官方版本0.9.0
