import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Manifesto from './components/Manifesto';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-slate-950 text-slate-200"
    >
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
