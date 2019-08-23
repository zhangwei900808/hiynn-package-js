<p align="center"><a href="https://github.com/zhangwei900808/hiynn-package-js" target="_blank" rel="noopener noreferrer"><img width="100" src="http://cdn.awbeci.com/hiyun/WechatIMG222.png" alt="Vue logo"></a></p>

<div align="center">

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zhangwei900808/hiynn-package-js)
[![npm version](https://img.shields.io/npm/v/hiynn-design.svg)](https://www.npmjs.com/package/hiynn-package)
[![NPM downloads](http://img.shields.io/npm/dm/hiynn-design.svg?style=flat-square)](http://npmjs.com/hiynn-package)

</div>

<h1 align="center">Hiynn Package</h1>

## Install

```
yarn add hiynn-package
npm install hiynn-package
```

## Usage

```
import {Demo} from 'hiynn-package'
ReactDOM.render(<Demo />, mountNode);
```

And import style manually:

```
import 'hiynn-package/dist/hiynn-package.css';
```

### Note

文件夹 dist、es 和 lib 是通过 umd、es 和 commonjs 打包的，而 docs 是文档用的文件夹

1. umd -> dist
2. es -> es
3. commonjs -> lib
4. prod -> docs

### Learning

- [教程：使用 umd、commonjs 和 es 三种模式制作自己的 React 组件(库)](https://segmentfault.com/a/1190000020093455)
- [前端 20 个灵魂拷问 彻底搞明白你就是中级前端工程师 【中篇】](https://segmentfault.com/a/1190000020144498)
- [JS 模块化 CommonJS/AMD/CMD/UMD/ES6Module 的区别](https://www.cnblogs.com/weiqinl/p/9940549.html)
- [前端构建工具发展及其比较](https://juejin.im/entry/5ae5c8c9f265da0b9f400d8e)

### License

Hiynn Package is [MIT licensed](./LICENSE).

### Contact me

> zw900808@gmail.com
