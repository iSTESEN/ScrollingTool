# 一、HTML专题


<style>
    panel {
        border: 1px  black;
        border-radius: 10px;
        padding: 10px;
        margin: 10px 0px 10px 0px;
    }
</style>



## 1、\<!DOCTYPE html\>
- 是HTML5文档类型的声明，告诉浏览器该文档是HTML5规范编写的
- 位于文档**第一行**

```html
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>

    </body>
</html>
```

## 2、\<head\>标签
- 该标签内包含了文档的相关信息，如：标题、脚本、样式表...



### \<title\>页面标题\</title\>
- 设置该页面的标题内容

### \<meta\>标签
- 规定网页中的元数据，告诉浏览器如何渲染页面


#### \<meta charset="UTF-8" /\>
- 设置文档字符集编码为UTF-8


#### \<meta http-equiv="X-UA-Compatible" content="IE=edge"\>
- `http-equiv="X-UA-Compatible"`: http-equiv起了设定HTTP响应头的作用
- `content="IE=edge"`: 用于指定http-equiv属性的值，告诉IE浏览器使用最新的渲染引擎版本（即IE的最新版本）来显示网页


#### \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>
- 它对于响应式网页设计至关重要。这个标签允许网页开发者控制页面在移动设备上的布局和缩放
- `width=device-width`: 告诉浏览器视口的宽度应该等于设备的宽度

```html
<html lang="zh">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
</html>
```

## 3、单标签和双标签
- `单标签`: 只由一个标签组成
  ```html
  <br>
  <hr>
  <input />
  ...
  ```
- `双标签`: 由两个标签围堵组成
  ```html
  <b></b>
  <p></p>
  <form></form>
  ...
  ```



## 4、注释
- `HTML`中注释
  ```html
  <!-- 我是注释 -->
  <!--
    我也是
    注释
  -->
  ```
- `JS`中注释
  ```js
  // 我是注释
  /* 
    我也是
    注释
   */
  ```
- `CSS`中注释
  ```css
  /* 我是注释 */
  /*
    我也是
    注释
   */
  ```

## 5、\<h_\>\</h_\>标题标签

```html
<h1>我是h1</h1>
<h2>我是h2</h2>
<h3 align="center">我是h3</h3>
<!-- align设置文字对齐方向：left、right、center -->
<h4>我是h4</h4>
<h5>我是h5</h5>
<h6>我是h6</h6>
```

## 6、\<hr\>横线
- 在页面插入一条水平横线
```html
<hr>
```


## 7、\<p\>\</p\>段落标签
- 是块级元素，占用一行
```html
<p>
    我是第一段
</p>
<p>
    我是第二段
</p>
```


## 8、\<dl\>\<dd\>\<dt\>定义标签`代码题`
- 用来创建定义列表，常用于术语和定义的列表

```html
<dl>
    <dt>计算机</dt>
    <dd>一种能够自动计算的设备</dd>
    <dt>Java</dt>
    <dd>一种咖啡</dd>
</dl>
```


## 9、\<ul\>\<ol\>列表标签`代码题、知道属性`
- `<ul>`: **unordered list 无序号列表**
  - **type**: 可选circle空心圆、disc实心圆、square实心正方
- `<ol>`: **ordered list 有序号列表**
  - **type**: 设置序号的显示规则，A（A,B,C）a（a,b,c）1（1,2,3）i（i, ii, iii）I（I, II, III）
  - **reversed**: 将显示的序号逆序显示，但是文本内容顺序不变
  - **start**: 设置序号起始值
- `<li>`: **列表中一个项**
  - **type**: 可选circle空心圆、disc实心圆、square实心正方
```html
<ul type="circle">
    <li>语文</li>
    <li type="disc">数学</li>
    <li>英语</li>
</ul>
```
```html
<ol type="A" reversed start="1000">
    <li>第一题</li>
    <li type="square">第二题</li>
    <ul>
        <li>1小题</li>
        <li>2小题</li>
    </ul>
    <li>第三题</li>
</ol>
```




## 10、\<i\>\<b\>\<em\>\<u\>\<del\>
- `<b>`: 加粗标签
- `<i>`: 斜体标签
- `<em>`: 强调标签，看起来是个斜体
- `<u>`: 下划线标签
- `<ins>`: 看起来加了下划线
- `<del>`: 删除线


```html
<b>加粗文本</b>
<i>斜体文本</i>
<em>强调标签，看起来是个斜体</em>
<u>显示下划线</u>
<ins>也是加下划线</ins>
<del>删除线</del>
```


## 11、\<sub\>\<sup\>
- `<sub>`: 显示下标效果
- `<sup>`: 显示上标效果
```html
H<sub>2</sub>O
a<sup>2</sup>
```

## 12、\<font\>字体
- **size**: 设置字体大小
- **color**: 设置颜色
- **face**: 设置字体
```html
<font size="20" color="green" face="宋体">设置字体的标签，HTML5已弃用</font>
```


## 13、\<table\>表格标签`代码题`
- `<table>`: 声明一个表格
  - **border**: 框线粗细值
  - **cellpadding**: 每个格子内边距值
  - **cellspacing**: 格子之间间距
  - **width**: 该表格的宽度
- `<caption>`: 表格标题
- `<thead>`: 表头
- `<tbody>`: 表格体
- `<tr>`: 表格一行
- `<th>`: 表头单元格
- `<td>`: 普通单元格
  - **colspan**: 表示该单元格，横向向右占用几格
  - **rowspan**: 表示纵向向下，占用几格

```html
<table border="1" cellspace="0" cellpadding="10" width="60%">
    <caption>学生信息表</caption>
    <thead>
        <tr>
            <th>编号</th>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td rowspan="2">18</td>
        </tr>
        <tr>
            <td>2</td>
            <td>李四</td>
        </tr>
        <tr>
            <td colspan="3">合计：2人</td>
        </tr>
    </tbody>
</table>
```




## 14、\<img\>图片标签

- **src**: 指定图片来源
- **alt**: 图片加载失败时显示的文字
- **height**: 设定高度
- **width**: 设定宽度
- **title**: 设置鼠标悬浮时显示的提示文字

```html
<img src="http://localhost/abc.png" alt="加载失败!!!!!" />
<img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt="百度logo" title="这是百度" width="400px">
```


## 15、\<a\>超链接标签
- **href**: 链接目的地
- **target**: 打开的位置
  - _self: 默认，当前窗口打开
  - _blank: 新窗口打开
  - _parent: 在父窗口打开
  - _top: 在当前窗体打开链接，并替换当前的整个窗体(框架页)。
- **title**: 设置鼠标悬浮时显示的提示文字

```html
<a href="http://www.baidu.com" title="go百度">去百度</a>
<a href="http://www.baidu.com" target="_blank">去百度</a>
```


## 16、\<form\>表单标签`代码题`
- `<form>`: 被该标签包含的input，会被提交上去
  - **action**: 该表单提交的地址
  - **method**: 提交采用的HTTP方法，常用get、post
- `<input>`: 表单的填写项
  - **type**: 设定该表单的类型，text文本框、password密码框、number数字框、checkbox复选框、radio单选框、file文件、data日期框、`hidden隐藏域`、`submit提交按钮`、`reset重置表单按钮`
  - **name**: 表单提交时，该项的key值
  - **value**: 该表单的填写内容
  - **size**: 该输入框的可显示长度
  - **readonly**: 只读状态，不可更改
  - **checked**: 被选中状态
  - **required**: 表示必填项
  - **disabled**: 禁止操作
  - **maxlength**: 输入字符最大数量
  - **minlength**: 输入字符最小数量
  - **placeholder**: 默认提示词
- `<select>`: 下拉框
  - `<option>`: 一条可选项
    - **value**: 该可选项真实提交值
    - **selected**: 出现该属性，可选项默认被选中
- `<textarea>`: 输入文本域，可以输入大量文本
  - **cols**: 一行默认显示几个字
  - **rows**: 默认显示几行文字

```html
<h3>新生登记表</h3>
<form action="" method="get">
    <input type="hidden" name="token" value="隐藏值">
    <div>
        姓名<input type="text" name="name" placeholder="请输入姓名" required>
    </div>
    <div>
        学号<input type="number" name="sid" required>
    </div>
    <div>
        学校代码<input type="text" name="schoold_id" value="schoold123" readonly>
    </div>
    <div>
        密码<input type="password" name="password" minlength="5" maxlength="10">
    </div>
    <div>
        性别
        <input type="radio" name="sex" value="man" checked>男
        <input type="radio" name="sex" value="woman">女
    </div>
    <div>
        照片<input type="file" name="face">
    </div>
    <div>
        出生日期<input type="date" name="birth">
    </div>
    <div>
        爱好
        <input type="checkbox" name="hobby" value="sing">唱
        <input type="checkbox" name="hobby" value="dance">跳
        <input type="checkbox" name="hobby" value="rap">RAP
    </div>
    <div>
        地区
        <select name="area">
            <option value="" selected>--请选择--</option>
            <option value="fz">福州</option>
            <option value="zz">漳州</option>
        </select>
    </div>
    <div>
        简介
        <textarea name="info" cols="30" rows="5">默认介绍</textarea>
    </div>
    <div>
        <input type="submit" value="提交" disabled>
        <input type="reset" value="重置">
    </div>
</form>
```
**Q1、radio互斥如何实现？**
单选项radio，设定相同的name值，即可实现互斥
```html
<h3>性别</h3>
<label>
    <input type="radio" name="gender" value="male"> 男性
</label><br>
<label>
    <input type="radio" name="gender" value="female"> 女性
</label><br>
<label>
    <input type="radio" name="gender" value="non-binary"> 非二元
</label><br>
<label>
    <input type="radio" name="gender" value="trans-man"> 转变至男性
</label><br>
<label>
    <input type="radio" name="gender" value="trans-woman"> 转变至女性
</label><br>
<label>
    <input type="radio" name="gender" value="agender"> 无性别
</label><br>
<label>
    <input type="radio" name="gender" value="genderqueer"> 酷儿性别
</label><br>
<label>
    <input type="radio" name="gender" value="two-spirit"> 双灵人
</label><br>
<label>
    <input type="radio" name="gender" value="other"> 其他
</label><br>
<label>
    <input type="radio" name="gender" value="prefer-not-to-say"> 不愿说明
</label>
```

**Q2、checkbox提交结果是什么？**
复选框表示该name可以存在多个值，以get方式提交时，会在URL后面追加查询参数
```html
爱好
<input type="checkbox" name="hobby" value="sing">唱
<input type="checkbox" name="hobby" value="dance">跳
<input type="checkbox" name="hobby" value="rap">RAP
```
```
http://localhost:80/query.html?hobby=sing&hobby=dance&hobby=rap

会以 hobby=sing & hobby=dance & hobby=rap 该形式出现
```

**Q3、textarea大小、默认值的设置?**
`cols`: 设置默认显示多少列字符，也就是设置宽度
`rows`: 设置默认显示多少行字符，也就是设置高度
`<textare>默认值</textare>`: 在标签中间设置默认值

```html
简介
<textarea name="info" cols="30" rows="5">默认介绍</textarea>
```


**Q4、表单的两种提交方式**
`get`: 默认方式，会将参数追加到URL后面，会暴露参数内容，并且会有长度限制
`post`: 将参数放在请求体，没有长度限制，隐藏性较好。
**二者参数编排格式一样**




# 二、CSS专题

## 1、样式表的优点
1. 容易阅读正文，内容和显示效果相分离，有利于分工协作
2. 提高了渲染速度，减少了标签的数量
3. 实现了类似函数的效果，可以一处修改，处处修改。同时可以通过外部样式表的形式，控制多个页面的外观
4. 减少了网页的体积，提高了网站负载，降低了运营成本
5. 样式表渲染效果更好，选项更多

## 2、如何引入.css文件
```html
<link rel="stylesheet" href="xxx.css">
```


## 3、padding-margin设置规则
1. 直接指定top, right, bottom, left
   ```html
   <div style="padding-top: 20px; margin-right: 40px">1</div>
   ```
2. 属性一次性设置4个值，顺序为：上 右 下 左
   ```html
   <div style="padding: 10px 20px 10px 20px">1</div>
   ```
3. 属性一次性设置3个值，顺序为：上  左右  下
   ```html
   <div style="margin: 10px 20px 10px">1</div>
   ```
4. 属性一次性设置2个值，顺序为：上下  左右
   ```html
   <div style="margin: 10px 20px">1</div>
   ```
5. 属性一次性设置1个值，代表：上右下左
   ```html
   <div style="margin: 10px">1</div>
   ```

## 4、border相关样式
1. `border`: 一次性设置3个属性：width宽度 style线条样式 color边框颜色
   ```html
   <div style="border: 2px solid red"></div>
   ```
2. `border-color`: 设置4边线条颜色，也支持padding/margin的4、3、2值输入模式
   `border-left/right/top/bottom-color`: 设置某一边的颜色
   ```html
   <div style="border-color: red"></div>
   <div style="border-left-color: green"></div>
   ```
3. `border-width`: 设置四边的线条宽度
   `border-left/right/top/bottom-width`: 设置某边的线条宽度border-left-width: 5px
4. `border-style`: 设置四边的线条样式
   `border-left/right/top/bottom-style`: 设置某边的线条样式
   ```
    none: 没有边框。这是默认值，除非你指定了其他边框属性。
    hidden: 类似于 none，但在表格中处理相邻单元格时有所不同。
    dotted: 定义点线边框。
    dashed: 定义虚线边框。
    solid: 定义实线边框。
    double: 定义双线边框。两条线之间的宽度等于边框的宽度。
   ```

## 5、伪类选择器
- `span:first-of-type`: 会选择每一个父元素内第一个出现的span
- `span:last-child`: 会选择父元素内最后一个元素，并且是span的



## 6、background背景
- `background-color`: 设置元素背景颜色
  - **rgb(x,y,z)**: 三原色模式，每个值0-255
  - **#_____**: 十六进制模式
  ```css
  background-color: #666666
  background-color: rgb(100, 100, 100)
  ```
- `background-clip`: 设置背景颜色填充范围
  - **border-box**: 默认，从外边框填充
  - **padding-box**：从内边框开始填充
  - **content-box**：只填充内容区域
  ```html
    <style>
        .test-background {
            margin: 20px;
            padding: 20px;
            border-width: 5px;
            border-style: dotted;
            border-color: black;
        }
    </style>
    <div class="test-background" style="background-color: green; background-clip: border-box;">
        <span>Hello Wrold</span>
    </div>
    <div class="test-background" style="background-color: green; background-clip: padding-box;">
        <span>Hello Wrold</span>
    </div>
    <div class="test-background" style="background-color: green; background-clip: content-box;">
        <span>Hello Wrold</span>
    </div>
  ```
