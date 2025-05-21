import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/90 backdrop-blur-lg py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-gradient mb-2">TechifyDev</div>
            <p className="text-sm text-muted-foreground">
              Mobile with Flutter, powered by Next.js & Java backend.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center md:text-left">
              <h5 className="font-semibold mb-3">Navigation</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-muted-foreground hover:text-foreground">Home</a></li>
                <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#projects" className="text-sm text-muted-foreground hover:text-foreground">Projects</a></li>
                <li><a href="#experience" className="text-sm text-muted-foreground hover:text-foreground">Experience</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h5 className="font-semibold mb-3">Connect</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">LinkedIn</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} TechifyDev. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            Made with ❤️ using Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;