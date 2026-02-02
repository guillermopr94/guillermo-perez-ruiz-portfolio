import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, Phone, MapPin } from 'lucide-react';
import {
  EXPERIENCE_DATA,
  SKILLS_DATA,
  HERO_DATA,
  SOCIAL_LINKS,
} from '../constants';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                CV Preview
              </h2>
              <div className="flex items-center gap-4">
                <motion.a
                  href="/cv.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-slate-950 rounded-lg text-sm font-bold hover:bg-sky-300 transition-colors"
                >
                  <Download size={18} />
                  Download PDF
                </motion.a>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12">
              {/* Intro */}
              <header className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-white">
                  {HERO_DATA.name}
                </h1>
                <p className="text-xl text-accent font-medium">
                  {HERO_DATA.title}
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} /> Burgos, Spain · Remote
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail size={16} /> guillermoperezruiz94@gmail.com
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone size={16} /> +34 687 96 81 29
                  </span>
                </div>
                <div className="flex justify-center gap-4 pt-2">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 rounded-lg text-slate-300 hover:text-accent hover:bg-slate-700 transition-all"
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </header>

              {/* Summary */}
              <section className="space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2 uppercase tracking-wider">
                  Professional Summary
                </h3>
                <p className="text-slate-300 leading-relaxed italic">
                  {HERO_DATA.description}
                </p>
              </section>

              {/* Experience */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2 uppercase tracking-wider">
                  Experience
                </h3>
                <div className="space-y-8">
                  {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.id} className="space-y-3">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                        <h4 className="text-white font-bold text-lg">
                          {exp.role}
                        </h4>
                        <span className="text-accent text-sm font-mono">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400 text-sm font-medium">
                        <span>{exp.company}</span>
                        <span>{exp.location}</span>
                      </div>
                      <ul className="list-disc list-outside ml-5 space-y-2 text-slate-300 text-sm">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-slate-800/50 border border-slate-700 rounded text-[10px] text-slate-400 font-mono uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2 uppercase tracking-wider">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {SKILLS_DATA.map((category) => (
                    <div key={category.name} className="space-y-3">
                      <h4 className="text-slate-200 font-bold flex items-center gap-2">
                        <category.icon size={18} className="text-accent" />
                        {category.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer with sticky action */}
            <div className="p-6 border-t border-slate-800 bg-slate-900/80 backdrop-blur-md flex justify-center">
              <p className="text-slate-500 text-xs">
                This interactive preview is a web-based version of the PDF
                resume.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
