import Link from "next/link";
import { ArrowLeft, Headphones, Download, FileText, BookOpen, Music, Sparkles } from "lucide-react";

// ─── Types ───────────────────────────────────────────────

interface ExamInfo {
  label: string;
  year: number;
  month: number;
  setLabel: string;
  hasAudio: boolean;
}

interface ExamDetailProps {
  exam: ExamInfo;
  level: "cet4" | "cet6";
  levelLabel: string;
  testPdf: string;
  answerPdf: string;
  audioMp3: string | null;
}

// ─── Helpers ─────────────────────────────────────────────

function downloadName(
  level: "cet4" | "cet6",
  year: number,
  month: number,
  setLabel: string,
  type: "真题" | "答案解析" | "听力"
): string {
  const levelName = level === "cet4" ? "CET4" : "CET6";
  const ext = type === "听力" ? "mp3" : "pdf";
  return `${levelName}_${year}年${month}月_第${setLabel}套_${type}.${ext}`;
}

// ─── Color themes ────────────────────────────────────────

const themes = {
  green: {
    border: "border-green-200 dark:border-green-800",
    bg: "from-green-50/70 to-emerald-50/70 dark:from-green-950/30 dark:to-emerald-950/30",
    iconBg: "bg-green-500",
    iconRing: "ring-green-200 dark:ring-green-800",
    btn: "bg-green-600 hover:bg-green-700 focus:ring-green-400",
    textGradient: "from-green-700 to-emerald-600 dark:from-green-400 dark:to-emerald-300",
    accent: "bg-green-500",
    softBg: "bg-green-50 dark:bg-green-950/20",
  },
  blue: {
    border: "border-blue-200 dark:border-blue-800",
    bg: "from-blue-50/70 to-indigo-50/70 dark:from-blue-950/30 dark:to-indigo-950/30",
    iconBg: "bg-blue-500",
    iconRing: "ring-blue-200 dark:ring-blue-800",
    btn: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-400",
    textGradient: "from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-300",
    accent: "bg-blue-500",
    softBg: "bg-blue-50 dark:bg-blue-950/20",
  },
  amber: {
    border: "border-amber-200 dark:border-amber-800",
    bg: "from-amber-50/70 to-orange-50/70 dark:from-amber-950/30 dark:to-orange-950/30",
    iconBg: "bg-amber-500",
    iconRing: "ring-amber-200 dark:ring-amber-800",
    btn: "bg-amber-600 hover:bg-amber-700 focus:ring-amber-400",
    textGradient: "from-amber-700 to-orange-600 dark:from-amber-400 dark:to-orange-300",
    accent: "bg-amber-500",
    softBg: "bg-amber-50 dark:bg-amber-950/20",
  },
};

// ─── Main Component ──────────────────────────────────────

export default function ExamDetail({
  exam,
  level,
  levelLabel,
  testPdf,
  answerPdf,
  audioMp3,
}: ExamDetailProps) {
  const listHref = level === "cet4" ? "/library/cet4" : "/library/cet6";
  const levelName = level === "cet4" ? "四级" : "六级";

  const testDlName = downloadName(level, exam.year, exam.month, exam.setLabel, "真题");
  const answerDlName = downloadName(level, exam.year, exam.month, exam.setLabel, "答案解析");
  const audioDlName = audioMp3
    ? downloadName(level, exam.year, exam.month, exam.setLabel, "听力")
    : null;

  return (
    <div className="animate-fade-in py-8 md:py-12">
      <div className="container mx-auto max-w-2xl px-4">
        {/* ── 返回链接 ── */}
        <Link
          href={listHref}
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          返回{levelName}真题列表
        </Link>

        {/* ── 标题区 ── */}
        <header className="mb-10 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-soft text-primary text-xs font-semibold rounded-full">
              {levelLabel}
            </span>
            {exam.hasAudio && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                <Headphones className="h-3 w-3" />
                含听力
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {exam.label}
          </h1>
          <p className="text-muted mt-2 text-sm">
            {exam.year} 年 {exam.month} 月 · 大学英语{levelName}考试
          </p>
        </header>

        {/* ── 主体内容 ── */}
        <div className="space-y-8">
          {/* ▸ 听力音频 */}
          {audioMp3 && audioDlName && (
            <AudioCard
              audioMp3={audioMp3}
              audioDlName={audioDlName}
              levelName={levelName}
              exam={exam}
              theme={themes.green}
            />
          )}

          {/* ▸ 真题试卷 */}
          <DownloadCard
            type="exam"
            levelName={levelName}
            exam={exam}
            pdf={testPdf}
            downloadName={testDlName}
            theme={themes.blue}
          />

          {/* ▸ 对称分隔 */}
          <Divider />

          {/* ▸ 答案解析 */}
          <DownloadCard
            type="answer"
            levelName={levelName}
            exam={exam}
            pdf={answerPdf}
            downloadName={answerDlName}
            theme={themes.amber}
          />
        </div>

        {/* ── 底部 ── */}
        <footer className="mt-12 text-center">
          <p className="text-xs text-muted">
            所有资料完全免费，仅供个人学习使用
          </p>
        </footer>
      </div>
    </div>
  );
}

// ─── 听力卡片 ────────────────────────────────────────────

function AudioCard({
  audioMp3,
  audioDlName,
  levelName,
  exam,
  theme,
}: {
  audioMp3: string;
  audioDlName: string;
  levelName: string;
  exam: ExamInfo;
  theme: (typeof themes)["green"];
}) {
  return (
    <section
      className={`rounded-3xl border ${theme.border} bg-gradient-to-br ${theme.bg} overflow-hidden shadow-md`}
    >
      {/* 头部 */}
      <div className={`px-6 py-5 border-b ${theme.border} flex items-center gap-4`}>
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-2xl ${theme.iconBg} text-white flex items-center justify-center shadow-lg ring-4 ${theme.iconRing}`}
        >
          <Music className="h-6 w-6" />
        </div>
        <div>
          <h2 className="font-bold text-lg">听力音频</h2>
          <p className="text-xs text-muted">
            在线试听 · {levelName} · {exam.year}年{exam.month}月 · 第{exam.setLabel}套
          </p>
        </div>
      </div>

      {/* 播放器 */}
      <div className="px-6 py-5">
        <audio controls className="w-full" preload="metadata">
          <source src={audioMp3} type="audio/mpeg" />
        </audio>
      </div>

      {/* 下载 */}
      <div className={`px-6 pb-6 flex flex-col sm:flex-row sm:items-center gap-3`}>
        <a
          href={audioMp3}
          download={audioDlName}
          className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 ${theme.btn} text-white rounded-2xl text-sm font-semibold transition-all shadow-lg shadow-green-200 dark:shadow-green-900/30 hover:shadow-xl active:scale-[0.97]`}
        >
          <Download className="h-4 w-4" />
          下载 MP3
        </a>
        <span className="text-[11px] text-muted font-mono break-all leading-relaxed">
          {audioDlName}
        </span>
      </div>
    </section>
  );
}

