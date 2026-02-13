"use client"
import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="text-primary font-mono">&lt;/&gt;</span> TechifyDev
            </div>
            <p className="text-slate-500 text-sm font-mono max-w-xs">
              Building sleek, high-impact digital experiences with Flutter, Next.js, Java & Shopify Store Design.
            </p>
          </div>

          <div className="flex gap-12">
            <div className="text-center md:text-left">
              <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Connect</h5>
              <div className="flex gap-4">
                <a href="https://github.com/TechifyDev1" className="text-slate-500 hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
                <a href="https://x.com/techifydev_1" className="text-slate-500 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {currentYear} TechifyDev. Handcrafted with passion.
          </p>
          <div className="text-slate-600 text-xs font-mono">
            Next.js 15 // Tailwind CSS 4 // Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;