'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Zap, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <Code2 className="text-blue-400" size={32} />,
    skills: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Backend",
    icon: <Server className="text-green-400" size={32} />,
    skills: ["Node.js", "Express.js", "Fastify", "REST APIs", "Microservices", "WebSockets"]
  },
  {
    category: "Databases",
    icon: <Database className="text-yellow-400" size={32} />,
    skills: ["MSSQL", "MySQL", "Relational Database Design", "Query Optimization"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="text-cyan-400" size={32} />,
    skills: ["Microsoft Azure", "Azure Container Apps", "Docker", "CI/CD", "Containerization", "Production Deployment"]
  },
  {
    category: "Asynchronous Systems",
    icon: <Zap className="text-purple-400" size={32} />,
    skills: ["Redis", "BullMQ", "Background Job Processing", "Event-driven Architecture"]
  },
  {
    category: "Tools & Languages",
    icon: <Wrench className="text-orange-400" size={32} />,
    skills: ["JavaScript", "TypeScript", "Python", "Git", "Postman", "Stripe", "LiveKit"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400"> Technologies I work with to build robust solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors shadow-lg group"
            >
              <div className="bg-slate-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
