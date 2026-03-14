"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

function ctrl(ax: number, ay: number, bx: number, by: number, c = 0.25) {
  const mx = (ax + bx) / 2, my = (ay + by) / 2;
  const dx = bx - ax, dy = by - ay;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  return { cx: mx + (-dy / len) * len * c, cy: my + (dx / len) * len * c };
}
import { GradientText } from "@/components/ui/GradientText";

const tabs = [
  { id: "story", label: "🎬 Story & Film" },
  { id: "docs", label: "📄 Documents" },
  { id: "research", label: "🔬 Research" },
  { id: "enterprise", label: "🏢 Enterprise" },
];

const tabContent = {
  story: {
    eyebrow: "Story & Narrative",
    headline: "Build the canonical universe of your story",
    outcomes: [
      "Character relationship maps",
      "Event timelines & causal chains",
      "Knowledge asymmetry tracking",
      "Character arc evolution over episodes",
      "Cross-episode continuity validation",
    ],
    cta: "Explore Story Template →",
    nodes: [
      { id: "ali", x: 100, y: 80, r: 20, color: "#E9AE3F", label: "Ali" },
      { id: "veli", x: 230, y: 60, r: 17, color: "#E9AE3F", label: "Veli" },
      { id: "secret", x: 165, y: 160, r: 14, color: "#A7ADB3", label: "The Secret" },
      { id: "hq", x: 280, y: 150, r: 13, color: "#52C4A4", label: "Istanbul HQ" },
      { id: "memo", x: 65, y: 175, r: 12, color: "#E9AE3F", label: "Memo" },
    ],
    edges: [[0, 1], [0, 2], [1, 2], [1, 3], [0, 4]],
    edgeLabels: ["BETRAYS", "KNOWS_ABOUT", "OWNS", "MANAGES", "OWES_TO"],
  },
  docs: {
    eyebrow: "Document Knowledge",
    headline: "Transform document silos into connected knowledge",
    outcomes: [
      "Concept & clause extraction",
      "Cross-document entity linking",
      "Policy lineage tracking",
      "Contradiction detection",
      "Semantic search over graph",
    ],
    cta: "Explore Document Template →",
    nodes: [
      { id: "contract", x: 100, y: 90, r: 18, color: "#7BA7CC", label: "Contract" },
      { id: "party", x: 220, y: 70, r: 15, color: "#E9AE3F", label: "Party A" },
      { id: "clause", x: 170, y: 165, r: 13, color: "#A7ADB3", label: "Clause 4.2" },
      { id: "obligation", x: 275, y: 155, r: 14, color: "#D4785A", label: "Obligation" },
      { id: "deadline", x: 70, y: 170, r: 11, color: "#52C4A4", label: "Deadline" },
    ],
    edges: [[0, 1], [0, 2], [2, 3], [3, 4], [1, 3]],
    edgeLabels: ["SIGNED_BY", "CONTAINS", "TRIGGERS", "DUE_BY", "OBLIGATES"],
  },
  research: {
    eyebrow: "Research Intelligence",
    headline: "Map the knowledge frontier of your domain",
    outcomes: [
      "Paper citation networks",
      "Concept co-occurrence graphs",
      "Author collaboration mapping",
      "Research gap identification",
      "Hypothesis chain tracking",
    ],
    cta: "Explore Research Template →",
    nodes: [
      { id: "paper", x: 100, y: 85, r: 18, color: "#7BA7CC", label: "Paper A" },
      { id: "author", x: 220, y: 65, r: 15, color: "#E9AE3F", label: "Author" },
      { id: "concept", x: 165, y: 160, r: 14, color: "#52C4A4", label: "Concept X" },
      { id: "method", x: 275, y: 145, r: 12, color: "#A7ADB3", label: "Method" },
      { id: "dataset", x: 68, y: 165, r: 11, color: "#D4785A", label: "Dataset" },
    ],
    edges: [[0, 1], [0, 2], [2, 3], [3, 4], [1, 2]],
    edgeLabels: ["AUTHORED_BY", "USES", "APPLIES", "TRAINED_ON", "RESEARCHES"],
  },
  enterprise: {
    eyebrow: "Enterprise Knowledge",
    headline: "Institutional knowledge, finally queryable",
    outcomes: [
      "Process dependency graphs",
      "Org knowledge & expertise mapping",
      "Incident root-cause chains",
      "Compliance relationship tracking",
      "Knowledge handoff automation",
    ],
    cta: "Explore Enterprise Template →",
    nodes: [
      { id: "process", x: 100, y: 85, r: 18, color: "#52C4A4", label: "Process A" },
      { id: "team", x: 225, y: 65, r: 15, color: "#E9AE3F", label: "Team Ops" },
      { id: "incident", x: 165, y: 160, r: 14, color: "#D4785A", label: "Incident" },
      { id: "system", x: 275, y: 150, r: 13, color: "#7BA7CC", label: "System" },
      { id: "sla", x: 65, y: 168, r: 11, color: "#A7ADB3", label: "SLA" },
    ],
    edges: [[0, 1], [0, 2], [2, 3], [3, 4], [1, 2]],
    edgeLabels: ["OWNED_BY", "TRIGGERS", "AFFECTS", "GOVERNS", "MANAGES"],
  },
};

type TabId = keyof typeof tabContent;

