import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scroll spy
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 transition-all duration-300">
      <nav
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-full px-5 py-3 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#142219]/85 backdrop-blur-md border-[#f4efea]/15 shadow-2xl py-2.5'
            : 'bg-[#142219]/40 backdrop-blur-sm border-transparent'
        }`}
      >
        {/* Left Monogram / Identity */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#e05a2b] text-white flex items-center justify-center font-display font-bold text-sm tracking-tighter group-hover:scale-105 transition-transform">
            BB
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold text-[#f4efea] tracking-tight group-hover:text-[#e05a2b] transition-colors">
              Bhawri Bipin
            </span>
            <span className="font-mono-code text-[10px] text-[#e5ac39] tracking-widest uppercase flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Software & AI
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#1b2d22]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#f4efea]/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 font-mono-code text-xs transition-colors rounded-full ${
                  isActive ? 'text-[#f4efea] font-medium' : 'text-[#f4efea]/60 hover:text-[#f4efea]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-[#284030] rounded-full -z-10 border border-[#f4efea]/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={cvData.personalInfo.resumeUrl}
            download="Bhawri_Bipin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono-code text-xs border border-[#f4efea]/20 text-[#f4efea]/80 hover:text-[#f4efea] hover:border-[#f4efea]/40 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#e5ac39]" />
            Resume
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            data-cursor="magnetic"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full font-mono-code text-xs font-semibold bg-[#e05a2b] text-white hover:bg-[#c8491d] shadow-lg shadow-[#e05a2b]/20 hover:shadow-[#e05a2b]/40 transition-all hover:scale-105 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            Let's talk
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={cvData.personalInfo.resumeUrl}
            download="Bhawri_Bipin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#e5ac39] border border-[#f4efea]/10 rounded-full"
            aria-label="Download Resume"
          >
            <FileText className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 text-[#f4efea] bg-[#1b2d22] border border-[#f4efea]/15 rounded-full focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#e05a2b]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-3 mx-auto max-w-6xl bg-[#1b2d22] border border-[#f4efea]/15 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#f4efea]/10">
              <span className="font-mono-code text-xs text-[#e5ac39] tracking-widest uppercase">Navigation</span>
              <span className="font-mono-code text-xs text-[#f4efea]/50">Bhawri Bipin Portfolio</span>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2.5 px-4 rounded-xl font-display text-lg flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-[#e05a2b] text-white font-semibold'
                      : 'text-[#f4efea]/80 hover:bg-[#142219] hover:text-[#f4efea]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono-code text-xs opacity-60">→</span>
                </button>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2 border-t border-[#f4efea]/10">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 bg-[#e05a2b] text-white rounded-xl font-mono-code text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#e05a2b]/30"
              >
                <Send className="w-4 h-4" />
                Let's talk
              </button>
              <a
                href={cvData.personalInfo.resumeUrl}
                download="Bhawri_Bipin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#142219] text-[#f4efea] border border-[#f4efea]/20 rounded-xl font-mono-code text-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#e5ac39]" />
                Download Resume (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
