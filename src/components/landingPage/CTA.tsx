import { Sparkles } from "lucide-react";
import Background from "./Background";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <Background />

      <SectionHeading
        title={<span>Ready to explore the world of <span className="textGradient">AI?</span></span>}
        subtitle="Start browsing our curated collection of 100+ AI tools and find the perfect solution for your needs."
        icon={<Sparkles className="w-4 h-4 text-purple-600" />}
        iconTitle="Explore AI"
      >


        <div className="flex items-center justify-center gap-4 flex-wrap">

          <Link
          href="/tools"
          className="px-8 py-3.5 rounded-lg text-base font-medium textGradient bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:shadow-xl inline-flex items-center gap-2">
            Browse All Tools →
          </Link>

          <button className="bgGradient text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-purple-400 transition-colors border border-purple-400 dark:border-purple-600 inline-flex items-center gap-2">
            Learn More
          </button>

        </div>
      </SectionHeading>
    </section>
  );
}
