import CTA from "@/components/landingPage/CTA";
import Features from "@/components/landingPage/Featured";
import Hero from "@/components/landingPage/Hero";
import Stats from "@/components/landingPage/Stats";

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
