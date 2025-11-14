import { ArrowRight, Search } from "lucide-react";
import Background from "./Background";
import Link from "next/link";
import SearchBox from "../pages/SearchBox";

export default function Hero() {

  return (
    <section className="relative overflow-hidden py-14 lg:pb-32">
      <Background />

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-full px-4 py-1.5 mb-6">
          <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
            100+ AI Tools Curated
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          Your AI Directory{" "} <br />
          <span className="textGradient">
            100+ Tools
          </span>{" "}
          in One Place
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Discover detailed descriptions, categories, pricing, scores, rankings,
          and direct links for every AI tool. Designed with a minimal, modern UI
          and a purple-accent theme that fits the AI aesthetic.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Link
            href="/tools"
            className="bgGradient text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center gap-2">
            Browse All Tools
            <ArrowRight className="w-5 h-5" />
          </Link>

          <SearchBox />
        </div>
      </div>
    </section>
  );
}