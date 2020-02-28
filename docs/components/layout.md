# Layout 布局

## 简单布局

预览

<layout-demos/>

代码

```html
<g-layout style="color: white;">
    <g-header class="header" style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-content class="content" style="height: 50px; background:deepskyblue;">
        content
    </g-content>
    <g-footer class="footer" style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```

## 内侧边栏

预览

<layout-demos-2/>

代码

```html
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
        header
    </g-header>
    <g-layout>
        <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
            sider
        </g-sider>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
        footer
    </g-footer>
</g-layout>
```

## 侧边栏

预览

<layout-demos-3/>

代码

```html
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-sider style=" background:#ddd; width:200px; color: black;">
        sider
    </g-sider>
    <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">
            header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
            content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
            footer
        </g-footer>
    </g-layout>
</g-layout>
```