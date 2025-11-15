import { Tool } from '@/types/tool'
import Image from 'next/image'
import Link from 'next/link'

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group relative overflow-hidden rounded-xl border border-gray-200 p-5 transition hover:shadow-md dark:border-gray-700 dark:hover:shadow-purple-500/10"
    >
      {/* hover color layer */}
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-b from-purple-400/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-purple-500/20" />

      {/* content above the overlay */}
      <div className="relative z-10">
        <Image
          src={tool.image_url}
          alt={tool.name}
          width={64}
          height={64}
          className="mb-4 rounded-lg"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tool.name}</h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {tool.description}
        </p>

        <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">
          Rank #{tool.rank} • {tool.pricing}
        </div>
      </div>
    </Link>
  )
}
