import { APP_NAME } from "@/lib/const";
import { Target, Heart, Zap, Coffee } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="animate-fade-in py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">关于 {APP_NAME}</h1>
          <p className="text-muted text-lg">一个免费的四六级真题下载站</p>
        </div>

        <div className="prose max-w-none mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">这是什么</h2>
            <p className="text-muted leading-relaxed">
              {APP_NAME} 是我自建的四六级真题下载站。
              收录了 2019-2025 年的全部四六级真题，共 93 套试卷，含 PDF 原题、答案解析、听力 MP3。
            </p>
            <p className="text-muted leading-relaxed mt-4">
              不需要注册、不需要付费、不需要关注公众号。点开链接就能直接下载。
              作者自费承担服务器维护、域名申请等费用。如果觉得有用，欢迎在爱发电请我喝杯咖啡 ☕
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">为什么做这个</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ValueCard
              icon={Target}
              title="免费"
              desc="市面上太多四六级资料要收费或关注公众号才能下载。这个站永远免费，直接下载。"
            />
            <ValueCard
              icon={Heart}
              title="开源"
              desc="代码完全开放在 GitHub，任何人都可以 fork、修改、部署自己的版本。"
            />
            <ValueCard
              icon={Zap}
              title="简单"
              desc="没有花里胡哨的功能，就是一个真题下载站。需要的都在，不需要的都没有。"
            />
            <ValueCard
              icon={Coffee}
              title="用爱发电"
              desc="我业余维护的。如果对你有帮助，可以在爱发电请我喝杯咖啡。"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">联系作者</h2>
          <ul className="space-y-2 text-muted">
            <li>💬 微信：coscoscosx</li>
            <li>📧 邮箱：hushuhushuyuyu@gmail.com</li>
            <li>🐙 <a href="https://github.com/whoamiARC" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub · whoamiARC</a></li>
            <li>⚡ <a href="https://www.ifdian.net/a/iam_ARC" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">爱发电 · 支持作者</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-border rounded-xl p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted">{desc}</p>
    </div>
  );
}
