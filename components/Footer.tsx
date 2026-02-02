import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <footer
      id="contact"
      className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-6"
            >
              <motion.div
                whileHover={{
                  boxShadow: '0 0 20px rgba(56,189,248,0.4)',
                  rotate: 360,
                }}
                transition={{ duration: 0.6 }}
                className="p-1.5 bg-accent/10 rounded-lg"
              >
                <Terminal className="h-6 w-6 text-accent" />
              </motion.div>
              <span className="text-xl font-bold font-mono tracking-tighter text-slate-100">
                GPR<span className="text-accent">.dev</span>
              </span>
            </motion.div>
            <p className="text-slate-400 max-w-sm mb-6">
              Tech Lead & Senior Full-Stack Engineer. Building scalable
              solutions and leading teams with a hands-on approach.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:items-end"
          >
            <h3 className="text-lg font-bold text-white mb-6">Let's Connect</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    boxShadow: '0 0 20px rgba(56,189,248,0.3)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Guillermo Pérez Ruiz. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <span>Built with React, Tailwind &</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
