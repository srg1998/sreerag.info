'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            About Me
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a <strong>React Full Stack Developer</strong> with 3+ years of experience designing and deploying scalable web applications using 
            <strong> React.js, Next.js, Node.js</strong>, and microservices architecture. 
          </p>
          
          <p className="text-gray-400 leading-relaxed">
            My expertise spans across <strong>Azure cloud deployment</strong>, containerized infrastructure, distributed background job processing, 
            and high-performance API design. I have proven experience building production systems with MSSQL and MySQL, implementing asynchronous 
            processing using Redis and BullMQ, and maintaining applications serving 100+ active users with high availability and performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
