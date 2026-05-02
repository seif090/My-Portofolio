import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack .NET Developer',
    company: 'Amak Al Ahram',
    period: 'Jan 2024 - Jan 2026',
    description: 'Developed and maintained enterprise-scale web applications, focusing on architectural integrity and frontend-backend harmony.',
    achievements: [
      'Built and maintained scalable web applications using ASP.NET Core and Angular',
      'Designed and integrated RESTful APIs for efficient frontend-backend communication',
      'Implemented secure JWT-based authentication and role-based authorization',
      'Contributed to Agile workflows, improving delivery speed and team efficiency',
      'Optimized and refactored legacy code to enhance performance and system scalability'
    ]
  },
  {
    role: 'Back End Engineer',
    company: 'Print Sprint Company',
    period: 'Jan 2022 - Jan 2024',
    description: 'Focused on high-performance backend systems and real-time communication protocols.',
    achievements: [
      'Designed and developed scalable RESTful APIs using ASP.NET Core and Entity Framework',
      'Built real-time communication systems using WebSockets',
      'Implemented secure JWT-based authentication and authorization',
      'Ensured code quality through unit and integration testing',
      'Streamlined deployments by managing and optimizing CI/CD pipelines'
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Professional <span className="text-blue-500 italic">Experience</span></h2>
        <p className="text-gray-400 max-w-2xl">My journey in building enterprise-grade software, from robust backends to seamless frontends.</p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Briefcase className="w-32 h-32" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <div className="text-blue-400 font-semibold">{exp.company}</div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </div>
            </div>

            <p className="text-gray-400 mb-8 max-w-3xl leading-relaxed">
              {exp.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.achievements.map((achievement, j) => (
                <div key={j} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
