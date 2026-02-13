"use client"
import React, { useState, useEffect } from 'react'
import { Badge } from './ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const codeSnippets = [
    {
        title: "shop_controller.liquid",
        language: "Liquid",
        code: (
            <>
                <div className="flex"><span className="text-slate-500">{"{%"}</span> <span className="text-purple-400">if</span> <span className="text-primary">product.available</span> <span className="text-slate-500">{"%}"}</span></div>
                <div className="pl-4 flex"><span className="text-slate-500">&lt;</span><span className="text-primary">div</span> <span className="text-yellow-300">className</span>=<span className="text-green-400">&quot;product-card&quot;</span><span className="text-slate-500">&gt;</span></div>
                <div className="pl-8 flex"><span className="text-slate-500">&lt;</span><span className="text-primary">h2</span><span className="text-slate-500">&gt;</span><span className="text-slate-500">{"{{"}</span> product.title <span className="text-slate-500">{"}}"}</span><span className="text-slate-500">&lt;/</span><span className="text-primary">h2</span><span className="text-slate-500">&gt;</span></div>
                <div className="pl-8 flex"><span className="text-slate-500">&lt;</span><span className="text-primary">span</span><span className="text-slate-500">&gt;</span><span className="text-slate-500">{"{{"}</span> product.price | money <span className="text-slate-500">{"}}"}</span><span className="text-slate-500">&lt;/</span><span className="text-primary">span</span><span className="text-slate-500">&gt;</span></div>
                <div className="pl-4 flex"><span className="text-slate-500">&lt;/</span><span className="text-primary">div</span><span className="text-slate-500">&gt;</span></div>
                <div className="flex"><span className="text-slate-500">{"{%"}</span> <span className="text-purple-400">endif</span> <span className="text-slate-500">{"%}"}</span></div>
            </>
        )
    },
    {
        title: "PostService.java",
        language: "Spring Boot",
        code: (
            <>
                <div className="flex"><span className="text-purple-400">@Service</span></div>
                <div className="flex"><span className="text-purple-400">public class</span> <span className="text-yellow-300">PostService</span> {"{"}</div>
                <div className="pl-4 flex"><span className="text-purple-400">@Transactional</span></div>
                <div className="pl-4 flex"><span className="text-purple-400">public</span> Post <span className="text-primary">createPost</span>(PostDTO dto) {"{"}</div>
                <div className="pl-8 flex"><span className="text-purple-400">return</span> repo.<span className="text-primary">save</span>(<span className="text-purple-400">new</span> <span className="text-yellow-300">Post</span>(dto));</div>
                <div className="pl-4 flex">{"}"}</div>
                <div className="flex">{"}"}</div>
            </>
        )
    },
    {
        title: "ProductCard.tsx",
        language: "Next.js",
        code: (
            <>
                <div className="flex"><span className="text-purple-400">export default function</span> <span className="text-yellow-300">Card</span>() {"{"}</div>
                <div className="pl-4 flex"><span className="text-purple-400">return</span> (</div>
                <div className="pl-8 flex"><span className="text-slate-500">&lt;</span><span className="text-primary">motion.div</span> <span className="text-yellow-300">whileHover</span>={"{{"} scale: 1.05 {"}}"}</div>
                <div className="pl-12 flex"><span className="text-yellow-300">className</span>=<span className="text-green-400">&quot;glass-card&quot;</span></div>
                <div className="pl-8 flex"><span className="text-slate-500">&gt;</span></div>
                <div className="pl-12 flex"><span className="text-slate-500">&lt;</span><span className="text-primary">h3</span><span className="text-slate-500">&gt;</span>Shop Now<span className="text-slate-500">&lt;/</span><span className="text-primary">h3</span><span className="text-slate-500">&gt;</span></div>
                <div className="pl-8 flex"><span className="text-slate-500">&lt;/</span><span className="text-primary">motion.div</span><span className="text-slate-500">&gt;</span></div>
                <div className="pl-4 flex">);</div>
                <div className="flex">{"}"}</div>
            </>
        )
    },
    {
        title: "main.dart",
        language: "Flutter",
        code: (
            <>
                <div className="flex"><span className="text-purple-400">class</span> <span className="text-yellow-300">MyApp</span> <span className="text-purple-400">extends</span> StatelessWidget {"{"}</div>
                <div className="pl-4 flex"><span className="text-purple-400">@override</span></div>
                <div className="pl-4 flex">Widget <span className="text-primary">build</span>(BuildContext context) {"{"}</div>
                <div className="pl-8 flex"><span className="text-purple-400">return</span> <span className="text-yellow-300">MaterialApp</span>(</div>
                <div className="pl-12 flex">home: <span className="text-yellow-300">Scaffold</span>(</div>
                <div className="pl-16 flex">body: <span className="text-yellow-300">Center</span>(child: <span className="text-yellow-300">Text</span>(<span className="text-green-400">&quot;Hello&quot;</span>)),</div>
                <div className="pl-12 flex">),</div>
                <div className="pl-8 flex">);</div>
                <div className="pl-4 flex">{"}"}</div>
                <div className="flex">{"}"}</div>
            </>
        )
    }
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden min-h-screen flex items-center" id="home">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
            <div className="absolute inset-0 star-field opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/80 border border-primary/20 text-primary text-sm font-medium mb-6"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Available for hire
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                        >
                            Building Scalable <br />
                            <span className="text-primary gradient-text">Digital Solutions</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-4 text-xl text-slate-400 max-w-2xl leading-relaxed"
                        >
                            I am a <span className="text-white font-semibold">Full-Stack Engineer & Shopify Designer</span> passionate about building sleek, high-impact digital experiences. I specialize in <span className="text-white font-semibold">Flutter</span>, <span className="text-white font-semibold">Next.js</span>, and <span className="text-white font-semibold">Shopify Store Design</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-10 flex flex-col sm:flex-row gap-4"
                        >
                            <a className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-black bg-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(19,182,236,0.3)]" href="#projects">
                                View Projects
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-600 text-base font-medium rounded-lg text-white hover:border-primary hover:text-primary bg-transparent transition-all duration-300" href="#contact">
                                Get in Touch
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="mt-12 flex items-center gap-6 text-slate-500 text-sm font-mono"
                        >
                            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                                <Badge variant="outline" className="border-primary/20 px-2 py-0.5">Clean Code</Badge>
                            </div>
                            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                                <Badge variant="outline" className="border-primary/20 px-2 py-0.5">Performance</Badge>
                            </div>
                            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                                <Badge variant="outline" className="border-primary/20 px-2 py-0.5">Scalability</Badge>
                            </div>
                        </motion.div>
                    </div>

                    <div className="hidden lg:block lg:col-span-5 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50, rotate: 5 }}
                                animate={{ opacity: 1, x: 0, rotate: 3 }}
                                exit={{ opacity: 0, x: -50, rotate: -5 }}
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                                className="relative rounded-xl bg-secondary border border-slate-700/50 p-6 shadow-2xl glass-card group cursor-pointer min-h-[300px]"
                            >
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors"></div>
                                {/* Glass reflection effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                                <div className="flex items-center gap-2 mb-4 border-b border-slate-700/50 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-auto text-xs text-slate-500 font-mono flex items-center gap-2">
                                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-primary uppercase text-[10px]">{codeSnippets[currentIndex].language}</span>
                                        {codeSnippets[currentIndex].title}
                                    </div>
                                </div>
                                <div className="space-y-2 font-mono text-sm text-slate-300">
                                    {codeSnippets[currentIndex].code}
                                    <div className="flex text-slate-500 mt-2">{currentIndex === 0 ? "{/* Scaling store... */}" : "// Scaling systems..."}</div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-1/2 p-3 bg-secondary/80 border border-slate-700 rounded-lg shadow-lg backdrop-blur-md z-20"
                        >
                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3TXrWs6Oysp7K5HL3P7JTrGfJao2cZm1_uGLjCgqkmN55vQFBqfhN1lXuZ8WV4KKhmvV9RNh9b6LDvOkJn9FK035twJu882pvrZBK1O3afOpgnDR4OlvbCGgP7Z8qRLI_vT687RTYDcBNFh9fujpCtY8-v3OfmOk3uJ5tgGo9nj7mTKxBp1WYW24LtwIm6CPWxuUEc-DvEP3YrEvV_prLe9X-ZsQ6eq255yJagw3kjCkft1Tzom2mrymQeVljUfVV2wFOOOym-Q" alt="Flutter" width={32} height={32} />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-6 bottom-10 p-3 bg-secondary/80 border border-slate-700 rounded-lg shadow-lg backdrop-blur-md z-20"
                        >
                            <Image className="filter invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnKaBJN5JgBGhoCiVHDo1Uxfg66XzzzbauCf2JQCek-8Td7vzpzpzIEAYc8thZPpmziB7JTXjLlgD-HHxZ8ne_LcPgEUKeiG-BsRtgZa90T1DklnCVfC2JajRy-iCsF9ae1XB73tSHOcFD8P8hla6XIN-W-zoFsl6XAtj90pUr6ZiIGZ_exw7i8xTDNOBhkkcDepcNc47a-ZdyzWgLiRcCfy511PDEkAruUwgclDH9g0YeeoepMnpVlFupZ2p7k5krWPSEEro_og" alt="NextJS" width={32} height={32} />
                        </motion.div>

                        {/* Additional Floating Logo (Spring Boot) */}
                        <motion.div
                            animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-1/2 -top-12 p-2 bg-secondary/80 border border-slate-700 rounded-lg shadow-lg backdrop-blur-md z-20"
                        >
                            <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M15.5,14.5c-0.828,0-1.5-0.672-1.5-1.5 s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.328,14.5,15.5,14.5z M12,17c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5c0.758,0,1.472,0.174,2.112,0.48 c-0.612,0.347-1.112,0.887-1.428,1.545C12.456,9.01,12.233,9,12,9c-1.657,0-3,1.343-3,3c0,1.657,1.343,3,3,3 c0.233,0,0.456-0.01,0.684-0.025c0.316,0.658,0.816,1.198,1.428,1.545C13.472,16.826,12.758,17,12,17z M8.5,14.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S9.328,14.5,8.5,14.5z" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
