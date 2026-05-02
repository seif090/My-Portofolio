/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProcessSection } from './components/ProcessSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ResumePDFView } from './components/ResumePDFView';
import { projects } from './data/projects';
import { Project } from './types';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Rocket } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showResume, setShowResume] = useState(false);

  if (showResume) {
    return (
      <>
        <div className="fixed top-6 left-6 z-[100] print:hidden">
           <button 
             onClick={() => setShowResume(false)}
             className="bg-black/80 backdrop-blur-md border border-white/10 text-white px-6 py-2 rounded-full font-bold hover:bg-white/10 transition-all"
           >
             ← Back to Portfolio
           </button>
        </div>
        <ResumePDFView />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden flex flex-col">
      {/* Ambient Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <Navbar onShowResume={() => setShowResume(true)} />
      
      <main className="relative z-10">
        <Hero />

        {/* Stats Strip */}
        <div className="border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Code2, label: 'Projects Completed', value: '45+' },
              { icon: Rocket, label: 'Years Experience', value: '4+' },
              { icon: Cpu, label: 'Enterprise Systems', value: '12+' },
              { icon: Globe, label: 'Global Clients', value: '20+' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <stat.icon className="w-5 h-5 text-gray-600 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Featured <span className="text-blue-500 italic">Work</span></h2>
              <p className="text-gray-400 max-w-xl font-medium">
                A selection of enterprise architectures and high-performance applications designed to solve complex business problems.
              </p>
            </div>
            <div className="flex gap-2">
               {['All', 'Backend', 'Frontend', 'Cloud'].map(filter => (
                 <button key={filter} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${filter === 'All' ? 'bg-blue-600 text-white' : 'hover:bg-white/5 text-gray-500'}`}>
                   {filter}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewDetails={setSelectedProject} 
              />
            ))}
          </div>
        </section>

        <ExperienceSection />

        <SkillsSection />

        <ProcessSection />

        <ContactSection />
      </main>


      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="mb-6 flex justify-center gap-6">
           <a href="https://github.com/seif090" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
           <a href="https://www.linkedin.com/in/seif-tarek-a88567254/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Seif Tarek. Built with React & .NET Passion.</p>
      </footer>

      <CaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

