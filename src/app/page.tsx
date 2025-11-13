import Background from "@/components/landingPage/Background";
import CTA from "@/components/landingPage/CTA";
import Features from "@/components/landingPage/Featured";
import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import Stats from "@/components/landingPage/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <Footer />

    </main>
  );
}
