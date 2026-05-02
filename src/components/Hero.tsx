import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Server, Cpu, Database, Terminal } from 'lucide-react';

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-blue-400 border-r-2 border-blue-400 pr-1 animate-pulse min-h-[1.5em]">
      {texts[index].substring(0, subIndex)}
    </span>
  );
};

export const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-6 md:px-12 flex flex-col items-center text-center max-w-7xl mx-auto overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Available for new projects</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.05]"
      >
        Architecting High-Performance <br />
        <TypewriterText texts={['.NET Systems.', 'Enterprise Apps.', 'Cloud Solutions.', 'Web Experiences.']} />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
      >
        Full Stack .NET Developer with 4+ years of experience building scalable and secure web applications using ASP.NET Core and Angular. Expert in REST APIs, performance optimization, and Clean Architecture (SOLID).
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
          Hire Me
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#projects" className="btn-secondary flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          View My Projects
        </a>
      </motion.div>

      {/* Decorative elements */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl opacity-50">
        {[
          { icon: Server, label: 'Cloud Infrastructure' },
          { icon: Cpu, label: 'Backend Optimization' },
          { icon: Database, label: 'Data Architecture' },
          { icon: Terminal, label: 'Clean Code Mastery' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + (i * 0.1) }}
            className="flex flex-col items-center gap-3"
          >
            <item.icon className="w-6 h-6 text-gray-500" />
            <span className="text-xs uppercase tracking-widest font-semibold">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
