import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    position: 'Senior Frontend Developer',
    company: 'TechGrowth Inc.',
    period: 'Jan 2023 - Present',
    description: 'Lead the development of a Next.js-based SaaS platform. Improved performance by 40% through code optimization and implemented responsive designs across all devices.',
  },
  {
    position: 'Frontend Developer',
    company: 'WebSolutions Co.',
    period: 'Mar 2021 - Dec 2022',
    description: 'Developed and maintained multiple React applications. Collaborated with designers to implement pixel-perfect UI. Introduced TypeScript to improve code quality.',
  },
  {
    position: 'Junior Web Developer',
    company: 'CreativeTech',
    period: 'May 2020 - Feb 2021',
    description: 'Built responsive websites using HTML, CSS, and JavaScript. Assisted in developing React components and integrating REST APIs.',
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-background/90 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-accent via-cta to-primary bg-clip-text text-transparent text-shine text-center">Work Experience</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
          
          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'} md:w-1/2 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
              
              <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-2 text-sm text-muted-foreground">{exp.period}</div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <h4 className="text-primary mb-4">{exp.company}</h4>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ExperienceSection;