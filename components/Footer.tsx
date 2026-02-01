import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="p-1.5 bg-accent/10 rounded-lg">
                  <Terminal className="h-6 w-6 text-accent" />
               </div>
               <span className="text-xl font-bold font-mono tracking-tighter text-slate-100">
                GPR<span className="text-accent">.dev</span>
               </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Tech Lead & Senior Full-Stack Engineer. Building scalable solutions and leading teams with a hands-on approach.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-lg font-bold text-white mb-6">Let's Connect</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:scale-110 transition-all border border-slate-800"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Guillermo Pérez Ruiz. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <span>Built with React, Tailwind &</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;