function MiniGraph({ tab }: { tab: TabId }) {
  const data = tabContent[tab];
  return (
    <div className="h-[240px] rounded-xl bg-[#0B1624] border border-[#1A2F44] overflow-hidden">
      <svg viewBox="0 0 340 240" className="w-full h-full">
        <defs>
          <radialGradient id="uc-sp-gold"  cx="36%" cy="30%" r="68%">
            <stop offset="0%"   stopColor="#FDE68A" stopOpacity="0.95"/>
            <stop offset="55%"  stopColor="#E9AE3F" stopOpacity="0.85"/>
            <stop offset="100%" stopColor="#92600A" stopOpacity="0.45"/>
          </radialGradient>
          <radialGradient id="uc-sp-teal"  cx="36%" cy="30%" r="68%">
            <stop offset="0%"   stopColor="#A7EDD9" stopOpacity="0.9"/>
            <stop offset="55%"  stopColor="#52C4A4" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#1A6B54" stopOpacity="0.4"/>
          </radialGradient>
          <radialGradient id="uc-sp-warm"  cx="36%" cy="30%" r="68%">
            <stop offset="0%"   stopColor="#F0B99E" stopOpacity="0.9"/>
            <stop offset="55%"  stopColor="#D4785A" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#6B2A15" stopOpacity="0.4"/>
          </radialGradient>
          <radialGradient id="uc-sp-slate" cx="36%" cy="30%" r="68%">
            <stop offset="0%"   stopColor="#D4D8DC" stopOpacity="0.85"/>
            <stop offset="55%"  stopColor="#A7ADB3" stopOpacity="0.75"/>
            <stop offset="100%" stopColor="#3A4550" stopOpacity="0.4"/>
          </radialGradient>
          <radialGradient id="uc-sp-blue"  cx="36%" cy="30%" r="68%">
            <stop offset="0%"   stopColor="#BDD5EA" stopOpacity="0.9"/>
            <stop offset="55%"  stopColor="#7BA7CC" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#2A4F6B" stopOpacity="0.4"/>
          </radialGradient>
          <filter id="uc-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="uc-edge-blur" x="-20%" y="-300%" width="140%" height="700%">
            <feGaussianBlur stdDeviation="1.2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Edge glow pass */}
        {data.edges.map((edge: number[], i: number) => {
          const [a, b] = edge;
          const from = data.nodes[a]; const to = data.nodes[b];
          const { cx, cy } = ctrl(from.x, from.y, to.x, to.y);
          return (
            <path key={`eg${i}`}
              d={`M${from.x},${from.y} Q${cx},${cy} ${to.x},${to.y}`}
              fill="none" stroke={from.color} strokeWidth="2.5" strokeOpacity="0.1"
              filter="url(#uc-edge-blur)"/>
          );
        })}

        {/* Edge core + label */}
        {data.edges.map((edge: number[], i: number) => {
          const [a, b] = edge;
          const from = data.nodes[a]; const to = data.nodes[b];
          const { cx, cy } = ctrl(from.x, from.y, to.x, to.y);
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2 - 8;
          return (
            <g key={`e${i}`}>
              <path d={`M${from.x},${from.y} Q${cx},${cy} ${to.x},${to.y}`}
                fill="none" stroke={from.color} strokeWidth="1" strokeOpacity="0.4"/>
              <text x={midX} y={midY} textAnchor="middle"
                fill={from.color} fontSize="5.5" opacity="0.6" fontFamily="monospace">
                {data.edgeLabels[i]}
              </text>
            </g>
          );
        })}

        {/* Planet nodes */}
        {data.nodes.map((n: { x: number; y: number; r: number; color: string; label: string }, i: number) => {
          const grad = n.color === "#E9AE3F" ? "url(#uc-sp-gold)"
            : n.color === "#52C4A4" ? "url(#uc-sp-teal)"
            : n.color === "#D4785A" ? "url(#uc-sp-warm)"
            : n.color === "#7BA7CC" ? "url(#uc-sp-blue)"
            : "url(#uc-sp-slate)";
          return (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={n.r * 1.8} fill={n.color} opacity="0.05"/>
              <circle cx={n.x} cy={n.y} r={n.r + 1.5} fill="none" stroke={n.color}
                strokeWidth="0.6" opacity="0.2"/>
              <circle cx={n.x} cy={n.y} r={n.r} fill={grad} filter="url(#uc-glow)"/>
              <text x={n.x} y={n.y + n.r + 10} textAnchor="middle"
                fill="#FFFFFF" fontSize="7" opacity="0.85">{n.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function UseCases() {
  const [activeTab, setActiveTab] = useState<TabId>("story");
  const content = tabContent[activeTab];

  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 bg-[#0B1624]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="label text-[#F0C468] mb-4">Use Cases</p>
          <h2 className="heading-l text-white mb-4">
            Built for any{" "}
            <GradientText variant="brand">knowledge domain</GradientText>
          </h2>
          <p className="body-m text-[#A7ADB3]">
            Start with your domain, scale to any data.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 border ${
                  activeTab === tab.id
                    ? "bg-gradient-to-br from-[#E9AE3F] to-[#C4893A] text-[#1D2E47] border-transparent shadow-[0_0_16px_rgba(233,174,63,0.3)]"
                    : "bg-[#1D2E47] text-[#A7ADB3] border-[#253D5A] hover:border-[rgba(233,174,63,0.3)] hover:text-white"
                }`}
                aria-pressed={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left */}
            <div>
              <p className="label text-[#E9AE3F] mb-3">{content.eyebrow}</p>
              <h3 className="heading-m text-white mb-5">{content.headline}</h3>
              <ul className="space-y-3 mb-8">
                {content.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[15px] text-[#A7ADB3]">
                    <span className="w-5 h-5 rounded-full bg-[rgba(233,174,63,0.15)] border border-[rgba(233,174,63,0.3)] flex items-center justify-center flex-shrink-0 text-[#E9AE3F] text-[10px]">
                      ✓
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center text-[14px] text-[#E9AE3F] hover:text-[#F0C468] font-medium transition-colors"
              >
                {content.cta}
              </a>
            </div>

            {/* Right */}
            <MiniGraph tab={activeTab} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
