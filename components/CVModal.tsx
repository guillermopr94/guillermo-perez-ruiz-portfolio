import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

// Core CSS for react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set worker source
// Use unpkg to ensure compatibility without complex Vite worker configuration
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // Handle responsiveness
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Subtract padding for mobile/desktop consistency
        const width = containerRef.current.clientWidth - 40;
        setContainerWidth(width);
      }
    };

    if (isOpen) {
      // Small delay to ensure modal is rendered and has width
      setTimeout(updateWidth, 100);
      window.addEventListener('resize', updateWidth);
    }

    return () => window.removeEventListener('resize', updateWidth);
  }, [isOpen]);

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-800 bg-slate-900/50">
              <div className="flex flex-col">
                <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Professional Resume
                </h2>
                {numPages && (
                  <p className="text-xs text-slate-400">
                    Page {pageNumber} of {numPages}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                <motion.a
                  href="/cv.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-2 bg-accent text-slate-950 rounded-lg text-xs md:text-sm font-bold hover:bg-sky-300 transition-colors"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">Download PDF</span>
                </motion.a>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content / PDF Viewer */}
            <div
              ref={containerRef}
              className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-800/30 flex flex-col items-center custom-scrollbar"
            >
              <Document
                file="/cv.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <Loader2 className="w-10 h-10 text-accent animate-spin" />
                    <p className="text-slate-400 font-mono text-sm">
                      Initializing high-fidelity preview...
                    </p>
                  </div>
                }
                error={
                  <div className="text-center py-20">
                    <p className="text-red-400">
                      Failed to load PDF. Please download it directly.
                    </p>
                  </div>
                }
              >
                <div className="shadow-2xl border border-slate-700/50 rounded-lg overflow-hidden transition-all duration-300">
                  <Page
                    pageNumber={pageNumber}
                    width={
                      containerWidth ? Math.min(containerWidth, 850) : undefined
                    }
                    renderAnnotationLayer={true}
                    renderTextLayer={true}
                    className="max-w-full"
                    loading={
                      <div className="flex items-center justify-center h-[500px]">
                        <Loader2 className="w-8 h-8 text-accent animate-spin" />
                      </div>
                    }
                  />
                </div>
              </Document>
            </div>

            {/* Footer / Controls */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/80 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-slate-400 text-xs font-mono">
                  {pageNumber} / {numPages || '-'}
                </span>
                <button
                  disabled={pageNumber >= (numPages || 1)}
                  onClick={nextPage}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="hidden md:block">
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-mono">
                  Guillermo Pérez Ruiz · Senior Full-Stack Engineer
                </p>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-slate-500 text-[10px] hidden sm:block">
                  High-fidelity PDF Rendering Engine
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
