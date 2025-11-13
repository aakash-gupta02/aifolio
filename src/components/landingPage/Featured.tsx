import { Database, Tag, Layout, Palette, Zap, Filter, Sparkles } from "lucide-react";

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
        <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 mb-4">
                        <i className="w-4 h-4 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                        </i>
                        WHAT'S INSIDE
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                        Everything you need to find
                        <br /> the perfect AI tool
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive information and a clean interface make exploring AI tools effortless.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-purple-200 hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-purple-600 transition-colors">
                                    <Icon className="w-6 h-6 text-purple-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
