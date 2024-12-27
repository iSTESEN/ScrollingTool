# HTML
- https://www.bilibili.com/video/BV1hP411679m/?p=10&spm_id_from=pageDriver&vd_source=1508b9a92b58beae7f2da553b09aff88
- 文档参考：https://developer.mozilla.org/zh-CN/docs/Web/HTML


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
- 自1996年起，HTML规范的维护由万维网联盟（W3C）负责
- 超文本标记语言（不止有文本，还有图片、文件等...多媒体元素）
- 从HTML4后，出现了`xhtml`这种语言要求严格，但不受众，需要遵循xml格式
- 现在主流是`HTML5`


# VSCode插件
- vscode-icons：能更改文件的图表，在左下角设置-主体-产品图标主题更换
- Auto Rename Tag：修改HTML的标签时，可以同步修改尾标签
- Live Server：通过服务器的方式打开网页，修改内容可以自动刷新


# 注释
- `Ctrl + /`
```html
<!-- 这是注释内容 -->
<!-- 
    1、
    2、
-->
```

# 标签
- 标签不分大小写，建议全小写


## 按结构分类
- 前后围堵标签：`<p></p>`
- 自闭和标签：`<br/>`

## 按效果分类
- **`【块级元素】`**：该标签元素自己占用一行`<p></p>`
  - **块级元素，默认宽度是父元素的宽度！**
- **`【行内/内敛元素】`**：该标签元素和别的元素共享一行`<span></span>`
  - **行内元素，无法设置高度height、宽度width！**
  - **行内元素，设置margin-top/bottom或者padding-top/bottom有关高度的，都无法撑开外部容器！**
  - **设置margin-left/right或者padding-left/right是有效的，可以撑开左右**
  - **高度宽度与内容有关**
- **`【行内块级元素】`**：既有块级元素特性，又有行内元素特性
  - **可以设置高度、宽度**
  - <img\>和<input\>等就是

## 标签嵌套
- 标签的嵌套是发生在`围堵标签`的
- **块级元素**：可以嵌套`块级元素/行内元素`
  ```html
  <p><p>块级元素</p><strong>这是行内元素</strong></p>
  ```
  <showpane><p><p>块级元素</p><strong>这是行内元素</strong></p></showpane>
- **行内元素**：可以嵌套`行内元素`。如果嵌套块级元素，行内的特性失效
  ```html
  <span><em>嵌套em强调</em>&nbsp;&nbsp;<strong>加粗</strong><p>嵌套块元素</p></span>
  ```
  <showpane><span><em>嵌套em强调</em>&nbsp;&nbsp;<strong>加粗</strong></span><p>不能嵌套块元素</p></showpane>


## 标签属性

### 布尔属性
- 只写属性名，但不写属性值，称为布尔属性
- 有写就是true，没写就是false
```html
<input type="text" disabled />
<input type="text" />
```
<showpane>
  <input type="text" disabled />
  <input type="text" />
</showpane>


### 属性值引号
- 可以用`双引号`，可以用`单引号`
- 如果属性值包含了双引号，那最外层就要用单引号
```html
<input type="text" value="'你好'"/>
<input type="text" value='"世界"'/>
```
<showpane>
  <input type="text" value="'你好'"/>
  <input type="text" value='"世界"'/>
</showpane>

### 特殊字符
- 因为`<> " ' & 空格`字符被HTML使用了，需要使用特殊字符代替
```html
<a href="https://www.baidu.com" title="&lt;这&nbsp;是&nbsp;百&nbsp;度&gt;">&quot;&lt;这&nbsp;也是&nbsp;百&nbsp;度&gt;&apos;&amp;</a>
```
<showpane>
  <a href="https://www.baidu.com" title="&lt;这&nbsp;是&nbsp;百&nbsp;度&gt;">&quot;&lt;这&nbsp;也是&nbsp;百&nbsp;度&gt;&apos;&amp;</a>
</showpane>




# HTML结构
```html
<!DOCTYPE html>

<html lang=zh-CN>
  <head></head>
  <body></body>
</html>
```

## <head\>头标签

