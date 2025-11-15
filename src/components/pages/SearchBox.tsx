'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SearchBox({ title = 'Search AI Tools...' }: { title?: string }) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const searchRedirect = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    router.push(`/tools/${encodeURIComponent(trimmed)}`)
  }

  return (
    <section className="max-w-52 rounded-lg bg-white px-4 py-3 text-gray-900 dark:bg-gray-900 dark:text-white">
      <form onSubmit={searchRedirect} className="inline-flex items-center gap-2">
        <button type="submit" className="">
          <Search className="h-4 w-4" />
        </button>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={title}
          aria-label="Search tools"
          className="m-0 border-none p-0 text-sm outline-none focus:ring-0"
        />
      </form>
    </section>
  )
}
