'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold mb-4 border border-blue-500/20">
            Full Stack Developer
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Hi, I'm <br />
            <span className="text-blue-500">Sreerag Subhash</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            I build scalable web applications and high-performance APIs. 
            passionate about turning complex problems into elegant solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/25"
            >
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
                href="/Sreerag_Subhash_React_Fullstack_Resume.pdf" 
                target="_blank"
                className="px-6 py-3 bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-full font-medium transition-all flex items-center gap-2"
                download
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 pt-8 text-gray-400">
             <a href="https://github.com/srg1998" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
             <a href="https://linkedin.com/in/sreerag-subhash" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
             <a href="mailto:sreeragsubhash9@gmail.com" className="hover:text-red-400 transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
            <Image
              src="/images/profile.jpg" 
              alt="Sreerag Subhash"
              fill
              className="object-cover rounded-full border-4 border-slate-700/50 shadow-2xl z-10"
              priority
            />
            
            {/* Floating badges */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4 }}
               className="absolute -top-4 -right-4 bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-700 z-20 flex items-center gap-3"
            >
               <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">R</div>
               <div>
                 <p className="text-xs text-gray-400">Expertise</p>
                 <p className="font-bold text-white">React & Next.js</p>
               </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 5, delay: 1 }}
               className="absolute -bottom-4 -left-4 bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-700 z-20 flex items-center gap-3"
            >
               <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 font-bold">N</div>
               <div>
                 <p className="text-xs text-gray-400">Backend</p>
                 <p className="font-bold text-white">Node.js</p>
               </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
