import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Headphones, Download, ExternalLink } from "lucide-react";
import { getExamsByLevel, getExam } from "@/lib/library";
import PdfViewerWrapper from "@/components/pdf-viewer-wrapper";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getExamsByLevel("cet6").map((e) => ({ testId: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ testId: string }> }): Promise<Metadata> {
  const { testId } = await params;
  const exam = getExam("cet6", testId);
  if (!exam) return { title: "未找到" };
  return { title: `${exam.label} - 英语六级真题`, description: `CET-6 ${exam.label} 真题试卷、答案解析${exam.hasAudio ? "、听力音频" : ""}。免费在线查看和下载。` };
}

export default async function CET6Detail({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = await params;
  const exam = getExam("cet6", testId);
  if (!exam) notFound();

  const base = `/library/cet6/${testId}`;

  return (
    <div className="animate-fade-in py-6">
      <div className="container mx-auto max-w-5xl px-4">
        <Link href="/library/cet6" className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary mb-4">
          <ArrowLeft className="h-4 w-4" />返回六级真题列表
        </Link>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-primary-soft text-primary text-xs font-medium rounded-full">英语六级 CET-6</span>
            {exam.hasAudio && <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1"><Headphones className="h-3 w-3" />含听力</span>}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">{exam.label}</h1>
          <p className="text-muted text-sm mt-1">{exam.year}年{exam.month}月大学英语六级考试真题</p>
        </div>

        {exam.hasAudio && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-5 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center"><Headphones className="h-4 w-4" /></div>
              <h3 className="font-semibold">听力音频</h3>
            </div>
            <audio controls className="w-full" preload="metadata">
              <source src={`${base}/listening.mp3`} type="audio/mpeg" />
            </audio>
            <a href={`${base}/listening.mp3`} download className="inline-flex items-center gap-1 text-xs text-green-600 hover:underline mt-2"><Download className="h-3 w-3" />下载 MP3</a>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-800 rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-sm">📄 真题试卷</h3>
              <div className="flex items-center gap-2">
                <a href={`${base}/test.pdf`} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary flex items-center gap-1"><ExternalLink className="h-3 w-3" />新窗口</a>
                <a href={`${base}/test.pdf`} download className="text-xs text-primary font-medium hover:underline flex items-center gap-1"><Download className="h-3 w-3" />下载</a>
              </div>
            </div>
            <div className="p-0">
              <PdfViewerWrapper pdf={`${base}/test.pdf`} />
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-sm">📝 答案解析</h3>
              <div className="flex items-center gap-2">
                <a href={`${base}/answer.pdf`} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-primary flex items-center gap-1"><ExternalLink className="h-3 w-3" />新窗口</a>
                <a href={`${base}/answer.pdf`} download className="text-xs text-primary font-medium hover:underline flex items-center gap-1"><Download className="h-3 w-3" />下载</a>
              </div>
            </div>
            <div className="p-0">
              <PdfViewerWrapper pdf={`${base}/answer.pdf`} />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-border rounded-xl p-4 text-sm text-muted text-center">
          所有资料完全免费，仅供个人学习使用。如果无法显示 PDF，请点击"新窗口打开"。
        </div>
      </div>
    </div>
  );
}
