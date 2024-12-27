# CSS
- https://www.bilibili.com/video/BV1hP411679m/?p=10&spm_id_from=pageDriver&vd_source=1508b9a92b58beae7f2da553b09aff88
- 文档参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS
- 文档参考：https://www.w3school.com.cn/cssref/index.asp


<style>
    showpane {
        display: block;
        border: 1px dashed 	#778899;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 50px;
    }
</style>

# 概述
- CSS也叫`层叠样式表`
- 用来解决样式控制，与信息标签耦合在一起的问题


# 选择器

## 类型选择器
- **也叫`标签选择器`、`元素选择器`**
- 用来选择一个标签的

```html
<style>
    div {
        border: 1px solid black;
    }
    span {
        color: red;
    }
</style>

<div><span>被选中了</span><em>没有被选中</em></div>
```

<showpane>
<style>
    div-2409281414 {
        border: 1px solid black;
    }
    span-2409281414 {
        color: red;
    }
</style>
<div-2409281414><span-2409281414>被选中了</span-2409281414><em>没有被选中</em></div-2409281414>
</showpane>




## 类选择器
- **可以选中我们自定义的`class`的标签**

```html
<style>
    .mydiv {
        border: 1px solid red;
    }
    .myfont {
        font-weight: bold;
        color: blue;
    }
</style>
<div class="mydiv">我是块内的<span class="myfont">文字</span></div>
<div>我是块内的<span>文字</span></div>
```
<showpane>
<style>
    .mydiv-2409281418 {
        border: 1px solid red;
    }
    .myfont-2409281418 {
        font-weight: bold;
        color: blue;
    }
</style>
<div class="mydiv-2409281418">我是块内的<span class="myfont-2409281418">文字</span></div>
<div>我是块内的<span>文字</span></div>
</showpane>


## ID选择器
- 通过标签的`id`属性选中

```html
<style>
    #myid-1 {
        color: red;
    }
    #myid-2 {
        font-weight: bold;
        background-color: yellow;
    }
</style>
<span id="myid-1">我是id1</span><span id="myid-2">我是id2</span>
```
<showpane>
<style>
    #myid-1-2409281422 {
        color: red;
    }
    #myid-2-2409281422 {
        font-weight: bold;
        background-color: yellow;
    }
</style>
<span id="myid-1-2409281422">我是id1</span><span id="myid-2-2409281422">我是id2</span>
</showpane>


## 全局选择器
- 选中全部元素

```html
<style>
    * {
        color: red;
    }
</style>
<p>这是第一段文字</p>
<span>我是行内的文字</span>
```
<showpane>
<p style="color: red">这是第一段文字</p>
<span style="color: red">我是行内的文字</span>
</showpane>


## 属性选择器
https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors

