import Background from "./Background";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32  relative overflow-hidden">
      <Background />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">

        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-black mb-6">
          Ready to explore the world of AI?
        </h2>

        <p className="text-xl text-purple-600 mb-10">
          Start browsing our curated collection of 100+ AI tools and find the perfect solution for your needs.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">

          <button className="bg- text-purple-600 px-8 py-3.5 rounded-lg text-base font-medium hover:bg-gray-50 transition-all hover:shadow-xl inline-flex items-center gap-2">
            Browse All Tools →
          </button>

          <button className="bg-purple-500 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-purple-400 transition-colors border border-purple-400 inline-flex items-center gap-2">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}
