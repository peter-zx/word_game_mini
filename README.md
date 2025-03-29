
小程序中的页面结构是「一个页面 = 一个文件夹 + 三个核心文件」
```
pages/
├── index/
│   ├── index.wxml      ← 页面结构（类似 HTML）
│   ├── index.wxss      ← 页面样式（类似 CSS）
│   ├── index.js        ← 页面逻辑（类似 JS 交互）
│   └── index.json      ← 页面配置（可选）

```

```
👇 我来类比一下（你会更容易懂）
你之前的前端 HTML 项目	小程序页面结构对应
index.html	index.wxml（结构）
<style> 或 CSS 文件	index.wxss（样式）
<script> 或 JS 文件	index.js（逻辑）
页面 meta 信息或 config	index.json（配置）
```



```
word_game_mini/                         # ← 你的整个小程序项目主目录
├── app.js                              # 小程序全局逻辑代码（类似入口文件）
├── app.json                            # 小程序全局配置文件（页面路由、导航栏等）
├── app.wxss                            # 小程序全局样式表（类似全站CSS）

├── pages/                              # 所有页面都放在这个文件夹里
│
│   ├── index/                          # 模式选择页面（选择 65秒 / 125秒 / 无尽模式）
│   │   ├── index.wxml                  # 页面结构（相当于HTML）
│   │   ├── index.wxss                  # 页面样式（相当于CSS）
│   │   ├── index.js                    # 页面逻辑（相当于JS交互）
│   │   └── index.json                  # 页面配置（如标题，是否启用分享等）

│   ├── level/                          # 难度选择页面（Lv1 到 Lv6）
│   │   ├── level.wxml                  # 页面结构
│   │   ├── level.wxss                  # 页面样式
│   │   ├── level.js                    # 页面逻辑
│   │   └── level.json                  # 页面配置

│   ├── game/                           # 游戏主页面（显示题目、计时、判断匹配）
│   │   ├── game.wxml                   # 页面结构
│   │   ├── game.wxss                   # 页面样式
│   │   ├── game.js                     # 页面逻辑
│   │   └── game.json                   # 页面配置

│   ├── result/                         # 结果页（展示分数和最近5次成绩）
│   │   ├── result.wxml                 # 页面结构
│   │   ├── result.wxss                 # 页面样式
│   │   ├── result.js                   # 页面逻辑
│   │   └── result.json                 # 页面配置

│   └── add_words/                      # 添加单词库页面（支持用户自定义词库）
│       ├── add_words.wxml             # 页面结构
│       ├── add_words.wxss             # 页面样式
│       ├── add_words.js               # 页面逻辑
│       └── add_words.json             # 页面配置

├── data/                               # 数据资源文件夹
│   ├── default_words.js                # 默认单词库（原CSV转成JS模块）
│   ├── user_words.js                   # 用户自定义单词库（存入缓存或云端）

├── utils/                              # 工具函数模块
│   ├── word_manager.js                 # 单词加载、随机抽词、组装题目
│   └── score_manager.js                # 成绩存取工具（最多保留5条记录）

└── README.md                           # 可选：项目说明（你写给自己或别人看的）


```

💡 每个部分你需要干什么：
部分	用途	你要做的事
app.js	整个小程序入口逻辑	一般保持默认即可
app.json	配置每个页面的路径	每增加页面都需要在这里写一次路径
pages/	你所有的游戏页面	每个页面都是一个文件夹 + 四个文件组成
data/	模拟原来 CSV 和 JSON 的数据	可以直接写在 JS 文件中
utils/	把以前 Python 中处理单词和成绩的函数用 JS 实现


✅ 接下来建议你做的事
新建这个结构

用微信开发者工具，点击“新建项目”

在 pages 里新建 index 文件夹，并添加 index.wxml, index.js 等四个文件

我可以生成 index 页面完整代码（包括 UI、样式和跳转逻辑）

再逐步开发 level → game → result 页面

我帮你把 default_words.csv 转成 JS 模块

```
 .wxml / .wxss / .js / .json 文件结构，是微信小程序专属的开发语言格式，只能在 微信开发者工具 里被完整识别、运行、预览。

🧠 简单说明一下原因：
✅ .wxml（WeiXin Markup Language）
类似 HTML，但有微信小程序自己的标签和语法（如 <view>、<text>、<button> 等）

VSCode 不认识 .wxml 标签结构，除非装特定插件

✅ .wxss（WeiXin Style Sheet）
和 CSS 基本相同，但支持的属性更少，微信限制了部分样式

VSCode 也不直接识别 .wxss 为标准 CSS，但可以高亮

✅ .js
是标准 JavaScript，但写法遵循微信小程序 API 规范（如 Page({})、wx.navigateTo() 等）

✅ .json
配置页面专属信息（导航栏标题、是否允许分享等）

🧰 所以推荐你这样做开发：
工具	作用
✅ 微信开发者工具	运行/测试/调试/预览微信小程序，官方环境
✅ VSCode	编辑器辅助你写代码，结构管理、插件支持好
🔄 推荐组合使用	在 VSCode 写代码，在微信开发者工具实时预览

🎯 总结一句话：
.wxml/.wxss/.js 是微信小程序的“专用语言格式”，VSCode 可以写，只有微信开发者工具能运行测试。

```