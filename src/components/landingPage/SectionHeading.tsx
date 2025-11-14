import React from 'react'

const SectionHeading = ({ children, title, subtitle, icon, iconTitle }: { children: React.ReactNode, title: React.ReactNode, subtitle: string, icon: React.ReactNode, iconTitle: string }) => {
    return (
<section className="py-24 lg:py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-full px-4 py-1.5 mb-6">
                <div className="rounded-full animate-pulse">
                    {icon}
                </div>
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                    {iconTitle}
                </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                {title}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>
        {children}
    </div>
</section>

    )

}

export default SectionHeading