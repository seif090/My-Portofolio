import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass-card flex flex-col overflow-hidden h-full cursor-pointer"
      onClick={() => onViewDetails(project)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
        
        {/* Hover overlay icons */}
        <div className="absolute top-4 right-4 flex gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-blue-500/80 backdrop-blur-sm text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex -space-x-2">
            {project.techStack.backend.slice(0, 2).map((tech, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-[10px] font-bold">
                {tech[0]}
              </div>
            ))}
            {project.techStack.backend.length > 2 && (
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-[10px] font-bold">
                +{project.techStack.backend.length - 2}
              </div>
            )}
          </div>
          
          <button className="text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
