import Link from "next/link";
import {
  BookOpen,
  FileText,
  Headphones,
  Download,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Heart,
} from "lucide-react";
import { APP_NAME } from "@/lib/const";
import { Reveal } from "@/components/reveal";

const HIGHLIGHTS = [
  { icon: FileText, title: "93 套真题试卷", desc: "2019-2025 年四级+六级全部真题 PDF" },
  { icon: Headphones, title: "58 套听力音频", desc: "原版 MP3，可下载反复听" },
  { icon: Download, title: "直接下载", desc: "无需注册，点击即下，没有任何套路" },
];

const LEVELS = [
  {
    name: "英语四级 CET-4",
    desc: "47 套真题试卷 + 答案解析 + 听力音频",
    items: ["2019-2025 年全部真题", "高清 PDF 可打印", "配套听力 MP3", "详细答案解析"],
    color: "indigo",
    count: "47 套",
  },
  {
    name: "英语六级 CET-6",
    desc: "46 套真题试卷 + 答案解析 + 听力音频",
    items: ["2019-2025 年全部真题", "高清 PDF 可打印", "配套听力 MP3", "详细答案解析"],
    color: "purple",
    count: "46 套",
  },
];

export default function HomePage() {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* ============== Hero ============== */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24">
        <div
          className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl animate-blob"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-32 -right-20 h-80 w-80 rounded-full bg-pink-400/25 blur-3xl animate-blob"
          style={{ animationDelay: "-4s" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-80 left-1/2 h-64 w-64 rounded-full bg-purple-400/25 blur-3xl animate-blob"
          style={{ animationDelay: "-8s" }}
          aria-hidden
        />

        <div className="container mx-auto max-w-6xl px-4 text-center relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-gradient">无需注册 · 完全免费 · 直接下载</span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]">
              <span className="block">一次过四六级</span>
              <span className="text-gradient">就上 {APP_NAME}</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
              收录 2019-2025 年全部四六级真题
              <br />
              <span className="text-primary font-semibold">试卷 PDF + 答案 + 听力 MP3，点开即下</span>
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Link
                href="/library/cet4"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 btn-press transition-all"
              >
                打开真题库
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <p className="text-sm text-muted">
              自建开源项目 · 纯静态站 · 部署在 GitHub Pages
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============== 亮点 ============== */}
      <section className="py-10">
        <div className="container mx-auto max-w-5xl px-4">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {HIGHLIGHTS.map((s, i) => (
                <div
                  key={s.title}
                  className="glass-card rounded-2xl p-6 text-center"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 text-primary mb-3">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-1">{s.title}</div>
                  <div className="text-sm text-muted">{s.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== 考试级别 ============== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                全部<span className="text-gradient">真题资源</span>
              </h2>
              <p className="text-muted">历年开源真题收录</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {LEVELS.map((level, idx) => (
              <Reveal key={level.name} delay={Math.min(idx + 1, 5) as 0 | 1 | 2 | 3 | 4 | 5}>
                <Link
                  href={`/library/${level.color === "indigo" ? "cet4" : "cet6"}`}
                  className="relative block overflow-hidden rounded-3xl glass-card p-8 hover:border-indigo-300 group transition-all"
                >
                  <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-indigo-500/15 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      level.color === "indigo"
                        ? "from-indigo-500 to-blue-500"
                        : "from-purple-500 to-pink-500"
                    } text-white mb-5 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{level.name}</h3>
                      <span className="px-2 py-0.5 bg-primary-soft text-primary text-xs font-medium rounded-full">{level.count}</span>
                    </div>
                    <p className="text-muted mb-5">{level.desc}</p>
                    <ul className="space-y-2 text-sm">
                      {level.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className={`h-4 w-4 ${
                            level.color === "indigo" ? "text-indigo-500" : "text-purple-500"
                          }`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      查看全部 <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 关于本站 + 支持作者 ============== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              关于<span className="text-gradient">本站</span>
            </h2>
            <div className="text-muted text-lg space-y-3 max-w-xl mx-auto mb-10">
              <p>
                自建的四六级真题下载站。不需要注册，点开就能下。
              </p>
              <p>
                <a href="https://github.com/whoamiARC" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub 完全开源</a>，
                作者自费承担服务器维护、域名申请等费用。
              </p>
            </div>

            {/* 爱发电卡片 */}
            <a
              href="https://www.ifdian.net/a/iam_ARC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 p-1 shadow-2xl hover:shadow-3xl transition-shadow group"
            >
              <div className="bg-white dark:bg-slate-800/95 backdrop-blur rounded-3xl px-10 py-8 md:px-14 md:py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink-100 text-pink-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Heart className="h-8 w-8" fill="currentColor" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 group-hover:scale-105 transition-transform">
                  在爱发电支持作者
                </h3>
                <p className="text-muted text-lg mb-2">
                  如果这些真题对你有帮助
                </p>
                <p className="text-pink-500 font-semibold text-lg">
                  请我喝杯咖啡吧 →
                </p>
              </div>
            </a>
          </Reveal>

          {/* QQ群 */}
          <Reveal>
            <div className="mt-10 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted">
                🐧 四六级备考交流群：<span className="font-mono text-foreground font-medium">730715477</span>
              </p>
              <p className="text-xs text-muted mt-1">欢迎加入，一起交流一起过级</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
