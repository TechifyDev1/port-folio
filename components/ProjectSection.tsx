import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring product search, filtering, cart functionality, and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400',
    tags: ['Next.js', 'Redux', 'Stripe', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates using WebSockets, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400',
    tags: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Finance Dashboard',
    description: 'An interactive financial dashboard with data visualization, reporting tools, and personalized insights for tracking expenses and investments.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400',
    tags: ['Next.js', 'Recharts', 'Auth0', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          My Projects
        </h2>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl group hover:scale-[1.02] ">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button size="icon" variant="secondary" asChild className="rounded-full">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="icon" variant="secondary" asChild className="rounded-full">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Link className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground m-1 transition-all hover:bg-primary hover:text-primary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;