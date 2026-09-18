import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Demo from "@/components/landing/Demo";
import Research from "@/components/landing/Research";
import Contributors from "@/components/landing/Contributors";
import FAQ from "@/components/landing/FAQ";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Demo />
      <Research />
      <Contributors />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
