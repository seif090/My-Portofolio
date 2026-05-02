import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Server, Layout, Database, Cloud } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal = ({ project, onClose }: CaseStudyModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="glass-card w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-black/90"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image */}
          <div className="relative h-64 md:h-96 w-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
            <button 
              onClick={onClose}
              className="absolute top-4 md:top-6 right-4 md:right-6 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-md transition-colors z-10"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
              <h2 className="text-2xl md:text-5xl font-bold mb-4">{project.title}</h2>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="btn-primary flex items-center gap-2 py-1.5 md:py-2 text-xs md:text-sm">
                    <Github className="w-4 h-4" /> Repo
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} className="btn-secondary flex items-center gap-2 py-1.5 md:py-2 text-xs md:text-sm">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Content */}
            <div className="md:col-span-2 space-y-10">
              <section>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-500 rounded-full" />
                  Project Overview
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-500 rounded-full" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {project.metrics && (
                <section>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <div className="w-1 h-6 bg-blue-500 rounded-full" />
                    Project Metrics
                  </h3>
                  <div className="flex flex-wrap gap-8">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-3xl font-bold text-blue-400">{metric.value}</span>
                        <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Stack Info */}
            <div className="space-y-8">
              <div className="glass-card p-6 border-white/5 bg-white/[0.02]">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Technical Architecture</h4>
                
                <div className="space-y-6">
                  <StackItem icon={Layout} label="Frontend" stack={project.techStack.frontend} />
                  <StackItem icon={Server} label="Backend" stack={project.techStack.backend} />
                  <StackItem icon={Database} label="Database" stack={project.techStack.database} />
                  {project.techStack.cloud && (
                    <StackItem icon={Cloud} label="Cloud/Infrastructure" stack={project.techStack.cloud} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const StackItem = ({ icon: Icon, label, stack }: { icon: any, label: string, stack: string[] }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2 text-blue-400">
      <Icon className="w-4 h-4" />
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <span key={item} className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
          {item}
        </span>
      ))}
    </div>
  </div>
);
