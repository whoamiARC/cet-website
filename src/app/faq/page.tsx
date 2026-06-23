import type { Metadata } from "next";
import { APP_NAME } from "@/lib/const";

export const metadata: Metadata = {
  title: "常见问题",
  description: `${APP_NAME} 常见问题解答。`,
};

const FAQS = [
  {
    cat: "关于 CET通",
    items: [
      { q: "CET通是什么？", a: `${APP_NAME} 是一个英语四六级备考信息平台，提供四六级考试相关的资讯和学习指导。` },
      { q: "这个网站收费吗？", a: "完全免费。所有内容对所有用户永久免费开放，不需要付费、不需要注册。我们相信好的教育资源应该是免费的。" },
      { q: "内容会更新吗？", a: "我们会持续关注四六级考试最新动态，及时更新考试相关信息。" },
    ],
  },
  {
    cat: "关于四六级考试",
    items: [
      { q: "四级和六级有什么区别？", a: "四级（CET-4）要求词汇量约 4500，侧重基础英语应用能力；六级（CET-6）要求词汇量约 6000，难度更高，侧重学术英语能力。" },
      { q: "四六级考试每年几次？", a: "每年两次，分别在 6 月和 12 月。报名时间一般在考前 2-3 个月。" },
      { q: "四六级多少分算过？", a: "四级和六级均以 425 分为及格线。550 分以上为优秀。" },
      { q: "考试包含哪些部分？", a: "主要包含：听力理解、阅读理解、翻译（汉译英）和写作四大部分。" },
    ],
  },
  {
    cat: "其他问题",
    items: [
      { q: "可以商用吗？", a: "本项目代码遵循 MIT 协议可自由使用，但平台内容仅供个人学习参考，请勿用于商业用途或大规模传播。" },
      { q: "如何联系站长？", a: "添加微信 coscoscosx，或发邮件至 hushuhushuyuyu@gmail.com。" },
      { q: "网站源码可以看吗？", a: "可以，完全开源。GitHub 主页：https://github.com/whoamiARC，欢迎 Star ⭐" },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">常见问题</h1>
          <p className="text-muted">找不到答案？联系微信：coscoscosx</p>
        </div>

        {FAQS.map((cat, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded"></span>
              {cat.cat}
            </h2>
            <div className="space-y-3">
              {cat.items.map((item, j) => (
                <details key={j} className="group bg-white dark:bg-slate-800 border border-border rounded-xl p-4">
                  <summary className="font-medium cursor-pointer flex items-center justify-between">
                    {item.q}
                    <span className="text-muted group-open:rotate-180 transition-transform text-sm">▼</span>
                  </summary>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">还有其他问题？</h3>
          <p className="text-muted mb-4">添加微信，1对1 解答</p>
          <div className="inline-block px-6 py-3 bg-white dark:bg-slate-800 rounded-xl border-2 border-primary">
            <p className="text-xs text-muted">联系微信</p>
            <p className="text-lg font-bold text-primary">coscoscosx</p>
          </div>
        </div>
      </div>
    </div>
  );
}
