import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Layout, Database, Sparkles, Info } from 'lucide-react';
import { cvData } from '../data/cvData';

export const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const categoryIcons = {
    'Languages & Frameworks': <Code className="w-4 h-4 text-[#e05a2b]" />,
    'Tools & Platforms': <Terminal className="w-4 h-4 text-[#e5ac39]" />,
    'Web & UI': <Layout className="w-4 h-4 text-[#e05a2b]" />,
    'Databases': <Database className="w-4 h-4 text-[#e5ac39]" />,
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 bg-[#142219] relative overflow-hidden border-t border-[#f4efea]/10">
      {/* Editorial Header */}
      <div className="max-w-6xl mx-auto w-full mb-16">
        <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest bg-[#1b2d22] px-3.5 py-1.5 rounded-full border border-[#f4efea]/10 mb-4">
          <span>04 / SKILLS</span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-[#f4efea] tracking-tight">
          WHAT I <span className="italic font-editorial text-[#e5ac39] font-normal">WORK WITH</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(cvData.skills).map(([category, skillList], categoryIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: categoryIdx * 0.15 }}
            className="p-8 rounded-3xl bg-[#1b2d22] border border-[#f4efea]/15 shadow-xl flex flex-col justify-between"
          >
            {/* Category Title */}
            <div>
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-[#f4efea]/10">
                <div className="p-2 rounded-xl bg-[#142219] border border-[#f4efea]/10">
                  {categoryIcons[category] || <Sparkles className="w-4 h-4 text-[#e05a2b]" />}
                </div>
                <h3 className="font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest font-bold">
                  {category}
                </h3>
              </div>

              {/* Skills Interactive Badges */}
              <div className="flex flex-wrap gap-2.5">
                {skillList.map((skill) => {
                  const isSelected = activeSkill?.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onClick={() => setActiveSkill(isSelected ? null : skill)}
                      className={`px-4 py-2 rounded-xl font-mono-code text-xs transition-all duration-300 flex items-center gap-2 ${
                        isSelected
                          ? 'bg-[#e05a2b] text-white shadow-lg shadow-[#e05a2b]/30 scale-105 font-bold border border-white/20'
                          : 'bg-[#142219] text-[#f4efea]/90 border border-[#f4efea]/15 hover:border-[#e5ac39] hover:text-[#e5ac39]'
                      }`}
                    >
                      <span>{skill.name}</span>
                      {isSelected && <Sparkles className="w-3 h-3 animate-spin" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contextual Description Popover inside Card */}
            <div className="mt-8 pt-4 border-t border-[#f4efea]/10 min-h-[4rem] flex items-center">
              <AnimatePresence mode="wait">
                {activeSkill ? (
                  <motion.div
                    key={activeSkill.name}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-start gap-2.5 text-xs text-[#f4efea]/90 font-sans"
                  >
                    <Info className="w-4 h-4 text-[#e5ac39] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono-code font-bold text-[#e05a2b]">{activeSkill.name}: </span>
                      <span className="font-light">{activeSkill.desc}</span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-xs font-mono-code text-[#f4efea]/40 italic">
                    Hover over any technology to view its contextual application.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
