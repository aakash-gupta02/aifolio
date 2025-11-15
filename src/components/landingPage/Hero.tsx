import { ArrowRight } from 'lucide-react'
import Background from './Background'
import Link from 'next/link'
import SearchBox from '../pages/SearchBox'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-14 lg:pb-32">
      <Background />

      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 dark:border-purple-800 dark:bg-purple-900/20">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-600 dark:bg-purple-400"></div>
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
            100+ AI Tools Curated
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-5xl font-semibold tracking-tight text-gray-900 lg:text-6xl dark:text-white">
          Your AI Directory <br />
          <span className="textGradient">100+ Tools</span> in One Place
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
          Discover detailed descriptions, categories, pricing, scores, rankings, and direct links
          for every AI tool. Designed with a minimal, modern UI and a purple-accent theme that fits
          the AI aesthetic.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/tools"
            className="bgGradient inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Browse All Tools
            <ArrowRight className="h-5 w-5" />
          </Link>

          <SearchBox />
        </div>
      </div>
    </section>
  )
}
