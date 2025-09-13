# 电商网站

基于 Next.js + React + TypeScript 的全栈电商网站项目。

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **UI 库**: React 18
- **编程语言**: TypeScript
- **样式**: Tailwind CSS
- **开发工具**: ESLint

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
├── app/                 # Next.js App Router 目录
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局组件
│   └── page.tsx        # 首页组件
├── public/             # 静态资源
├── package.json        # 项目依赖配置
├── tsconfig.json       # TypeScript 配置
├── tailwind.config.js  # Tailwind CSS 配置
└── next.config.js      # Next.js 配置
```

## 开发命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 代码检查
