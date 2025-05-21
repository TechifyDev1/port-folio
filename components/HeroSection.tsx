"use client"
import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'

export default function HeroSection() {
    const phrases = [
        <span className="text-accent font-bold">Mobile Apps with Flutter</span>,
        <span className="text-cta font-bold">Web Applications with Next.js</span>,
        <span className="text-primary font-bold">Robust Backends with Java</span>,
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className='w-full h-screen relative overflow-hidden'>
            {/* Background Blobs */}
            <motion.div
                className='absolute bg-gradient-to-r from-accent via-cta to-primary opacity-30 blur-3xl w-[500px] h-[500px] -top-40 -left-40 rounded-full'
                initial={{ scale: 0.9, opacity: 0.2 }}
                animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className='absolute bg-gradient-to-r from-accent via-cta to-primary opacity-30 blur-3xl w-[500px] h-[500px] bottom-0 -right-40 rounded-full'
                initial={{ scale: 1, opacity: 0.2 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Avatar Blob Centered */}
            <motion.div
                className="absolute inset-0 justify-center items-center z-0 hidden sm:flex"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.12 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
                <img
                    src="/avatar.png"
                    alt="Avatar Blob"
                    className="w-[600px] h-[700px] object-cover shadow-2xl border border-transparent "
                />
            </motion.div>

            {/* Main Content */}
            <div className='relative z-10 flex flex-col items-center justify-center h-full text-center w-0.5/4 mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
                >
                    <Badge variant='outline' className='text-lg font-semibold mb-2 rounded-4xl'>✨ Available for hire</Badge>
                </motion.div>
                <motion.h1
                    className='text-4xl sm:text-5xl lg:text-6xl font-bold'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
                >
                    Hi, I'm <span className='bg-gradient-to-r from-accent via-cta to-primary bg-clip-text text-transparent text-shine'>Abdulqudus</span>
                </motion.h1>
                <motion.h2
                    className='text-3xl font-semibold mt-4 flex flex-wrap justify-center items-center gap-2 px-2'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
                >
                    I build
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                        >
                            {phrases[index]}
                        </motion.span>
                    </AnimatePresence>
                </motion.h2>
                <motion.h3 className='text-lg font-medium mt-4 max-w-[500px] px-4'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.7, type: "spring" }}>
                    <span className="text-lg mt-6 text-muted-foreground font-medium">
                        I am a software engineer with a passion for building beautiful and functional applications. I have experience in full-stack development, specializing in mobile and web applications.
                    </span>
                </motion.h3>
                <motion.div
                    className='flex gap-4 mt-6'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.7, type: "spring" }}
                >
                    <a href="#projects">
                        <button className='bg-accent text-text-light px-4 py-2 rounded-md hover:bg-accent/80 transition duration-300'>
                            View Projects <ArrowRight className='inline ml-2' />
                        </button>
                    </a>
                    <a href="#contact">
                        <button className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/10 transition duration-300">
                            Get in Touch
                        </button>
                    </a>
                </motion.div>
                <motion.div
                    className='flex gap-4 mt-6'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.7, type: "spring" }}
                >
                    <a href="https://github.com/TechifyDev1" aria-label="GitHub" rel="noopener noreferrer" target="_blank">
                        <Github className='w-6 h-6 text-muted-foreground hover:text-accent transition duration-300' />
                    </a>
                    <a href="/" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
                        <Linkedin className='w-6 h-6 text-muted-foreground hover:text-accent transition duration-300' />
                    </a>
                    <a href="https://x.com/techifydev_1" aria-label="Twitter" rel="noopener noreferrer" target="_blank">
                        <Twitter className='w-6 h-6 text-muted-foreground hover:text-accent transition duration-300' />
                    </a>
                </motion.div>
                <motion.div
                    className='flex gap-4 mt-6'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.7, type: "spring" }}
                >
                    <a
                        href="#about"
                        aria-label="Scroll Down"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center"
                    >
                        <span className="animate-bounce">
                            <ArrowDown className="w-8 h-8 text-accent group-hover:text-primary transition duration-300" />
                        </span>
                        <span className="text-xs mt-1 text-muted-foreground group-hover:text-primary transition duration-300">
                            About Me
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