1. 选中任何使用了**该属性**的**该标签**`div[class]`
2. 选中任何使用了**该属性**，并且**值为给定值**的**该标签**`div[class="myc"]`
3. 选中任何使用了**该属性**，并且**值包含给定值**的**该标签**`div[class~="a"]`
4. 选中任何使用了**该属性**，并且**值有以给定值开头马上接连字符`-`**的/**等于**的**该标签**`div[class|="b"]`

```html
<style>
    div[class] {
        border: 1px solid black;
    }
    div[class="myc"] {
        color: red;
    }
    div[class~="a"] {
        color: blue;
    }
    div[class|="b"] {
        color: pink;
    }
</style>
<div class="c">第1行</div>
<div class="myc">第2行</div>
<div class="b c a">第3行</div>
<div class="b-aaaa">第4行</div>
```
<showpane>
<style>
    div[class-a] {
        border: 1px solid black;
    }
    div[class-a="myc"] {
        color: red;
    }
    div[class-a~="a"] {
        color: blue;
    }
    div[class-a|="b"] {
        color: pink;
    }
</style>
<div class-a="c">第1行</div>
<div class-a="myc">第2行</div>
<div class-a="b c a">第3行</div>
<div class-a="b-aaaa">第4行</div>
</showpane>

5. 选中任何使用了**该属性**，并且**属性值有以给定值开头**的**该标签**`div[class^="h"]`
6. 选中任何使用了**该属性**，并且**属性值有以给定值结尾**的**该标签**`div[class$="t"]`
7. 选中任何使用了**该属性**，并且**属性值包含给定值**的**该标签**`div[class*="anda"]`

```html
<style>
    div[class^="h"] {
        border: 1px solid black;
    }
    div[class$="t"] {
        color: red;
    }
    div[class*="anda"] {
        color: blue;
    }
</style>
<div class="happy">第1行</div>
<div class="test">第2行</div>
<div class="abandon">第3行</div>
```
<showpane>
<style>
    div[class-b^="h"] {
        border: 1px solid black;
    }
    div[class-b$="t"] {
        color: red;
    }
    div[class-b*="and"] {
        color: blue;
    }
</style>
<div class-b="happy">第1行</div>
<div class-b="test">第2行</div>
<div class-b="abandon">第3行</div>
</showpane>


8. 忽略大小写匹配`div[class="abcd" i]`

```html
<style>
    div[class~="abcd"] {
        color: blue;
    }
    div[class~="abcd" i] {
        color: red;
    }
    div[name^="h" i] {
        color: green;
    }
</style>
<div class="abcD">第1行</div>
<div class="Abcd">第2行</div>
<div name="happy">第3行</div>
```
<showpane>
<style>
    div[class-c~="abcd"] {
        color: blue;
    }
    div[class-c~="abcd" i] {
        color: red;
    }
    div[name-c^="h" i] {
        color: green;
    }
</style>
<div class-c="abcD">第1行</div>
<div class-c="Abcd">第2行</div>
<div name-c="happy">第3行</div>
</showpane>


## 伪类选择器
https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%E5%8F%82%E8%80%83%E8%8A%82

- 用来**选择特定状态的元素**（比如处于嵌套的第一个元素、a标签的点击后）

```html
<style>
    span:first-child {
        color: red;
    }
    a:link {
        color: black;
    }
    a:hover {
        color: red;
    }
    a:hover::after {
        /* 伪元素 */
        content: "（快点我！！！）";
    }
    a:active {
        color: blue;
    }
    a:active::before {
        /* 伪元素 */
        content: "（不要松手！！）";
    }
    a:visited {
        color: green;
    }
</style>
<div>
    <!-- first-child -->
    <span>第1</span>
    <span>第2</span>
    <span>第3</span>
</div>
<!-- 非child -->
<span>第1</span>
<span>第2</span>
<span>第3</span>
<hr>
<a href="https://www.baidu.com">去百度</a>
```

<showpane>
<style>
    span-2409281511:first-child {
        color: red;
    }
    a-2409281511:link {
        color: black;
    }
    a-2409281511:hover {
        color: red;
    }
    a-2409281511:hover::after {
        /* 伪元素 */
        content: "（快点我！！！）";
    }
    a-2409281511:active {
        color: blue;
    }
    a-2409281511:active::before {
        /* 伪元素 */
        content: "（不要松手！！）";
    }
    a-2409281511:visited {
        color: green;
    }
</style>
<div>
    <!-- first-child -->
    <span-2409281511>第1</span-2409281511>
    <span-2409281511>第2</span-2409281511>
    <span-2409281511>第3</span-2409281511>
</div>
<!-- 非child -->
<span-2409281512 style="display:inline-block">第1</span-2409281512>
<span-2409281511 style="display:inline-block">第2</span-2409281511>
<span-2409281511 style="display:inline-block">第3</span-2409281511>
<hr>
<a-2409281511 href="https://www.baidu.com">去百度</a-2409281511>
</showpane>


## 关系选择器

### 交集
- 就是两个选择条件同时满足
- 标签的放在前面，类选择放在后面

```html
<style>
    /* 选中同时满足p标签带有name属性 && class~="tag" */
    p[name].tag {
        font-weight: bold;
    }
</style>
<p name="pname" class="tag abbbbb">你好世界</p>
<p name="pname">你好世界</p>
```
<showpane>
<style>
    /* 选中同时满足p标签带有name属性 && class~="tag" */
    p-2409281521[name].tag-2409281521 {
        font-weight: bold;
    }
</style>
<p-2409281521 name="pname" class="tag-2409281521 abbbbb">你好世界</p-2409281521><br>
<p-2409281521 name="pname">你好世界</p-2409281521>
</showpane>


### 并集
- 就是选中多个条件满足的元素
- 就是`,`符号

```html
<style>
    /* 选中同时满足p标签带有name属性 || class~="tag" */
    p[name="pname"],
    .tag {
        font-weight: bold;
    }
