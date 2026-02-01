import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden scroll-mt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-slate-950/90 z-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for new challenges
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                {HERO_DATA.name}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
               {HERO_DATA.title}
            </p>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed mb-8 border-l-2 border-slate-700 pl-4">
              {HERO_DATA.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-slate-900 bg-accent hover:bg-sky-300 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                View Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/cv.pdf" download className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
                
                {/* Code Window */}
                <div className="relative bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-90">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-xs text-slate-500 font-mono">guillermo.ts — Tech Lead</div>
                  </div>
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <div className="text-slate-400">
                      <span className="text-secondary">class</span> <span className="text-yellow-400">TechLead</span> <span className="text-secondary">extends</span> <span className="text-yellow-400">Engineer</span> {'{'}
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-purple-400">constructor</span>() {'{'}
                    </div>
                    <div className="pl-8 text-slate-300">
                      <span className="text-blue-400">this</span>.passion = <span className="text-green-400">'Building'</span>;
                    </div>
                    <div className="pl-8 text-slate-300">
                      <span className="text-blue-400">this</span>.stack = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>, <span className="text-green-400">'AWS'</span>];
                    </div>
                    <div className="pl-8 text-slate-300">
                      <span className="text-blue-400">this</span>.focus = <span className="text-green-400">'Architecture & Execution'</span>;
                    </div>
                    <div className="pl-4 text-slate-300">{'}'}</div>
                    <br />
                    <div className="pl-4 text-slate-300">
                      <span className="text-yellow-400">modernizePlatform</span>() {'{'}
                    </div>
                    <div className="pl-8 text-slate-400">
                      // Leading from the code
                    </div>
                    <div className="pl-8 text-slate-300">
                      <span className="text-blue-400">return</span> <span className="text-green-400">'Scalable Systems'</span>;
                    </div>
                    <div className="pl-4 text-slate-300">{'}'}</div>
                    <div className="text-slate-400">{'}'}</div>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;