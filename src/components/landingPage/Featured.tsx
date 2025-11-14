import { Database, Tag, Layout, Palette, Zap, Filter, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
    {
        id: "tools",
        title: "100+ curated AI tools",
        description:
            "Hand-picked collection of the best AI tools across multiple categories and use cases.",
        icon: Database,
    },
    {
        id: "meta",
        title: "Category, pricing, ranking & score",
        description:
            "Detailed metadata for every tool to help you make informed decisions quickly.",
        icon: Tag,
    },
    {
        id: "pages",
        title: "Clean detail pages",
        description: "Beautifully designed pages with all the information you need in one place.",
        icon: Layout,
    },
    {
        id: "theme",
        title: "Modern purple theme",
        description: "A sleek interface designed to match a premium AI aesthetic.",
        icon: Palette,
    },
    {
        id: "tech",
        title: "Next.js + Tailwind",
        description: "Lightning-fast performance with modern web technologies.",
        icon: Zap,
    },
    {
        id: "search",
        title: "Advanced search & filters",
        description: "Find exactly what you need with powerful filtering options.",
        icon: Filter,
    },
];

export default function Features() {
    return (

        <SectionHeading
            title={<>Everything you need to find the perfect <span className="textlinear" >AI tool</span></>}
            subtitle="Comprehensive information and a clean interface make exploring AI tools effortless."
            icon={<Sparkles className="w-4 h-4 text-purple-600" />}
            iconTitle="What's Inside"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={feature.id}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-purple-200 dark:hover:border-purple-600 hover:shadow-lg dark:hover:shadow-purple-500/10 transition-all group relative overflow-hidden"
                        >
                            <span className="pointer-events-none absolute inset-0 bg-linear-to-b from-purple-400/30 dark:from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-5 group-hover:bg-purple-600 transition-colors">
                                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </SectionHeading>

    );
}
