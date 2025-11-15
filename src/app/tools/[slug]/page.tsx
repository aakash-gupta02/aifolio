import { getAllTools, getToolById } from '@/lib/getTools'
import Image from 'next/image'
import Link from 'next/link'
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
} from 'lucide-react'
import Background from '@/components/landingPage/Background'

export const revalidate = 3600

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  const tools = getAllTools()
  return tools.map((tool) => ({ slug: tool.slug }))
}

export async function generateMetadata({ params }: Props) {
  const tool = getToolById(params.slug)

  if (!tool) {
    return {
      title: 'Tool Not Found – AIFolio',
      description: 'The requested AI tool does not exist.',
    }
  }
  return {
    title: `${tool.name} – AI Tool Details`,
    description: tool.description,
  }
}

export default function ToolDetailPage({ params }: Props) {
  const tool = getToolById(params.slug)

  if (!tool) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Tool Not Found</h1>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            {`The tool you're looking for doesn't exist.`}
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-purple-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>
        </div>
      </div>
    )
  }
  return (
    <main className="mt-16 min-h-screen dark:bg-gray-900">
      <Background />
      {/* Main content */}
      <div className="mx-auto max-w-5xl px-6 pb-12">
        {/* Header section - Balanced */}
        <div className="mb-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center">
          <div className="shrink-0">
            <div className="group relative">
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-purple-400 to-pink-400 opacity-20 blur transition duration-500 group-hover:opacity-50"></div>
              <Image
                src={tool.image_url}
                alt={tool.name}
                width={96}
                height={96}
                className="relative rounded-xl border border-white bg-white p-2.5 shadow-lg dark:border-gray-800 dark:bg-gray-800"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-2.5 py-1 text-sm font-medium text-white">
                Rank #{tool.rank}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-sm font-medium capitalize ${
                  tool.pricing === 'free'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : tool.pricing === 'paid'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                }`}
              >
                {tool.pricing}
              </span>
              {tool.verified && (
                <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <Check className="h-4 w-4" />
                  Verified
                </span>
              )}
            </div>

            <h1 className="mb-3 text-3xl leading-tight font-bold text-gray-900 lg:text-4xl dark:text-white">
              {tool.name}
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {tool.description}
            </p>
          </div>
        </div>

        {/* Balanced Overview Card */}
        <div className="mb-10 grid gap-6 lg:grid-cols-3">
          {/* Main Overview Card */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-purple-500/10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-linear-to-r from-purple-500 to-pink-500 p-2">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tool Overview</h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div className="group">
                  <div className="mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Name
                    </span>
                  </div>
                  <p className="text-base font-semibold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                    {tool.name}
                  </p>
                </div>

                {/* Rank */}
                <div className="group">
                  <div className="mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4 text-purple-500" />
                    <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Rank
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-purple-600 dark:text-purple-400">
                      #{tool.rank}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.ceil(tool.rank / 20) ? 'fill-current text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="group">
                  <div className="mb-2 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-purple-500" />
                    <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Pricing
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold capitalize ${
                      tool.pricing === 'free'
                        ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : tool.pricing === 'paid'
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}
                  >
                    {tool.pricing}
                  </span>
                </div>

                {/* Verified Status */}
                <div className="group">
                  <div className="mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-purple-500" />
                    <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Status
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {tool.verified ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <Check className="mr-1 h-4 w-4" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        <AlertTriangle className="mr-1 h-4 w-4" />
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
              <h3 className="mb-2 text-base font-semibold">Ready to use this tool?</h3>
              <p className="mb-4 text-sm text-purple-100">Get started with {tool.name} today</p>
              <Link
                href={`https://theresanaiforthat.com/ai/${tool.slug}`}
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-purple-600 shadow-md transition-all duration-200 hover:bg-gray-50 hover:shadow-lg"
              >
                Visit Tool Website
              </Link>
            </div>
          </div>
        </div>

        {/* Balanced CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/tools"
              className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-900 shadow-md transition-all duration-200 hover:bg-gray-50 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <ArrowLeft className="h-4 w-4 transform transition-transform group-hover:-translate-x-0.5" />
              Browse More Tools
            </Link>
            <button className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg">
              Save to Favorites
              <Heart className="h-4 w-4 transform transition-transform group-hover:scale-105" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
