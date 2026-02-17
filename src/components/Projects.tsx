'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "PakQuality App",
    tech: "React.js, Node.js, Express.js, MSSQL",
    description: "Large-scale quality testing platform for DrinkPak enabling automated execution and monitoring workflows.",
    tags: ["Quality Control", "Automation", "Enterprise"]
  },
  {
    title: "Tutorcomp Platform",
    tech: "React.js, Node.js, MySQL, LiveKit",
    description: "Scalable SaaS platform supporting real-time video learning and class scheduling. Engineered for high concurrency and seamless user experience.",
    tags: ["SaaS", "EdTech", "Real-time Video"]
  },
  {
    title: "Connect App",
    tech: "Next.js, Fastify, Excalidraw",
    description: "Real-time collaboration system with shared whiteboard and live interaction features. Optimized for low-latency communication.",
    tags: ["Collaboration", "Whiteboard", "Real-time"]
  },
  {
    title: "Mobile Purchasing Application",
    tech: "React Native, Node.js, MySQL, Stripe",
    description: "Secure mobile commerce application with robust payment integration and inventory management.",
    tags: ["Mobile", "E-commerce", "FinTech"]
  },
  {
    title: "Personality Prediction (KNN)",
    tech: "Python, Pandas, Scikit-learn, Matplotlib",
    description: "Built a KNN classification model to predict personality traits (introvert/extrovert) using behavioral survey data.",
    tags: ["Machine Learning", "Python", "Data Science"]
  },
  {
    title: "House Price Prediction",
    tech: "Python, Pandas, Scikit-learn, Seaborn",
    description: "Built a regression model to predict house prices based on features like area, bedrooms, and location using Linear Regression.",
    tags: ["Machine Learning", "Regression", "Python"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-xl group"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-6 group-hover:from-slate-800 group-hover:to-blue-900/20 transition-colors">
                {/* Placeholder for project thumbnail */}
                <h3 className="text-2xl font-bold text-slate-700 group-hover:text-slate-500 transition-colors">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-blue-400 mb-4">{project.tech}</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-gray-300 rounded border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
