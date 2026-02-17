'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "DIGITRELL",
    period: "Present", // Assumed current based on 'Providng' logic or lack of end date, or just list as is. Resume doesn't specify dates for roles, only Education 2017-2021. I will omit dates if not clear or use generic placeholders? Actually, I'll format without specific dates if not provided, or just show company/role.
    description: [
      "Developed scalable full stack applications using React.js, Node.js, Express.js, and MSSQL.",
      "Played a major role in building a large-scale quality testing platform for DrinkPak enabling automated execution and monitoring workflows.",
      "Designed high-performance REST APIs and optimized database queries improving system responsiveness.",
      "Implemented asynchronous background job processing using Redis and BullMQ for distributed task execution.",
      "Deployed containerized worker and API services on Azure Container Apps ensuring high availability and scalability."
    ]
  },
  {
    role: "Product Engineer",
    company: "SB Technologies",
    description: [
      "Developed enterprise internal platforms using Next.js and Fastify.",
      "Designed scalable backend services and REST APIs for employee management systems.",
      "Optimized API performance reducing average response time by 50%."
    ]
  },
  {
    role: "Software Engineer",
    company: "Tutorcomp Inc",
    description: [
      "Built full stack web platforms using Next.js, Fastify, and MySQL.",
      "Designed scalable architecture for online learning systems handling 5K+ monthly live sessions.",
      "Developed real-time collaboration and video streaming features.",
      "Integrated secure payment systems and optimized backend performance."
    ]
  },
  {
    role: "AI/ML Data Science Intern",
    company: "TLS Innovisions",
    description: [
      "Built machine learning models using Python and scikit-learn.",
      "Performed data preprocessing and predictive model development."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500" />
              
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-blue-400 font-medium">{exp.company}</span>
              </div>
              
              <ul className="space-y-2 text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
