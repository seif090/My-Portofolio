import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  onShowResume: () => void;
}

export const Navbar = ({ onShowResume }: NavbarProps) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center px-4 md:px-12 justify-between"
    >
      <div className="flex items-center gap-2 cursor-pointer group">
        <span className="text-lg sm:text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          <span className="inline sm:hidden">SEIF TAREK</span>
          <span className="hidden sm:inline">SEIF ELDIN TAREK</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        {['About', 'Experience', 'Skills', 'Projects', 'Process', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/seif090" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:flex">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/seif-tarek-a88567254/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:flex">
          <Linkedin className="w-5 h-5" />
        </a>
        <button 
          onClick={onShowResume}
          className="btn-primary text-sm px-5 py-2.5"
        >
          Resume
        </button>
      </div>
    </motion.nav>
  );
};
