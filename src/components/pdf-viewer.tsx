"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { ChevronLeft, ChevronRight, Loader2, ZoomIn, ZoomOut } from "lucide-react";

// Use local worker file (copied from pdfjs-dist to public/)
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface PdfViewerProps {
  pdf: string;
}

export default function PdfViewer({ pdf }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track container width for responsive canvas sizing
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setContainerWidth(Math.min(el.clientWidth, 800));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }, []);

  const goToPrev = useCallback(() => {
    setPageNumber((p) => Math.max(1, p - 1));
  }, []);

  const goToNext = useCallback(() => {
    setPageNumber((p) => Math.min(numPages, p + 1));
  }, [numPages]);

  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(3, s + 0.25));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((s) => Math.max(0.5, s - 0.25));
  }, []);

  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex items-center justify-center py-20 text-muted">
            <Loader2 className="h-6 w-6 animate-spin mr-2" />
            <span className="text-sm">正在加载 PDF...</span>
          </div>
        }
        error={
          <div className="flex flex-col items-center justify-center py-16 text-muted">
            <p className="text-sm mb-3">PDF 加载失败，请尝试直接下载</p>
            <a
              href={pdf}
              download
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              点击下载 PDF
            </a>
          </div>
        }
      >
        {/* Controls */}
        {numPages > 0 && (
          <div className="sticky top-0 z-10 flex items-center justify-center gap-2 mb-3 px-3 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur border border-border rounded-lg shadow-sm">
            <button
              onClick={goToPrev}
              disabled={pageNumber <= 1}
              className="p-1 rounded hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="上一页"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs font-medium min-w-[60px] text-center">
              {pageNumber} / {numPages}
            </span>
            <button
              onClick={goToNext}
              disabled={pageNumber >= numPages}
              className="p-1 rounded hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="下一页"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <span className="w-px h-4 bg-border mx-1" />
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-1 rounded hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="缩小"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="text-xs text-muted min-w-[40px] text-center">{Math.round(scale * 100)}%</span>
            <button
              onClick={zoomIn}
              disabled={scale >= 3}
              className="p-1 rounded hover:bg-muted/50 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="放大"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Current page */}
        <div className="border border-border rounded-lg overflow-hidden shadow-sm">
          <Page
            pageNumber={pageNumber}
            scale={scale}
            width={containerWidth}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            loading={
              <div className="flex items-center justify-center py-16 text-muted">
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                <span className="text-sm">渲染中...</span>
              </div>
            }
          />
        </div>

        {/* Bottom controls (mobile-friendly) */}
        {numPages > 0 && (
          <div className="flex items-center justify-center gap-3 mt-4 pb-4">
            <button
              onClick={goToPrev}
              disabled={pageNumber <= 1}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-3.5 w-3.5" />上一页
            </button>
            <span className="text-xs text-muted min-w-[60px] text-center">
              {pageNumber} / {numPages}
            </span>
            <button
              onClick={goToNext}
              disabled={pageNumber >= numPages}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md border border-border hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
            >
              下一页<ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </Document>
    </div>
  );
}
