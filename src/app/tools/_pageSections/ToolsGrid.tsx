'use client'
import { useState, useEffect } from 'react'
import ToolCard from '@/components/pages/ToolCard'
import { Tool } from '@/types/tool'
import { Search, Filter, SortAsc, X } from 'lucide-react'
import Background from '@/components/landingPage/Background'

interface Props {
  tools: Tool[]
}

export default function ToolsGrid({ tools }: Props) {
  const [filtered, setFiltered] = useState<Tool[]>(tools)
  const [search, setSearch] = useState('')
  const [pricing, setPricing] = useState('')
  const [sort, setSort] = useState('')
  const [activeFilters, setActiveFilters] = useState(0)

  useEffect(() => {
    let result = [...tools]

    // Search
    if (search.trim()) {
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(search.toLowerCase()) ||
          tool.description.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Pricing filter
    if (pricing) {
      result = result.filter((tool) => tool.pricing === pricing)
    }

    // Sorting
    if (sort === 'rank-asc') result.sort((a, b) => a.rank - b.rank)
    if (sort === 'rank-desc') result.sort((a, b) => b.rank - a.rank)
    if (sort === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'name-desc') result.sort((a, b) => b.name.localeCompare(a.name))

    setFiltered(result)

    // Calculate active filters
    let count = 0
    if (search.trim()) count++
    if (pricing) count++
    if (sort) count++
    setActiveFilters(count)
  }, [search, pricing, sort, tools])

  const clearFilters = () => {
    setSearch('')
    setPricing('')
    setSort('')
  }

  return (
    <main className="min-h-screen">
      <Background />
      {/* Enhanced Filters Section */}
      <div className="mb-8 space-y-6">
        {/* Search Bar */}
        <div className="relative mx-auto max-w-2xl">
          <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search tools by name or description..."
            className="w-full rounded-2xl border border-gray-200 bg-white py-4 pr-4 pl-12 shadow-sm transition-all duration-200 hover:shadow-md focus:border-transparent focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-col">
          <div className="flex flex-1 flex-col gap-4 sm:flex-row">
            {/* Pricing Filter */}
            <div className="relative flex-1 sm:flex-initial">
              <Filter className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400 dark:text-gray-500" />
              <select
                className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pr-4 pl-10 shadow-sm transition-all duration-200 hover:shadow-md focus:border-transparent focus:ring-2 focus:ring-purple-500 sm:w-48 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
              >
                <option value="">All Pricing</option>
                <option value="free">Free</option>
                <option value="freemium">Freemium</option>
                <option value="paid">Paid</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="relative flex-1 sm:flex-initial">
              <SortAsc className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400 dark:text-gray-500" />
              <select
                className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pr-4 pl-10 shadow-sm transition-all duration-200 hover:shadow-md focus:border-transparent focus:ring-2 focus:ring-purple-500 sm:w-48 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="rank-asc">Rank (Low → High)</option>
                <option value="rank-desc">Rank (High → Low)</option>
                <option value="name-asc">Name (A → Z)</option>
                <option value="name-desc">Name (Z → A)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <span className="font-medium">{filtered.length}</span>
          <span>tools found</span>
          {activeFilters > 0 && (
            <span className="rounded-full bg-purple-50 px-2 py-1 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              {activeFilters} filter{activeFilters > 1 ? 's' : ''} active
            </span>
          )}
        </div>
      </div>

      {/* Tools Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <Search className="h-10 w-10 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            No tools found
          </h3>
          <p className="mx-auto mb-6 max-w-md text-gray-600 dark:text-gray-400">
            {`Try adjusting your search terms or filters to find what you're looking for.`}
          </p>

          <button
            onClick={clearFilters}
            className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
          >
            Clear all filters
          </button>
        </div>
      )}
    </main>
  )
}
