# CET通 (cettong.cn)

> 一个完全免费、开源的四六级英语考试复习网站
> 海量真题 · 模拟考试 · 智能错题本 · 一次过四六级

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

🌐 官网：<https://cettong.cn>

## ✨ 特色

- 📚 **覆盖 CET-4 / CET-6 双级别**：听力 / 阅读 / 翻译 / 写作 / 词汇 5 大模块
- 🎯 **历年真题 + 模拟题**：2010-2025 完整题库
- 🧠 **智能错题本**：自动归类，薄弱点精准突破
- 📊 **真实考场模拟**：估分准确
- 💻 **全平台响应式**：手机 / 平板 / 电脑都能用
- 🆓 **永久免费**：所有功能对所有用户开放，**无套路、无广告、无会员**

## 🛠 技术栈

- **框架**：[Next.js 16](https://nextjs.org) (App Router) + React 19
- **样式**：TailwindCSS 4
- **数据库**：SQLite / libSQL (Turso) via [Prisma 7](https://prisma.io)
- **鉴权**：JWT (HTTP-Only Cookie)
- **部署**：[Vercel](https://vercel.com) (全球 CDN + Edge)

## 🚀 快速开始

### 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/whoamiARC/cet-website.git
cd cet-website

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env
# 编辑 .env，至少设置 JWT_SECRET

# 4. 初始化数据库 + 种子数据
npx prisma migrate dev
npx prisma db seed

# 5. 启动开发服务器
npm run dev
```

打开 <http://localhost:3000> 访问。

### 管理员注册

注册时使用 `.env` 中 `ADMIN_OPEN_CODE` 配置的万能验证码（默认 `888888`），可注册为管理员账号。

## 📦 部署

完整部署文档：

- [DEPLOYMENT.md](./DEPLOYMENT.md) — 方案对比与原理
- [DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md) — 一步一步照着做

**简要流程**：Vercel（部署）+ Turso（数据库）+ 域名（cettong.cn）= **0 月费**

## 💖 支持作者

这是一个 **完全免费** 的开源项目，**不强制打赏、不与功能挂钩**。

如果觉得有帮助，可以：

- ☕ [请我喝杯咖啡](./public/donate/)（微信/支付宝扫码）
- ⭐ 给项目点个 Star
- 🐛 提 Issue / 提交 PR
- 📢 推荐给身边的同学

你的支持是我持续更新的最大动力 ❤️

## 🗂 项目结构

```
cet-website/
├── prisma/                  # 数据库 schema 与迁移
│   ├── schema.prisma        # 数据模型
│   ├── migrations/          # 迁移历史
│   └── seed.ts              # 种子数据（题库分类、会员套餐）
├── public/
│   ├── donate/              # 收款码图片（自己上传）
│   ├── favicon.svg          # 站点图标
│   └── og-image.png         # 社交分享预览图
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/             # API 路由
│   │   ├── admin/           # 管理后台（鉴权保护）
│   │   ├── about/           # 关于我们
│   │   ├── contact/         # 联系客服
│   │   ├── dashboard/       # 用户中心
│   │   ├── exam/            # 模拟考试
│   │   ├── faq/             # 常见问题
│   │   ├── library/         # 真题库
│   │   ├── login/           # 登录
│   │   ├── practice/        # 题库练习
│   │   ├── privacy/         # 隐私政策
│   │   ├── register/        # 注册
│   │   ├── support/         # 支持作者（打赏）
│   │   ├── terms/           # 服务条款
│   │   └── wrong/           # 错题本
│   ├── components/          # 通用组件
│   ├── hooks/               # React hooks
│   ├── lib/                 # 业务工具
│   │   ├── prisma.ts        # Prisma client 单例
│   │   ├── auth.ts          # JWT 鉴权
│   │   ├── sms.ts           # 短信服务（mock）
│   │   └── utils.ts
│   └── generated/prisma/    # Prisma 生成的客户端（自动生成）
├── next.config.ts
├── vercel.json              # Vercel 部署配置
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🤝 贡献

欢迎各种形式的贡献：

- 🐛 报告 Bug / 提出功能建议 → [Issues](../../issues)
- 🔧 提交代码 → [Pull Requests](../../pulls)
- 📝 完善文档
- 🎨 设计改进
- ➕ 补充真题

## 📄 License

源代码遵循 [MIT](./LICENSE) 协议 —— 你可以自由使用、修改、分发。

平台内容（题目、解析、音频）仅供个人学习，请勿用于商业用途或大规模传播。

## 🙏 致谢

- [Next.js](https://nextjs.org) - 强大的 React 框架
- [Vercel](https://vercel.com) - 部署平台
- [Turso](https://turso.com) - 边缘 SQLite 数据库
- [Prisma](https://prisma.io) - 类型安全的 ORM
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架
- [lucide](https://lucide.dev) - 图标库

---

**让每一位四六级考生都能一次过线** 🎓
