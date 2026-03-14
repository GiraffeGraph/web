"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const logos = [
  "Netflix",
  "HBO Max",
  "Wattpad",
  "Storytel",
  "Prime Video",
  "A24 Studios",
];

export default function SocialProof() {
  return (
    <section className="py-14 border-y border-[#1A2F44] bg-[#0D1D30]">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="label text-[#5A6A7E] text-center mb-8">
          Powering knowledge workflows for teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo, i) => (
            <span
              key={i}
              className="text-[15px] font-semibold text-[#A7ADB3] opacity-40 hover:opacity-70 transition-opacity duration-200 tracking-tight"
            >
              {logo}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
