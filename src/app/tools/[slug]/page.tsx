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
        <main className="min-h-screen mt-16 ">

            <Background />
            {/* Main content */}
            <div className="max-w-5xl mx-auto px-6 pb-12 ">
                {/* Header section - Balanced */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-10">
                    <div className="shrink-0">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                            <Image
                                src={tool.image_url}
                                alt={tool.name}
                                width={96}
                                height={96}
                                className="relative rounded-xl border border-white shadow-lg bg-white p-2.5"
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="px-2.5 py-1 bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                                Rank #{tool.rank}
                            </span>
                            <span className={`px-2.5 py-1 text-sm font-medium rounded-full capitalize ${tool.pricing === 'free'
                                    ? 'bg-green-100 text-green-700'
                                    : tool.pricing === 'paid'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-orange-100 text-orange-700'
                                }`}>
                                {tool.pricing}
                            </span>
                            {tool.verified && (
                                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full flex items-center gap-1">
                                    <Check className="w-4 h-4" />
                                    Verified
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                            {tool.name}
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                            {tool.description}
                        </p>
                    </div>
                </div>

                {/* Balanced Overview Card */}
                <div className="grid lg:grid-cols-3 gap-6 mb-10">
                    {/* Main Overview Card */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg">
                                    <FileText className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Tool Overview</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                {/* Name */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Zap className="w-4 h-4 text-purple-500" />
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</span>
                                    </div>
                                    <p className="text-base font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                        {tool.name}
                                    </p>
                                </div>

                                {/* Rank */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Star className="w-4 h-4 text-purple-500" />
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Rank</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-base font-bold text-purple-600">
                                            #{tool.rank}
                                        </span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.ceil(tool.rank / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <DollarSign className="w-4 h-4 text-purple-500" />
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Pricing</span>
                                    </div>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold capitalize ${tool.pricing === 'free'
                                            ? 'bg-green-50 text-green-700'
                                            : tool.pricing === 'paid'
                                                ? 'bg-blue-50 text-blue-700'
                                                : 'bg-orange-50 text-orange-700'
                                        }`}>
                                        {tool.pricing}
                                    </span>
                                </div>

                                {/* Verified Status */}
                                <div className="group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Shield className="w-4 h-4 text-purple-500" />
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {tool.verified ? (
                                            <span className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold">
                                                <Check className="w-4 h-4 mr-1" />
                                                Verified
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold">
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
                    <div className="space-y-4">
                        {/* Visit Tool Card */}
                        <div className="rounded-xl bg-linear-to-br from-purple-600 to-pink-600 p-5 text-white shadow-lg">
                            <h3 className="text-base font-semibold mb-2">Ready to use this tool?</h3>
                            <p className="text-purple-100 text-sm mb-4">Get started with {tool.name} today</p>
                            <Link
                                href={`https://theresanaiforthat.com/ai/${tool.slug}`}
                                target="_blank"
                                className="w-full bg-white text-purple-600 py-2.5 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center text-sm"
                            >
                                Visit Tool Website
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Balanced CTA */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
                        <Link
                            href="/tools"
                            className="group inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
                        >
                            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
                            Browse More Tools
                        </Link>
                        <button className="group inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg">
                            Save to Favorites
                            <Heart className="w-4 h-4 transform group-hover:scale-105 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
