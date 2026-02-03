import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageOff } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-slate-900 ${containerClassName}`}
    >
      {/* Skeleton / Placeholder */}
      <AnimatePresence mode="wait">
        {!isLoaded && !hasError && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center z-20"
          >
            <div className="w-8 h-8 border-2 border-slate-700 rounded-full border-t-accent/50 animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-slate-600 p-4 text-center z-30">
          <ImageOff className="w-8 h-8 mb-2 opacity-50" />
          <span className="text-[10px] uppercase tracking-widest font-medium">
            Image unavailable
          </span>
        </div>
      )}

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.1,
        }}
        transition={{
          opacity: { duration: 0.4 },
          scale: { duration: 0.7, ease: 'easeOut' },
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${className}`}
        loading="lazy"
      />

      {/* Overlay for consistency with group hover effects */}
      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors z-10"></div>
    </div>
  );
};

export default ProjectImage;
