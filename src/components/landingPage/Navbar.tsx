'use client'
import React, { useState, useEffect } from 'react'
import { Grid3X3, X, Menu, DollarSign, Star, CheckCircle } from 'lucide-react'
import Logo from './Logo'
import SearchBox from '../pages/SearchBox'
import ThemeToggle from '../ThemeToggle'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'

type NavItem = {
  name: string
  href: string
  icon: LucideIcon
}

// Update your navItems in navbar
const navItems: NavItem[] = [
  { name: 'All Tools', href: '/tools', icon: Grid3X3 },
  { name: 'Free Tools', href: '/tools/free', icon: DollarSign },
  { name: 'Top Rated', href: '/tools/rated', icon: Star },
  { name: 'Verified', href: '/tools/verified', icon: CheckCircle },
]

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Minimal Floating Navbar */}
      <nav
        className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-500 ${
          scrolled
            ? 'w-[95%] rounded-2xl border border-white/20 bg-white/95 shadow-2xl shadow-purple-500/10 backdrop-blur-xl sm:w-[90%] md:w-[85%] lg:w-[75%] dark:border-gray-700/20 dark:bg-gray-900/95 dark:shadow-purple-500/5'
            : 'w-[90%] rounded-3xl border border-white/30 bg-white/90 shadow-xl shadow-purple-500/5 backdrop-blur-lg sm:w-[85%] md:w-[80%] lg:w-[90%] dark:border-gray-700/30 dark:bg-gray-900/90 dark:shadow-purple-500/3'
        } `}
      >
        <div className="px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-white/50 hover:text-purple-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-purple-400"
                  >
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    {item.name}
                    <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 transform rounded-full bg-linear-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-3/4"></div>
                  </Link>
                )
              })}
            </div>

            {/* Search & Mobile toggle */}
            <div className="flex items-center">
              <ThemeToggle />

              {/* Search Button */}
              <div className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-white/50 hover:text-purple-600 sm:flex dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-purple-400">
                <SearchBox title="Search" />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
                className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-white/50 hover:text-purple-600 md:hidden dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-purple-400"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="rounded-b-2xl border-t border-white/20 bg-white/95 backdrop-blur-xl md:hidden dark:border-gray-700/20 dark:bg-gray-900/95">
            <div className="space-y-1 px-4 pt-2 pb-6">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-white/50 hover:text-purple-600 dark:text-gray-200 dark:hover:bg-gray-800/50 dark:hover:text-purple-400"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-purple-500 dark:text-gray-500" />
                    {item.name}
                  </a>
                )
              })}

              {/* Mobile Search */}
              <div className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-white/50 hover:text-purple-600 dark:text-gray-200 dark:hover:bg-gray-800/50 dark:hover:text-purple-400">
                <SearchBox title="Search" />
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

export default Navbar