// ─── 真题 / 答案解析 下载卡片 ─────────────────────────────

function DownloadCard({
  type,
  levelName,
  exam,
  pdf,
  downloadName,
  theme,
}: {
  type: "exam" | "answer";
  levelName: string;
  exam: ExamInfo;
  pdf: string;
  downloadName: string;
  theme: (typeof themes)["blue"];
}) {
  const isExam = type === "exam";
  const titleLabel = isExam ? "真题试卷" : "答案解析";
  const subtitle = isExam
    ? `${exam.year}年${exam.month}月 · 第${exam.setLabel}套 · 大学英语${levelName}真题`
    : `${exam.year}年${exam.month}月 · 第${exam.setLabel}套 · 大学英语${levelName}解析`;
  const iconEl = isExam ? (
    <FileText className="h-6 w-6" />
  ) : (
    <BookOpen className="h-6 w-6" />
  );

  return (
    <section
      className={`rounded-3xl border ${theme.border} bg-gradient-to-br ${theme.bg} overflow-hidden shadow-md`}
    >
      {/* ── 艺术字标题区 ── */}
      <div className="relative px-6 pt-8 pb-4 text-center overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className={`text-[8rem] md:text-[10rem] font-black opacity-[0.03] dark:opacity-[0.05] tracking-widest`}
            style={{ fontFamily: "serif" }}
          >
            {isExam ? "EXAM" : "ANSWER"}
          </span>
        </div>

        {/* 主标题 — 艺术字效果 */}
        <h2 className="relative">
          <span
            className={`
              inline-block text-4xl md:text-5xl font-black tracking-[0.3em]
              bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent
              drop-shadow-sm
            `}
            style={{
              textShadow: isExam
                ? "0 2px 4px rgba(37,99,235,0.12)"
                : "0 2px 4px rgba(217,119,6,0.12)",
            }}
          >
            {titleLabel}
          </span>
        </h2>

        {/* 副标题 */}
        <p className="relative mt-2 text-xs text-muted tracking-wide">
          {subtitle}
        </p>

        {/* 装饰线 */}
        <div className="relative mt-4 flex items-center justify-center gap-2">
          <div className={`h-0.5 w-8 rounded-full ${theme.accent} opacity-40`} />
          <div className={`h-1.5 w-1.5 rounded-full ${theme.accent}`} />
          <div className={`h-0.5 w-8 rounded-full ${theme.accent} opacity-40`} />
        </div>
      </div>

      {/* ── 下载操作区 ── */}
      <div className="px-6 pb-7 flex flex-col items-center gap-4">
        {/* 下载按钮 */}
        <a
          href={pdf}
          download={downloadName}
          className={`
            inline-flex items-center justify-center gap-3 px-8 py-4
            ${theme.btn} text-white rounded-2xl
            text-base font-bold
            transition-all shadow-lg active:scale-[0.97]
            hover:shadow-xl
            ${isExam ? "shadow-blue-200 dark:shadow-blue-900/30" : "shadow-amber-200 dark:shadow-amber-900/30"}
          `}
        >
          <Download className="h-5 w-5" />
          下载{titleLabel} PDF
        </a>

        {/* 文件名 */}
        <span className="text-[11px] text-muted font-mono text-center break-all leading-relaxed max-w-full">
          {downloadName}
        </span>
      </div>
    </section>
  );
}

// ─── 对称分隔线 ───────────────────────────────────────────

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-3 select-none">
      <div className="h-px flex-1 bg-border" />
      <div className="flex items-center gap-2">
        <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
        <div className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
        <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
      </div>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
