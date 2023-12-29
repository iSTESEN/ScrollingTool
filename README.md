# ScrollingTool
- STESEN
- 通用刷题工具，纯前端（单选、多选、填空）
- 2023-12-28
- UI采用Bootstrap 4.6

## 更新机制
- 是的，本项目支持检测“工具版本”更新、“数据库版本”更新，而且是在Github托管的纯前端项目！

### 实现原理
- 在同一个项目内，每个页面是同源的，我们可以制作一个update.html专门来推送版本更新
- 在index.html里面嵌入一个iframe，src指向update.html
- index每5分钟刷新iframe，即可得到最新的update数据！

### 本项目更新关键词
- `update.html`
在此页面，有一个更新消息对象，这个消息对象存储的版本号，会被客户端拿来比对，以此检查更新
```html
var toolUpdate = {
      type: 'update', // 消息的类型，更新消息则是'update'
      version: 'RELEASE_5 (2023-12-28)', // tool最新版本
      dataSource: { // 个性化数据库
          JSHistory: 'DATA_5（2023-12-28）'
          // JSHistory：农林金山史纲数据库名，确定后不能改
          // 'DATA_5（2023-12-28）'：对应数据库最新版本号
      }
}
```
- `index.html`
客户端中，有一个checkUpdateEvent函数，用来接受update消息，同时使用checkVersionUpdate函数来判断是否为版本更新或数据库更新

### 更新工具版本
- 为什么需要推送更新？用户可能长时间不刷新页面，导致无法展示最新功能
- 更新版本就是`刷新页面`，所以接受到更新通知，就可以弹出来让用户点击刷新
- 工具版本存储在localstorage，版本名key：toolVersion

### 更新数据库版本
- 就像我们自己学校的题库，我们导入完了，总有修改数据库的时候，所以需要更新
- 之前版本是直接将数据库嵌入到index，但是导致加载速度缓慢
- 从RELEASE_5版本开始，数据库解耦，单独存放，我们学校题库存放在JSHistorydata.html
- **如何更新数据库？**
- 将JSHistorydata.html嵌入到index的iframe，JSHistorydata被加载后，会第一时间载入数据库
- 并将版本号写入到localstorage，数据库名key：STdataName，数据库版本key：STdataVer
- 做完以上操作，会发送通知到index，index的checkUpdateEvent函数检测到数据库载入完毕的消息，则会更新页面数据
```html
// 导入完毕后事件对象
var updateObj = {
    type: 'loaddata', // 因为是数据库载入消息，所以类型是loaddata
    updateData: true // 数据库载入结果
};
```

### 如何推送更新
- **工具版本更新**
- 先更改index.html的`toolVersion`变量，提交pages部署
- 在更改update.html的`toolUpdate.version`，两者要一模一样！
- 将update提交pages部署后，静待客户端接受更新提醒（默认5分钟检测一次）
- **数据库更新**
- 先更改JSHistorydata.html的`datasourceVer`变量，提交pages部署
- 在更改update.html的`toolUpdate.dataSource.[datasourceName] = datasourceVer`，两者ver要一模一样！
- 将update提交pages部署后，静待客户端接受更新提醒（默认5分钟检测一次）

## 设置

### 手动录入选择题/多选题
- `题目描述`：就是题目内容
- `选项`：有一个`输入分割符`，和一个`选项内容`
  - `输入分割符`：就是用某个符号，分割每个选项，比如`A. 江南制造总局`，此时输入`.`作为分隔符，录入数据则会变成` 江南制造总局`，为了避免后续打乱时选项的干扰，不需要分割清空输入框即可
  - `选项内容`：比如4个选项ABCD，则在此输入框，每行代表一个选项，ABCD则有4行
- `正确答案`：如果单选题，则如果答案为A对应输入`1`，D对应输入`4`；如果为多选题，答案为AD则输入`1,4`
- `保存题目`：点击后即可追加到数据库，切记是追加

### 手动录入填空题
- `题目描述`：就是题目内容
- `正确答案`：就是填空题的答案啦
- 不支持一道题多个答案

  
### 导出数据
- 可以将自己手动录入的题库，导出给伙伴

### 一键导入
- 一键导入可以对应导入单选题、多选题、填空题，尝试过`导出数据`，就知道，会将题库以JSON字符串格式导出，原样粘贴进去，点击导入即可
- 切记是追加到数据库

### 清空数据库
- 没啥好说的，谨慎操作

## 刷题
- `刷__题`：输入0则是刷全部，输入个数则出现对应条题目
- `限制___题目来源`：就是在录入时，填写的题目来源
- 其中，题目顺序随机，选项顺序随机！

## 计数牌
- 记录正确次数、错误次数，同时变换字体大小，嘿嘿
