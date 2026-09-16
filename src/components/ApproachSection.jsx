import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';

export const ApproachSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="py-24 px-4 sm:px-8 bg-[#142219] relative overflow-hidden border-t border-[#f4efea]/10">
      {/* Editorial Header */}
      <div className="max-w-6xl mx-auto w-full mb-16">
        <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest bg-[#1b2d22] px-3.5 py-1.5 rounded-full border border-[#f4efea]/10 mb-4">
          <span>WORKING METHODOLOGY</span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-7xl text-[#f4efea] tracking-tight">
          MY <span className="italic font-editorial text-[#e05a2b] font-normal">APPROACH</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cvData.approach.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          const isAnyHovered = hoveredIdx !== null;

          return (
            <motion.div
              key={item.number}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[20rem] ${
                isHovered
                  ? 'bg-[#1b2d22] border-[#e05a2b] shadow-2xl scale-105 z-10 ring-1 ring-[#e05a2b]/40'
                  : isAnyHovered
                  ? 'bg-[#1b2d22]/30 border-[#f4efea]/5 opacity-50'
                  : 'bg-[#1b2d22]/60 border-[#f4efea]/10 hover:border-[#e5ac39]/40'
              }`}
            >
              {/* Number & Icon */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className={`font-display font-black text-4xl sm:text-5xl transition-colors duration-300 ${
                    isHovered ? 'text-[#e05a2b]' : 'text-outline-gold'
                  }`}
                >
                  {item.number}
                </span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isHovered ? 'bg-[#e05a2b] text-white rotate-45' : 'bg-[#142219] text-[#f4efea]/60'
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-display text-2xl font-bold text-[#f4efea] mb-1">{item.title}</h3>
                <span className="font-mono-code text-xs text-[#e5ac39] tracking-wider uppercase mb-3 block">
                  {item.tagline}
                </span>
                <p
                  className={`font-sans text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                    isHovered ? 'text-[#f4efea]' : 'text-[#f4efea]/70'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
