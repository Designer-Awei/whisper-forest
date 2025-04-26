# Echo Scape 音乐疗愈游戏

## 项目简介

Echo Scape 是一款网页端音乐疗愈游戏，玩家可在不同场景中移动角色，收集声音元素，通过混音创造属于自己的治愈音乐。游戏注重治愈体验与互动性，适合各年龄段用户。

## 主要玩法
- 在地图场景中自由移动角色，靠近声音元素触发对话与收集。
- 已收集的声音可在声音背包和混音区自由组合、试听、保存和分享。
- 每个场景有独特的背景音乐和声音元素，支持多关卡切换。

## 主要组件
- `TopBar`：顶部功能区，包含背包、通知、设置按钮及对应弹窗。
- `SettingsModal`：设置弹窗，调节背景音乐和声音元素音量。
- `BagModal`：声音背包弹窗，展示已收集声音元素。
- `NotifyModal`：任务通知弹窗，展示任务进度与提示。
- `DialogModal`：剧情对话弹窗，支持虚化背景、角色图片、逐句对话。
- `LevelSelector`：关卡选择页（建议实现），多关卡切换与进入。
- `MapScene`：地图场景组件，承载人物、声音元素等。
- `Character`：人物动画，支持朝向与移动。
- `SoundElement`：声音元素，场景内可收集。
- `SoundLibrary`：声音库，展示和试听已收集声音。
- `Mixer`：混音器，拖拽混音、试听、音量调整（待开发）。
- `SaveSharePanel`：保存与分享面板（待开发）。

## 项目结构
```
/public
  /assets
    /icon/                // 功能按钮icon
    /characters/          // 人物gif
    /scenes/              // 场景素材、背景、音频
/components              // 主要功能组件
/src
  /hooks                 // 自定义hooks
  /store                 // 全局状态管理
  /styles                // 全局样式
  /utils                 // 工具函数
/pages
  index.tsx              // 主页/关卡选择
  scene/                 // 场景页面
  share/                 // 作品分享页
  /api                   // 后端API接口
/README.md
```

## 技术栈
- Next.js + React：前后端一体化开发，支持页面路由、API、静态资源管理。
- TypeScript：类型安全，提升开发效率。
- Howler.js：音频播放与混音。
- styled-components：组件化样式。
- Ant Design：UI 组件库。
- Redux Toolkit：全局状态管理。

## 运行与开发
1. 安装依赖：`npm install`
2. 启动开发：`npm run dev`
3. 访问：`http://localhost:3000`

## 贡献与协作
欢迎提出建议和 PR，共同完善游戏体验！
