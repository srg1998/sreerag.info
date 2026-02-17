'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 text-white border-t border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities involved in web development and architecture.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:sreeragsubhash9@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                  <Mail size={20} />
                </div>
                sreeragsubhash9@gmail.com
              </a>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                  <Phone size={20} />
                </div>
                +91 7356109264
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                  <MapPin size={20} />
                </div>
                Kerala, India
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-start md:items-end"
          >
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="flex gap-4">
                 <a href="https://linkedin.com/in/sreerag-subhash" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                   <Linkedin className="text-white" size={24} />
                 </a>
                 <a href="https://github.com/srg1998" target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                   <Github className="text-white" size={24} />
                 </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sreerag Subhash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