### <title\>
- 可以设置网页`标签名称`
```html
<html>
  <head>
    <title>这是网页标题</title>
  </head>
</html>
```

### <meta\>
- **设置网页的字符集**
```html
<html>
  <head>
    <meta charset="utf-8" />
  </head>
</html>
```
- **设置作者信息**
```html
<html>
  <head>
    <meta name="author" content="STESEN">
  </head>
</html>
```
- **设置关键词信息（爬虫抓取）**
```html
<html>
  <head>
    <meta name="keywords" content="关键词1,关键词2,关键词3">
  </head>
</html>
```
- **设置网页描述信息（爬虫抓取）**
```html
<html>
  <head>
    <meta name="description" content="这是关于这个网页的简要描述信息，会被爬虫抓取到">
  </head>
</html>
```

### <base\>
- `<base href="">`
- 可以设置页面中a标签请求默认的前缀，a标签只需要写非`/`开头的URI即可





<br><br>


# 常用标签

## <a\>超链接
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a
- 点击超链接跳转指定URL
- 可以嵌套其他元素，让元素具有超链接功能

**属性**
- `target`：可以设置跳转的位置

```html
<a href="https://www.baidu.com" title="这是百度" target="_blank">跳转百度到新窗口</a>
<a href="https://www.baidu.com" title="百度一下，你就知道">
  <img src="https://www.baidu.com/img/flexible/logo/pc/result@2.png"/>
</a>
```
<showpane>
  <a href="https://www.baidu.com" title="这是百度" target="_blank">跳转百度到新窗口</a>
  <a href="https://www.baidu.com" title="百度一下，你就知道">
    <img src="https://www.baidu.com/img/flexible/logo/pc/result@2.png"/>
  </a>
</showpane>


## <h_\>标题
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements
```html
<h1>标题</h1>
<h2>标题</h2>
<h3>标题</h3>
<h4>标题</h4>
<h5>标题</h5>
<h6>标题</h6>
```
<showpane>
  <h1>标题</h1>
  <h2>标题</h2>
  <h3>标题</h3>
  <h4>标题</h4>
  <h5>标题</h5>
  <h6>标题</h6>
</showpane>


## <p\>段落
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p
```html
<p>第一个段落</p>
<p>第二个段落</p>
<p>第三个段落</p>
```
<showpane>
  <p>第一个段落</p>
  <p>第二个段落</p>
  <p>第三个段落</p>
</showpane>


## <ul\>无序列表
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul
```html
<ul type="circle">
  <li>百度</li>
  <li>高德</li>
  <li>腾讯</li>
  <li>凯立德</li>
</ul>
```
<showpane>
<ul type="circle">
  <li>百度</li>
  <li>高德</li>
  <li>腾讯</li>
  <li>凯立德</li>
</ul>
</showpane>

## <ol\>有序列表
- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol
```html
<ol type="1">
  <li>百度
    <ul>
      <li>音乐</li>
      <li>图片</li>
      <li>新闻</li>
    </ul>
  </li>
  <li>高德</li>
  <li>腾讯</li>
  <li>凯立德</li>
</ol>
```
<showpane>
<ol type="1">
  <li>百度
    <ul>
      <li>音乐</li>
      <li>图片</li>
      <li>新闻</li>
    </ul>
  </li>
  <li>高德</li>
  <li>腾讯</li>
  <li>凯立德</li>
</ol>
</showpane>



## <em\><i\>斜体
- `<em>`是带语义化的斜体
- `<i>`是普通斜体样式

**语义化**
1. 标签有对应显示效果
2. 可以被爬虫抓取，识别成强调
3. 可读性好

```html
<p>这是<em>语义化的斜体</em></p>
<p>这是<i>普通的斜体</i></p>
```
<showpane>
<p>这是<em>语义化的斜体</em></p>
<p>这是<i>普通的斜体</i></p>
</showpane>



## <strong\><b\>加粗
- `<strong>`是带语义化的加粗
- `<b>`是普通加粗样式

```html
<p>这是<strong>语义化的加粗</strong></p>
<p>这是<b>普通的加粗</b></p>
```
<showpane>
<p>这是<strong>语义化的加粗</strong></p>
<p>这是<b>普通的加粗</b></p>
</showpane>


