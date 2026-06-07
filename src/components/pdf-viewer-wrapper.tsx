"use client";

import dynamicImport from "next/dynamic";
import { Loader2 } from "lucide-react";

const PdfViewerInner = dynamicImport(() => import("@/components/pdf-viewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-20 text-muted">
      <Loader2 className="h-6 w-6 animate-spin mr-2" />
      <span className="text-sm">正在加载 PDF 查看器...</span>
    </div>
  ),
});

interface PdfViewerWrapperProps {
  pdf: string;
}

export default function PdfViewerWrapper({ pdf }: PdfViewerWrapperProps) {
  return <PdfViewerInner pdf={pdf} />;
}
