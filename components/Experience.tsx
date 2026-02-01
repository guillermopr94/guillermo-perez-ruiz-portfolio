import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCE_DATA[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-slate-950 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A journey from Full-Stack development to Technical Leadership, focusing on modernizing platforms and delivering value.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((job, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === job.id;

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-slate-900 z-10 hidden md:block mt-6 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>

                  {/* Spacer for the other side */}
                  <div className="flex-1 hidden md:block"></div>

                  {/* Content Card */}
                  <div className={`flex-1 w-full ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div 
                      className={`bg-slate-900 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:border-accent/30 cursor-pointer ${isExpanded ? 'ring-1 ring-accent/20 bg-slate-800/50' : ''}`}
                      onClick={() => toggleExpand(job.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                          <div className="text-accent font-medium mb-1">{job.company}</div>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4 font-mono">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                      </div>

                      <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                        {job.description}
                      </p>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-slate-700/50">
                                <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400 mb-4">
                                  {job.achievements.map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                  ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-4">
                                  {job.techStack.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-slate-800 rounded text-xs text-accent border border-slate-700">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;