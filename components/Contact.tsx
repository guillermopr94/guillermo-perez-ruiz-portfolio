import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MessageSquare,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import CVModal from './CVModal';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Honeypot check
    const formData = new FormData(formRef.current);
    if (formData.get('bot-field')) {
      console.warn('Bot detected');
      return;
    }

    setStatus('loading');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (
        !serviceId ||
        !templateId ||
        !publicKey ||
        serviceId === 'YOUR_SERVICE_ID'
      ) {
        throw new Error(
          'EmailJS configuration is missing. Please set up your environment variables.',
        );
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus('success');
      formRef.current.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email submission error:', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again later.',
      );

      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Have a question or want to work together? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare
                  className="text-accent w-6 h-6"
                  aria-hidden="true"
                />
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:guillermoperezruiz94@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="p-3 bg-slate-800 rounded-lg text-accent group-hover:bg-accent group-hover:text-slate-900 transition-all"
                    aria-hidden="true"
                  >
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="text-slate-200 font-medium group-hover:text-accent transition-colors">
                      guillermoperezruiz94@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/guillermo-perez-ruiz-569a3815b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="p-3 bg-slate-800 rounded-lg text-accent group-hover:bg-accent group-hover:text-slate-900 transition-all"
                    aria-hidden="true"
                  >
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">LinkedIn</div>
                    <div className="text-slate-200 font-medium group-hover:text-accent transition-colors">
                      guillermo-perez-ruiz
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/guillermopr94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="p-3 bg-slate-800 rounded-lg text-accent group-hover:bg-accent group-hover:text-slate-900 transition-all"
                    aria-hidden="true"
                  >
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">GitHub</div>
                    <div className="text-slate-200 font-medium group-hover:text-accent transition-colors">
                      guillermopr94
                    </div>
                  </div>
                </a>

                <button
                  onClick={() => setIsCVModalOpen(true)}
                  aria-label="Open resume preview modal"
                  className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-accent/50 rounded-xl transition-all group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  <FileText
                    className="w-5 h-5 text-accent group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <span className="font-bold">View Full Resume</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20 p-8 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-2">
                Let's build something amazing
              </h4>
              <p className="text-slate-400 text-sm">
                I'm currently open to new opportunities and interesting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <form
              ref={formRef}
              className="space-y-6"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              {/* Honeypot field */}
              <input
                type="text"
                name="bot-field"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="from_name"
                    className="text-sm font-medium text-slate-400 ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    aria-required="true"
                    disabled={status === 'loading'}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="reply_to"
                    className="text-sm font-medium text-slate-400 ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    placeholder="your@email.com"
                    required
                    aria-required="true"
                    disabled={status === 'loading'}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-400 ml-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  aria-required="true"
                  disabled={status === 'loading'}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-400 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message here..."
                  required
                  aria-required="true"
                  disabled={status === 'loading'}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none disabled:opacity-50"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={
                  status === 'loading'
                    ? {}
                    : {
                        scale: 1.02,
                        boxShadow: '0 0 20px rgba(56,189,248,0.4)',
                      }
                }
                whileTap={status === 'loading' ? {} : { scale: 0.98 }}
                aria-label="Send contact message"
                className="w-full py-4 bg-accent text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-sky-300 transition-colors shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    Sending...
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-2 text-green-400 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Message sent successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center gap-1 text-red-400 font-medium text-sm text-center"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Error sending message
                    </div>
                    <p className="opacity-80">{errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>

      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </section>
  );
};

export default Contact;
