import React from 'react';
import { Sparkles, Mail } from 'lucide-react';
import { cvData } from '../data/cvData';

const LinkedinIcon = (props) => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" {...props}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-8 bg-[#0b100d] text-[#f4efea] border-t border-[#f4efea]/10">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e05a2b] text-white flex items-center justify-center font-display font-bold text-sm">
            BB
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-[#f4efea]">Bhawri Bipin</h4>
            <p className="font-mono-code text-xs text-[#e5ac39]">
              Software Developer • AI & Data Science
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 font-mono-code text-xs text-[#f4efea]/70">
          <a
            href={cvData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e05a2b] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon /> LinkedIn
          </a>
          <a
            href={cvData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e05a2b] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href={`mailto:${cvData.personalInfo.email}`}
            className="hover:text-[#e05a2b] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Email
          </a>
        </div>

        {/* Copyright */}
        <div className="font-mono-code text-xs text-[#f4efea]/40 flex items-center gap-1">
          <span>© 2026 Bhawri Bipin</span>
          <Sparkles className="w-3 h-3 text-[#e5ac39]" />
        </div>
      </div>
    </footer>
  );
};
