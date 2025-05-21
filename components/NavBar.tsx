"use client"

import { Menu } from "lucide-react";
import { useRef, useState } from "react";


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
        <header className="sticky top-0 z-50 backdrop-blur shadow-lg text-text-light">
            <nav className="flex justify-between items-center p-4 shadow-lg text-text-light">
                <div>
                    <h1 className="text-2xl font-extrabold bg-gradient-to-r from-accent via-cta to-primary bg-clip-text text-transparent text-shine">
                        TechifyDev
                    </h1>
                </div>
                <button className="md:hidden p-2 rounded-md text-text-light hover:bg-accent transition duration-300" onClick={handleMenuclick}>
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
                {/* Desktop Nav */}
                <ul className="space-x-4 hidden md:flex">
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