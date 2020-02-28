# Button 按钮

提供单个按钮和组合形式的按钮，按钮可以添加图标，设置图标的位置等。

## 单个按钮

预览

<button-demos/>

代码

```html
<g-button>默认按钮</g-button>
<g-button icon="setting">设置</g-button>
<g-button icon="download">下载</g-button>
<g-button icon="thumbs-up">点赞</g-button>
<g-button :loading="true">登录中</g-button>
```

## 组合按钮

预览

<button-group-demos/>

```html
<g-button-group>
    <g-button icon="left" icon-position="left">上一页</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```