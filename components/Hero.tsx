import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { HERO_DATA } from '../constants';
import CVModal from './CVModal';

const Hero: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // Premium animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth feel
      },
    },
  };

  const codeWindowVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1], // Elastic-like easing
        delay: 0.4,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden scroll-mt-20"
    >
      {/* Background Grid with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-[url('/assets/bg/noise.svg')] z-0"
      />

      <div className="absolute inset-0 bg-slate-950/90 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <motion.span
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.75, 0, 0.75],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inline-flex h-full w-full rounded-full bg-accent"
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for new challenges
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
            >
              Hi, I'm <br />
              <motion.span
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_auto]"
              >
                {HERO_DATA.name}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-300 font-light mb-4"
            >
              {HERO_DATA.title}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 max-w-lg leading-relaxed mb-8 border-l-2 border-slate-700 pl-4"
            >
              {HERO_DATA.tagline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(56,189,248,0.5)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-slate-900 bg-accent hover:bg-sky-300 transition-colors shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                View Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>

              <motion.button
                onClick={() => setIsCVModalOpen(true)}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(56, 189, 248, 0.5)',
                  color: '#fff',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 transition-all cursor-pointer"
              >
                View Resume
                <FileText className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={codeWindowVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block relative"
            style={{ perspective: 1000 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative circles with parallax effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute bottom-0 left-0 -ml-4 -mb-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
              />

              {/* Code Window */}
              <motion.div
                whileHover={{ rotateY: 2, rotateX: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-90"
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 rounded-full bg-red-500"
                  />
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 rounded-full bg-yellow-500"
                  />
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 rounded-full bg-green-500"
                  />
                  <div className="ml-2 text-xs text-slate-500 font-mono">
                    guillermo.ts — Tech Lead
                  </div>
                </div>

                <div className="p-6 font-mono text-sm leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-slate-400"
                  >
                    <span className="text-secondary">class</span>{' '}
                    <span className="text-yellow-400">TechLead</span>{' '}
                    <span className="text-secondary">extends</span>{' '}
                    <span className="text-yellow-400">Engineer</span> {'{'}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="pl-4 text-slate-300"
                  >
                    <span className="text-purple-400">constructor</span>() {'{'}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="pl-8 text-slate-300"
                  >
                    <span className="text-blue-400">this</span>.passion ={' '}
                    <span className="text-green-400">'Building'</span>;
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="pl-8 text-slate-300"
                  >
                    <span className="text-blue-400">this</span>.stack = [
                    <span className="text-green-400">'React'</span>,{' '}
                    <span className="text-green-400">'Node'</span>,{' '}
                    <span className="text-green-400">'AWS'</span>];
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="pl-8 text-slate-300"
                  >
                    <span className="text-blue-400">this</span>.focus ={' '}
                    <span className="text-green-400">
                      'Architecture & Execution'
                    </span>
                    ;
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="pl-4 text-slate-300"
                  >
                    {'}'}
                  </motion.div>

                  <br />

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    className="pl-4 text-slate-300"
                  >
                    <span className="text-yellow-400">modernizePlatform</span>(){' '}
                    {'{'}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    className="pl-8 text-slate-400"
                  >
                    // Leading from the code
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="pl-8 text-slate-300"
                  >
                    <span className="text-blue-400">return</span>{' '}
                    <span className="text-green-400">'Scalable Systems'</span>;
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.9, duration: 0.5 }}
                    className="pl-4 text-slate-300"
                  >
                    {'}'}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="text-slate-400"
                  >
                    {'}'}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </section>
  );
};

export default Hero;
