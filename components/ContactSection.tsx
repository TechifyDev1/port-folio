"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base text-primary font-semibold tracking-wide uppercase"
          >
            Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl"
          >
            Get In Touch
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-secondary/40 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 glass-card"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" /> Let&apos;s Build
            </h3>

            <form action="https://app.proforms.top/f/pr88254f6b" method='POST' className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                  required
                  id='name'
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                  required
                  id='email'
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-primary text-white transition-colors resize-none"
                  required
                  id='message'
                ></textarea>
              </div>
              <Button type="submit" className="w-full py-6 bg-primary hover:bg-white hover:text-primary text-black font-bold rounded-lg transition-all duration-300">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Contact Information</h4>
              <p className="text-slate-400 leading-relaxed mb-6">
                Looking for a full-stack developer to help bring your ideas to life? Drop me a message or find me on social media.
              </p>

              <div className="space-y-4">
                <a href="mailto:techifydev1@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="h-5 w-5 text-primary group-hover:text-black" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Mail Me</div>
                    <div className="text-white font-medium group-hover:text-primary transition-colors">techifydev1@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Github />, href: "https://github.com/TechifyDev1" },
                  { icon: <Twitter />, href: "https://x.com/techifydev_1" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-12 h-12 rounded-lg bg-secondary/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-300 shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;