## <img\>图片
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img

**属性**
- `src`：可以写本地地址、网络URL地址
- `alt`：图片未加载时，显示的文字
- `title`：鼠标悬浮显示的文字
- `width`：设置宽度
- `height`：设置高度

```html
<img src="HTML.img/baidu.png" title="这是百度logo" width="50px">
<img src="https://www.baidu.com/img/flexible/logo/pc/result@2.png" height="100px">
<img src="HT.png" alt="图片未加载时，显示我">
```

<showpane>
<img src="HTML.img/baidu.png" title="这是百度logo" width="50px">
<img src="https://www.baidu.com/img/flexible/logo/pc/result@2.png" height="100px">
<img src="HT.png" alt="图片未加载时，显示我">
</showpane>


## <table\>表格
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table

**标签**
- `<caption>`：表格标题
- `<tr>`：表格的一行
- `<th>`：一个格子，表示标题的格子，内容会自动加粗、居中
- `<td>`：一个格子


**属性**
- `<table border="1px">`：表格外边框+每个格子边框的线条多粗
- `<table cellspacing="0">`：每个格子之间间隔大小
- `<table cellpadding="10px">`：格子内边距
- `<table align="center">`：表格在块中显示的位置
- `<tr/td/th align="center">`：内容在格子内的显示位置
- `<td rowspan="2">`：向下，纵向合并两行
- `<td colspan="2">`：向右，横向合并两列


```html
  <table border="1px" cellspacing="0" cellpadding="20px" align="center">
    <caption>
        <h3>这是表格大标题</h3>
    </caption>
    <tr bgcolor="yellow">
      <th align="left">姓名</th>
      <th align="center">班级</th>
      <th align="right">学号</th>
      <th >性别</th>
    </tr>
    <tr>
      <td>小明</td>
      <td rowspan="2">计算机科学一班</td>
      <td>233333301</td>
      <td>男</td>
    </tr>
    <tr>
      <td bgcolor="pink">小红</td>
      <td>1231232132</td>
      <td>女</td>
    </tr>
    <tr>
      <td>张三</td>
      <td>大数据技术3班</td>
      <td>123213213</td>
      <td>男</td>
    </tr>
    <tr>
        <td colspan="4" align="right">总计：3人</td>
    </tr>
  </table>
```
<showpane>
  <table border="1px" cellspacing="0" cellpadding="20px" align="center">
    <caption>
        <h3>这是表格大标题</h3>
    </caption>
    <tr bgcolor="yellow">
      <th align="left">姓名</th>
      <th align="center">班级</th>
      <th align="right">学号</th>
      <th >性别</th>
    </tr>
    <tr>
      <td>小明</td>
      <td rowspan="2">计算机科学一班</td>
      <td>233333301</td>
      <td>男</td>
    </tr>
    <tr>
      <td bgcolor="pink">小红</td>
      <td>1231232132</td>
      <td>女</td>
    </tr>
    <tr>
      <td>张三</td>
      <td>大数据技术3班</td>
      <td>123213213</td>
      <td>男</td>
    </tr>
    <tr>
        <td colspan="4" align="right">总计：3人</td>
    </tr>
  </table>
</showpane>


## <form\>表单
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form
表单的标签，内部可以包裹输入控件、按钮控件、选择控件....
- **将每个被包裹的控件，的`name属性`和`value值`提交到服务器**

**属性**
- `action`：请求的地址，不填则默认`document.location.href`
- `method`：HTTP请求的方式，默认get方法，可以指定位post
  - 使用`post`时，可以指定数据格式，比如`enctype="multipart/form-data"`


### 输入控件


#### 文本框
- `<input type="text" name="username" id="username" placeholder="用户名">`
- 用来输入明文文本的

#### 密码框
- `<input type="password" name="userpass" id="userpass" placeholder="密码" value="1234" maxlength="5">`
- 输入的内容会被密文显示

#### 文本域
- `<textarea name="userinfo" id="userinfo" cols="30" rows="10" placeholder="请输入用户简介"></textarea>`


