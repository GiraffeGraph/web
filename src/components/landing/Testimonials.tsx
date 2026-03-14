"use client";

import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

const testimonials = [
  {
    quote:
      "GiraffeGraph turned 3 seasons of scattered scripts into a fully navigable story universe. We caught 14 continuity errors we'd never have found manually.",
    name: "Jordan Kim",
    role: "Lead Writer",
    company: "Narrative Operations",
    gradient: "from-[#E9AE3F] to-[#C4893A]",
    mt: "mt-0",
  },
  {
    quote:
      "The Schema Studio is unlike anything else. We built our legal case ontology in an afternoon and started processing case files the next day. The AI suggestions were spot-on.",
    name: "Sarah Chen",
    role: "Knowledge Architect",
    company: "LexFlow",
    gradient: "from-[#52C4A4] to-[#3A9A80]",
    mt: "mt-6 lg:mt-8",
  },
  {
    quote:
      "Finally a tool that understands that AI should propose and humans should decide. The review flow is exactly right. Our graph quality is exceptional.",
    name: "Marcus Webb",
    role: "Research Lead",
    company: "DataForge Labs",
    gradient: "from-[#7BA7CC] to-[#5A87AC]",
    mt: "mt-0",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0D1D30] border-y border-[#1A2F44]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <h2 className="heading-l text-white mb-4">
            What{" "}
            <GradientText variant="brand">knowledge builders</GradientText> say
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1} direction="up">
              <div
                className={`${t.mt} rounded-[16px] border border-[#1A2F44] bg-[#1D2E47] p-7 hover:border-[rgba(233,174,63,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-200`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[#E9AE3F] fill-[#E9AE3F]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="text-[15px] text-white leading-[1.8] mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex-shrink-0`}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[14px] font-semibold text-white">{t.name}</p>
                    <p className="text-[12px] text-[#5A6A7E]">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
