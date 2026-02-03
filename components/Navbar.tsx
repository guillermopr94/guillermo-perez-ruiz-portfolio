import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const navRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Throttle scroll events for better performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 50);

        // Dynamic navbar height calculation
        const navbarHeight = navRef.current?.offsetHeight || 80;
        const offset = navbarHeight + 20; // Add small buffer for better UX

        // Improved active section detection
        const sections = [
          'about',
          'experience',
          'skills',
          'projects',
          'contact',
        ];
        let currentSection = activeSection;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if section is in viewport, accounting for navbar
            if (rect.top <= offset && rect.bottom > offset) {
              currentSection = section;
              break;
            }
          }
        }

        setActiveSection(currentSection);
      }, 50); // 50ms throttle
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950 rounded-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{
                boxShadow: scrolled
                  ? '0 0 20px rgba(56,189,248,0.3)'
                  : '0 0 10px rgba(56,189,248,0.2)',
              }}
              className="p-1.5 bg-accent/10 rounded-lg"
            >
              <Terminal className="h-6 w-6 text-accent" />
            </motion.div>
            <span className="text-xl font-bold font-mono tracking-tighter text-slate-100">
              GPR<span className="text-accent">.dev</span>
            </span>
          </motion.button>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ scale: 1.1, color: '#38bdf8' }}
                    whileTap={{ scale: 0.95 }}
                    className={`${isActive ? 'text-accent' : 'text-slate-300'} hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950`}
                  >
                    {link.name}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300"
                      initial={false}
                      animate={{ width: isActive ? '100%' : '0%' }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-300 hover:text-accent hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
