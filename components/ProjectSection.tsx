"use client"
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Link, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: 'Postra Blog Platform',
    description: 'A full-stack, production-ready blogging platform designed for performance and scalability. Built with a modern Next.js frontend and a robust Spring Boot backend, Postra delivers fast server-side rendering, secure authentication, dynamic content management, and SEO optimization. Crafted to provide a seamless writing and reading experience with clean UI, responsive design, and optimized API architecture.',
    image: "/postra.png",
    tags: ['Next.js', 'Spring-Boot', 'ReactJs', 'Javascript', 'Java', 'React Context', 'CSS3'],
    liveLink: 'https://postra-frontend.vercel.app',
    githubFrontend: 'https://github.com/TechifyDev1/postra-frontend',
    githubBackend: 'https://github.com/TechifyDev1/postra-backend'
  },
  {
    title: 'AI-Powered Transaction Tracker',
    description: 'An intelligent expense tracking system that goes beyond manual logging. Powered by AI-driven insights, this app helps users categorize spending, monitor financial habits, and gain smarter control over their money. Built with Flutter for cross-platform performance and backed by a scalable architecture, it combines real-time data syncing with intuitive financial analytics for a seamless money management experience.',
    image: '/trackr.png',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Nextjs', 'Javascript'],
    liveLink: 'https://drive.google.com/file/d/1WXFAfqETNqWglDULL6EGeHl2b63mZJoe/view?usp=drive_link',
    githubFrontend: 'https://github.com/TechifyDev1/trackr',
    githubBackend: 'https://github.com/TechifyDev1/trackr-backend'
  },
  {
    title: 'Shortly – URL Shortener',
    description: 'A lightweight and efficient URL shortening application built for speed and simplicity. Designed with a clean, minimal interface, Shortly enables users to generate shareable short links instantly. Focused on usability and responsive design, it demonstrates practical frontend architecture and real-world API integration for handling dynamic link generation.',
    image: '/shortly.png',
    tags: ['React.js', 'Javascript', 'CSS3'],
    liveLink: 'https://shortly-ten.vercel.app/',
    githubFrontend: 'https://github.com/TechifyDev1/shortly',
    githubBackend: 'https://github.com/TechifyDev1'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-base text-primary font-semibold tracking-wide uppercase"
            >
              Portfolio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl"
            >
              Featured Projects
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            href="https://github.com/TechifyDev1"
            className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1 group"
          >
            See all on GitHub
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(19,182,236,0.1)] transition-all duration-500 group flex flex-col h-full glass-card relative"
            >
              {/* Card Link Overlay */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${project.title} live site`}
              />

              <div className="h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/40 lg:group-hover:bg-transparent transition-colors z-20 pointer-events-none"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform lg:group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 z-30 flex gap-2 translate-y-0 lg:translate-y-12 lg:group-hover:translate-y-0 transition-transform duration-300">
                  <Button size="icon" variant="secondary" asChild className="rounded-full bg-black/50 backdrop-blur-md border-white/10 hover:bg-primary pointer-events-auto" title="Frontend Repository">
                    <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
                      <div className="relative">
                        <Github className="h-4 w-4" />
                        <span className="absolute -top-1 -right-1 text-[8px] bg-primary text-black font-bold px-0.5 rounded-sm">F</span>
                      </div>
                    </a>
                  </Button>
                  <Button size="icon" variant="secondary" asChild className="rounded-full bg-black/50 backdrop-blur-md border-white/10 hover:bg-primary pointer-events-auto" title="Backend Repository">
                    <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                      <div className="relative">
                        <Github className="h-4 w-4" />
                        <span className="absolute -top-1 -right-1 text-[8px] bg-accent text-white font-bold px-0.5 rounded-sm">B</span>
                      </div>
                    </a>
                  </Button>
                  <Button size="icon" variant="secondary" asChild className="rounded-full bg-black/50 backdrop-blur-md border-white/10 hover:bg-primary pointer-events-auto" title="Live Demo">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Link className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col relative z-20 pointer-events-none">
                <h3 className="text-xl font-bold text-white lg:group-hover:text-primary transition-colors mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;