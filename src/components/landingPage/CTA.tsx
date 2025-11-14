import { Sparkles } from "lucide-react";
import Background from "./Background";
import SectionHeading from "./SectionHeading";

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

          <button className="px-8 py-3.5 rounded-lg text-base font-medium textGradient  bg-white hover:bg-gray-50 transition-all hover:shadow-xl inline-flex items-center gap-2">
            Browse All Tools →
          </button>

          <button className="bgGradient text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-purple-400 transition-colors border border-purple-400 inline-flex items-center gap-2">
            Learn More
          </button>

        </div>
      </SectionHeading>
    </section>
  );
}