- `background-image`: 设置若干图片作为背景，越左的放越上
  ```html
  <style>
    .img-test {
        width: 200px;
        height: 100px;
        border: 10px dotted rgb(100, 100, 100);
        background-color: green;
        background-image: url(https://www.baidu.com/img/flexible/logo/pc/result.png), url(https://sa-token.cc/logo.png
        );
        background-repeat: no-repeat;
        background-origin: border-box;
    }
  </style>
  <div class="img-test"></div>
  ```
- `background-repeat`: repeat | no-repeat | repeat-x | repeat-y | space | round。设置image是否重复，重复的方式
  ```css
  background-image: url(https://www.baidu.com/img/flexible/logo/pc/result.png), url(https://sa-token.cc/logo.png)
  background-repeat: no-repeat
  ```
- `background-origin`: 设置image的填充范围，与background-clip类似
  - **padding-box**: （默认）内边距开始
  - **content-box**: 内容开始
  - **border-box**: 外边距开始。
- `background-size`: 设置背景图片的大小
  - **auto**: 默认值, 以背景图本身大小显示
  - **cover**: 缩放背景图，以完全覆盖铺满元素,可能背景图片部分看不见
  - **contain**: 缩放背景图，宽度或者高度铺满元素，但是图片保持宽高比
  - **50%**: 百分比，相对于背景区(background positioning area)
  - **20% 50%**: 左右 上下,百分比
  - **length**: 具体的大小，比如100px
  - **length length**: 左右 上下,具体的大小
- `background-position`: 设置image的起始位置
  - **x值 y值**: 基于左上角，右偏移x，下偏移y
  - **left/right/top/bottom 第二个值可选左同**: 在总体范围从哪个地方起始
  ```html
  <style>
    .image-t {
        background-image: url(https://www.baidu.com/img/flexible/logo/pc/result.png);
        background-repeat: no-repeat;
        background-size: 50% 20%; /* 父宽度的50%， 父高度的20% */
        background-origin: border-box; /* 从外边框开始图片 */
        background-position: 20px 50px; /* 右移20px, 下移50px */
    }
  </style>
  ```




## 7、样式继承
- 可以控制任何**属性**的样式继承方式
- `initial`: 不要继承父元素属性，采用浏览器默认属性
- `inherit`: 继承父元素属性
  - 有些属性不会自动继承，如border
  - 有些属性不写也会自动继承，如color
  ```html
  <div style="color: red; border: 1px solid blue">
    <p style="color: initial;">不要继承颜色，不会自动继承边框</p>
    <p style="border: inherit">默认继承颜色，手动继承边框</p>
  </div>
  ```

## 8、特殊定位
- 除了`position: static | relative | absolute`定位方式外
- `z-index`: 控制元素处于空间的Z轴值，值越大越上面
  ```html
  <style>
    .test-z {
        width: 200px;
        height: 100px;
        position: absolute;
    }
    .test-z:first-of-type {
        left: 50px;
        top: 50px;
    }
  </style>
  <div class="test-z" style="z-index: 30;background-color: green;"></div>
  <div class="test-z" style="z-index: 20 ;background-color: red;"></div>
  ```
- `position: fixed`: 相对于视窗的固定定位，通过left、right、top、bottom设置固定在哪里
  ```html
  <style>
    .test-fixed {
      position: fixed;
      right: 10px;
      bottom: 20px;
    }
  </style>
  <p class="test-fixed" style="text-size:50px"><b>Fixed点我返回顶部</b></p>
  ```

## 9、box-sizing:border-box
- `box-sizing`属性，可以更改元素的`height`、`width`属性的计算规则
- `box-sizing: content-box`: 默认的盒子计算模式，盒子的height、width作用在`内容`上，**padding、border-width、margin的大小会额外凸出，不计入高度宽度**
- `box-sizing: border-box`: 改变盒子高度宽度计算模式，以`外边框`开始计算，**padding、border-width会计入。但是margin同样会额外凸出，不计入**

```html
<style>
    .test-boxsizing {
        height: 100px;
        width: 200px;
        border: 20px dotted red;
        background-color: green;
        background-clip: content-box;
        padding: 20px;
    }
</style>
<div class="test-boxsizing">
    默认box-sizing: content-box，高和宽是以<b>内容</b>开始计算
</div>
<br>
<div class="test-boxsizing" style="box-sizing: border-box;">
    采用box-sizing: border-box，高度和宽度以<b>边框（外线）</b>开始计算
</div>
```



# 三、JS专题

## 1、引入方式
1. 在网页直接写
   ```html
   <script>
      window.alert("Hello");
   </script>
   ```
2. 引入外部js文件
   ```html
   <script src="a.js" type="text/javascript"></script>
   ```


## 2、输入输出
1. `console.log()`: 控制台打印 
2. `alert()`: 警告框展示
3. `prompt()`: 询问框得到输入
   ```js
   var name = prompt("请输入姓名")
   window.alert(name)
   ```
4. `confirm()`: 确认框得到确认结果
   ```js
   var res = confirm("是否关机？");
   if(res) {
    alert("关机");
   } else {
    alert("不关机");
   }
   ```


## 3、变量
- 数据类型：`number`、`boolean`、`string`、`object`、`undefined`、`null`
  ```js
  var a = "Hello"
  a = 123
  a = 3.14
  a = 1e-6
  a = true
  a = undefined
  a = null
  a = [1, true, "3"]
  a = {"name": "张三", "age": 18}
  ```
- 模板字符串
  ```js
  var name = "张三"
  var a = `你好${name}`
  ```
- `typeof()`: 查看变量类型（返回字符串结果）
  ```js
  var a = 3.14
  alert(typeof(a)) // number
  a = "张三"
  alert(typeof(a)) // string
  ```
- number相关
  ```js
  var a = Number.MAX_VALUE; // js中最大值
  a = Number.MAX_VALUE * 2; // 超过最大值，显示Infinity表示无穷大
  a = -a; // 显示-Infinity，表示无穷小
  ```
  ```js
  var a = 'abc' - 1 // NaN表示非数字
  isNaN(a) // true，判断是否非数字
  isNaN("abc") // true
  isNaN('123') // false，自动转换为数字
  ```
- string相关
  ```js
  var s = 'abcd'
  str.length // 4，字符串长度
  str[1] // b，索引获取字符
  str[100] // undefined
  s + true // abcdtrue，拼接起来
  s + undefined // abcdundefined

  typeof s // string
  typeof(s) // string
  ```
  ```js
  var s = String(123) // '123'
  typeof(s) // string
  ```
- boolean相关
  ```js
  if('123') {} // true
  if('0') {} // true
  if('') {} // false
  if(0) {} // false
  if(1) {} // true

  if(undefined) {} // false
  if(null) {} // false

  if([]) {} // true
  if({}) {} // true

  Boolean(0) // false
  Boolean('0') // true
  ```
- `==`和`===`
  ```js
  // == 这种比较运算符，会自动进行类型转换
  // 值相等即为true

  '1' == 1 // true
  '1' == true // true
  1 == true // true
  0 == false // true
  '' == false // true

  undefined == false // false !!
  null == false // false !!
  undefined == null // true
  ```
  ```js
  // === 不会自动类型转换，并且会比较两者的数据类型是否一致
  // 值相等&&数据类型相等，才为true

  '1' === 1 // false
  1 === 1 // true
  undefined === null // false 
  ```

## 4、循环结构
- `for`循环
  ```js
  var sum = 0
  for(var i=0; i<10; i++) {
    sum += i
  }
  ```