```html
<form action="" method="get">
    用户名<input type="text" name="username" id="username" placeholder="用户名"><br>
    密码<input type="password" name="userpass" id="userpass" placeholder="密码" value="1234" maxlength="5"><br>
    用户简介<textarea name="userinfo" id="userinfo" cols="30" rows="10" placeholder="请输入用户简介"></textarea>
</form>
```
<showpane>
<form action="" method="get">
    用户名<input type="text" name="username" id="username" placeholder="用户名"><br>
    密码<input type="password" name="userpass" id="userpass" placeholder="密码" value="1234" maxlength="5"><br>
    用户简介<textarea name="userinfo" id="userinfo" cols="30" rows="10" placeholder="请输入用户简介"></textarea>
</form>
</showpane>



### 选择控件

#### 单选
**属性**
- `name`：绑定到form提交时的key，多个选项绑定同一个name
- `value`：是form提交时提交的value
- `checked`：布尔属性，写上代表生效，默认选中

```html
性别：男<input type="radio" name="sex" value="1" checked>
      女<input type="radio" name="sex" value="0">
```
<showpane>
性别：男<input type="radio" name="sex" value="1" checked>
      女<input type="radio" name="sex" value="0">
</showpane>


#### 多选
- 当提交方法是get时，多选项会以重复key的方式出现在URL`?hobby=dance&hobby=rap`
**属性**
- `name`：绑定到form提交时的key，多个选项绑定同一个name
- `value`：是form提交时提交的value
- `checked`：布尔属性，写上代表生效，默认选中

```html
爱好：唱<input type="checkbox" name="hobby" value="sing" checked>
      跳<input type="checkbox" name="hobby" value="dance">
      Rap <input type="checkbox" name="hobby" value="Rap">
```
<showpane>
爱好：唱<input type="checkbox" name="hobby" value="sing" checked>
      跳<input type="checkbox" name="hobby" value="dance">
      Rap <input type="checkbox" name="hobby" value="Rap">
</showpane>



#### 下拉框
- 可以多选，也可以单选
- **多选时**
  - 添加`multiple`属性，并添加`size`属性，来控制页面上同时显示几个可选项

```html
住址：<select name="addr" id="addr">
        <option value="SH" selected>上海</option>
        <option value="BJ">北京</option>
        <option value="GD">广东</option>
      </select><br>

期望选课：<select name="wantsubject" multiple size="3">
            <option value="YW">语文</option>
            <option value="SX">数学</option>
            <option value="YY">英语</option>
            <option value="WL">物理</option>
            <option value="DL">地理</option>
          </select><br>
```

<showpane>
住址（单选）：<select name="addr" id="addr">
        <option value="SH" selected>上海</option>
        <option value="BJ">北京</option>
        <option value="GD">广东</option>
      </select><br>

期望选课（多选）：<select name="wantsubject" multiple size="3">
            <option value="YW">语文</option>
            <option value="SX">数学</option>
            <option value="YY">英语</option>
            <option value="WL">物理</option>
            <option value="DL">地理</option>
          </select><br>
<p><strong>Tip：按住Ctrl可以多选</strong></p>
</showpane>


### 文件控件
- 文件上传要求`post`方法，并且以支持文件流的形式上传，比如`enctype="multipart/form-data"`

```html
<form action="" method="post" enctype="multipart/form-data">
        头像<input type="file" name="avage"><br>
</form>
```
<showpane>
<form action="" method="post" enctype="multipart/form-data">
        头像<input type="file" name="avage"><br>
</form>
</showpane>


### 隐藏域
- 可以在表单提交时带上信息，但是在界面不显示出来

```html
<input type="hidden" name="hidekey" value="这是隐藏内容">
```
<showpane>
<input type="hidden" name="hidekey" value="这是隐藏内容">
</showpane>



### 按钮控件

```html
<input type="submit" value="新建用户">
<input type="reset" value="重置信息">
<button value="">普通按钮</button>
```
<showpane>
<input type="submit" value="新建用户">
<input type="reset" value="重置信息">
<button value="">普通按钮</button>
</showpane>


