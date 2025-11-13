"use client";
import React, { useState } from 'react'

type NavItem = { name: string; href: string }

const navItems: NavItem[] = [
    { name: 'Tools', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'About', href: '#' },
]

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="bg-purple-600 text-white px-2.5 py-1.5 rounded-md text-sm font-semibold tracking-tight">AI</div>
                        <span className="text-base font-semibold text-gray-900">Folio</span>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                            Sign In
                        </button>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileOpen((s) => !s)}
                            aria-expanded={mobileOpen}
                            aria-label="Toggle menu"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            {mobileOpen ? (
                                // X icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="px-4 pt-4 pb-6 space-y-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="w-full mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar