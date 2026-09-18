"use client";

import { Github } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { GITHUB_ORG_URL } from "@/lib/links";

export default function CTABanner() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden border-y border-[#253D5A]">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B1624]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(233,174,63,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 mesh-grid opacity-60" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimatedSection>
          {/* Logo mark — subtle seal above headline */}
          <div className="flex justify-center mb-6">
            <Logo size={40} showText={false} />
          </div>

          <h2 className="heading-l mb-5">
            <GradientText variant="brand">
              Built in the open.
            </GradientText>
            <br />
            <span className="text-white">Follow along.</span>
          </h2>
          <p className="body-m text-[#A7ADB3] mb-10">
            The first release and the paper are on the way. Watch the repositories to hear first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ButtonLink
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="text-[16px] shadow-[0_0_32px_rgba(233,174,63,0.4)]"
            >
              <Github size={18} aria-hidden="true" />
              Follow on GitHub
            </ButtonLink>
            <ButtonLink href="#research" variant="secondary" size="lg">
              About the Research →
            </ButtonLink>
          </div>

          <div className="flex items-center justify-center gap-4 text-[13px] text-[#5A6A7E]">
            {["Open source", "Research project", "No sign-up"].map(
              (item, i) => (
                <span key={i} className="flex items-center gap-4">
                  {i > 0 && (
                    <span className="h-3 w-px bg-[#1A2F44]" aria-hidden="true" />
                  )}
                  {item}
                </span>
              )
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