### <label\>标签
- 作为标签的用法，点击标签可以获取for对应的控件焦点

```html
<label for="idVal">我是标签</label>
<input type="text" id="idVal">
```
<showpane>
<label for="idVal">我是标签</label><input type="text" id="idVal">
</showpane>


### 案例
```html
<form action="" method="get" enctype="multipart/form-data">
    <input type="hidden" name="hidekey" value="这是隐藏内容">
    <label for="avage">头像</label><input type="file" id="avage" name="avage"><br>
    <label for="username">用户名</label><input type="text" name="username" id="username" placeholder="用户名" disabled><br>
    <label for="userpass">密码</label><input type="password" name="userpass" id="userpass" placeholder="密码" value="1234" maxlength="5"><br>
    <label for="userinfo">用户简介</label><textarea name="userinfo" id="userinfo" cols="30" rows="10" placeholder="请输入用户简介"></textarea><br>
    性别：男<input type="radio" name="sex" value="1" checked>
          女<input type="radio" name="sex" value="0"><br>
    爱好：唱<input type="checkbox" name="hobby" value="sing" checked>
          跳<input type="checkbox" name="hobby" value="dance">
          Rap <input type="checkbox" name="hobby" value="Rap"><br>
    <label for="addr">住址：</label><select name="addr" id="addr">
            <option value="SH" selected>上海</option>
            <option value="BJ">北京</option>
            <option value="GD">广东</option>
          </select><br>

    <label for="wantsubject">期望选课：</label><select id="wantsubject" name="wantsubject" multiple size="3">
                <option value="YW">语文</option>
                <option value="SX">数学</option>
                <option value="YY">英语</option>
                <option value="WL">物理</option>
                <option value="DL">地理</option>
              </select><br>

    
    <input type="submit" value="新建用户">
    <input type="reset" value="重置信息">
    <button value="">普通按钮</button>

</form>
```
<showpane>
<form action="" method="get" enctype="multipart/form-data">
    <input type="hidden" name="hidekey" value="这是隐藏内容">
    <label for="avage">头像</label><input type="file" id="avage" name="avage"><br>
    <label for="username">用户名</label><input type="text" name="username" id="username" placeholder="用户名" disabled><br>
    <label for="userpass">密码</label><input type="password" name="userpass" id="userpass" placeholder="密码" value="1234" maxlength="5"><br>
    <label for="userinfo">用户简介</label><textarea name="userinfo" id="userinfo" cols="30" rows="10" placeholder="请输入用户简介"></textarea><br>
    性别：男<input type="radio" name="sex" value="1" checked>
          女<input type="radio" name="sex" value="0"><br>
    爱好：唱<input type="checkbox" name="hobby" value="sing" checked>
          跳<input type="checkbox" name="hobby" value="dance">
          Rap <input type="checkbox" name="hobby" value="Rap"><br>
    <label for="addr">住址：</label><select name="addr" id="addr">
            <option value="SH" selected>上海</option>
            <option value="BJ">北京</option>
            <option value="GD">广东</option>
          </select><br>
    <label for="wantsubject">期望选课：</label>
    <select id="wantsubject" name="wantsubject" multiple size="3">
                <option value="YW">语文</option>
                <option value="SX">数学</option>
                <option value="YY">英语</option>
                <option value="WL">物理</option>
                <option value="DL">地理</option>
              </select><br>
    <input type="submit" value="新建用户">
    <input type="reset" value="重置信息">
    <button value="">普通按钮</button>
</form>
</showpane>


## <div\>块标签
- 该标签是块级标签，占用一行
- 块级元素，默认宽度是父元素的宽度！
- 除了块特性，没有其他样式

## <span\>行内标签
- 该标签是行内标签
- 除了行内特性，没有其他样式

```html
<div><span>我是行内<strong>标签</strong></span><span>我是行内标签</span></div>
<div><span>我是行内标签</span><span>我是行内标签</span></div>
```
<showpane>
<div><span>我是行内<strong>标签</strong></span><span>我是行内标签</span></div>
<div><span>我是行内标签</span><span>我是行内标签</span></div>
</showpane>