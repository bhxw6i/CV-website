import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, GraduationCap, Sparkles, FileText, Send, Code, Database, Cpu } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToNext = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 flex flex-col justify-between overflow-hidden bg-noise"
    >
      {/* Background Decorative Outlined Typography (Parallax Shift) */}
      <motion.div
        className="absolute inset-0 pointer-events-none flex flex-col justify-between select-none overflow-hidden opacity-15 z-0"
        animate={{
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      >
        <div className="font-display text-[16vw] font-black leading-none text-outline-cream whitespace-nowrap -ml-12 -mt-8">
          PORTFOLIO
        </div>
        <div className="font-display text-[18vw] font-black leading-none text-outline-gold text-right -mr-16 -mb-12">
          BHAWRI
        </div>
      </motion.div>

      {/* Floating subtle geometric accents */}
      <motion.div
        className="absolute top-1/4 right-10 md:right-24 w-16 h-16 rounded-full border border-[#e5ac39]/30 pointer-events-none hidden sm:block"
        animate={{
          x: mousePos.x * -0.8,
          y: mousePos.y * -0.8,
          rotate: 360,
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          x: { type: 'spring', stiffness: 80 },
          y: { type: 'spring', stiffness: 80 },
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Top Status & Metadata Bar */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b2d22] border border-[#f4efea]/15 font-mono-code text-xs text-[#e5ac39]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e05a2b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e05a2b]"></span>
              </span>
              <span>Available for Opportunities</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b2d22]/60 border border-[#f4efea]/10 font-mono-code text-xs text-[#f4efea]/70">
              <MapPin className="w-3.5 h-3.5 text-[#e05a2b]" />
              <span>Pune, India</span>
            </div>

            <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b2d22]/60 border border-[#f4efea]/10 font-mono-code text-xs text-[#f4efea]/70">
              <GraduationCap className="w-3.5 h-3.5 text-[#e5ac39]" />
              <span>MCA — AI & Data Science (2025 — Present)</span>
            </div>
          </motion.div>

          {/* Main Oversized Editorial Headline */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight text-[#f4efea]">
              BUILDING <br />
              <span className="italic font-editorial font-normal text-[#e5ac39] text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem]">
                DIGITAL
              </span>{' '}
              <br />
              <span className="text-[#e05a2b] tracking-tighter">EXPERIENCES.</span>
            </h1>

            {/* Floating Decorative Sparkle */}
            <motion.div
              className="absolute -top-6 right-4 sm:right-20 text-[#e5ac39] text-3xl sm:text-5xl"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ✦
            </motion.div>
          </motion.div>

          {/* Subtitle & CV Fact Paragraph */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-2">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="font-mono-code text-sm sm:text-base text-[#e5ac39] tracking-wide flex items-center gap-2 font-medium">
                <Sparkles className="w-4 h-4 text-[#e05a2b]" />
                Aspiring Software Developer & AI Enthusiast
              </div>
              <p className="text-base sm:text-lg text-[#f4efea]/80 font-sans font-light leading-relaxed max-w-2xl">
                {cvData.personalInfo.shortBio}
              </p>
            </div>

            {/* Quick Tech Pill Badges */}
            <div className="lg:col-span-5 flex flex-wrap gap-2 justify-start lg:justify-end">
              <span className="px-3 py-1 bg-[#1b2d22] border border-[#f4efea]/10 rounded-lg text-xs font-mono-code text-[#f4efea]/80 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-[#e05a2b]" /> Java & React
              </span>
              <span className="px-3 py-1 bg-[#1b2d22] border border-[#f4efea]/10 rounded-lg text-xs font-mono-code text-[#f4efea]/80 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#e5ac39]" /> Spring Boot
              </span>
              <span className="px-3 py-1 bg-[#1b2d22] border border-[#f4efea]/10 rounded-lg text-xs font-mono-code text-[#f4efea]/80 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#e05a2b]" /> PostgreSQL & MySQL
              </span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              data-cursor="magnetic"
              className="px-7 py-4 rounded-full bg-[#e05a2b] text-white font-mono-code text-sm font-semibold hover:bg-[#c8491d] shadow-xl shadow-[#e05a2b]/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Explore Selected Work</span>
              <span className="text-base">↓</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-4 rounded-full bg-[#1b2d22] text-[#f4efea] border border-[#f4efea]/20 font-mono-code text-sm hover:border-[#e5ac39] hover:text-[#e5ac39] transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </button>

            <a
              href={cvData.personalInfo.resumeUrl}
              download="Bhawri_Bipin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 font-mono-code text-xs text-[#f4efea]/70 hover:text-[#e5ac39] flex items-center gap-1.5 underline decoration-[#e5ac39]/40 underline-offset-4"
            >
              <FileText className="w-4 h-4 text-[#e5ac39]" />
              Download Resume (PDF)
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="max-w-6xl mx-auto w-full relative z-10 pt-12 flex justify-between items-end border-t border-[#f4efea]/10"
      >
        <div className="font-mono-code text-xs text-[#f4efea]/50 tracking-wider">
          01 / EDITORIAL PORTFOLIO 2026
        </div>

        <button
          onClick={scrollToNext}
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Scroll to about section"
        >
          <span className="font-mono-code text-xs text-[#e5ac39] group-hover:text-[#e05a2b] transition-colors">
            Scroll down
          </span>
          <div className="w-9 h-9 rounded-full bg-[#e05a2b] text-white flex items-center justify-center group-hover:translate-y-1 transition-transform shadow-md shadow-[#e05a2b]/30">
            <ArrowDown className="w-4 h-4" />
          </div>
        </button>
      </motion.div>
    </section>
  );
};
