"use client";

import {
  LayoutTemplate,
  Upload,
  Cpu,
  CheckSquare,
  GitMerge,
  Search,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

const steps = [
  {
    num: "01",
    icon: LayoutTemplate,
    title: "Schema Design",
    desc: "Define your node types, relation types and properties. AI schema suggestions from your first documents are planned.",
    color: "#E9AE3F",
  },
  {
    num: "02",
    icon: Upload,
    title: "Ingest Sources",
    desc: "Load source texts — hadith collections, documents, transcripts. Each source is split into citable units.",
    color: "#A7ADB3",
  },
  {
    num: "03",
    icon: Cpu,
    title: "AI Extraction",
    desc: "The LLM proposes entities and relations — constrained to your schema and linked to the exact source span.",
    color: "#E9AE3F",
  },
  {
    num: "04",
    icon: CheckSquare,
    title: "Review & Validate",
    desc: "Every fact enters the graph either through a human decision or through an explicitly recorded policy — and the record says which. You accept, reject, edit or merge.",
    color: "#52C4A4",
  },
  {
    num: "05",
    icon: GitMerge,
    title: "Graph Grows",
    desc: "Each approved batch lands as a versioned delta on top of the existing graph — never an overwrite.",
    color: "#E9AE3F",
  },
  {
    num: "06",
    icon: Search,
    title: "Explore & Query",
    desc: "Walk chains visually, query relationships, and trace any fact back to its source.",
    color: "#7BA7CC",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 sm:px-6 bg-[#0D1D30] border-y border-[#1A2F44]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="label text-[#F0C468] mb-4">How It Works</p>
          <h2 className="heading-l text-white mb-4 max-w-2xl mx-auto">
            From raw input to{" "}
            <GradientText variant="brand">living knowledge</GradientText> — in
            6 steps
          </h2>
          <p className="body-m text-[#A7ADB3] max-w-xl mx-auto">
            The model proposes. A human decides. The graph records how each fact was accepted.
          </p>
        </AnimatedSection>

        {/* Steps grid */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-px bg-[#1A2F44]" />

          {/* Animated travelling dot — uses dot-travel-horiz from globals.css */}
          <div
            className="hidden lg:block absolute top-[44px] pointer-events-none"
            style={{ left: "8%", right: "8%", height: "1rem" }}
          >
            <div
              className="absolute h-4 w-4 rounded-full bg-[#E9AE3F]"
              style={{
                boxShadow: "0 0 8px rgba(233,174,63,0.8)",
                animation: "dot-travel-horiz 5s linear infinite",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.08} direction="up">
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left group">
                    {/* Icon container */}
                    <div className="relative mb-4">
                      <div
                        className="w-[52px] h-[52px] rounded-xl flex items-center justify-center border"
                        style={{
                          background: `rgba(${
                            step.color === "#E9AE3F"
                              ? "233,174,63"
                              : step.color === "#A7ADB3"
                              ? "167,173,179"
                              : step.color === "#52C4A4"
                              ? "82,196,164"
                              : "123,167,204"
                          },0.1)`,
                          borderColor: `rgba(${
                            step.color === "#E9AE3F"
                              ? "233,174,63"
                              : step.color === "#A7ADB3"
                              ? "167,173,179"
                              : step.color === "#52C4A4"
                              ? "82,196,164"
                              : "123,167,204"
                          },0.25)`,
                        }}
                      >
                        <Icon
                          size={22}
                          style={{ color: step.color }}
                          aria-hidden="true"
                        />
                      </div>
                      {/* Step number watermark */}
                      <span
                        className="absolute -top-3 -right-3 text-[28px] font-black leading-none select-none pointer-events-none"
                        style={{
                          color: "transparent",
                          WebkitTextStroke: `1px rgba(${
                            step.color === "#E9AE3F" ? "233,174,63" : "167,173,179"
                          },0.2)`,
                        }}
                        aria-hidden="true"
                      >
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-semibold text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-[#A7ADB3] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
