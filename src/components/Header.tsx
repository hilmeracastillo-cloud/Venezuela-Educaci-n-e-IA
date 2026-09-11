import React from 'react';
import {
  BookOpen,
  Search,
  Download,
  Type,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Chapter, FontSize } from '../types';
import { bookMeta } from '../data/bookMeta';

interface HeaderProps {
  currentChapter: Chapter;
  readingProgress: number; // 0 to 100
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  onOpenToc: () => void;
  onOpenSearch: () => void;
  onOpenPdfExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentChapter,
  readingProgress,
  fontSize,
  setFontSize,
  onOpenToc,
  onOpenSearch,
  onOpenPdfExport,
}) => {
  return (
    <header
      id="main-editorial-header"
      className="sticky top-0 z-40 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222] transition-colors"
    >
      {/* Top Reading Progress Bar */}
      <div className="w-full h-[2px] bg-[#1A1A1A]">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${Math.max(2, Math.min(100, readingProgress))}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Book Title & Active Chapter Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            id="btn-toc-trigger"
            onClick={onOpenToc}
            aria-label="Abrir Tabla de Contenidos"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-indigo-300 bg-indigo-950/40 border border-indigo-800/40 hover:bg-indigo-900/50 hover:border-indigo-600 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="hidden sm:inline">Índice</span>
          </button>

          <div className="flex items-center gap-2 min-w-0 text-sm">
            <span className="font-serif font-semibold text-neutral-200 truncate hidden md:inline">
              {bookMeta.title}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0 hidden md:inline" />
            <span className="px-2 py-0.5 rounded text-[11px] font-medium tracking-wide uppercase bg-[#181818] text-indigo-300 border border-[#2B2B2B] shrink-0">
              {currentChapter.part}
            </span>
            <span className="text-neutral-400 truncate text-xs sm:text-sm font-medium">
              {currentChapter.title}
            </span>
          </div>
        </div>

        {/* Right: Study & Reader Tools */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Font Size Adjuster */}
          <div
            id="font-size-controls"
            className="flex items-center bg-[#141414] border border-[#262626] rounded-lg p-0.5 text-xs text-neutral-400"
          >
            <button
              id="btn-font-sm"
              onClick={() => setFontSize('sm')}
              title="Texto Pequeño (15px)"
              className={`px-2 py-1 rounded transition-colors ${
                fontSize === 'sm'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'hover:text-neutral-200'
              }`}
            >
              A-
            </button>
            <button
              id="btn-font-base"
              onClick={() => setFontSize('base')}
              title="Texto Normal (17px)"
              className={`px-2 py-1 rounded transition-colors ${
                fontSize === 'base'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'hover:text-neutral-200'
              }`}
            >
              A
            </button>
            <button
              id="btn-font-lg"
              onClick={() => setFontSize('lg')}
              title="Texto Grande (19.5px)"
              className={`px-2 py-1 rounded transition-colors ${
                fontSize === 'lg'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'hover:text-neutral-200'
              }`}
            >
              A+
            </button>
          </div>

          {/* Search Trigger */}
          <button
            id="btn-search-trigger"
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-[#141414] border border-[#262626] hover:border-neutral-500 hover:text-white transition-all cursor-pointer"
            title="Buscar en la obra (Ctrl/Cmd + K)"
          >
            <Search className="w-3.5 h-3.5 text-neutral-400" />
            <span className="hidden sm:inline">Buscar</span>
            <kbd className="hidden lg:inline-block text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded border border-neutral-700">
              ⌘K
            </kbd>
          </button>

          {/* PDF Export Trigger */}
          <button
            id="btn-pdf-trigger"
            onClick={onOpenPdfExport}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-300 bg-emerald-950/30 border border-emerald-800/40 hover:bg-emerald-900/50 hover:border-emerald-500 transition-all cursor-pointer"
            title="Descargar versión PDF maquetada"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
