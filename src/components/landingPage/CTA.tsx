import { Sparkles } from 'lucide-react'
import Background from './Background'
import SectionHeading from './SectionHeading'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <Background />

      <SectionHeading
        title={
          <span>
            Ready to explore the world of <span className="textGradient">AI?</span>
          </span>
        }
        subtitle="Start browsing our curated collection of 100+ AI tools and find the perfect solution for your needs."
        icon={<Sparkles className="h-4 w-4 text-purple-600" />}
        iconTitle="Explore AI"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/tools"
            className="textGradient inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-medium transition-all hover:bg-gray-50 hover:shadow-xl dark:bg-gray-950 dark:hover:bg-gray-800"
          >
            Browse All Tools →
          </Link>

          <button className="bgGradient inline-flex items-center gap-2 rounded-lg border border-purple-400 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-purple-400 dark:border-purple-600">
            Learn More
          </button>
        </div>
      </SectionHeading>
    </section>
  )
}
