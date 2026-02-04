import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Manifesto from './components/Manifesto';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  useEffect(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.classList.add('fade-out');
      // Completely remove from DOM after transition
      const timeout = setTimeout(() => {
        loader.remove();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <ErrorBoundary name="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="min-h-screen bg-slate-950 text-slate-200"
      >
        <Navbar />
        <main>
          <ErrorBoundary name="Hero">
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary name="Manifesto">
            <Manifesto />
          </ErrorBoundary>
          <ErrorBoundary name="Experience">
            <Experience />
          </ErrorBoundary>
          <ErrorBoundary name="Skills">
            <Skills />
          </ErrorBoundary>
          <ErrorBoundary name="Projects">
            <Projects />
          </ErrorBoundary>
          <ErrorBoundary name="Contact">
            <Contact />
          </ErrorBoundary>
        </main>
        <Footer />
      </motion.div>
    </ErrorBoundary>
  );
}

export default App;
