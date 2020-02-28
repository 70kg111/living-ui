# Tabs 标签页

## 使用方法

预览

<tabs-demos/>

代码

```javascript
data:{
    selected:'1'
}
```
```html
<g-tabs :selected.sync="selectedTab">
    <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="1">content1</g-tabs-pane>
        <g-tabs-pane name="2">content2</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```