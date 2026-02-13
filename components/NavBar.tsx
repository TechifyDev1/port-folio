"use client"

import { Menu } from "lucide-react";
import { useState } from "react";


export default function NavBar() {
    const navList = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];
    // const iconRef = useRef<React.FC>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleMenuclick = () => {
        const mobileNav = document.querySelector("ul.flex-col");

        if (mobileNav) {
            mobileNav.classList.toggle("-translate-x-full");
            mobileNav.classList.toggle("translate-x-0");
            setIsOpen(!isOpen);
        }
    }

    return (
        <header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
                <div>
                    <a href="#" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                        <span className="text-primary text-3xl font-mono">&lt;/&gt;</span>
                        <span>TechifyDev</span>
                    </a>
                </div>
                <button className="md:hidden p-2 rounded-md text-slate-400 hover:text-white transition duration-300" onClick={handleMenuclick}>
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
                {/* Desktop Nav */}
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-8">
                        {navList.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${item.name === "Contact"
                                        ? "bg-primary/20 border border-primary/50 text-white hover:bg-primary"
                                        : "text-slate-300 hover:text-primary"
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Mobile Nav */}
                <ul className="flex flex-col md:hidden fixed top-16 left-0 w-full bg-gradient-to-b from-background/80 via-background/60 to-background/90 backdrop-blur-lg shadow-lg p-4 transition duration-300 transform -translate-x-full z-10 text-text-light">
                    {navList.map((item, index) => (
                        <li key={index} className="inline-block mx-4">
                            <a
                                href={item.href}
                                className="text-lg font-semibold hover:text-accent transition duration-300"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}