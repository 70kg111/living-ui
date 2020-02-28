# Grid 网格

Grid - 网格，最多可以分为24小哥，可以设置 gutter（间隔）

::: tip
使用该组件推荐设置，示例已设置
:::

```css
* {box-sizing: border-box;}
```
## 使用方法

预览

<grid-demos/>

代码

```html
<g-row class="demoRow" gutter="10">
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
        <div class="demoCol">8</div>
    </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>
```
## 设置 gutter

预览

<grid-demos-2/>

代码

```html
<g-row class="demoRow" gutter="10">
     <g-col span="8">
         <div class="demoCol">8</div>
     </g-col>
     <g-col span="8">
         <div class="demoCol">8</div>
     </g-col>
     <g-col span="8">
         <div class="demoCol">8</div>
     </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
        <div class="demoCol">6</div>
    </g-col>
</g-row>
```