import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Globe, Calendar, GraduationCap } from 'lucide-react';

export const ResumePDFView = () => {
  return (
    <div className="bg-white min-h-screen text-[#1a1a1a] p-8 md:p-12 font-sans selection:bg-blue-100 print:p-0">
      <div className="max-w-[1000px] mx-auto shadow-2xl print:shadow-none bg-white">
        {/* Header Header */}
        <div className="flex flex-col md:flex-row border-b-2 border-gray-100">
          {/* Sidebar Area (Blueish gray) */}
          <div className="w-full md:w-[35%] bg-[#d9e2ec] p-8 md:p-12 flex flex-col gap-10">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-black tracking-tight text-[#102a43] leading-none mb-4">
                SEIF ELDIN<br/>TAREK
              </h1>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#334e68] border-t-2 border-[#102a43] pt-4 mt-2">
                Full Stack .NET Developer
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[#102a43] border-b border-[#102a43] pb-2">Contact</h2>
              <div className="space-y-3 text-sm font-medium text-[#334e68]">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>+201008385505</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>seiftarek090@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/seif-tarek-a88567254</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[#102a43] border-b border-[#102a43] pb-2">Summary</h2>
              <p className="text-sm leading-relaxed text-[#243b53] font-medium italic">
                Full Stack .NET Developer with 4+ years of experience building scalable and secure web applications using ASP.NET Core and Angular. Expert in REST APIs, performance optimization, and clean architecture (SOLID principles). Experienced in backend systems, real-time communication, and CI/CD pipelines.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[#102a43] border-b border-[#102a43] pb-2">Languages</h2>
              <ul className="text-sm font-bold text-[#334e68] space-y-2">
                <li>• English (Advanced)</li>
                <li>• Arabic (Native)</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[#102a43] border-b border-[#102a43] pb-2">Skills</h2>
              <ul className="text-sm font-bold text-[#334e68] space-y-1.5 columns-1">
                {['C#', 'ASP.NET Core', 'ASP.NET MVC', 'REST APIs', 'SQL Server', 'Angular', 'React', 'JavaScript', 'HTML', 'CSS', 'OOP', 'SOLID'].map(s => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Body Area */}
          <div className="flex-1 p-8 md:p-12 space-y-12 bg-white">
            <section className="space-y-6">
              <h2 className="text-xl font-black uppercase tracking-[0.1em] text-[#102a43]">Education</h2>
              <div className="space-y-1">
                <h3 className="font-bold text-[#102a43] text-sm uppercase">Bachelor in Construction and Architecture Engineering</h3>
                <p className="text-sm text-[#334e68] font-bold">Alexandria University, Alexandria, Egypt</p>
                <p className="text-xs text-gray-500 font-bold">— September 2024</p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-black uppercase tracking-[0.1em] text-[#102a43]">Social Links</h2>
              <div className="grid grid-cols-1 gap-4">
                 <div className="flex items-start gap-4">
                   <div className="font-bold text-sm text-[#102a43] min-w-[80px]">Portfolio</div>
                   <div className="text-sm text-blue-600 font-medium break-all">https://my-portofolio-wheat-phi.vercel.app/</div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="font-bold text-sm text-[#102a43] min-w-[80px]">GitHub</div>
                   <div className="text-sm text-[#334e68] font-medium">github.com/seif090</div>
                 </div>
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="text-xl font-black uppercase tracking-[0.1em] text-[#102a43]">Experience</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-black text-[#102a43]">Full Stack .NET Developer, Amak Al Ahram</h3>
                    <p className="text-sm font-bold text-[#243b53]">Jan 2024 - Jan 2026</p>
                  </div>
                </div>
                <ul className="text-sm text-[#334e68] space-y-2 font-medium">
                  <li>• Built and maintained scalable web applications using ASP.NET Core and Angular</li>
                  <li>• Designed and integrated RESTful APIs for efficient frontend-backend communication</li>
                  <li>• Implemented secure JWT-based authentication and role-based authorization</li>
                  <li>• Contributed to Agile workflows, improving delivery speed and team efficiency</li>
                  <li>• Optimized and refactored legacy code to enhance performance and system scalability</li>
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-black text-[#102a43]">Back End Engineer, Print Sprint Company</h3>
                    <p className="text-sm font-bold text-[#243b53]">Jan 2022 - Jan 2024</p>
                  </div>
                </div>
                <ul className="text-sm text-[#334e68] space-y-2 font-medium">
                  <li>• Designed and developed scalable RESTful APIs using ASP.NET Core and Entity Framework</li>
                  <li>• Built real-time communication systems using WebSockets</li>
                  <li>• Implemented secure JWT-based authentication and authorization</li>
                  <li>• Ensured code quality through unit and integration testing</li>
                  <li>• Streamlined deployments by managing and optimizing CI/CD pipelines</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-black uppercase tracking-[0.1em] text-[#102a43]">Courses</h2>
              <ul className="text-sm text-[#334e68] space-y-2 font-bold">
                <li>• Udacity Web Development Nanodegree</li>
                <li>• Route Academy Full Stack Diploma</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center print:hidden">
        <button 
          onClick={() => window.print()} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-xl hover:scale-105 active:scale-95"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
};
