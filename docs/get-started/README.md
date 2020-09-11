# 快速上手

## 安装

参考 [安装](/install/) 章节

## 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*，*::before,*::after{ box-sizing: border-box }
```

IE 8 及以上浏览器支持此样式。

## 引入 living-ui
```js
import {Button} from 'living-ui'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```