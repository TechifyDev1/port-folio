"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap } from 'lucide-react';

const experiences = [
  {
    position: 'Project manager',
    company: 'Oaks & Acorns',
    period: 'Feb 2025 - Present',
    description: 'Lead the development of a CMS platform Improved performance by 40% through code optimization and implemented responsive designs across all devices.',
  },
  {
    position: 'Frontend Developer',
    company: 'Demz Agency',
    period: '- - -',
    description: 'Developed and maintained Nextjs applications. Collaborated with designers to implement pixel-perfect UI.',
  },
  {
    position: 'Shopify store developer',
    company: 'Muuds By 2702',
    period: 'July 2025 - March 2026',
    description: 'Edited and implemented custom design on a premium theme',
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-18 bg-background border-y border-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base text-primary font-semibold tracking-wide uppercase"
          >
            Career Path
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl"
          >
            Work Experience
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:-ml-0.5"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12"
            >
              <div className="flex flex-col md:flex-row items-start">
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary border-2 border-primary z-10 md:absolute md:left-1/2 md:-ml-8 shadow-[0_0_15px_rgba(19,182,236,0.3)]">
                  {index === 0 ? <Briefcase className="text-primary h-6 w-6" /> : index === 1 ? <Code className="text-primary h-6 w-6" /> : <GraduationCap className="text-primary h-6 w-6" />}
                </div>

                {/* Content Card (Desktop: left or right) */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'}`}>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <div className="text-primary font-medium mb-1">{exp.company}</div>
                  <div className="text-slate-500 text-sm mb-4 font-mono">{exp.period}</div>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;