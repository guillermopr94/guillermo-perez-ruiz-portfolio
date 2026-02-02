import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Manifesto from './components/Manifesto';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;