</style>
<p name="pname">你好世界</p>
<p class="tag">你好世界</p>
```
<showpane>
<style>
    /* 选中同时满足p标签带有name属性 || class~="tag" */
    p[name="pname-2409281524"],
    .tag-2409281524 {
        font-weight: bold;
    }
</style>
<p name="pname-2409281524">你好世界</p>
<p class="tag-2409281524">你好世界</p>
</showpane>

### 后代选择器
- 选中一个标签以后的满足元素`ul li{}`选中所有ul里面的li

```html
<style>
    ul li {
        color: red;
    }
</style>
<ul>
    <li>第1</li>
    <li>第2</li>
    <li>第3</li>
    <ol>
        <li>这是又嵌入了</li>
    </ol>
</ul>
```
<showpane>
<style>
    ul-2409281529 li {
        color: red;
    }
</style>
<ul-2409281529>
    <li>第1</li>
    <li>第2</li>
    <li>第3</li>
    <ol>
        <li>这是又嵌入了</li>
    </ol>
</ul-2409281529>
</showpane>


### 子代选择器
- 选中一个标签的子代中满足元素`ul>li{}`选中所有ul里面的第一层子代li

```html
<style>
    ul>li {
        color: red;
    }
</style>
<ul>
    <li>第1</li>
    <li>第2</li>
    <li>第3</li>
    <ol>
        <li>这是又嵌入了</li>
    </ol>
</ul>
```
<showpane>
<style>
    ul-2409281531>li {
        color: red;
    }
</style>
<ul-2409281531>
    <li>第1</li>
    <li>第2</li>
    <li>第3</li>
    <ol>
        <li>这是又嵌入了</li>
    </ol>
</ul-2409281531>
</showpane>


### 兄弟选择器
- **注意：选择的是兄弟，不是自己！**

**1、仅`直接向下相邻`的兄弟**
```html
<style>
    h1+p {
        color: red;
    }
</style>

<p>第0</p>
<h1>大标题</h1>
<p>第一</p>
<p>第二</p>
<p>第三</p>
```
<showpane>
<style>
    h1+p-2409281539 {
        color: red;
    }
</style>

<p-2409281539>第0</p-2409281539>
<h1>大标题</h1>
<p-2409281539>第一</p-2409281539><br>
<p-2409281539>第二</p-2409281539><br>
<p-2409281539>第三</p-2409281539>
</showpane>


**1、`所有向下相邻`的兄弟**
```html
<style>
    h1~p {
        color: red;
    }
</style>

<p>第0</p>
<h1>大标题</h1>
<p>第一</p>
<p>第二</p>
<div><p>内嵌的没选中</p></div>
<p>第三</p>
```
<showpane>
<style>
    h1~p-2409281540 {
        color: red;
    }
</style>

<p-2409281540>第0</p-2409281540>
<h1>大标题</h1>
<p-2409281540>第一</p-2409281540><br>
<p-2409281540>第二</p-2409281540><br>
<div><p-2409281540>内嵌的没选中</p-2409281540></div>
<p-2409281540>第三</p-2409281540>
</showpane>


# 引用样式

## 行内样式
- 直接将样式写在标签上
- 优先级最高
- 但是耦合度很高，无法复用样式
```html
<p style="color: red;">你好世界</p>
```



## 内部样式
- 将样式表，写在页面的`<style>`标签内，通过选择器对指定的标签赋予样式
- 可以服用样式，但是只能在本页面使用
```html
<style>
    p {
        color: red;
    }
    .tag {
        font-weight: bold;
    }
</style>
```


## 外部样式
- 将样式写在外部文件`xxx.css`，通过HTML的`<link>`标签引入该样式表
- **加载页面时，根据从上到下的代码顺序，将外部样式的全部内容，插入到`<link>`的位置**

```css
/* css/styles.css */
p {
    color: red;
}
```
```html
<head>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

