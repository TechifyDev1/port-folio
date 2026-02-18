"use client"
import { motion } from 'framer-motion';
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";

interface ArchitectureNode {
  label: string;
  icon: string;
  tech: string;
}

interface PlatformData {
  title: string;
  liveLink: string;
  githubFrontend: string;
  githubBackend: string;
  version: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubFrontend: string;
  githubBackend: string;
  platforms?: {
    web?: PlatformData;
    mobile?: PlatformData;
  };
  challenge: string;
  solution: string;
  architecture: {
    clients: ArchitectureNode[];
    core: ArchitectureNode;
    persistence: ArchitectureNode[];
  };
  backendStatus: string;
}

const projects: Project[] = [
  {
    title: 'Postra Blog Platform',
    description: 'A full-stack, production-ready blogging platform designed for performance and scalability. Built with a modern Next.js frontend and a robust Spring Boot backend, Postra delivers fast server-side rendering, secure authentication, dynamic content management, and SEO optimization.',
    image: "/postra.png",
    tags: ['Next.js', 'Spring-Boot', 'ReactJs', 'Javascript', 'Java', 'React Context', 'CSS3'],
    liveLink: 'https://postra-frontend.vercel.app',
    githubFrontend: 'https://github.com/TechifyDev1/postra-frontend',
    githubBackend: 'https://github.com/TechifyDev1/postra-backend',
    platforms: {
      web: {
        title: 'Web Version',
        liveLink: 'https://postra-frontend.vercel.app',
        githubFrontend: 'https://github.com/TechifyDev1/postra-frontend',
        githubBackend: 'https://github.com/TechifyDev1/postra-backend',
        version: 'v14.2.4'
      },
      mobile: {
        title: 'Mobile App',
        liveLink: 'https://drive.google.com/file/d/1-2usx7FaK7-a1fBF6pggiFNHVhKv6dcW/view?usp=drive_link',
        githubFrontend: 'https://github.com/TechifyDev1/postra-mobile',
        githubBackend: 'https://github.com/TechifyDev1/postra-backend',
        version: 'v3.22.0'
      }
    },
    challenge: 'Achieving consistent performance and real-time content updates across both web and mobile platforms while maintaining a shared, secure backend architecture.',
    solution: 'Implemented a microservices-inspired architecture with Spring Boot to handle complex logic and Next.js ISR for the web storefront. Flutter was used for the mobile app to ensure a high-performance, native-like experience with 100% code reuse for UI logic.',
    architecture: {
      clients: [
        { label: 'Web Client', icon: 'language', tech: 'Next.js' },
        { label: 'Mobile Client', icon: 'smartphone', tech: 'Flutter' }
      ],
      core: { label: 'Backend API', icon: 'terminal', tech: 'Spring Boot' },
      persistence: [
        { label: 'Primary DB', icon: 'database', tech: 'PostgreSQL' },
      ]
    },
    backendStatus: 'ACTIVE'
  },
  {
    title: 'AI-Powered Transaction Tracker',
    description: 'An intelligent expense tracking system powered by AI-driven insights. Built with Flutter for cross-platform performance and backed by a scalable architecture, it combines real-time data syncing with intuitive financial analytics.',
    image: '/trackr.png',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Nextjs', 'Javascript'],
    liveLink: 'https://drive.google.com/file/d/1WXFAfqETNqWglDULL6EGeHl2b63mZJoe/view?usp=drive_link',
    githubFrontend: 'https://github.com/TechifyDev1/trackr',
    githubBackend: 'https://github.com/TechifyDev1/trackr-backend',
    challenge: 'Categorizing expenses accurately in real-time while ensuring data privacy and offline synchronization for a seamless mobile experience.',
    solution: 'Developed a robust mobile first approach using Riverpod for state management and Firebase for real-time synchronization. Integrated AI models for automatic transaction categorization and insights.',
    architecture: {
      clients: [
        { label: 'Mobile Client', icon: 'smartphone', tech: 'Flutter/Dart' },
        { label: 'Admin Web', icon: 'language', tech: 'Next.js' }
      ],
      core: { label: 'Logic Layer', icon: 'psychology', tech: 'AI Service' },
      persistence: [
        { label: 'Cloud DB', icon: 'cloud', tech: 'Firebase' },
      ]
    },
    backendStatus: 'ACTIVE'
  },
  {
    title: 'Shortly – URL Shortener',
    description: 'A lightweight and efficient URL shortening application built for speed and simplicity. Designed with a clean, minimal interface, Shortly enables users to generate shareable short links instantly.',
    image: '/shortly.png',
    tags: ['React.js', 'Javascript', 'CSS3'],
    liveLink: 'https://shortly-ten.vercel.app/',
    githubFrontend: 'https://github.com/TechifyDev1/shortly',
    githubBackend: 'https://github.com/TechifyDev1',
    challenge: 'Designing a simple yet highly available system that handles rapid link creation and redirection with minimal latency.',
    solution: 'Built with React.js for a fast, responsive user interface and a focused backend architecture optimized for quick lookups and link generation.',
    architecture: {
      clients: [
        { label: 'Web Client', icon: 'language', tech: 'React.js' }
      ],
      core: { label: 'Core API', icon: 'api', tech: 'Node.js' },
      persistence: [
        { label: 'URL Store', icon: 'link', tech: 'MongoDB' }
      ]
    },
    backendStatus: 'ACTIVE'
  }
];

