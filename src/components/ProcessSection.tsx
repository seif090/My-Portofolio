import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, Users, GitBranch, Cpu, Globe, Search, Database } from 'lucide-react';

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
      {/* Why Choose Me */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Why Partner With Me <br /> 
            <span className="text-gradient">For Your Next System</span>
          </h2>
          <div className="space-y-6">
            {[
              { icon: ShieldCheck, title: 'Enterprise-Grade Security', desc: 'Implementing Zero Trust architectures and HIPAA/GDPR compliance standards by default.' },
              { icon: Zap, title: 'High-Performance Delivery', desc: 'Focusing on sub-second response times and efficient resource utilization across the stack.' },
              { icon: Layers, title: 'Scalable by Design', desc: 'Thinking horizontally first. My systems grow seamlessly with your user base.' },
              { icon: Users, title: 'Proactive Communication', desc: 'Transparent development process with weekly syncs and measurable KPIs.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
           <div className="aspect-square glass-card flex items-center justify-center p-12 overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="relative w-full h-full border-2 border-dashed border-blue-500/20 rounded-full flex items-center justify-center"
              >
                 <div className="absolute top-0 -translate-y-1/2 p-4 bg-gray-900 border border-white/10 rounded-2xl shadow-xl">
                   <Cpu className="w-8 h-8 text-blue-400" />
                 </div>
                 <div className="absolute right-0 translate-x-1/2 p-4 bg-gray-900 border border-white/10 rounded-2xl shadow-xl">
                   <Globe className="w-8 h-8 text-purple-400" />
                 </div>
                 <div className="absolute bottom-0 translate-y-1/2 p-4 bg-gray-900 border border-white/10 rounded-2xl shadow-xl">
                   <Database className="w-8 h-8 text-blue-400" />
                 </div>
                 <div className="absolute left-0 -translate-x-1/2 p-4 bg-gray-900 border border-white/10 rounded-2xl shadow-xl">
                   <Users className="w-8 h-8 text-purple-400" />
                 </div>
              </motion.div>
              <div className="absolute text-center space-y-2">
                <div className="text-4xl font-bold">6+ Years</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Real World Experience</div>
              </div>
           </div>
        </div>
      </div>

      {/* How I Build */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">How I Build <span className="text-blue-500 italic">Robust</span> Systems</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My methodological approach ensures that every line of code serves a business purpose and adheres to technical standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Clean Architecture', icon: Search, desc: 'Domain-driven design with strict separation of concerns.' },
            { step: '02', title: 'Enterprise .NET Core', icon: GitBranch, desc: 'High-concurrency APIs optimized for cloud scalability.' },
            { step: '03', title: 'Agile Development', icon: Cpu, desc: 'Test-driven development (TDD) with continuous feedback loops.' },
            { step: '04', title: 'Automated CI/CD', icon: Globe, desc: 'GitHub Actions & Azure DevOps for robust deployment.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-white/20 transition-all flex items-start gap-4"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs ${
                i === 0 ? 'bg-blue-500/20 text-blue-400' : 
                i === 1 ? 'bg-purple-500/20 text-purple-400' :
                i === 2 ? 'bg-pink-500/20 text-pink-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {item.step}
              </div>
              <div className="space-y-1 mt-1">
                <h4 className="font-bold text-sm text-white">{item.title}</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
