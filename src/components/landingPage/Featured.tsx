import { Database, Tag, Layout, Palette, Zap, Filter, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'

const features = [
  {
    id: 'tools',
    title: '100+ curated AI tools',
    description:
      'Hand-picked collection of the best AI tools across multiple categories and use cases.',
    icon: Database,
  },
  {
    id: 'meta',
    title: 'Category, pricing, ranking & score',
    description: 'Detailed metadata for every tool to help you make informed decisions quickly.',
    icon: Tag,
  },
  {
    id: 'pages',
    title: 'Clean detail pages',
    description: 'Beautifully designed pages with all the information you need in one place.',
    icon: Layout,
  },
  {
    id: 'theme',
    title: 'Modern purple theme',
    description: 'A sleek interface designed to match a premium AI aesthetic.',
    icon: Palette,
  },
  {
    id: 'tech',
    title: 'Next.js + Tailwind',
    description: 'Lightning-fast performance with modern web technologies.',
    icon: Zap,
  },
  {
    id: 'search',
    title: 'Advanced search & filters',
    description: 'Find exactly what you need with powerful filtering options.',
    icon: Filter,
  },
]

export default function Features() {
  return (
    <SectionHeading
      title={
        <>
          Everything you need to find the perfect <span className="textlinear">AI tool</span>
        </>
      }
      subtitle="Comprehensive information and a clean interface make exploring AI tools effortless."
      icon={<Sparkles className="h-4 w-4 text-purple-600" />}
      iconTitle="What's Inside"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-purple-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-600 dark:hover:shadow-purple-500/10"
            >
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-b from-purple-400/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-purple-500/20" />

              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 transition-colors group-hover:bg-purple-600 dark:bg-purple-900/30">
                  <Icon className="h-6 w-6 text-purple-600 group-hover:text-white dark:text-purple-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </SectionHeading>
  )
}