- `while`循环
  ```js
  var sum = 0;
  var i = 0;
  while(true) {
    if(i==0) {
      continue;
    }
    if(i>=10) {
      break;
    }
    sum += i;
    i++;
  }
  ```

## 5、数组
- 允许放任意数据类型
  ```js
  var arr = [1,'3.14', true, [1,2,3]]
  typeof(arr) // object
  ```
- 索引取值
  ```js
  arr[0] // 1
  arr[1] // '3.14'
  arr[arr.length-1] // [1,2,3]
  ```


## 6、函数
- 函数定义和使用
  ```js
  function sum(a, b) {
    return a + b
  }
  var res = sum(1,2) // 3
  ```
- 函数隐藏的arguments，获取实际参数列表
  ```js
  function sum(a) {
    arguments.length; // 5，实际5个值
    var s = 0
    for(var i=0; i<arguments.length; i++) {
      s += arguments[i]
    }
    return s
  }

  var res = sum(1,2,3,4,5) // 15
  ```
- 形参默认值
  ```js
  function func(name='张三') {
      alert(`你好${name}`)
  }
  func(); // 你好张三
  func('李四') // 你好李四
  ```
- 函数表达式
  ```js
  var func1 = function(a, b) {
    return a + b;
  }
  func1(1,2) // 3

  var func2 = func1;
  func2(1,2) // 3

  // 箭头函数
  var func3 = (a, b) => {
    return a + b
  }
  func3(1,2) // 3
  ```
- 回调函数，沿用函数表达式的概念
  ```js
  function work(a, b, func) {
    return func(a, b)
  }

  var res = work(1, 2, (a, b)=>{
    return a + b
  }) // 3

  res = work(1, 2, function(a, b) {
    return a + b
  })
  ```
- 递归，自己调自己
  ```js
    function sum(num) {
        if(num==1) {
            return 1
        } else {
            return num + sum(num-1)
        }
    }
  // 3 + 2 + 1
  var res = sum(3) // 6
  ```
  ```js
  // 斐波那契（虽然没说考）
  function fabo(n){
      if(n==1||n==2)
          return 1;
      return fabo(n-2)+fabo(n-1);
  }
  //1,1,2,3,5,8  斐波那契序列
  for(i=1;i<=10;i++)
    console.log(fabo(i));
  ```
- **变量作用域**
  ```js
  var globalVar = 123 // 全局变量

  function func() {
    console.log(globalVar); // 函数内可以访问全局
    var a = 3.14; // 函数内以var声明，为局部变量
    b = 999 // 无前缀为全局变量【但必须运行过函数，才会创建变量】
  }
  // a // 无法访问

  func()
  console.log(b) // 999


  var globalVar = 456 // var可以重复声明

  let e = 2.7
  // let e = 3 // let无法重复声明
  ```


### 求某范围质数（素数）
```js
// 该数是否质数
function isPrime(num) {
    if(num<2) {
        return false;
    }
    for(var i=2; i<=Math.sqrt(num); i++) {
        if(num % i==0) {
            return false;
        }
    }
    return true;
}

var start = parseInt(prompt("开始值"));
var end = parseInt(prompt("结束值"));

for(var i=start; i<=end; i++) {
    if(isPrime(i)) {
        console.log(i)
    }
}
```



### 求某范围数字和
```js
var start = Number(prompt("开始值"))
var end = Number(prompt("结束值"))

var sum = 0;
for(var i=start; i<=end; i++) {
    sum += i;
}
console.log(sum);
```



### 求九九乘法表
```js
/*
  1x1=1
  1x2=2 2x2=4
  1x3=3 2x3=6 3x3=9
  ...
*/
var totalStr = ''
for(var i=1; i<=9; i++) {
    var line = '';
    for(var j=1; j<=i; j++) {
        line += `${j}x${i}=${j*i}`
        line += ' '
    }
    totalStr += line;
    totalStr += '\n'
}
console.log(totalStr)
```






### 猜数字游戏
```js
var size = parseInt(prompt('你要几位数？'))
var num = Math.random() * Math.pow(10, size)
num = Math.floor(num)
console.log(num)

while(true) {
    var guess = parseInt(prompt('你猜'))
    if(guess == num) {
        alert("猜对了");
        break
    } else if(guess < num) {
        alert("小了");
    } else {
        alert("大了")
    }
}
```

## 7、创建对象方式`代码题`
对象就是`object`类型，即`key-value`的数据结构


1. `{}`直接声明对象
   ```js
   // 后定义属性
   var stu = {}
   stu.id = 1
   stu.name = '张三'
   stu.age = 18
   stu.speak = function() {
      alert("Hello World");
   }
   stu.work = () => {
      alert("工作中");
   }


   alert(stu.name);
   stu.speak()
   ```
   ```js
   // 先定义属性
   var stu = {
    id: 1,
    name: "张三",
    age: 18,
    speak: function() {
        alert("Hello World");
    },
    work: () => {
        alert("工作中");
    },
    run() {
        alert("跑路中");
    }
   }

   alert(stu.name);
   stu.work()
   stu.run();
   ```
2. `[]`声明数组对象
   ```js
   var arr1 = []
   var arr2 = new Array()

   typeof(arr1) // object
   typeof(arr2) // object
   ```
3. 工厂方法创建对象
   ```js
   function getStu() {
      var stu = {}
      stu.id = 1
      stu.name = '张三'
      stu.age = 18
      stu.speak = function() {
          alert("Hello")
      }
      return stu
   }

   var s1 = getStu()
   var s2 = getStu()

   s1.name = '李四'
   console.log(s1) // {"id":1,"name":"李四","age":18}
   console.log(s2) // {"id":1,"name":"张三","age":18}
   ```
4. 构造方法创建对象
   ```js
   function student(name, age) {
      this.name = name;
      this.age = age;
      this.speak = () => {
          alert("Hello")
      }
   }

   var s1 = new student("张三", 18); // {"name":"张三","age":18}
   var s2 = new student("李四", 20); // {"name":"李四","age":20}
   ```
5. `class`方式
   ```js
   class student {
      constructor(name, age) {
          this.name = name;
          this.age = age;
      }

      speak() {
          alert("Hello");
      }

      work() {
          alert("Working")
      }
   }

   var s1 = new student("张三", 18);
   var s2 = new student("李四", 20);
   s1.speak()
   ```


## 8、遍历对象
1. 遍历属性
   ```js
   var stu = {
      name: '张三',
      age: 18,
      speak: ()=>{
          alert("Hello");
      }
   }

   for(var key in stu) {
      console.log(key);
      if(typeof(stu[key]) == 'function') {
          // 如果是函数，则调用
          stu[key]();
      } else {
          // 是属性则输出值
          console.log(key + " - " + stu[key]);
      }
   }
   ```
2. 验证属性是否存在对象中
   ```js
   var stu = {
      name: '张三',
      age: 18,
      speak: ()=>{
          alert("Hello");
      }
   }

   if('name' in stu) {
      console.log("name - " + stu['name']);
   }
   ```

## 9、Math内置对象
```js
// 求几次方
Math.pow(2, 3) // 8

// 开根号
Math.sqrt(4) // 2

// 向上取整
Math.ceil(2.1) // 3

// 向下取整
Math.floor(3.9) // 3

// 四舍五入
Math.round(3.5) // 4
Math.round(3.4) // 3

// 随机数<1
Math.random() // 0.1243424

var getRandom = (size)=>{
  return Math.floor(Math.random() * Math.pow(10, size))
}
var num = getRandom(2) // 67
num = getRandom(4) // 3478
```

