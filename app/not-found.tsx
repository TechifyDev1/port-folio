"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
            <div className="absolute inset-0 star-field opacity-30"></div>

            <div className="text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-9xl font-bold text-white opacity-10">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary gradient-text">Lost in Space?</h2>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-8 text-xl text-slate-400 max-w-md mx-auto leading-relaxed"
                >
                    The page you are looking for has drifted into another galaxy. Let&apos;s get you back home.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-black bg-primary hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(19,182,236,0.3)]"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Safety
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
