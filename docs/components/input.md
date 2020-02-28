# Input 输入框

## 常用例子

预览

<input-demos/>

代码

```html
<g-input value="中文"></g-input>
<g-input value="中文" readonly></g-input>
<g-input value="中文" disabled></g-input>
<g-input value="中文" error="错误"></g-input>
```

## 双向绑定

预览

<input-demos-2/>

代码

```html
data:{
    value:'1'
}
```
```html
<g-input @change="inputChange" v-model="message"></g-input>
<div>
    value:{{message}}
</div>
```