## 10、Date对象
1. 创建Date
   ```js
   // 方式1：直接new
   var d1 = new Date() 
   // Tue Dec 24 2024 23:35:28 GMT+0800 (中国标准时间)
   console.log(typeof(d1)) // object

   // 方式2：输入各个参数new Date(年,月,日,时,分,秒)
   var d2 = new Date(2025, 1, 1, ,0 , 0, 0)
   // Sat Feb 01 2025 00:00:00 GMT+0800 (中国标准时间)

   // 方式3：输入格式字符串
   var d3 = new Date('2025-1-1 0:0:0')
   // Sat Feb 01 2025 00:00:00 GMT+0800 (中国标准时间)
   ```
2. Date转为数字（时间戳）
   ```js
   // 方式1：valueOf()
   var d1 = new Date() 
   d1.valueOf(); // 1735054846788

   // 方式2：getTime()
   d1.getTime(); // 1735054846788

   // 方式3：+转为数值
   var d2 = +d1
   // 1735054846788

   // 方式4：Date.now()
   Date.now() // 1735054947326
   ```

### 促销倒计时
- 注意js的除法结果是浮点值，需要求floor()
```html
<h1 id="timepanel" align="center"></h1>

<script>
    // 设定未来时间
    var targetTime = '2025-1-1 0:0:0'


    // 为元素补0
    function fullEle(ele) {
        return ele < 10 ? `0${ele}` : `${ele}`
    }

    // 获得指定时间的剩余时间
    function getRestTimeString(targetTime) {
        targetTime = new Date(targetTime).getTime()
        nowTime = new Date().getTime()

        // 如果已经过了，返回倒计时结束！
        if(nowTime > targetTime) {
            return '倒计时结束！'
        }
        // 计算剩下多久
        var gapTime = targetTime - nowTime;
        gapTime = Math.floor(gapTime / 1000); // 去除毫秒

        // 将时间戳转为各个元素
        var s = gapTime % 60 // 秒
        gapTime = Math.floor(gapTime / 60)
        var m = gapTime % 60 // 分钟
        gapTime = Math.floor(gapTime / 60)
        var h = gapTime % 24 // 小时
        gapTime = Math.floor(gapTime / 24)
        var day = gapTime

        // 将时间转为字符串
        return `${day}天 ${fullEle(h)}时：${fullEle(m)}分：${fullEle(s)}秒`
    }

    // 循环定时器，每秒都获取一次时间字符串
    setInterval(()=>{
        document.getElementById('timepanel').innerText = getRestTimeString(targetTime)
    }, 1000)
</script>
```



## 11、数组
1. `sort`排序，会改变原数组
   ```js
   var arr = [4,7,6,4,3,2,1,4,5]
   var a2 = arr.sort()
   console.log(arr) // [1, 2, 3, 4, 4, 4, 5, 6, 7]
   console.log(a2) // [1, 2, 3, 4, 4, 4, 5, 6, 7]
   ```
   ```js
   // 给定排序方法
   var arr = [4,7,6,4,3,2,1,4,5]
   arr.sort(function(a, b) {
      return a - b;
   })
   console.log(arr)
   ```
2. `push`加入元素
   ```js
   var arr = []
   arr.push(1)
   arr.push(2)
   arr // [1,2]
   ```
3. `pop`删除**最后一个**元素
   ```js
   var arr = [1,2,3]
   arr.pop() // 3
   arr.pop() // 2
   arr // [1]
   ```
4. `shift`删除**第一个**元素
   ```js
   var arr = [1,2,3]
   arr.shift() // 1
   arr.shift() // 2
   arr // [3]
   ```
5. `unshift`向数组开头**添加**一个或多个元素，返回最后长度
   ```js
   var arr = [1,2,3]
   arr.unshift('张三') // 4
   arr // ['张三', 1, 2, 3]
   arr.unshift("李四", "王五") // 6
   arr // ['李四', '王五', '张三', 1, 2, 3]
   ```
7. `indexOf`查找元素下标
   ```js
   var arr = [1,2,3]
   arr.indexOf(1) // 0
   arr.indexOf(3) // 2
   arr.indexOf(4) // -1
   ```
8. `splice(i, size, 可变长度参数)`从i索引开始，删除size个，并插入可变参数，返回被删除的数组
   ```js
   var arr = [1,2,3,4,5]
   arr.splice(2, 2) // [3,4]
   arr // [1,2,5]

   arr.splice(2, 0, '张三', '李四', '王五') // []
   arr // [1, 2, '张三', '李四', '王五', 5]
   ```
9. `filter()`过滤数组，只得出符合条件的元素，返回新的数组，**不会改变原数组**
    ```js
    var arr = [1,2,3,4,5]
    var newArr = arr.filter((num)=>{
        return num > 2; // 得到>2的所有元素
    })

    newArr // [3,4,5]
    arr // [1,2,3,4,5]
    ```
10. `map()`遍历并**重做**数组，返回新的数组，**不会改变原数组**
    ```js
    var arr = [
        {id:1, name:'张三', age:18},
        {id:2, name:'李四', age:19},
        {id:3, name:'王五', age:21}
    ]

    var names = arr.map((s)=>{
        return s.name
    })
    names // ['张三', '李四', '王五']
    ```


### 数组去重
```js
var arr = [1,1,1,1,2,2,3,1,1,1,5,5,5,2,2,2]
var resArr = []

for(var i=0; i<arr.length; i++) {
    if(resArr.indexOf(arr[i]) == -1) {
        resArr.push(arr[i])
    }
}
resArr // [1, 2, 3, 5]
```


## 12、String方法
https://www.runoob.com/jsref/jsref-obj-string.html


## 13、DOM、BOM关系
> Javascript = ECMAscript + DOM + BOM

`ECMAscript`: 是一种语法规定，规定了JavaScript的编写语法，浏览器执行方式
`DOM`: Document Object Model 文档对象模型，是JavaScript的DOM编程接口。用于访问和操作XML、HTML文档
`BOM`: Browser Object Model 浏览器对象模型，也是JavaScript的BOM编程接口。用于控制浏览器的行为

`DOM树`: 把HTML文件里面的标签层级，看成树结构
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <title>DOM树</title>
  </head>
  <body>
    <h1>这是h1节点</h1>
  </body>
</html>
```
```
               html
             /      \
        head         body
        /  \             \
      meta title          h1
      /        \           \