const MaterialIcon = ({ icon, className = "" }: { icon: string; className?: string }) => {
  return <span className={`material-symbols-outlined ${className}`}>{icon}</span>;
};

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
            <p className="mt-2 text-slate-400 font-medium">Multi-platform solutions spanning Web, Mobile, and Backend architectures.</p>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            href="https://github.com/TechifyDev1"
            target="_blank"
            className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1 group"
          >
            See all on GitHub
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/40 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(19,182,236,0.1)] transition-all duration-500 group flex flex-col md:flex-row h-full"
            >
              <div className="md:w-2/5 relative overflow-hidden group/img min-h-[240px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                      <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded-md text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-primary hover:border-primary/30 transition-all" title="Frontend Repository">
                        <Github className="h-3 w-3" />
                        <span>UI REPO</span>
                      </a>
                      <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded-md text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-primary hover:border-primary/30 transition-all" title="Backend Repository">
                        <Github className="h-3 w-3" />
                        <span>API REPO</span>
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3" onClick={(e) => e.stopPropagation()}>
                  <div className="flex flex-col gap-2">
                    {project.platforms?.web && (
                      <a className="flex items-center justify-between w-full px-4 py-2 bg-primary/10 border border-primary/20 hover:bg-primary/20 rounded text-xs font-semibold text-primary transition-all shadow-[0_2px_10px_rgba(19,182,236,0.1)]" href={project.platforms.web.liveLink} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-2">
                          <MaterialIcon icon="language" className="text-sm" />
                          <span>LIVE WEB DEMO</span>
                        </div>
                        <MaterialIcon icon="open_in_new" className="text-xs" />
                      </a>
                    )}

                    {project.platforms?.mobile && (
                      <a className="flex items-center justify-between w-full px-4 py-2 bg-primary/10 border border-primary/20 hover:bg-primary/20 rounded text-xs font-semibold text-primary transition-all shadow-[0_2px_10px_rgba(19,182,236,0.1)]" href={project.platforms.mobile.liveLink} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-2">
                          <MaterialIcon icon="smartphone" className="text-sm" />
                          <span>LIVE MOBILE DEMO</span>
                        </div>
                        <MaterialIcon icon="download" className="text-xs" />
                      </a>
                    )}

                    {!project.platforms && project.liveLink && (
                      <a className="flex items-center justify-between w-full px-4 py-2 bg-primary/10 border border-primary/20 hover:bg-primary/20 rounded text-xs font-semibold text-primary transition-all shadow-[0_2px_10px_rgba(19,182,236,0.1)]" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-2">
                          <MaterialIcon icon="language" className="text-sm" />
                          <span>LIVE DEMO</span>
                        </div>
                        <MaterialIcon icon="open_in_new" className="text-xs" />
                      </a>
                    )}

                    {project.backendStatus && (
                      <div className="flex items-center justify-between w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded text-xs font-semibold text-slate-500">
                        <div className="flex items-center gap-2">
                          <MaterialIcon icon="terminal" className="text-sm" />
                          <span>BACKEND API</span>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700">{project.backendStatus}</span>
                      </div>
                    )}
                  </div>
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