import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="glass-card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Info Side */}
          <div className="p-12 bg-white/5 space-y-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
             
             <div className="space-y-4 relative z-10">
               <h2 className="text-4xl font-bold text-white">Let's Build Something <br /> Meaningful Together</h2>
               <p className="text-gray-400 max-w-sm">
                 I'm currently accepting new projects. Whether you have a clear vision or just an idea, let's talk.
               </p>
             </div>

             <div className="space-y-6 relative z-10">
                <ContactInfo icon={Mail} label="Email Me" value="seiftarek090@gmail.com" />
                <ContactInfo icon={Phone} label="Call Me" value="+20 100 838 5505" />
                <ContactInfo icon={MapPin} label="Based In" value="Alexandria, Egypt / Remote" />
             </div>

             <div className="pt-8 relative z-10">
                <a 
                  href="https://wa.me/201008385505" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-2xl"
                >
                  <MessageCircle className="w-6 h-6 text-green-500" />
                  WhatsApp Me
                </a>
             </div>
          </div>

          {/* Form Side */}
          <div className="p-12 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputGroup label="Full Name" placeholder="John Doe" />
              <InputGroup label="Email Address" placeholder="john@example.com" type="email" />
            </div>
            <InputGroup label="Project Subject" placeholder="Enterprise ERP Development" />
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message Details</label>
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all min-h-[150px] resize-none"
                placeholder="Tell me about your system requirements..."
              />
            </div>
            <button className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-lg">
               Send Message
               <Send className="w-5 h-5" />
            </button>
            <p className="text-center text-xs text-gray-500 italic">
               I typically respond within 24 business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="p-3 bg-white/5 border border-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
      <Icon className="w-5 h-5 text-blue-400" />
    </div>
    <div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{label}</div>
      <div className="text-white font-medium">{value}</div>
    </div>
  </div>
);

const InputGroup = ({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">{label}</label>
    <input 
      type={type}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
      placeholder={placeholder}
    />
  </div>
);