charset=UTF-8 (内容)DOM树  (内容)这是h1节点
```


## 14、DOM
1. 获取节点的DOM方法
```html
<h1 id="ele1">Ele-1</h1>
<h1 name="ele2">Ele-2-1</h1>
<h1 name="ele2">Ele-2-2</h1>
<h1 class="abc">Ele-3-1</h1>
<h1 class="abc def">Ele-3-2</h1>
<script>
    // 【1】通过id属性获取元素（返回1个）
    var ele1 = document.getElementById("ele1");
    // <h1 id="ele1">Ele-1</h1>

    // 【2】通过name属性获取元素（返回数组）
    var ele2s = document.getElementsByName('ele2')
    /*
        [<h1 name="ele2">Ele-2-1</h1>, <h1 name="ele2">Ele-2-2</h1>]
    */

    // 【3】通过class属性获取元素（返回数组）
    var ele3s = document.getElementsByClassName("abc")
    /*
        [<h1 class="abc">Ele-3-1</h1>, <h1 class="abc def">Ele-3-2</h1>]
    */
    ele3s = document.getElementsByClassName("abc def")
    /*
        [<h1 class="abc def">Ele-3-2</h1>]
    */

    // 【4】通过tag标签名获取元素（返回数组）
    var ele4s = document.getElementsByTagName('h1')
    /* 
        [ 
            <h1 id="ele1">Ele-1</h1>,
            <h1 name="ele2">Ele-2-1</h1>,
            <h1 name="ele2">Ele-2-2</h1>,
            <h1 class="abc">Ele-3-1</h1>,
            <h1 class="abc def">Ele-3-2</h1> 
        ]
    */

    // 【5】通过CSS选择器获取元素（返回第1个元素）
    var ele5 = document.querySelector('#ele1') // id
    // <h1 id="ele1">Ele-1</h1>

    ele5 = document.querySelector('.abc') // class属性
    // <h1 class="abc">Ele-3-1</h1>

    ele5 = document.querySelector('h1') // tag
    // <h1 id="ele1">Ele-1</h1>

    // 【6】通过CSS选择器获取元素（返回数组）
    var ele5s = document.querySelectorAll('.abc')
    /*
        [<h1 class="abc">Ele-3-1</h1>, <h1 class="abc def">Ele-3-2</h1>]
    */

    ele5s = document.querySelectorAll('h1')
    /* 
        [ 
            <h1 id="ele1">Ele-1</h1>,
            <h1 name="ele2">Ele-2-1</h1>,
            <h1 name="ele2">Ele-2-2</h1>,
            <h1 class="abc">Ele-3-1</h1>,
            <h1 class="abc def">Ele-3-2</h1> 
        ]
    */
</script>
```
2. 获取节点的子节点
```html
<p>厨房物品</p>
<ul id="kitchen">
    <li>
        <p>厨具</p>
        <ol>
            <li>锅</li>
            <li>铲子</li>
            <li>过滤勺</li>
        </ol>
    </li>
    <li>
        <p>餐具</p>
        <ol>
            <li>碗</li>
            <li>筷子</li>
            <li>汤勺</li>
        </ol>
    </li>
    <li>
        <p>水果</p>
        <ol>
            <li>苹果</li>
            <li>香蕉</li>
            <li>葡萄</li>
        </ol>
    </li>
</ul>
<script>
    // 获取厨房列表
    var kitchen = document.querySelector("#kitchen")
    // 获取厨房分类
    var types = kitchen.querySelectorAll('ul>li') // 子代选择器
    // 遍历分类
    for(var i=0; i<types.length; i++) {
        // 获取类别标题
        var title = types[i].querySelector('p')
        console.error(title.innerText)
        // 获取详情列表
        var list = types[i].querySelector('ol').querySelectorAll('li')
        for(var j=0; j<list.length; j++) {
            console.log(list[j].innerText)
        }
    }
</script>
```
3. 设置元素属性
```html
<h1>大标题</h1>
<h3>小标题</h3>
<p>这是是正文内容！</p>
<input type="checkbox" name="remeber">记住我
<script>
    // 【1】修改标签内容：innerText文本形式
    var ele = document.querySelector('h1')
    ele.innerText = '欢迎访问案例'

    // 【2】修改标签内容：innerHTML标签形式
    ele = document.querySelector('h3')
    ele.innerHTML = '这里是<u style="color:red">小标题</u>，会显示摘要，来源百度<sup>[1]</sup>'

    // 【3】修改style属性
    ele = document.querySelector('p')
    ele.style.color = 'green'
    ele.style.fontStyle = 'bold'
    ele.style.fontSize = '30px'
    ele.style.marginTop = '40px'
    console.log(ele.style.fontSize) // 30px

    // 【4】修改其他属性
    ele = document.getElementsByName('remeber')[0]
    ele.checked = true
</script>
```
4. 绑定事件
```html
<h1 id="click_me">点我</h1>
<input type="text" placeholder="点我">
<script>
    var ele = document.getElementById('click_me')
    // 【1】通过改变属性方式来绑定事件
    ele.onclick = () => {
        alert('不要点我')
    }

    ele = document.getElementsByTagName('input')[0]
    ele.onchange = (e) => {
        console.log(e);
        alert('当前内容：' + e.target.value);
    }

    // 【2】通过addEventListener绑定
    ele.addEventListener('click', ()=>{
        alert('点我干嘛')
    })
</script>
```
5. 自定义属性
以`data-`开头的属性，属于自定义属性
```html
<p data-myvalue-test="abc123">带有自定义属性</p>
<script>
    var ele = document.querySelector('p')
    ele.onclick = (e) => {
        // 【1】直接.访问
        alert('data-myvalue-test: ' + e.target.dataset['myvalueTest'])
        // 【2】通过方法访问
        alert('getAttribute("data-myvalue-test"): ' + e.target.getAttribute('data-myvalue-test'))
    }
</script>
```


## 15、父子节点访问
```html
<div id="d1">
    <p>111</p>
    <p>222<br></p>
    <p>333</p>
</div>
<script>
    var ele = document.querySelector('p')
    // 【1】访问父节点
    console.log(ele.parentNode); 
    // <div id="d1">...</div>
    
    // 【2】访问子结点
    ele = document.getElementById('d1')
    console.log(ele.childNodes); // childNodes会将树扁平化
    /*
        [
            <p>111</p>
            <text>111</text>
            <p>222<br></p>
            <text>222</text>
            <br>
            <p>333</p>
            <text>333</text>
        ]
    */

    console.log(ele.firstChild); // 得到子树扁平化的第一个节点
    // <text>111</text>

    // 【3】通过CSS全局选择器选中“可见标签”，而非所有子元素
    ele = ele.querySelectorAll("*")
    /*
      [
          <p>111</p>
          <p>222<br></p>
          <br>         // 注意<br>也会被单独选中
          <p>333</p>
      ]
    */

   // 【4】理想的选择子元素
   ele = document.querySelectorAll("#d1>*") // 直选中子集一层，不要全部扁平化
   /*
      [
          <p>111</p>
          <p>222<br></p>
          <p>333</p>
      ]
   */
</script>
```

## 16、兄弟节点访问
```html
<div>
    <p>1</p>
    <p>2</p>
    <p id="id3">3</p>
    <p>4</p>
    <p>7</p>
</div>
<script>
    var ele = document.getElementById('id3')

    // 【1】获取前一个兄弟
    console.log(ele.previousElementSibling);
    // <p>2</p>

    // 【2】获取后一个兄弟
    console.log(ele.nextElementSibling);
    // <p>4</p>
</script>
```

## 17、节点类型值
元素节点（Element Node）：nodeType为1。
属性节点（Attr Node）：nodeType为2。
文本节点（Text Node）：nodeType为3。
注释节点（Comment Node）：nodeType为8。
文档节点（Document Node）：nodeType为9。
```html
<div id="d1">
    <p>文本节点</p>
    <p class="abc">文本节点2<br><!--注释节点--></p>
</div>

<script>
    var ele = document.getElementsByTagName("div")[0]
    console.log(ele, ele.nodeType) // <div>...</div> 1

    // 获取子节点
    var child = ele.querySelectorAll("#d1>*")
    console.log(child);
    /*
        [
            <p>文本节点</p>
            <p class="abc">文本节点2<br><!--注释节点-- ></p>
        ]
    */
    
    console.log(child[0], child[0].nodeType); // <p>文本节点</p>  1
    console.log(child[1], child[1].nodeType); 
    // <p class="abc">文本节点2<br><!--注释节点--></p>  1
    
    var list = child[1].childNodes
    for(var i=0; i<list.length; i++) {
        console.log(list[i], list[i].nodeType);
    }
    /*
        文本节点2  3
        <br>    1
        <!--注释节点-- >  8
    */
