import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-[#142219] relative overflow-hidden border-t border-[#f4efea]/10">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-[#e5ac39]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      {/* Editorial Header */}
      <div className="max-w-6xl mx-auto w-full mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest bg-[#1b2d22] px-3.5 py-1.5 rounded-full border border-[#f4efea]/10 mb-4">
            <span>03 / WORK</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-7xl text-[#f4efea] tracking-tight">
            SELECTED <span className="italic font-editorial text-[#e05a2b] font-normal">WORK</span>
          </h2>
        </div>

        <p className="font-mono-code text-xs text-[#f4efea]/60 max-w-xs leading-relaxed">
          Interactive full-stack applications & backend database architectures engineered with modern web technologies.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cvData.projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            data-cursor="view"
            onClick={() => setSelectedProject(proj)}
            className="group cursor-pointer rounded-3xl bg-[#1b2d22] border border-[#f4efea]/15 hover:border-[#e05a2b]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between p-8 sm:p-10 relative shadow-2xl hover:shadow-[#e05a2b]/10"
          >
            {/* Top Bar: Number & Arrow */}
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-black text-4xl text-outline-gold group-hover:text-[#e5ac39] transition-colors duration-500">
                {proj.number}
              </span>
              <div className="w-12 h-12 rounded-full bg-[#142219] border border-[#f4efea]/20 group-hover:bg-[#e05a2b] group-hover:border-[#e05a2b] group-hover:text-white text-[#f4efea] flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Content */}
            <div className="mb-8">
              <span className="font-mono-code text-xs text-[#e5ac39] uppercase tracking-wider mb-2 block">
                {proj.subtitle}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#f4efea] group-hover:text-[#e5ac39] transition-colors mb-4">
                {proj.title}
              </h3>
              <p className="font-sans text-base text-[#f4efea]/80 leading-relaxed font-light mb-6">
                "{proj.shortDescription}"
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {proj.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#142219] border border-[#f4efea]/10 font-mono-code text-xs text-[#f4efea]/80 group-hover:border-[#e05a2b]/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action Trigger */}
            <div className="pt-6 border-t border-[#f4efea]/10 flex items-center justify-between font-mono-code text-xs text-[#e5ac39] group-hover:text-[#e05a2b] transition-colors">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Explore project details
              </span>
              <span className="font-bold">CLICK TO OPEN →</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "More projects coming soon." Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full mt-16 p-8 rounded-3xl bg-[#1b2d22]/40 border border-dashed border-[#f4efea]/20 text-center flex flex-col items-center justify-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-[#1b2d22] border border-[#f4efea]/15 flex items-center justify-center text-[#e5ac39]">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <h4 className="font-display text-2xl font-bold text-[#f4efea]">More projects coming soon.</h4>
        <p className="font-mono-code text-xs text-[#f4efea]/60">
          Currently developing new full-stack solutions and AI / Data Science explorations.
        </p>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onContactClick={scrollToContact}
        />
      )}
    </section>
  );
};
