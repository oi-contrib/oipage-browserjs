# [@oipage/browser.js](https://github.com/oi-contrib/oipage-browserjs)
现代jQuery，一个更简单小巧的前端开发库

<p>
    <a href="https://zxl20070701.github.io/toolbox/#/npm-download?packages=@oipage/browser.js&interval=7">
        <img src="https://img.shields.io/npm/dm/@oipage/browser.js.svg" alt="downloads">
    </a>
    <a href="https://www.npmjs.com/package/@oipage/browser.js">
        <img src="https://img.shields.io/npm/v/@oipage/browser.js.svg" alt="npm">
    </a>
    <a href="https://github.com/oi-contrib/oipage-browserjs/issues">
        <img src="https://img.shields.io/github/issues/oi-contrib/oipage-browserjs" alt="issue">
    </a>
    <a href="https://github.com/oi-contrib/oipage-browserjs" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/oi-contrib/oipage-browserjs?style=social">
    </a>
    <a href="https://github.com/oi-contrib/oipage-browserjs">
        <img src="https://img.shields.io/github/forks/oi-contrib/oipage-browserjs" alt="forks">
    </a>
     <a href="https://gitee.com/oi-contrib/oipage-browserjs" target='_blank'>
        <img alt="Gitee repo stars" src="https://gitee.com/oi-contrib/oipage-browserjs/badge/star.svg">
    </a>
    <a href="https://gitee.com/oi-contrib/oipage-browserjs">
        <img src="https://gitee.com/oi-contrib/oipage-browserjs/badge/fork.svg" alt="forks">
    </a>
</p>

<img src="https://nodei.co/npm/@oipage/browser.js.png?downloads=true&amp;downloadRank=true&amp;stars=true" alt="NPM">

## 如何使用？

```
npm install --save @oipage/browser.js
```

然后直接使用：

```js
import browserjs from "@oipage/browser.js"
let bjs = browserjs(selector, context)
```

其中，selector表示选择器，可选类型包括：

- 字符串，和querySelectorAll参数一致
- browserjs对象
- DOM节点
- 数组，内容为上述任一类型（含数组）

context表示查找上下文，可选，和selector类型一致。

### 对象方法

需要通过browserjs对象bjs调用的方法，具体如下：

- [样式操作](./docs/style.md)
- [属性操作](./docs/attr.md)
- [元素操作](./docs/dom.md)
- [事件](./docs/event.md)

### 类方法

直接通过browserjs调用的方法，具体如下：

- [onReady](./docs/onReady.md)

此外，你可以通过`browserjs.extend({})`和`bjs.extend({})`来进行扩展。

## 版权

MIT License

Copyright (c) [zxl20070701](https://zxl20070701.github.io/notebook/home.html) 走一步，再走一步