import React from 'react'

const SectionHeading = ({
  children,
  title,
  subtitle,
  icon,
  iconTitle,
}: {
  children: React.ReactNode
  title: React.ReactNode
  subtitle: string
  icon: React.ReactNode
  iconTitle: string
}) => {
  return (
    <section className="py-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 dark:border-purple-800 dark:bg-purple-900/20">
            <div className="animate-pulse rounded-full">{icon}</div>
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              {iconTitle}
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 lg:text-5xl dark:text-white">
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

export default SectionHeading