</script>
```

## 18、创建、添加节点
`appendChild`: 在该元素内部追加新元素，到最后一个位置
`insertBefore`: 在该元素内部的指定元素之前，插入新元素
```html
<div id="d1">
    <p>我是已存在的元素</p>
</div>
<script>
    // 【1】创建元素节点
    var newEle = document.createElement('p')
    // 【2】创建文本节点
    var textNode = document.createTextNode('我是新结点')
    // 为新元素添加文本节点
    newEle.appendChild(textNode)
    // 【3】创建属性节点
    var attr = document.createAttribute('style')
    // 为元素赋予属性
    newEle.setAttributeNode(attr)
    // 设置属性值
    newEle.style.color = 'green'
    
    console.log(newEle); // <p style="color: green;">我是新结点</p>

    // 【5】追加到div内最后一个
    document.querySelector('div').appendChild(newEle)
    
    setTimeout(()=>{
        // 【6】插入到已存在的节点，之前
        document.querySelector('#d1').insertBefore(newEle, 
                                            document.querySelector("#d1>p")
        );
    }, 1000)
    /*
        【重要】发现插入到元素两次，但是最终只显示一个！
        需要元素克隆来解决问题
    */
</script>
```


## 19、元素克隆
解决元素无法多次插入问题
`cloneNode(true)`: 深克隆，复制本身及其所有子节点
`cloneNode(false)`: 浅克隆，只复制本身，不复制子节点
```html
<div id="d1">
    <p>我是已存在的元素</p>
</div>
<script>
    var newEle = document.createElement('p')
    var textNode = document.createTextNode('这是新结点')
    newEle.appendChild(textNode)
    var attr = document.createAttribute('style')
    newEle.setAttributeNode(attr)
    newEle.style.color = 'green'

    // 插入到父节点
    document.getElementById('d1').appendChild(newEle)

    // 浅克隆
    var c1 = newEle.cloneNode(false)
    console.log(c1); // <p style="color: green;"></p>
    document.getElementById('d1').appendChild(c1) // 没有克隆出来文本节点，无显示内容

    // 深克隆
    var c2 = newEle.cloneNode(true)
    console.log(c2); // <p style="color: green;">这是新结点</p>
    document.getElementById('d1').appendChild(c2)

    var c3 = newEle.cloneNode(true)
    document.getElementById('d1').appendChild(c3)
</script>
```

## 20、元素删除
```html
<div id="d1">
    <p>这是正文1<br></p>
    <p>这是正文2</p>
</div>
<script>
    // 删除正文2
    document.getElementById('d1').removeChild(
        document.querySelectorAll('#d1>*')[1]
    );
</script>
```


## 21、事件三要素
`事件源`: 触发事件的对象，如button、input
`事件类型`: 如onclick事件、onchange时间、onfocus聚焦事件、onblur失焦事件、onmouseover鼠标经过事件
`事件处理程序`: 事件触发后，执行的程序
```html
<p id="showpanel"></p>
<input type="text" id="inp" onchange="show()">
<button onclick="check()">确定</button>
<script>
    function show() {
        document.getElementById('showpanel').innerText = document.getElementById('inp').value
    }
    function check() {
        alert("您输入的内容：" + document.getElementById('inp').value)
    }
</script>
```


## 22、事件e.target和this的区别
- `e`: 当前事件的本身对象，存储事件相关信息+触发对象(事件源)
- `e.target`: e是事件，那么e.target就是随着事件附带的事件源，<span style="color: red">是真正触发事件的对象</span>，如：`<button>按钮</button>`
- `this`: 根据<span style="color:red">绑定事件</span>处理程序的<span style="color:red">方式</span>不同，具有不同值
  - **采用`ele.onclick=function`或者`ele.addEventListener('click', function)`**：绑定事件时，**会自动传入绑定的对象作为this，拿谁绑定的，输出this就是谁**，如：`<button>按钮</button>`
  - **处理程序是`箭头函数` 或者 `绑定函数时不传入this`**：**那么this是当前环境对象**，如`Window`对象
```html
<script>
    function func1(e) {
        console.log(e.target);
        console.log(this);
    }
</script>
<button onclick="func1(event)">按钮1</button>
<!-- 
    <button onclick="func1(event)">按钮1</button>
    【绑定时不传入this，那么就是环境对象】
    Window对象
-->
<button onclick="func1.call(this, event)">按钮1-2</button>
<!-- 
    <button onclick="func1.call(this, event)">按钮1-2</button>
    【绑定时传入this，那就是当前对象】
    <button onclick="func1.call(this, event)">按钮1-2</button>
-->
<button>按钮2-js-onclick</button>
<!-- 
    <button>按钮2-js-onclick</button>
    【list[2]采用onclick=function，那this就是绑定时的对象】
    <button>按钮2-js-onclick</button>
-->
<button>按钮3-addEventListener</button>
<!-- 
    <button>按钮3-addEventListener</button>
    【list[3]采用addEventListener('',function)，那this就是绑定时的对象】
    <button>按钮3-addEventListener</button>
-->
<button>按钮4-箭头函数</button>
<!-- 
    <button>按钮4-箭头函数</button>
    【list[4]采用箭头函数，那this会继承环境对象】
    Window对象
-->
<script>
    var list = document.querySelectorAll('button')
    list[2].onclick = func1
    list[3].addEventListener('click', func1)
    list[4].addEventListener('click', (e)=>{
        console.log(e.target);
        console.log(this);
    })
</script>
```



## 23、事件捕获、冒泡
<!-- <img src="https://img2023.cnblogs.com/blog/1268049/202308/1268049-20230811110231735-1315005341.png" alt="捕获与冒泡图"> -->

![alt text](Web汇总.img\eventbubbledetail.png)
- 当事件发生时，会从顶层Window开始，向下走（称为`捕获阶段`），直到到达目标元素位置（称为`目标阶段`），然后往上走回去（称为`冒泡阶段`）
- 所以，**`捕获阶段`触发事件比`冒泡阶段`早！**
- 有些会冒泡，比如click、mouseover，有些是不冒泡的，比如blur、mouseenter


### 事件绑定
- `ele.addEventListener('eType', functoin, false)`: 第三个参数，不写默认为`false`，表示该程序只在**冒泡阶段触发**
- `ele.addEventListener('eType', functoin, true)`: 为`true`，表示该程序在**捕获阶段触发**
- **意思是说，绑定事件，可以选择在捕获阶段还是在冒泡阶段触发！自由选择**

```html
<style>
    #gk {
        border: 1px solid green;
        padding: 20px;
    }
    #bk {
        border: 1px solid black;
        padding: 20px;
    }
</style>
<div id="gk">
    <div id="bk">
        <button id="btn1">按钮1</button>
        <button id="btn2">按钮2</button>
    </div>
