import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { cvData } from '../data/cvData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-[#142219] relative overflow-hidden border-t border-[#f4efea]/10">
      {/* Editorial Label */}
      <div className="max-w-6xl mx-auto w-full mb-8">
        <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest bg-[#1b2d22] px-3.5 py-1.5 rounded-full border border-[#f4efea]/10">
          <span>01 / ABOUT</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Fact-based Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <h2 className="font-display font-black text-4xl sm:text-6xl text-[#f4efea] leading-tight">
            HELLO, <br />
            <span className="italic font-editorial text-[#e5ac39] text-5xl sm:text-7xl">I'M BHAWRI.</span>
          </h2>

          <div className="p-6 rounded-2xl bg-[#1b2d22] border border-[#f4efea]/15 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e05a2b]/5 rounded-full blur-2xl pointer-events-none" />
            <p className="text-lg text-[#f4efea]/90 font-sans leading-relaxed">
              {cvData.personalInfo.fullSummary}
            </p>
          </div>

          {/* Strength Badges Grid */}
          <div className="flex flex-col gap-3 pt-2">
            <h3 className="font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#e05a2b]" /> Core Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cvData.strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1b2d22]/70 border border-[#f4efea]/10 hover:border-[#e05a2b]/40 hover:bg-[#1b2d22] transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#e05a2b]/15 text-[#e05a2b] flex items-center justify-center group-hover:bg-[#e05a2b] group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-sm text-[#f4efea]/90 font-medium">{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Education & Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#f4efea]/10">
            <span className="font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest">Academic Timeline</span>
            <span className="font-mono-code text-xs text-[#f4efea]/40">2022 — Present</span>
          </div>

          {/* Education Cards */}
          <div className="flex flex-col gap-4">
            {cvData.education.map((edu) => (
              <motion.div
                key={edu.id}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`p-6 rounded-2xl border transition-all duration-300 relative ${
                  edu.status === 'Current'
                    ? 'bg-[#1b2d22] border-[#e5ac39]/40 shadow-xl'
                    : 'bg-[#1b2d22]/50 border-[#f4efea]/10 hover:border-[#f4efea]/30'
                }`}
              >
                {/* Status Pill */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono-code text-[11px] px-3 py-1 rounded-full uppercase tracking-wider ${
                      edu.status === 'Current'
                        ? 'bg-[#e5ac39]/20 text-[#e5ac39] border border-[#e5ac39]/40 font-semibold'
                        : 'bg-[#f4efea]/10 text-[#f4efea]/70'
                    }`}
                  >
                    {edu.status}
                  </span>
                  <span className="font-mono-code text-xs text-[#f4efea]/60">{edu.period}</span>
                </div>

                <h4 className="font-display text-xl font-bold text-[#f4efea] mb-1">{edu.degree}</h4>
                <div className="font-sans text-sm text-[#e05a2b] font-medium mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> {edu.specialization}
                </div>

                <div className="flex items-center gap-2 font-mono-code text-xs text-[#f4efea]/70 mb-3">
                  <GraduationCap className="w-4 h-4 text-[#e5ac39]" />
                  <span>{edu.institution}</span>
                  <span className="opacity-40">•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{edu.location}</span>
                </div>

                <p className="font-sans text-xs text-[#f4efea]/70 leading-relaxed border-t border-[#f4efea]/10 pt-3">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Location / Meta card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#e05a2b]/20 to-[#1b2d22] border border-[#e05a2b]/30 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-mono-code text-xs text-[#e5ac39] uppercase tracking-wider">Base Location</span>
              <span className="font-display text-lg text-[#f4efea] font-bold">Pune & Kerala, India</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#e05a2b] text-white flex items-center justify-center font-bold text-sm shadow-md">
              IN
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