</body>
```


# 样式作用优先级
- **`作用范围越小，优先级越高！！！`**
- **`同级别，后面覆盖前面`**

## 强制优先
**带有`!important`的样式，是最优先的，比行内样式还优先**
```css
p {
    color: red !important;
}
```

## 根据引用方式
**`行内样式` > `内部样式` + `外部样式`**

## 根据选择器类型
**`（!important > 行内样式 > ）ID选择器` > `属性选择器` & `伪类选择器` > `类选择器` > `类型/标签选择器`**


## 根据文档顺序
**同一级选择器，根据从上至下顺序，`越下面，优先级越高（后面覆盖前面）`**

## 继承的样式
**部分父标签的样式，会被子标签继承，但是`子标签本身的优先级 > 继承的样式`**

## 记分制优先级
https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#%E4%BC%98%E5%85%88%E7%BA%A7_2

- **分数越高，优先级越高**
- 分数的计算，分为`百位 - 十位 - 个位`
  - 包含ID选择器：百位+1
  - 包含类选择器、属性选择器、伪类选择器：十位+1
  - 包含元素、伪元素选择器：个位+1


# 常用样式


## background-color背景颜色
**值**
1. `预设样式`：直接输入英文单词即可
2. `rgb(0-255)`：（红,黄,蓝）每一个值都是0-255，**值越大越亮，值越小越黑**
3. `十六进制`： 就是将rgb的三项十进制转换为十六进制，连在一起`rgb(255,255,255) = #FFFFFF`、`rgb(0,0,0) = #000000`

```css
p {
    background-color: red;
}
p {
    background-color: rgb(255, 0, 0);
}
p {
    background-color: #FF0000;
}
```
<showpane>
<style>
    #id-2309282005 {
        background-color: #FF0000;
    }
</style>
<p id="id-2309282005">你好世界</p>
</showpane>

## font-family字体族
- 可以跟随多个值，当前面的无法被操作系统解析，会往后尝试
```css
p {
    font-family: "楷体", "黑体", "微软雅黑";
}
```
<showpane>
<style>
    #id-2309282004 {
        font-family: "楷体", "黑体", "微软雅黑";
    }
</style>
<p id="id-2309282004">你好世界</p>
</showpane>

## font-size字号
https://www.w3school.com.cn/cssref/pr_font_font-size.asp#CSS%E8%AF%AD%E6%B3%95

**值**
1. `预设值`：`xx-small`、`x-small`、`small`、`medium`、`large`、`x-large`、`xx-large`预设尺寸
2. `像素值`：`100px`绝对值100像素
3. `相对尺寸`：`smaller`比父类小一点，`larger`比父类大一点
4. `百分比`：相对于父类的字体大小的百分值`80%`
5. `继承父类`：`inherit`

```html
<style>
    p {
        /* font-size: 100px; */
        font-size: larger;
    }
    span {
        font-size: smaller;
    }
    em {
        font-size: 200%;
    }
</style>
<p>你好
    <span>世界</span>
    <em>哈喽</em>
</p>
```
<showpane>
<style>
    p.c-2309282006 {
        /* font-size: 100px; */
        font-size: larger;
    }
    span.c-2309282006 {
        font-size: smaller;
    }
    em.c-2309282006 {
        font-size: 200%;
    }
</style>
<p class="c-2309282006">你好
    <span class="c-2309282006">世界</span>
    <em class="c-2309282006">哈喽</em>
</p>
</showpane>


## font-style:italic字体倾斜

```css
p {
    font-style: italic;
}
```
<showpane>
<style>
    p.c-2309282007 {
        font-style: italic;
    }
</style>
<p class="c-2309282007">你好世界</p>
</showpane>

## font混合文本样式
- `font: 其他字体样式 字体大小 字体族`

```css
p {
    font: bold italic 80% "微软雅黑";
}
```
<showpane>
<style>
p.c-2309282008 {
    font: bold italic 80% "微软雅黑";
}    
</style>
<p class="c-2309282008">你好世界</p>
</showpane>


## color文本颜色
```css
p {
    color: red;
}
```
<showpane>
<style>
p.c-2309282009 {
    color: red;
}    
</style>
<p class="c-2309282009">你好世界</p>
</showpane>

## letter-spacing字符之间间距
```css
p {
    letter-spacing: 10px;
}
```
<showpane>
<style>
p.c-2309282010 {
    letter-spacing: 10px;
}    
</style>
<p class="c-2309282010">你好世界</p>
<p class="c-2309282010">HELLO</p>
</showpane>



