import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Code2, Layers, Sparkles } from 'lucide-react';

export const ProjectModal = ({ project, onClose, onContactClick }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0b100d]/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="relative w-full max-w-4xl bg-[#1b2d22] border border-[#f4efea]/20 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#142219] text-[#f4efea] hover:text-[#e05a2b] border border-[#f4efea]/15 hover:border-[#e05a2b] transition-all focus:outline-none"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono-code text-xs px-3.5 py-1 rounded-full bg-[#e05a2b] text-white font-bold">
              PROJECT {project.number}
            </span>
            <span className="font-mono-code text-xs text-[#e5ac39] tracking-wider uppercase flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Full Stack Project
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#f4efea] mb-2">{project.title}</h2>
          <p className="font-editorial italic text-xl sm:text-2xl text-[#e5ac39] mb-6">{project.subtitle}</p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[#f4efea]/10">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full bg-[#142219] border border-[#f4efea]/15 font-mono-code text-xs text-[#f4efea] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Body Description */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#e05a2b]" /> Overview
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#f4efea]/90 leading-relaxed font-light">
                {project.fullDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#e05a2b]" /> Key Engineering Highlights
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#142219]/60 border border-[#f4efea]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#e05a2b] shrink-0 mt-1" />
                    <span className="font-sans text-sm text-[#f4efea]/90 leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Features */}
            <div>
              <h3 className="font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest mb-3">
                Key Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#284030] text-[#f4efea] font-sans text-xs border border-[#f4efea]/15"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#f4efea]/10">
            <span className="font-mono-code text-xs text-[#f4efea]/50">
              Built by Bhawri Bipin
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="px-6 py-3 rounded-full bg-[#e05a2b] text-white font-mono-code text-xs font-semibold hover:bg-[#c8491d] transition-all"
              >
                Discuss This Project →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
