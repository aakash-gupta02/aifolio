import React from 'react'

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '100+', label: 'AI Tools Listed' },
  { value: '20+', label: 'Categories' },
  { value: 'Daily', label: 'Updates' },
  { value: 'Free', label: 'To Browse' },
]

const Stats: React.FC = () => {
  return (
    <section className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div className="text-center" key={s.value + i}>
              <div className="mb-1 text-3xl font-semibold text-gray-900 dark:text-white">
                {s.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
