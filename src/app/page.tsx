import CTA from "@/components/landingPage/CTA";
import Features from "@/components/landingPage/Featured";
import Hero from "@/components/landingPage/Hero";
import Stats from "@/components/landingPage/Stats";

export const metadata = {
  title: "AIFolio – 100+ AI Tools",
  description: "Your AI directory with 100+ tools curated for easy browsing.",
};


export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <Stats />
      <Features />
      <CTA />

    </main>
  );
}