## word-spacing单词间距
```css
p {
    letter-spacing: 20px;
}
<p>你好 世界</p>
<p>HELLO WORLD</p>
```
<showpane>
<style>
p.c-2309282011 {
    word-spacing: 20px;
}    
</style>
<p class="c-2309282011">你好 世界</p>
<p class="c-2309282011">HELLO WORLD</p>
</showpane>


## text-decoration-line文本划线
https://www.w3school.com.cn/cssref/pr_text-decoration-line.asp

```css
p {
    /* 下划线 */
    /* text-decoration-line: underline; */
    /* 中划线 */
    text-decoration-line: line-through;
}
```
<showpane>
<p style="text-decoration-line: underline">你好 世界</p>
<p style="text-decoration-line: line-through;">HELLO WORLD</p>
</showpane>


## text-indent首行缩进
- 缩进的宽度，与`font-size`有关

```css
p {
    text-indent: 40px;
    font-size: 20px;
}
```
<showpane>
<p style="text-indent: 40px;font-size: 20px;">你好世界，你好世界，你好世界，你好世界，你好世界，你好世界，你好世界，你好世界！</p>
</showpane>


## text-align文本水平对齐
```css
p {
    /* text-align: left; */
    /* text-align: center; */
    text-align: right;
}
```
<showpane>
<p style="text-align:left">你好世界</p>
<p style="text-align:center">你好世界</p>
<p style="text-align:right">你好世界</p>
</showpane>

## line-height行高
```css
p {
    line-height: 40px;
}
```
<showpane>
<p style="line-height: 40px">你好世界，你好世界，你好世界，你好世界，你好世界，你好世界，你好世界，你好世界！</p>
</showpane>


## list-style-type列表标记样式
https://www.w3school.com.cn/cssref/pr_list-style-type.asp
- 属性值请查看网址

```css
ol {
    /* list-style-type: decimal; */
    list-style-type: lower-roman;
}
```
<showpane>
<ol style="list-style-type: decimal;">
<li>第1</li>
<li>第2</li>
<li>第3</li>
</ol>
<ol style="list-style-type: lower-roman;">
<li>第1</li>
<li>第2</li>
<li>第3</li>
</ol>
</showpane>

## border-width边框厚度
https://www.w3school.com.cn/cssref/pr_border-width.asp
```css
div {
    border-width: 1px;
}
```

## border-color边框颜色
https://www.w3school.com.cn/cssref/pr_border-color.asp
```css
div {
    border-color: red;
}
```

## border-style边框样式
https://www.w3school.com.cn/cssref/pr_border-style.asp
```css
div {
    border-style: dotted;
}
```

## border混合边框样式
https://www.w3school.com.cn/cssref/pr_border.asp
```css
div {
    border: 1px dotted red;
}
```
<showpane>
<div style="border: 1px dotted red">你好世界</div>
</showpane>


## 内外边距
- `padding-top/right/bottom/left: 10px`内边距
- `margin-top/right/bottom/left: 10px`外边距

```html
<div style="border: 1px solid red;">
    <div style="border: 1px solid green; 
            padding: 10px 20px 30px 40px; 
            margin: 10px 20px 30px 40px">
        <span style="border: 1px solid blue;">你好</span>
    </div>
</div>
```
<showpane>
<div style="border: 1px solid red;">
    <div style="border: 1px solid green; padding: 10px 20px 30px 40px; margin: 10px 20px 30px 40px"><span style="border: 1px solid blue;">你好</span></div>
</div>
</showpane>


## `display`显示模式
https://www.w3school.com.cn/cssref/pr_class_display.asp
- 可以调整元素显示模式：块级元素、行内元素、行内块级元素、不显示

```html
<div style="border: 1px solid red">
    <span style="display: none;border: 1px solid blue;">第1</span>
    <span style="display: block;border: 1px solid blue;">第2</span>
    <!-- 行内块级元素，可以设置高度、宽度 -->
    <span style="display: inline-block;height: 50px;width: 100px;border: 1px solid blue;">第3</span>
    <!-- 行内元素，无法设置高度、宽度 -->
    <span style="display: inline;height: 50px;width: 100px;border: 1px solid blue;">第4</span>
</div>
```
<showpane>
<div style="border: 1px solid red">
    <span style="display: none;border: 1px solid blue;">第1</span>
    <span style="display: block;border: 1px solid blue;">第2</span>
    <span style="display: inline-block;height: 50px;width: 100px;border: 1px solid blue;">第3</span>
    <span style="display: inline;height: 50px;width: 100px;border: 1px solid blue;">第4</span>
