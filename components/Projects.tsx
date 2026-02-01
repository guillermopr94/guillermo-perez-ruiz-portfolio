import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Circle } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  const getStatusColor = (status?: string) => {
    switch(status) {
      case 'Live': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Published': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Prototype': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-4"></div>
            <p className="text-slate-400 max-w-xl">
              From AI-driven storytelling to real-world e-commerce solutions.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/guillermopr94"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-accent hover:text-white transition-colors mt-4 md:mt-0"
          >
            <Github className="w-5 h-5" />
            <span>View all on GitHub</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                 <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/20 transition-all z-10"></div>
                 {project.status && (
                   <div className={`absolute top-3 right-3 z-20 px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 ${getStatusColor(project.status)}`}>
                      <Circle className="w-2 h-2 fill-current animate-pulse" />
                      {project.status}
                   </div>
                 )}
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                 />
              </div>

              <div className="p-6 relative z-20 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800 mt-auto">
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-accent hover:text-sky-300 transition-colors ml-auto"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {!project.link && project.status === 'Live' && (
                     <span className="text-xs text-slate-500 italic ml-auto">
                       Private Deployment
                     </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;