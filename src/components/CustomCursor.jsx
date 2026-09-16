import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [cursorState, setCursorState] = useState({
    text: '',
    variant: 'default', // 'default' | 'hover' | 'view'
  });
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for cursor positioning
  const mouseX = useSpring(-100, { stiffness: 400, damping: 28 });
  const mouseY = useSpring(-100, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Check touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target.closest('[data-cursor], a, button, input');
      if (!target) {
        setCursorState({ text: '', variant: 'default' });
        return;
      }

      const cursorType = target.getAttribute('data-cursor');
      if (cursorType === 'view') {
        setCursorState({ text: 'VIEW', variant: 'view' });
      } else if (cursorType === 'magnetic' || target.tagName === 'BUTTON' || target.tagName === 'A') {
        setCursorState({ text: '', variant: 'hover' });
      } else {
        setCursorState({ text: '', variant: 'default' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Small dot center */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#e05a2b] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trailing Ring / View Pill */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-mono-code text-[10px] tracking-widest font-semibold transition-colors duration-300 ${
          cursorState.variant === 'view'
            ? 'w-16 h-16 bg-[#e05a2b] text-white rounded-full shadow-lg border border-white/20'
            : cursorState.variant === 'hover'
            ? 'w-12 h-12 border-2 border-[#e05a2b] rounded-full bg-[#e05a2b]/10 backdrop-blur-[1px]'
            : 'w-8 h-8 border border-[#f4efea]/40 rounded-full'
        }`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorState.variant === 'view' ? 1.1 : cursorState.variant === 'hover' ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      >
        {cursorState.text}
      </motion.div>
    </>
  );
};
