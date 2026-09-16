import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Award, CheckCircle2, Layout, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';

export const CertificationsSection = () => {
  const { certification } = cvData;

  return (
    <section className="py-20 px-4 sm:px-8 bg-[#142219] relative overflow-hidden border-t border-[#f4efea]/10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Editorial Label */}
        <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest bg-[#1b2d22] px-3.5 py-1.5 rounded-full border border-[#f4efea]/10 mb-4">
          <span>SPECIALIZATION & TRAINING</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Title column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#f4efea] tracking-tight">
              DESIGN + <br />
              <span className="italic font-editorial text-[#e05a2b] font-normal text-5xl sm:text-6xl">
                DEVELOPMENT
              </span>
            </h2>
            <p className="font-sans text-base text-[#f4efea]/80 leading-relaxed font-light">
              Bridging robust software engineering with intuitive user experience principles for modern digital web applications.
            </p>
          </div>

          {/* Certification Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-[#1b2d22] to-[#142219] border border-[#e5ac39]/40 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-[#e5ac39]/10 font-display text-8xl font-black pointer-events-none group-hover:text-[#e5ac39]/20 transition-colors">
              UX
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e05a2b] text-white flex items-center justify-center shadow-lg shadow-[#e05a2b]/30">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#f4efea]">{certification.title}</h3>
                  <span className="font-sans text-sm text-[#e5ac39] font-medium">{certification.provider}</span>
                </div>
              </div>

              <span className="font-mono-code text-xs px-3 py-1 rounded-full bg-[#142219] border border-[#f4efea]/15 text-[#f4efea]/80">
                {certification.period}
              </span>
            </div>

            <p className="font-sans text-sm text-[#f4efea]/85 leading-relaxed mb-6">
              {certification.summary}
            </p>

            <div className="pt-4 border-t border-[#f4efea]/10">
              <span className="font-mono-code text-xs text-[#e5ac39] uppercase tracking-wider mb-3 block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#e05a2b]" /> Covered Modules & Skills
              </span>
              <div className="flex flex-wrap gap-2">
                {certification.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-lg bg-[#142219]/80 border border-[#f4efea]/10 font-mono-code text-xs text-[#f4efea]/90 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#e05a2b]" /> {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
