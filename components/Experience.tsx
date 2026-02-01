import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { 
  MapPin, 
  Calendar, 
  ChevronDown, 
  X, 
  ArrowRight, 
  ArrowLeft,
  Layers,
  Cloud,
  Terminal,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Database,
  Users
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Layers,
  Cloud,
  Terminal,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Database,
  Users
};

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [modalJobId, setModalJobId] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openModal = (id: string) => {
    setModalJobId(id);
    setCurrentSlide(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalJobId(null);
    document.body.style.overflow = 'auto';
  };

  const modalJob = EXPERIENCE_DATA.find(job => job.id === modalJobId);

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
            A journey through technical leadership, legacy modernization, and scalable architecture. Click on a role to see more details.
          </p>
        </motion.div>

        <div className="relative">
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-slate-900 z-10 hidden md:block mt-6 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                  <div className="flex-1 hidden md:block"></div>

                  <div className={`flex-1 w-full ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div 
                      className={`bg-slate-900 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:border-accent/30 cursor-pointer group ${isExpanded ? 'ring-1 ring-accent/20 bg-slate-800/50' : ''}`}
                      onClick={() => toggleExpand(job.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent transition-colors">{job.role}</h3>
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
                                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400 mb-6">
                                  {job.achievements.slice(0, 3).map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                  ))}
                                </ul>

                                {job.details && (
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      openModal(job.id);
                                    }}
                                    className="w-full py-2 px-4 bg-accent/10 border border-accent/20 text-accent text-xs font-bold rounded-lg hover:bg-accent hover:text-slate-900 transition-all flex items-center justify-center gap-2 mb-4"
                                  >
                                    EXPLORE INTERACTIVE JOURNEY
                                    <ArrowRight className="w-4 h-4" />
                                  </button>
                                )}

                                <div className="flex flex-wrap gap-2">
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

      {/* Interactive Modal */}
      <AnimatePresence>
        {modalJobId && modalJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]"
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Sidebar / Info */}
              <div className="w-full md:w-1/3 bg-slate-800/50 p-8 flex flex-col">
                <div className="mb-8">
                  <div className="text-accent text-xs font-bold tracking-widest uppercase mb-2">Technical Deep Dive</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{modalJob.company}</h3>
                  <div className="text-slate-400 text-sm">{modalJob.role}</div>
                </div>

                <div className="space-y-4 flex-1">
                  {modalJob.details?.map((detail, idx) => {
                    const Icon = iconMap[detail.icon || 'Layers'] || Layers;
                    const isActive = currentSlide === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${isActive ? 'bg-accent border-accent text-slate-900 shadow-lg shadow-accent/20' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                      >
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-slate-900/20' : 'bg-slate-800'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm">{detail.title}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <div className="text-xs text-slate-500 font-mono">
                    Slide {currentSlide + 1} / {modalJob.details?.length}
                  </div>
                </div>
              </div>

              {/* Visuals / Content */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-24 h-24 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(56,189,248,0.1)]">
                       {(() => {
                         const Icon = iconMap[modalJob.details?.[currentSlide].icon || 'Layers'] || Layers;
                         return <Icon className="w-12 h-12 text-accent" />;
                       })()}
                    </div>
                    <h4 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                      {modalJob.details?.[currentSlide].title}
                    </h4>
                    <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                      {modalJob.details?.[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-12 flex gap-4">
                  <button 
                    onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                    disabled={currentSlide === 0}
                    className="p-3 bg-slate-800 rounded-xl text-slate-400 hover:text-white disabled:opacity-20 transition-all border border-slate-700"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(prev => Math.min((modalJob.details?.length || 1) - 1, prev + 1))}
                    disabled={currentSlide === (modalJob.details?.length || 1) - 1}
                    className="p-3 bg-accent rounded-xl text-slate-900 hover:bg-sky-300 disabled:opacity-20 transition-all shadow-lg shadow-accent/10"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;