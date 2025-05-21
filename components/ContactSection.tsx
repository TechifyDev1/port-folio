"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";

const ContactSection = () => {


  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-accent via-cta to-primary bg-clip-text text-transparent text-shine text-center">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" /> Let's Talk
              </h3>
              
              <form onSubmit={()=>{}} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent" 
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent" 
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent" 
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
              </div>
              
              <div>
                <div className="flex items-start mb-4">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:techifydev1@gmail.com" className="text-muted-foreground hover:text-primary link-underline">
                      techifydev1@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/TechifyDev1" 
                    className="h-10 w-10 rounded-full bg-background/90 backdrop-blur-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-background/90 backdrop-blur-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                    <a 
                    href="https://x.com/techifydev_1" 
                    className="h-10 w-10 rounded-full bg-background/90 backdrop-blur-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">
                  Currently based in <span className="font-semibold">San Francisco, CA</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;