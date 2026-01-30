---
title: 生成元素图示
---

点击「图示」页面，可以看到一张 A4 纸大小的画布，这可以为您的方案自动生成元素在键盘上布局的示意图。

# 设计布局

右上角的「布局」模块可以指定每行有哪些键。例如，您可以输入以下的标准 QWERTY 布局：

![](https://images.tansongchen.com/1769722392.png)

# 行、格、盒模型

以下内容需要您具备一些基础的 HTML 和 CSS 知识。

字根图的中间部分在 HTML 上实现为行、格、盒三层元素结构，可以表示为：

```html
<div id="keyboard">
    <div class="row">
        <div class="cell">
            <div class="box">
                ...
            </div>
            <div class="box">
                ...
            </div>
            ...
        </div>
        <div class="cell">
            ...
        </div>
        ...
    </div>
    <div class="row">
        ...
    </div>
    ...
</div>
```

其中，「行」表示一排按键，「格」表示一个按键，而「盒」表示按键上的一类内容。例如，一般的元素图示上会包括按键的字母本身以及字根、笔画、声母、韵母等元素，有些还会包括一级简码、键名字等。

# 设计行样式和格样式

您可以首先在「共享样式」模块中自定义行样式和格样式。

## 行默认样式

行默认是一个居中对齐的 Flex 容器。

```css
display: flex;
justify-content: center;
gap: 2mm;
```

## 格默认样式

格默认是一个具有固定宽高、有圆角边框的容器，且具有 `position: relative` 以便子元素采用 `position: absolute` 等布局。

```css
position: relative;
width: 25mm;
height: 45mm;
border: 0.3mm #d3d3d3 solid;
border-radius: 1mm;
```

# 设计格内容

在「格内容」模块中可以添加任意数量的盒，并指定其样式。盒分为四类：

- 「编码」：即键位的字符，如 `q`, `w`, `e` 等。
- 「编码（小写字母转大写）」：将键位的字符转成大写，非字母键不转换，如 `Q`, `W`, `E` 等。
- 「元素」：即在「决策」中所有首码为该键的元素。注意，元素可以使用正则表达式来进一步分类
- 「自定义」：可以输入以制表符分隔的文本，将按键映射到某些值，常常用于键名字、一级简码等。例如，以下是米十五笔的键名字：

```
q   气
w   五
...
```

以下是以米十五笔为例的图示截图。您可以查看[此链接](https://chaifen.app/mswb/diagram)以学习里面的样式的写法。

![](https://images.tansongchen.com/1769723475.png)
