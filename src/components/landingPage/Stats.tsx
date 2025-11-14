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
        <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <div className="text-center" key={s.value + i}>
                            <div className="text-3xl font-semibold text-gray-900 dark:text-white mb-1">{s.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
