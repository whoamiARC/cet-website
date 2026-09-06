import { APP_NAME } from "@/lib/const";

export const metadata = { title: "隐私政策" };

export default function PrivacyPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold mb-6">隐私政策</h1>
        <p className="text-muted text-sm mb-6">最后更新：2026 年 9 月 6 日</p>

        <div className="prose prose-slate space-y-6 text-muted">
          <p className="leading-relaxed">
            {APP_NAME}（以下简称“我们”）提供免费的四六级备考资料，无需注册账号。
            本政策说明网站托管、访问统计和广告服务可能处理的信息，以及您可以作出的选择。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">1. 信息收集</h2>
          <p className="leading-relaxed">
            本网站为静态网站，不设用户注册系统或用户资料数据库，不要求您提交姓名、手机号或邮箱。
            网站托管和下述第三方服务仍可能处理访问日志、IP 地址、浏览器和设备信息、访问页面及时间。
            如果您主动通过联系渠道与我们沟通，相应平台会按其政策处理您提供的信息。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">2. Cookie 使用</h2>
          <p className="leading-relaxed">
            网站使用浏览器本地存储保存深色或浅色主题偏好。
            网站接入 Google Analytics，用于了解页面访问和使用情况；该服务可能使用 Cookie 或类似技术收集访问统计信息。
            您可以在浏览器设置中清除或限制 Cookie 和本地存储，也可以了解
            <a href="https://tools.google.com/dlpage/gaoptout?hl=zh-CN" className="text-primary underline">Google Analytics 停用工具</a>。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">3. Google AdSense 广告</h2>
          <p className="leading-relaxed">
            本网站接入 Google AdSense，以广告收入支持免费内容。广告是否展示取决于 Google 的审核和投放状态。
            Google 及其广告合作伙伴可能使用 Cookie、网络信标、IP 地址和类似标识符，
            根据您对本网站或其他网站的访问展示广告、统计广告效果并防范无效流量。
            个性化广告的使用取决于适用要求和您的选择。
            详情请参阅
            <a href="https://policies.google.com/technologies/partner-sites?hl=zh-CN" className="text-primary underline">Google 如何使用来自合作伙伴网站的信息</a>和
            <a href="https://policies.google.com/technologies/ads?hl=zh-CN" className="text-primary underline">Google 广告与 Cookie 说明</a>。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">4. 您的广告和隐私选择</h2>
          <p className="leading-relaxed">
            如果页面显示 Google 的隐私同意提示，您可以在其中同意、拒绝或管理相关选择，
            并通过页面提供的隐私或同意管理入口调整选择。
            您也可以前往
            <a href="https://myadcenter.google.com/" className="text-primary underline">Google 广告设置</a>
            管理广告个性化偏好。Google 账号的广告设置与本网站的同意选择分别管理；
            关闭个性化广告不代表不再看到任何广告。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">5. 网站托管</h2>
          <p className="leading-relaxed">
            本网站部署在 GitHub Pages 上，GitHub 可能会收集基本的访问日志。
            详情请参阅 <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection" className="text-primary">GitHub Pages 数据收集政策</a>。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">6. 外部链接</h2>
          <p className="leading-relaxed">
            本网站可能包含指向外部网站的链接。我们对外部网站的隐私政策不承担责任。
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">7. 联系我们</h2>
          <p className="leading-relaxed">如有隐私相关问题，请联系微信：coscoscosx</p>
        </div>
      </div>
    </div>
  );
}