</div>
<script>
    document.getElementById('gk').addEventListener('click', function(e) {
        console.log(e.target + "触发 -- gk捕获！");
    }, true)
    document.getElementById('gk').addEventListener('click', function(e) {
        console.log(e.target + "触发 -- gk冒泡！");
    }, false)

    document.getElementById('bk').addEventListener('click', function(e) {
        console.log(e.target + "触发 -- bk捕获！");
    }, true)
    document.getElementById('bk').addEventListener('click', function(e) {
        console.log(e.target + "触发 -- bk冒泡！");
    }, false)

    document.getElementById('btn1').addEventListener('click', function(e) {
        console.log(e.target + "触发 -- btn1捕获！");
    }, true)
    document.getElementById('btn1').addEventListener('click', function(e) {
        console.log(e.target + "触发 -- btn1冒泡！");
    }, false)
    /*
        [object HTMLButtonElement]触发 -- gk捕获！
        [object HTMLButtonElement]触发 -- bk捕获！
        [object HTMLButtonElement]触发 -- btn1捕获！
        [object HTMLButtonElement]触发 -- btn1冒泡！
        [object HTMLButtonElement]触发 -- bk冒泡！
        [object HTMLButtonElement]触发 -- gk冒泡！
    */
</script>
```


### 阻止事件传播
`e.stopPropagation()`可以阻止事件向下一个阶段传播
```js
document.getElementById('bk').addEventListener('click', function(e) {
    console.log(e.target + "触发 -- bk捕获！");
    e.stopPropagation() // 阻止传播
}, true)
/*
    [object HTMLButtonElement]触发 -- gk捕获！
    [object HTMLButtonElement]触发 -- bk捕获！
*/
```


### 判断是否是本身触发
`e.currentTarget==e.target`
```js
ele.addEventListener('click', function() {
    console.log(e.target + "触发 -- ____捕获/冒泡！", e.currentTarget==e.target);
}, true/false)
/*
    [object HTMLButtonElement]触发 -- gk捕获！ false
    [object HTMLButtonElement]触发 -- bk捕获！ false
    [object HTMLButtonElement]触发 -- btn1捕获！ true
    [object HTMLButtonElement]触发 -- btn1冒泡！ true
    [object HTMLButtonElement]触发 -- bk冒泡！ false
    [object HTMLButtonElement]触发 -- gk冒泡！ false
*/
```

### js触发事件
`ele.dispatchEvent(new Event('eventType', { bubbles: false }))`可以用js触发指定元素的指定事件，并配置e对象
`bubbles: false`: 设定这个事件是否有冒泡能力，可以被对应阶段触发
在爬虫时有用
```html
<button id="btn">按钮</button>
<script>
    
    var btn = document.getElementById('btn')
    btn.addEventListener('click', function() {
        console.log('捕获！');
    }, true)
    btn.addEventListener('click', function() {
        console.log('冒泡！');
    }, false)

    var e = new Event('click', {bubbles: false})
    btn.dispatchEvent(e)
</script>
```






## 24、BOM案例


### 显示隐藏密码
```html
<input type="password" id="passwd"><button>显示</button>
<script>
    var btn = document.querySelector('button')
    btn.addEventListener('click', (e)=>{
        var inp = document.getElementById('passwd')
        if(e.target.innerText == '显示') {
            inp.type = 'text'
            e.target.innerText = '隐藏'
        } else {
            inp.type = 'password'
            e.target.innerText = '显示'
        }
    })
</script>
```


### 按钮排他
例如分页按钮，只能亮灯一个按钮
改变className
```html
<style>
    .selectd {
        background-color: rgb(255, 100, 100);
        color: white;
    }
</style>

<button>1</button>
<button>2</button>
<button>3</button>
<button>4</button>
<button>5</button>
<script>
    // 取消所有按钮的选中
    function unselectAll() {
        var btns = document.getElementsByTagName('button')
        for(var i=0; i<btns.length; i++) {
            btns[i].className = ''
        }
    }

    // 获取所有按钮
    var btns = document.getElementsByTagName('button')
    for(var i=0; i<btns.length; i++) {
        console.log(btns[i]);
        
        // 每个按钮都注册点击事件
        btns[i].addEventListener('click', (e) => {
            console.log(e);
            
            // 先清除样式
            unselectAll();
            // 为本身加上选中
            e.target.className = 'selectd'
        })
    }
</script>
```



## 25、BOM
BOM即当前浏览器的模型，包含了一些内置对象和功能
- `window`: 是浏览器窗口的顶级对象，也是全局对象。提供了对浏览器窗口的操作接口。
  - alert(), confirm(), prompt()：用户交互对话框
  - open(), close(), resizeTo(), moveTo()：窗口操作
    ```js
    window.open('https://www.baidu.com', "_blank") // 打开新窗口访问url，_self在本标签访问url
    window.resizeTo(100, 100) // 调整浏览器窗口大小，默认被禁用
    window.close() // 关闭当前页面
    window.moveTo(100, 500) // 移动浏览器窗口位置，默认被禁用
    ```
  - setInterval(), setTimeout(), clearInterval(), clearTimeout()：定时器功能。
    ```js
    // 延迟执行，只执行一次
    var timer1 = setTimeout(()=>{
        console.log("延迟Hello");
    }, 2000)
    // 取消定时器
    // clearTimeout(timer1)
    ```
    ```js
    // 循环执行
    var timer2 = setInterval(()=>{
        console.log("循环Hello");
    }, 2000)
    // 取消定时器
    // clearInterval(timer2)
    ```
- `window.document 或 document`: 即DOM对象，用来操作文档
  - getElementById(), getElementsByClassName(), querySelector(), querySelectorAll()：获取元素。
  - createElement(), createTextNode(), appendChild(), removeChild()：创建和操作DOM节点。
  - write(), writeln()：向文档写入内容
- `location`: 包含浏览器地址栏相关信息
  - href：完整的URL
  - protocol, host, hostname, pathname, search, hash：URL的不同部分
  - assign(), replace(), reload()：导航和刷新页面
    ```js
    console.log(window.location.href);
    // http://127.0.0.1:5500/JS.html?abc=123&def=456#ELE1
    console.log(location.protocol);
    // http:
    console.log(location.host);
    // 127.0.0.1:5500
    console.log(location.hostname);
    // 127.0.0.1
    console.log(location.pathname);
    // /JS.html
    console.log(location.search);
    // ?abc=123&def=456
    console.log(location.hash);
    // #ELE1


    location.assign("https://www.baidu.com") // 地址栏改为目标url进行访问【无法后退】
    location.replace("https://www.baidu.com") // 地址栏改为目标url进行访问【可以后退】
    location.reload() // 刷新页面
    ```
- `navigator`: 包含浏览器相关信息
  - appCodeName, appName, appVersion：浏览器名称和版本信息。
  - platform：操作系统类型。
  - userAgent：用户代理字符串。
  - geolocation：地理位置API。
    ```js
    console.log(window.navigator.appCodeName); // Mozilla
    console.log(navigator.appName); // Netscape
    console.log(navigator.appVersion); // 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0
    console.log(navigator.platform); // Win32
    console.log(navigator.userAgent); // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0
    console.log(navigator.geolocation); // Geolocation{}
    ```
- `screen`: 提供了有关用户屏幕的信息
  - width, height：屏幕宽度和高度（以像素为单位）。
  - availWidth, availHeight：可用宽度和高度（去掉任务栏等占用的空间）。
- `history`: 提供了对浏览器历史记录的访问，可以用来导航到之前或之后的页面
  - back(), forward(), go()：导航历史记录。
  - pushState(), replaceState()：添加或替换历史记录条目（HTML5新增）
    ```js
    history.forward() // 点击前进
    history.back() // 点击后退
    history.go(0) // 重新加载页面
    history.go(3) // 跳转到栈内3号页面
    ```

