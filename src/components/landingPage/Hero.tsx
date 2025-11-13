import { ArrowRight, Search } from "lucide-react";
import Background from "./Background";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Background />


      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-6">
          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-purple-700">
            100+ AI Tools Curated
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
          Your AI Directory —{" "}
          <span className="text-purple-600">
            100+ Tools
          </span>{" "}
          in One Place
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
          A curated collection of 100+ AI products sourced from "There's An AI
          For That", organized for fast browsing and clean usability.
        </p>

        <p className="text-sm text-gray-500 mb-10 max-w-2xl mx-auto">
          Discover detailed descriptions, categories, pricing, scores, rankings,
          and direct links for every AI tool. Designed with a minimal, modern UI
          and a purple-accent theme that fits the AI aesthetic.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition inline-flex items-center gap-2">
            Browse All Tools
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition inline-flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search Tools
          </button>
        </div>
      </div>
    </section>
  );
}
