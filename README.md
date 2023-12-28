# ScrollingTool
- STESEN
- 通用刷题工具，纯前端（单选、多选、填空）
- 2023-12-27
- 没搞UI挺丑的，将就用下

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
