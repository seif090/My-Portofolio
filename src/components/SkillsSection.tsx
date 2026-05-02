import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, ShieldCheck, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'REST APIs'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'Frontend Engineering',
    icon: Layout,
    skills: ['Angular', 'React', 'JavaScript', 'TypeScript'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    title: 'Database & Infrastructure',
    icon: Database,
    skills: ['SQL Server', 'Entity Framework', 'Azure', 'CI/CD'],
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10'
  },
  {
    title: 'Principles & Core',
    icon: ShieldCheck,
    skills: ['OOP', 'SOLID', 'Clean Architecture', 'Design Patterns'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold font-sans tracking-tight">Technical <span className="text-blue-500 italic">Arsenal</span></h2>
          <p className="text-gray-400 max-w-xl font-medium">
            A comprehensive set of technologies and methodologies I use to build robust, enterprise-grade applications.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 group hover:border-white/20 transition-all"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${category.bgColor}`}>
              <category.icon className={`w-6 h-6 ${category.color}`} />
            </div>
            <h4 className="text-xl font-bold text-white mb-6">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, j) => (
                <span 
                  key={j} 
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300 group-hover:border-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Visual Indicator of all skills combined */}
      <div className="mt-16 p-8 glass-card border-dashed flex flex-wrap justify-center gap-x-12 gap-y-6">
        {['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'C#', '.NET Core', 'SQL Server'].map((skill, i) => (
          <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
             <span className="text-sm font-bold tracking-widest uppercase">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
