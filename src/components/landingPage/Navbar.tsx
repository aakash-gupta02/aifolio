"use client";
import React, { useState, useEffect } from 'react';
import {
    Grid3X3,
    X,
    Menu,
    DollarSign,
    Star,
    CheckCircle
} from 'lucide-react';
import Logo from './Logo';
import SearchBox from '../pages/SearchBox';
import ThemeToggle from '../ThemeToggle';
import Link from 'next/link';
import type { LucideIcon } from "lucide-react";


type NavItem = {
    name: string;
    href: string;
    icon: LucideIcon;
}

// Update your navItems in navbar
const navItems: NavItem[] = [
    { name: 'All Tools', href: '/tools', icon: Grid3X3 },
    { name: 'Free Tools', href: '/tools/free', icon: DollarSign },
    { name: 'Top Rated', href: '/tools/rated', icon: Star },
    { name: 'Verified', href: '/tools/verified', icon: CheckCircle },
];

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Minimal Floating Navbar */}
            <nav className={`
            fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500
            ${scrolled
                    ? 'w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-2xl shadow-purple-500/10 dark:shadow-purple-500/5 rounded-2xl'
                    : 'w-[90%] sm:w-[85%] md:w-[80%] lg:w-[90%] bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-xl shadow-purple-500/5 dark:shadow-purple-500/3 rounded-3xl'
                }
        `}>
                <div className="px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Brand Logo */}
                        <Logo />

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:bg-white/50 dark:hover:bg-gray-800/50 relative"
                                    >
                                        <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                                        {item.name}
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-purple-600 to-pink-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Search & Mobile toggle */}
                        <div className="flex items-center">
                            <ThemeToggle />

                            {/* Search Button */}
                            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:bg-white/50 dark:hover:bg-gray-800/50">
                                <SearchBox title='Search' />
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileOpen((s) => !s)}
                                aria-expanded={mobileOpen}
                                aria-label="Toggle menu"
                                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors md:hidden"
                            >
                                {mobileOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-white/20 dark:border-gray-700/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-b-2xl">
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 group"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <Icon className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-purple-500 transition-colors" />
                                        {item.name}
                                    </a>
                                );
                            })}

                            {/* Mobile Search */}
                            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 group w-full">
                                <SearchBox title='Search' />
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-28"></div>
        </>
    )
}

export default Navbar;