import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-slate-900/50 relative overflow-hidden scroll-mt-20"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">
            A comprehensive stack to solve complex engineering problems.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS_DATA.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-secondary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 bg-slate-900 rounded-lg group-hover:bg-secondary/20 transition-colors"
                  aria-hidden="true"
                >
                  <category.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-200">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-slate-900 text-slate-400 rounded-md border border-slate-800 hover:text-white hover:border-slate-600 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
