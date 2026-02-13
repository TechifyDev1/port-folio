"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Code2, Layout, Smartphone, ShoppingBag } from 'lucide-react';

export default function AboutMe() {
    const expertise = [
        {
            title: "Frontend",
            icon: <Layout className="text-primary h-6 w-6" />,
            skills: ["Next.js", "Javascript", "Reactjs", "TypeScript", "Tailwind CSS"],
            bgIcon: <Layout className="text-primary h-24 w-24 opacity-5 group-hover:opacity-10 transition-opacity" />
        },
        {
            title: "Backend",
            icon: <Code2 className="text-primary h-6 w-6" />,
            skills: ["Java 17+", "Spring Boot 3", "PostgreSQL", "Supabase", "MySql"],
            bgIcon: <Code2 className="text-primary h-24 w-24 opacity-5 group-hover:opacity-10 transition-opacity" />
        },
        {
            title: "Mobile",
            icon: <Smartphone className="text-primary h-6 w-6" />,
            skills: ["Flutter", "Dart", "Firebase", "Provider", "Bloc"],
            bgIcon: <Smartphone className="text-primary h-24 w-24 opacity-5 group-hover:opacity-10 transition-opacity" />
        },
        {
            title: "Shopify Design",
            icon: <ShoppingBag className="text-primary h-6 w-6" />,
            skills: ["Liquid", "Theme Setup", "Shopify Apps", "Store UX"],
            bgIcon: <ShoppingBag className="text-primary h-24 w-24 opacity-5 group-hover:opacity-10 transition-opacity" />
        }
    ];

    return (
        <section className="py-24 bg-background border-y border-slate-800/50" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-base text-primary font-semibold tracking-wide uppercase"
                    >
                        Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Technical Proficiency
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto"
                    >
                        Full-cycle development capabilities from database design to pixel-perfect UI and mobile solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-secondary border border-slate-700/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group glass-card"
                        >
                            <div className="absolute top-0 right-0 p-4">
                                {item.bgIcon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                {item.icon} {item.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, sIndex) => (
                                    <span
                                        key={sIndex}
                                        className="px-3 py-1 rounded bg-slate-800/50 text-slate-300 text-sm font-medium border border-slate-700/50 hover:text-white hover:border-primary/50 cursor-default transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* About Paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 max-w-4xl mx-auto text-center"
                >
                    <p className="text-lg text-slate-400 leading-relaxed italic">
                        &quot;I thrive on building sleek, high-impact digital experiences. Whether it&apos;s crafting intuitive mobile UIs or spinning up scalable backend APIs, I stay locked in on writing clean, maintainable code that actually slaps.&quot;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
