import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileText, Copy, Check, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { cvData } from '../data/cvData';

const LinkedinIcon = (props) => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
  </svg>
);

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cvData.personalInfo.email);
    setCopied(true);
    
    // Confetti effect
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#e05a2b', '#e5ac39', '#f4efea'],
    });

    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-[#142219] relative overflow-hidden border-t border-[#f4efea]/10">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-[#e05a2b]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Editorial Header */}
      <div className="max-w-6xl mx-auto w-full mb-16 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#e5ac39] uppercase tracking-widest bg-[#1b2d22] px-4 py-2 rounded-full border border-[#f4efea]/10 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#e05a2b]" />
          <span>06 / GET IN TOUCH</span>
        </div>

        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-[#f4efea] tracking-tight leading-none mb-6">
          LET'S BUILD <br />
          <span className="italic font-editorial text-[#e05a2b] font-normal">SOMETHING.</span>
        </h2>

        <p className="font-sans text-lg sm:text-xl text-[#f4efea]/80 max-w-xl font-light leading-relaxed">
          Have an opportunity, project, internship or idea worth discussing? Feel free to reach out directly.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Direct Card */}
        <motion.div
          whileHover={{ y: -4 }}
          className="p-8 rounded-3xl bg-[#1b2d22] border border-[#e05a2b]/40 shadow-2xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#e05a2b] text-white flex items-center justify-center shadow-lg shadow-[#e05a2b]/30">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-mono-code text-xs text-[#e5ac39]">PRIMARY EMAIL</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-[#f4efea] mb-1">Send an Email</h3>
            <p className="font-mono-code text-sm text-[#f4efea]/70 mb-6">{cvData.personalInfo.email}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#f4efea]/10">
            <a
              href={`mailto:${cvData.personalInfo.email}`}
              className="flex-1 py-3 px-4 rounded-xl bg-[#e05a2b] text-white font-mono-code text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#c8491d] transition-colors shadow-lg shadow-[#e05a2b]/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open Mail Client</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="py-3 px-4 rounded-xl bg-[#142219] text-[#f4efea] border border-[#f4efea]/15 font-mono-code text-xs flex items-center justify-center gap-2 hover:border-[#e5ac39] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-[#e5ac39]" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </motion.div>

        {/* Direct Links Grid Card */}
        <div className="flex flex-col gap-4">
          {/* Phone Card */}
          <motion.a
            whileHover={{ x: 4 }}
            href={`tel:${cvData.personalInfo.phone}`}
            className="p-5 rounded-2xl bg-[#1b2d22]/70 border border-[#f4efea]/10 hover:border-[#f4efea]/30 flex items-center justify-between transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#142219] text-[#e5ac39]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] text-[#f4efea]/50 uppercase tracking-wider block">Phone / Mobile</span>
                <span className="font-sans text-base text-[#f4efea] font-medium">{cvData.personalInfo.phone}</span>
              </div>
            </div>
            <span className="font-mono-code text-xs text-[#e05a2b]">CALL →</span>
          </motion.a>

          {/* LinkedIn Link */}
          <motion.a
            whileHover={{ x: 4 }}
            href={cvData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#1b2d22]/70 border border-[#f4efea]/10 hover:border-[#f4efea]/30 flex items-center justify-between transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#142219] text-[#e5ac39]">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] text-[#f4efea]/50 uppercase tracking-wider block">LinkedIn Profile</span>
                <span className="font-sans text-base text-[#f4efea] font-medium">{cvData.personalInfo.linkedinDisplay}</span>
              </div>
            </div>
            <span className="font-mono-code text-xs text-[#e05a2b]">VISIT →</span>
          </motion.a>

          {/* GitHub Link */}
          <motion.a
            whileHover={{ x: 4 }}
            href={cvData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#1b2d22]/70 border border-[#f4efea]/10 hover:border-[#f4efea]/30 flex items-center justify-between transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#142219] text-[#e5ac39]">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] text-[#f4efea]/50 uppercase tracking-wider block">GitHub Repositories</span>
                <span className="font-sans text-base text-[#f4efea] font-medium">{cvData.personalInfo.githubDisplay}</span>
              </div>
            </div>
            <span className="font-mono-code text-xs text-[#e05a2b]">VISIT →</span>
          </motion.a>
        </div>
      </div>

      {/* Resume CTA Download Bar */}
      <div className="max-w-4xl mx-auto w-full mt-10 p-6 rounded-3xl bg-gradient-to-r from-[#1b2d22] via-[#284030] to-[#1b2d22] border border-[#e5ac39]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <FileText className="w-6 h-6 text-[#e5ac39] shrink-0 hidden sm:block" />
          <div>
            <h4 className="font-display font-bold text-lg text-[#f4efea]">Download Official Resume</h4>
            <p className="font-mono-code text-xs text-[#f4efea]/60">Get a PDF copy of my experience and credentials.</p>
          </div>
        </div>

        <a
          href={cvData.personalInfo.resumeUrl}
          download="Bhawri_Bipin_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-[#e5ac39] text-[#142219] font-mono-code text-xs font-bold hover:bg-white transition-colors shadow-lg flex items-center gap-2 shrink-0"
        >
          <FileText className="w-4 h-4" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>
    </section>
  );
};
