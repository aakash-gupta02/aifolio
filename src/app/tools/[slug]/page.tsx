import { getAllTools, getToolById } from "@/lib/getTools";
import Image from "next/image";
import Link from "next/link";
import {
    AlertTriangle,
    ArrowLeft,
    FileText,
    Zap,
    Star,
    DollarSign,
    Shield,
    Check,
    Heart,
} from "lucide-react";
import Background from "@/components/landingPage/Background";

export const revalidate = 3600;

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    const tools = getAllTools();
    return tools.map((tool) => ({ slug: tool.slug }));
}

export default function ToolDetailPage({ params }: Props) {
    const tool = getToolById(params.slug);

    if (!tool) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-12 h-12 text-red-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Tool Not Found</h1>
                    <p className="text-gray-600 mb-6">The tool you're looking for doesn't exist.</p>
                    <Link
                        href="/tools"
                        className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Tools
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen ">

            <Background />


            {/* Back button */}
            <div className="max-w-6xl mx-auto px-6 pt-8">
                <Link
                    href="/tools"
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-all duration-200 font-medium mb-8"
                >
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    Back to all tools
                </Link>
            </div>

            {/* Main content */}
            <div className="max-w-6xl mx-auto px-6 pb-16">
                {/* Header section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12">
                    <div className="shrink-0">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <Image
                                src={tool.image_url}
                                alt={tool.name}
                                width={120}
                                height={120}
                                className="relative rounded-2xl border-2 border-white shadow-xl bg-white p-3"
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full shadow-sm">
                                Rank #{tool.rank}
                            </span>
                            <span className={`px-3 py-1 text-sm font-medium rounded-full capitalize ${tool.pricing === 'free'
                                    ? 'bg-green-100 text-green-700 border border-green-200'
                                    : tool.pricing === 'paid'
                                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                        : 'bg-orange-100 text-orange-700 border border-orange-200'
                                }`}>
                                {tool.pricing}
                            </span>
                            {tool.verified && (
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200 flex items-center gap-1">
                                    <Check className="w-4 h-4" />
                                    Verified
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {tool.name}
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                            {tool.description}
                        </p>
                    </div>
                </div>

                {/* Enhanced Overview Card */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Overview Card */}
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-sm shadow-xl shadow-purple-500/5 p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Tool Overview</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Zap className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Name</span>
                                    </div>
                                    <p className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{tool.name}</p>
                                </div>

                                {/* Rank */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Star className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Rank</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                            #{tool.rank}
                                        </span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.ceil(tool.rank / 20) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <DollarSign className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Pricing</span>
                                    </div>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold capitalize ${tool.pricing === 'free'
                                            ? 'bg-green-50 text-green-700 border border-green-200'
                                            : tool.pricing === 'paid'
                                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                                : 'bg-orange-50 text-orange-700 border border-orange-200'
                                        }`}>
                                        {tool.pricing}
                                    </span>
                                </div>

                                {/* Verified Status */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Shield className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Status</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {tool.verified ? (
                                            <>
                                                <span className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-200">
                                                    <Check className="w-4 h-4 mr-1" />
                                                    Verified
                                                </span>
                                            </>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold border border-amber-200">
                                                <AlertTriangle className="w-4 h-4 mr-1" />
                                                Unverified
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions Sidebar */}
                    <div className="space-y-6">
                        {/* Visit Tool Card */}
                        <div className="rounded-2xl bg-linear-to-br from-purple-600 to-pink-600 p-6 text-white shadow-xl">
                            <h3 className="text-lg font-semibold mb-3">Ready to use this tool?</h3>
                            <p className="text-purple-100 text-sm mb-4">Get started with {tool.name} today</p>
                            <Link
                                href={`https://theresanaiforthat.com/ai/${tool.slug}`}
                                target="_blank"
                                className="w-full bg-white text-purple-600 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Visit Tool Website
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Enhanced CTA */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                        <Link
                            href="/tools"
                            className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300"
                        >
                            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                            Browse More Tools
                        </Link>
                        <button className="group inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Save to Favorites
                            <Heart className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
