import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { cvData } from '../data/cvData';

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-8 bg-[#142219] relative overflow-hidden border-t border-[#f4efea]/10">
      {/* Editorial Header */}
      <div className="max-w-6xl mx-auto w-full mb-16">
        <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest bg-[#1b2d22] px-3.5 py-1.5 rounded-full border border-[#f4efea]/10 mb-4">
          <span>05 / EDUCATION</span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-[#f4efea] tracking-tight">
          ACADEMIC <span className="italic font-editorial text-[#e5ac39] font-normal">QUALIFICATIONS</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {cvData.education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
              edu.status === 'Current'
                ? 'bg-gradient-to-br from-[#1b2d22] to-[#142219] border-[#e5ac39]/50 shadow-2xl'
                : 'bg-[#1b2d22]/50 border-[#f4efea]/10 hover:border-[#f4efea]/30'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-code text-xs px-3.5 py-1 rounded-full bg-[#142219] border border-[#f4efea]/15 text-[#e5ac39] flex items-center gap-1.5 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-[#e05a2b]" /> {edu.period}
                </span>
                <span className="font-mono-code text-xs text-[#f4efea]/50 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {edu.location}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f4efea] mb-2">{edu.degree}</h3>
              <div className="font-sans text-base text-[#e05a2b] font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#e5ac39]" /> {edu.specialization}
              </div>

              <div className="font-mono-code text-sm text-[#f4efea]/80 mb-6 font-medium">
                {edu.institution}
              </div>
            </div>

            <div className="pt-6 border-t border-[#f4efea]/10">
              <p className="font-sans text-xs sm:text-sm text-[#f4efea]/75 leading-relaxed">
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
