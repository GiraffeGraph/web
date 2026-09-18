"use client";

import { LayoutTemplate, Cpu, CheckSquare, TrendingUp, History, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";

// ─── Card Visuals ─────────────────────────────────────────────────────────────

function SchemaStudioVisual() {
  const nodeTypes = [
    { label: "Narrator", color: "#E9AE3F", ai: false },
    { label: "Hadith", color: "#A7ADB3", ai: false },
    { label: "Teacher", color: "#D4785A", ai: true },
    { label: "Collection", color: "#52C4A4", ai: false },
  ];
  return (
    <div className="mt-5 rounded-xl bg-[#0B1624] border border-[#1A2F44] overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#1A2F44]">
        <span className="text-[11px] font-semibold text-white">Node Types</span>
        <span className="text-[9px] bg-[rgba(82,196,164,0.15)] border border-[rgba(82,196,164,0.3)] text-[#52C4A4] px-2 py-0.5 rounded-full">
          v1 — Locked
        </span>
      </div>
      {nodeTypes.map((nt, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 px-3 py-2 hover:bg-[#1A2F44] transition-colors border-b border-[#1A2F44] last:border-0"
        >
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: nt.color }} />
          <span className="text-[12px] text-[#A7ADB3] flex-1">{nt.label}</span>
          {nt.ai && (
            <span className="text-[9px] bg-[rgba(233,174,63,0.15)] border border-[rgba(233,174,63,0.3)] text-[#E9AE3F] px-1.5 py-0.5 rounded-full animate-pulse">
              Proposed type
            </span>
          )}
          {nt.ai && (
            <div className="flex gap-1">
              <button className="text-[9px] bg-[rgba(82,196,164,0.2)] text-[#52C4A4] px-1.5 py-0.5 rounded hover:bg-[rgba(82,196,164,0.35)] transition-colors">✓</button>
              <button className="text-[9px] bg-[rgba(212,120,90,0.2)] text-[#D4785A] px-1.5 py-0.5 rounded hover:bg-[rgba(212,120,90,0.35)] transition-colors">✕</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ExtractionVisual() {
  return (
    <div className="mt-5 rounded-xl bg-[#0B1624] border border-[#1A2F44] p-3 font-mono text-[11px] overflow-hidden">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#D4785A]" />
        <div className="w-2 h-2 rounded-full bg-[#E9AE3F]" />
        <div className="w-2 h-2 rounded-full bg-[#52C4A4]" />
        <span className="text-[10px] text-[#5A6A7E] ml-1">bukhari_001.extraction.json</span>
      </div>
      <pre className="text-[10px] leading-relaxed overflow-x-auto">
        <span className="text-[#5A6A7E]">{"{"}</span>{"\n"}
        {"  "}<span className="text-[#7BA7CC]">&quot;type&quot;</span><span className="text-[#A7ADB3]">: </span><span className="text-[#52C4A4]">&quot;Narrator&quot;</span>,{"\n"}
        {"  "}<span className="text-[#7BA7CC]">&quot;name&quot;</span><span className="text-[#A7ADB3]">: </span><span className="text-[#52C4A4]">&quot;Sufyān b. ʿUyayna&quot;</span>,{"\n"}
        {"  "}<span className="text-[#7BA7CC]">&quot;span&quot;</span><span className="text-[#A7ADB3]">: </span><span className="text-[#52C4A4]">&quot;ḥaddathanā Sufyān…&quot;</span>,{"\n"}
        {"  "}<span className="text-[#7BA7CC]">&quot;confidence&quot;</span><span className="text-[#A7ADB3]">: </span><span className="text-[#E9AE3F]">0.94</span>,{"\n"}
        {"  "}<span className="text-[#7BA7CC]">&quot;relations&quot;</span><span className="text-[#A7ADB3]">: [</span>{"\n"}
        {"    {"}<span className="text-[#7BA7CC]">&quot;NARRATED_FROM&quot;</span><span className="text-[#A7ADB3]">: </span><span className="text-[#52C4A4]">&quot;Yaḥyā b. Saʿīd&quot;</span>{"}"}{"\n"}
        {"  "}<span className="text-[#A7ADB3]">]</span>{"\n"}
        <span className="text-[#5A6A7E]">{"}"}</span>
      </pre>
    </div>
  );
}

function ReviewVisual() {
  const items = [
    { icon: "✓", label: "al-Ḥumaydī NARRATED_FROM Sufyān", color: "#52C4A4", bg: "rgba(82,196,164,0.1)" },
    { icon: "✕", label: "ʿUmar NARRATED_FROM Abū Hurayra — no source span", color: "#D4785A", bg: "rgba(212,120,90,0.1)" },
    { icon: "?", label: '"Ibn ʿUyayna" = "Sufyān b. ʿUyayna"?', color: "#E9AE3F", bg: "rgba(233,174,63,0.1)", merge: true },
  ];
  return (
    <div className="mt-5 space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border"
          style={{ backgroundColor: item.bg, borderColor: `${item.color}33` }}
        >
          <span className="text-[12px] font-bold flex-shrink-0" style={{ color: item.color }}>{item.icon}</span>
          <span className="text-[11px] text-[#A7ADB3] flex-1">{item.label}</span>
          {item.merge && (
            <button className="text-[9px] bg-[rgba(233,174,63,0.2)] border border-[rgba(233,174,63,0.4)] text-[#E9AE3F] px-2 py-0.5 rounded-full hover:bg-[rgba(233,174,63,0.3)] transition-colors">
              Merge
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

function SparklineVisual() {
  const bars = [20, 35, 28, 50, 42, 65, 58, 80, 72, 95];
  return (
    <div className="mt-4 flex items-end gap-1 h-12">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all"
          style={{
            height: `${h}%`,
            background: `rgba(233,174,63,${0.3 + (i / bars.length) * 0.6})`,
          }}
        />
      ))}
    </div>
  );
}

function VersionVisual() {
  const versions = [
    { label: "v4 — current", badge: "active", color: "#52C4A4" },
    { label: "v3 — 2d ago", badge: "stable" },
    { label: "v2 — 1w ago", badge: "" },
  ];
  return (
    <div className="mt-4 space-y-1.5">
      {versions.map((v, i) => (
        <div key={i} className="flex items-center gap-2 text-[11px] text-[#A7ADB3]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#324155] flex-shrink-0" />
          <span className="flex-1 font-mono">{v.label}</span>
          {v.badge === "active" && (
            <span className="text-[9px] text-[#52C4A4] bg-[rgba(82,196,164,0.1)] px-1.5 py-0.5 rounded-full">active</span>
          )}
          {v.badge === "stable" && (
            <span className="text-[9px] text-[#A7ADB3] bg-[rgba(167,173,179,0.1)] px-1.5 py-0.5 rounded-full">stable</span>
          )}
        </div>
      ))}
    </div>
  );
}

function DomainVisual() {
  const domains = ["Hadith", "History", "Legal", "Research", "Medical", "Story"];
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {domains.map((d, i) => (
        <span
          key={i}
          className="text-[11px] px-2.5 py-1 rounded-full border border-[#253D5A] text-[#A7ADB3] hover:border-[rgba(233,174,63,0.4)] hover:text-[#F0C468] transition-all cursor-default"
        >
          {d}
        </span>
      ))}
    </div>
  );
}

// ─── Main Features Component ──────────────────────────────────────────────────

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 bg-[#0B1624]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <p className="label text-[#A7ADB3] mb-4">What We&apos;re Building</p>
          <h2 className="heading-l text-white mb-4 max-w-2xl mx-auto">
            Every layer of intelligence,{" "}
            <GradientText variant="brand">fully in your hands</GradientText>
          </h2>
          <p className="text-[17px] text-[#A7ADB3] max-w-xl mx-auto leading-relaxed">
            The core components of the first open-source release — from schema
            definition to graph exploration, every step reviewable and versioned.
          </p>
        </AnimatedSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* LARGE card — spans 2 cols, 2 rows on lg */}
          <AnimatedSection
            delay={0.0}
            className="lg:col-span-2 lg:row-span-2"
          >
            <div className="h-full rounded-[16px] border border-[#1A2F44] bg-gradient-to-br from-[#1D2E47] to-[#202F4A] p-6 md:p-8 bento-card flex flex-col">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[rgba(233,174,63,0.12)] border border-[rgba(233,174,63,0.25)] flex items-center justify-center flex-shrink-0">
                  <LayoutTemplate size={20} className="text-[#E9AE3F]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white">Schema Studio</h3>
                  <Badge variant="primary" className="mt-1">Drift Guard</Badge>
                </div>
              </div>
              <p className="text-[15px] text-[#A7ADB3] leading-relaxed mb-2">
                Define node types, relations, properties and validation rules once. The schema
                is locked during extraction: when the model wants a type that doesn&apos;t exist,
                it becomes a proposal you approve or reject — so the schema never drifts on
                its own.
              </p>
              <SchemaStudioVisual />
            </div>
          </AnimatedSection>

          {/* MEDIUM — AI Extraction */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-[16px] border border-[#1A2F44] bg-gradient-to-br from-[#1D2E47] to-[#202F4A] p-6 bento-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[rgba(167,173,179,0.1)] border border-[rgba(167,173,179,0.2)] flex items-center justify-center flex-shrink-0">
                  <Cpu size={18} className="text-[#A7ADB3]" aria-hidden="true" />
                </div>
                <h3 className="text-[15px] font-semibold text-white">AI Extraction Engine</h3>
              </div>
              <p className="text-[13px] text-[#A7ADB3] leading-relaxed">
                Schema-constrained extraction where every triple carries the source span it was read from.
              </p>
              <ExtractionVisual />
            </div>
          </AnimatedSection>

          {/* MEDIUM — Review */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-[16px] border border-[#1A2F44] bg-gradient-to-br from-[#1D2E47] to-[#202F4A] p-6 bento-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[rgba(82,196,164,0.1)] border border-[rgba(82,196,164,0.2)] flex items-center justify-center flex-shrink-0">
                  <CheckSquare size={18} className="text-[#52C4A4]" aria-hidden="true" />
                </div>
                <h3 className="text-[15px] font-semibold text-white">Human-in-the-Loop Review</h3>
              </div>
              <p className="text-[13px] text-[#A7ADB3] leading-relaxed">
                The model proposes, you decide. Ungrounded claims are flagged, name variants are resolved by a human.
              </p>
              <ReviewVisual />
            </div>
          </AnimatedSection>

          {/* SMALL — Growth */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-[16px] border border-[#1A2F44] bg-gradient-to-br from-[#1D2E47] to-[#202F4A] p-6 bento-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[rgba(233,174,63,0.1)] border border-[rgba(233,174,63,0.2)] flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={18} className="text-[#E9AE3F]" aria-hidden="true" />
                </div>
                <h3 className="text-[15px] font-semibold text-white">Iterative Graph Growth</h3>
              </div>
              <p className="text-[13px] text-[#A7ADB3] leading-relaxed">
                Every new source adds a delta. The graph grows — never overwrites, always expands.
              </p>
              <SparklineVisual />
            </div>
          </AnimatedSection>

          {/* SMALL — Versioning */}
          <AnimatedSection delay={0.25}>
            <div className="rounded-[16px] border border-[#1A2F44] bg-gradient-to-br from-[#1D2E47] to-[#202F4A] p-6 bento-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[rgba(123,167,204,0.1)] border border-[rgba(123,167,204,0.2)] flex items-center justify-center flex-shrink-0">
                  <History size={18} className="text-[#7BA7CC]" aria-hidden="true" />
                </div>
                <h3 className="text-[15px] font-semibold text-white">Full Versioning</h3>
              </div>
              <p className="text-[13px] text-[#A7ADB3] leading-relaxed">
                Schema versions, extraction runs, graph deltas — every change is tracked, auditable and reversible.
              </p>
              <VersionVisual />
            </div>
          </AnimatedSection>

          {/* SMALL — Domain */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-[16px] border border-[#1A2F44] bg-gradient-to-br from-[#1D2E47] to-[#202F4A] p-6 bento-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[rgba(212,120,90,0.1)] border border-[rgba(212,120,90,0.2)] flex items-center justify-center flex-shrink-0">
                  <Globe size={18} className="text-[#D4785A]" aria-hidden="true" />
                </div>
                <h3 className="text-[15px] font-semibold text-white">Any Domain</h3>
              </div>
              <p className="text-[13px] text-[#A7ADB3] leading-relaxed">
                Isnad chains are the first case study. The schema-driven design is meant for any domain.
              </p>
              <DomainVisual />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
