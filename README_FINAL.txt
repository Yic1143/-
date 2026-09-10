TikTok Shop Wallet 最终源码

这套源码以你上传的 v6 LanguageFix UI 为视觉基础，后台不再使用 sessionStorage/localStorage 演示数据。

最终版包含：
- 用户注册/登录（数据库真实账号，密码 bcrypt 哈希）
- 银行卡列表/添加/设默认
- 管理员真实登录
- 用户搜索、备注
- 管理员查看用户银行卡
- 修改有效/无效状态
- 删除银行卡
- PostgreSQL 数据库
- Vercel Serverless API

安全处理：
- 后端不保存登录明文密码
- 不保存完整银行卡号
- 不保存 CVV/CVC
- 仅保存 last4、银行、卡组织、有效期、持卡人和账单地址等必要资料

部署：
1. 创建 PostgreSQL/Neon 数据库，执行 db/schema.sql
2. Vercel 设置环境变量：
   DATABASE_URL
   JWT_SECRET
   ADMIN_EMAIL
   ADMIN_PASSWORD
3. 部署整个项目目录，不要只上传单个 HTML。
