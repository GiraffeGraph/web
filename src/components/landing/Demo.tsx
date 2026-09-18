"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

// Isnad of Sahih al-Bukhari #1, listed from the collector back to the Prophet.
const chain = [
  { name: "al-Bukhārī", note: "collector" },
  { name: "al-Ḥumaydī", note: "ʿAbd Allāh b. al-Zubayr" },
  { name: "Sufyān b. ʿUyayna", note: "also written “Ibn ʿUyayna”", variant: true },
  { name: "Yaḥyā b. Saʿīd al-Anṣārī", note: "pivot of the chain" },
  { name: "Muḥammad b. Ibrāhīm al-Taymī", note: "" },
  { name: "ʿAlqama b. Waqqāṣ al-Laythī", note: "" },
  { name: "ʿUmar b. al-Khaṭṭāb", note: "companion" },
  { name: "The Prophet ﷺ", note: "", root: true },
];

const reasons = [
  {
    title: "Ground truth exists",
    desc: "Classical rijāl literature documents who narrated from whom, so extracted chains can be checked against scholarship.",
    color: "#52C4A4",
    bg: "rgba(82,196,164,0.08)",
  },
  {
    title: "Zero tolerance for errors",
    desc: "One invented or misplaced narrator changes how a hadith is graded. Hallucination is not a cosmetic problem here.",
    color: "#D4785A",
    bg: "rgba(212,120,90,0.08)",
  },
  {
    title: "Names vary everywhere",
    desc: "The same narrator appears by kunya, nisba or laqab. Entity resolution needs a human expert in the loop.",
    color: "#E9AE3F",
    bg: "rgba(233,174,63,0.08)",
  },
];

export default function Demo() {
  return (
    <section id="case-study" className="py-24 px-4 sm:px-6 mesh-grid bg-[#0D1D30] border-y border-[#1A2F44]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="label text-[#F0C468] mb-4">Case Study</p>
          <h2 className="heading-l text-white mb-4">
            Hadith{" "}
            <GradientText variant="brand">Isnad Chains</GradientText>
          </h2>
          <p className="body-m text-[#A7ADB3] max-w-xl mx-auto">
            An isnad is the chain of narrators through which a hadith was
            transmitted — a graph by nature, and a demanding test for LLM extraction.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="rounded-[16px] border border-[#253D5A] bg-[#1D2E47] p-5 sm:p-8">
            <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
              <span className="text-[13px] font-semibold text-white">Ṣaḥīḥ al-Bukhārī #1 — “Actions are judged by intentions”</span>
              <span className="text-[11px] font-mono text-[#5A6A7E]">NARRATED_FROM ↓</span>
            </div>
            <ol className="relative">
              {chain.map((n, i) => (
                <li key={n.name} className="relative flex items-start gap-4 pb-5 last:pb-0">
                  {i < chain.length - 1 && (
                    <span className="absolute left-[7px] top-5 bottom-0 w-px bg-[#324155]" aria-hidden="true" />
                  )}
                  <span
                    className="relative mt-1 w-[15px] h-[15px] rounded-full flex-shrink-0 border-2"
                    style={{
                      borderColor: n.root ? "#52C4A4" : "#E9AE3F",
                      background: n.root ? "rgba(82,196,164,0.25)" : "rgba(233,174,63,0.2)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 min-w-0">
                    <span className="text-[15px] text-white">{n.name}</span>
                    {n.note && (
                      <span
                        className={`text-[12px] ${n.variant ? "text-[#E9AE3F] border border-[rgba(233,174,63,0.35)] bg-[rgba(233,174,63,0.1)] px-2 py-0.5 rounded-full" : "text-[#5A6A7E]"}`}
                      >
                        {n.note}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-xl border border-[#1A2F44] p-4"
                style={{ backgroundColor: r.bg }}
              >
                <p className="text-[15px] font-semibold" style={{ color: r.color }}>
                  {r.title}
                </p>
                <p className="text-[13px] text-[#A7ADB3] mt-1.5 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
