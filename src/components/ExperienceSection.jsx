import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, Sparkles, CheckCircle } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState('gadgeon'); // Expand Gadgeon by default

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 bg-[#142219] relative overflow-hidden border-t border-[#f4efea]/10">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#e05a2b]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      {/* Editorial Header */}
      <div className="max-w-6xl mx-auto w-full mb-12">
        <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest bg-[#1b2d22] px-3.5 py-1.5 rounded-full border border-[#f4efea]/10 mb-4">
          <span>02 / EXPERIENCE</span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-[#f4efea] tracking-tight">
          WORK <span className="italic font-editorial text-[#e5ac39] font-normal">EXPERIENCE</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto w-full relative">
        {/* Animated Timeline Vertical Bar */}
        <div className="absolute top-6 bottom-6 left-4 md:left-1/2 w-0.5 bg-[#284030] md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {cvData.experience.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-6 items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 rounded-full bg-[#e05a2b] border-4 border-[#142219] shadow-lg shadow-[#e05a2b]/40 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </div>

                {/* Card Container */}
                <div className="w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    onClick={() => toggleExpand(exp.id)}
                    className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? 'bg-[#1b2d22] border-[#e05a2b]/50 shadow-2xl ring-1 ring-[#e05a2b]/30'
                        : 'bg-[#1b2d22]/60 border-[#f4efea]/10 hover:border-[#e5ac39]/40 hover:bg-[#1b2d22]'
                    }`}
                  >
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono-code text-xs px-3 py-1 rounded-full bg-[#e5ac39]/15 text-[#e5ac39] border border-[#e5ac39]/30 flex items-center gap-1.5 font-medium">
                          <Briefcase className="w-3 h-3 text-[#e05a2b]" /> ENTRY 0{index + 1}
                        </span>
                        <span className="font-mono-code text-xs text-[#f4efea]/60 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#e5ac39]" /> {exp.period}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-[#f4efea] mb-1">{exp.role}</h3>

                      <div className="flex items-center gap-3 font-sans text-sm text-[#e05a2b] font-semibold mb-4">
                        <span>{exp.company}</span>
                        <span className="text-[#f4efea]/30">•</span>
                        <span className="text-[#f4efea]/70 font-normal flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {exp.location}
                        </span>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md bg-[#142219] border border-[#f4efea]/10 font-mono-code text-[11px] text-[#f4efea]/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expand Button */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#f4efea]/10 text-xs font-mono-code text-[#e5ac39]">
                        <span>{isExpanded ? 'Hide details' : 'Click to expand details'}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180 text-[#e05a2b]' : ''
                          }`}
                        />
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-[#142219]/60 px-6 pb-6 pt-2 border-t border-[#f4efea]/10"
                        >
                          <ul className="space-y-3 font-sans text-sm text-[#f4efea]/85">
                            {exp.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-[#e05a2b] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