</div>
</showpane>


## `float`浮动
1. 浮动可以设置`左`和`右`浮动
2. 浮动默认向上浮动
3. 浮动效果**会被前一个块元素挡住，不会继续上浮**
4. 向左和向右浮动，**只会欺负,行内元素/行内块级元素**，会往设置的浮动方向，**将行内非浮动元素，挤到后面**
5. **带有float的块级元素，似乎失去了块级元素特性，看起来像行内元素**

```html
<span>行内元素0</span>
<h2 style="border: 1px solid black">不会挤占块元素</h2>
<span>行内元素1</span>
<p style="float: left; border: 1px solid red;">浮动块元素1</p>
<span>行内元素2</span>
<p style="float: left; border: 1px solid blue;">浮动块元素2</p>
```
<showpane>
<span>行内元素0</span>
<h2 style="border: 1px solid black">不会挤占块元素</h2>
<span>行内元素1</span>
<p style="float: left; border: 1px solid red;">浮动块元素1</p>
<span>行内元素2</span>
<p style="float: left; border: 1px solid blue;">浮动块元素2</p>
</showpane>


## `position`定位
1. `position: static;`**静止定位**：是元素的默认定位方式
2. `position: relative;`**相对定位**：相对于元素原来应该显示的位置，进行`left`和`top`或者`bottom`和`right`偏移（偏移的结果不会影响别的元素，元素排列会按照原来的位置排）


```html
<style>
    #one {
        position: relative;
        left: 40px;
        top: 30px;
        border: 1px solid red;
    }
</style>
<div style="border: 1px solid black;">
    <p id="one">第一个</p>
    <p style="border: 1px solid blue">第二个</p>
</div>
```
<showpane>
<style>
#one-2409291505 {
    position: relative;
    left: 40px;
    top: 30px;
    border: 1px solid red;
}
</style>
<div style="border: 1px solid black;">
    <p id="one-2409291505">第一个</p>
    <p style="border: 1px solid blue">第二个</p>
</div>
</showpane>

3. `position: absolute;`**绝对定位**：
  - 如果父元素的定位是非`static`（有定位），那就是对于父元素的绝对定位
  - 如果父元素的定位是`static`（无定位），那就是对于再上一层的有定位元素的位置，直到body
  - **采用绝对定位后，元素不占用原来的位置，会覆盖到别的元素上**


```html
<style>
    #two {
        position: absolute;
        left: 5px;
        top: 0px;
        border: 1px solid red;
        margin: 0;
    }
</style>
<!-- 最外层：相对定位 -->
<div style="border: 2px solid black; width: 200px;position: relative;">
    <!-- 直接父元素：无定位 -->
    <div style="border: 2px solid pink; margin: 10px; position: static;">
        <p>第一个</p>
        <!-- 采用绝对定位 -->
        <p id="two">第二个</p>
        <p>第三个</p>
    </div>
</div>
```
<showpane>
<style>
    #two-2409291505 {
    position: absolute;
    left: 5px;
    top: 0px;
    border: 1px solid red;
    margin: 0;
    }
</style>
<div style="border: 2px solid black; width: 200px;position: relative;">
    <div style="border: 2px solid pink; margin: 10px; position: static;">
        <p>第一个</p>
        <p id="two-2409291505">第二个</p>
        <p>第三个</p>
    </div>
</div>
</showpane>

4. `position: fixed;`**固定定位**：相对于视窗的定位方式

```html
<p style="position: fixed;left: 0px; bottom: 0px;"><strong>我是固定定位</strong></p>
```
<showpane>
<p id="fixed-0929" style="position: fixed;left: 0px; bottom: 10px;display:none"><strong>我是固定定位</strong></p>
<button type="button" onclick="document.getElementById('fixed-0929').style.display = 'block';">固定定位</button>
</showpane>