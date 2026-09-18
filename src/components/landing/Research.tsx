"use client";

import { FileText } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";

const questions = [
  "How much does source-span grounding plus human review reduce hallucinated triples?",
  "Does a locked schema with a proposal gate keep the graph consistent across extraction runs?",
  "How much expert effort does the review loop cost per verified chain?",
];

export default function Research() {
  return (
    <section id="research" className="py-24 px-4 sm:px-6 bg-[#0B1624]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="label text-[#A7ADB3] mb-4">Research</p>
          <h2 className="heading-l text-white mb-4">
            Built Alongside{" "}
            <GradientText variant="brand">a Paper</GradientText>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-[16px] border border-[#1A2F44] bg-gradient-to-br from-[#1D2E47] to-[#202F4A] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <div className="w-10 h-10 rounded-xl bg-[rgba(233,174,63,0.12)] border border-[rgba(233,174,63,0.25)] flex items-center justify-center flex-shrink-0">
                <FileText size={20} className="text-[#E9AE3F]" aria-hidden="true" />
              </div>
              <Badge variant="amber">In preparation</Badge>
            </div>
            <h3 className="text-[19px] sm:text-[21px] font-semibold text-white leading-snug mb-6">
              A Human-in-the-Loop Knowledge Graph Generation Engine for Preventing
              Hallucination and Schema Drift in LLMs: An Application on Hadith Isnad Chains
            </h3>
            <p className="text-[13px] font-semibold text-white uppercase tracking-widest mb-3">
              Questions the paper will answer
            </p>
            <ul className="space-y-2.5">
              {questions.map((q) => (
                <li key={q} className="flex items-start gap-2.5 text-[15px] text-[#A7ADB3]">
                  <span className="mt-0.5 text-[#E9AE3F] flex-shrink-0">→</span>
                  {q}
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-[#5A6A7E] mt-6">
              The preprint and the code will be linked here once they are published.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
