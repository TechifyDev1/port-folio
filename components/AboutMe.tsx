"use client"
import React from 'react'
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { GaugeIcon, LightbulbIcon, ZapIcon } from 'lucide-react';

export default function AboutMe() {
    const skills = [
        "Flutter",
        "Dart",
        "Firebase Cloud Messaging",
        "Hive",
        "Bloc / Riverpod",
        "Next.js",
        "React",
        "TailwindCSS",
        "Framer Motion",
        "ShadCN UI",
        "TypeScript",
        "HTML5 & CSS3",
        "Java",
        "Spring Boot",
        "Spring Security",
        "REST APIs",
        "JWT Auth",
        "Supabase",
        "Firebase",
        "PostgreSQL",
        "MySQL",
        "Cloud Firestore",
        "Git & GitHub",
        "Vercel",
        "Android Studio",
        "VS Code",
        "Figma",
        "Postman",
    ];

    return (
        <section className='w-full h-full flex flex-col items-center justify-center text-center bg-background/90 backdrop-blur-lg shadow-lg p-4 sm:p-8 pt-12 sm:pt-16' id="about">
            <div className="heading">
                <h2 className="text-3xl sm:text-4xl bg-gradient-to-r from-accent via-cta to-primary bg-clip-text text-transparent text-shine m-0">About Me</h2>
            </div>
            <div id="content" className='flex flex-col md:flex-row justify-between items-center w-full h-full gap-8 !p-0'>
                <div id="about-me" className="flex items-center justify-center w-full md:w-1/2">
                    <p className="text-base sm:text-lg text-text-light max-w-xl text-left leading-7 sm:leading-8">
                        I’m a software engineer who’s all about building sleek, high-impact digital experiences. From crafting intuitive mobile UIs to spinning up scalable backend APIs, I stay locked in on writing clean, maintainable code that actually slaps. I specialize in full-stack development with a focus on performance and visual polish.

                        I vibe with <span className="text-accent font-bold">Flutter</span> for building cross-platform mobile apps, <span className="text-cta font-bold">Next.js</span> for modern web development, and <span className="text-primary font-bold">Java/Spring Boot</span> when it’s time to get serious with backend logic. I’m constantly leveling up — whether that’s learning new tools, optimizing dev workflows, or just staying on top of what’s trending in tech.

                        <span className="block italic text-text-muted">
                            When I’m not in dev mode, I’m either binge-watching C-dramas, vibing to chill beats at 2am, or randomly redesigning my own UI for the ✨ aesthetic ✨. Clean design, smooth UX, and good vibes — that’s the mission.
                        </span>
                    </p>
                </div>

                <div id='skills' className='flex flex-col items-start justify-center gap-4 p-0 sm:p-4 w-full md:w-1/2'>
                    <h3 className="text-xl sm:text-2xl">My Skills</h3>
                    <div className="flex flex-wrap gap-2 w-full">
                        {skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs sm:text-sm font-semibold rounded-4xl">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    {/* Creative, fast learner and efficient card */}
                    <div className="flex flex-col md:flex-row w-full md:justify-between gap-4 mt-4">
                        {/* Creative */}
                        <div className="w-full md:max-w-1/3 p-[2px] rounded-xl bg-gradient-to-r from-accent to-cta">
                            <Card className="p-4 rounded-xl bg-background shadow-lg flex flex-col items-center text-center h-full">
                                <span className="text-2xl sm:text-3xl text-accent">
                                    <LightbulbIcon />
                                </span>
                                <h4 className="text-base sm:text-lg font-bold text-primary">Creative</h4>
                                <p className="text-text-light text-xs sm:text-sm">
                                    I enjoy crafting fresh ideas and solving problems with unique approaches.
                                </p>
                            </Card>
                        </div>

                        {/* Fast Learner */}
                        <div className="w-full md:max-w-1/3 p-[2px] rounded-xl bg-gradient-to-r from-cta to-primary">
                            <Card className="p-4 rounded-xl bg-background shadow-lg flex flex-col items-center text-center h-full">
                                <span className="text-2xl sm:text-3xl text-cta">
                                    <ZapIcon />
                                </span>
                                <h4 className="text-base sm:text-lg font-bold text-cta">Fast Learner</h4>
                                <p className="text-text-light text-xs sm:text-sm">
                                    I quickly adapt to new tools, tech, and challenges.
                                </p>
                            </Card>
                        </div>

                        {/* Efficient */}
                        <div className="w-full md:max-w-1/3 p-[2px] rounded-xl bg-gradient-to-r from-primary to-accent">
                            <Card className="p-4 rounded-xl bg-background shadow-lg flex flex-col items-center text-center h-full">
                                <span className="text-2xl sm:text-3xl text-primary">
                                    <GaugeIcon />
                                </span>
                                <h4 className="text-base sm:text-lg font-bold text-primary">Efficient</h4>
                                <p className="text-text-light text-xs sm:text-sm">
                                    I focus on clean code and fast, high-quality delivery.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
