"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

function ctrl(ax: number, ay: number, bx: number, by: number, c = 0.22) {
  const mx = (ax + bx) / 2, my = (ay + by) / 2;
  const dx = bx - ax, dy = by - ay;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  return { cx: mx + (-dy / len) * len * c, cy: my + (dx / len) * len * c };
}

function ChaoticDocuments() {
  return (
    <div className="relative h-52 w-full">
      {[
        { rotate: "-6deg", top: "8px", left: "10px", zIndex: 1 },
        { rotate: "4deg", top: "24px", left: "30px", zIndex: 2 },
        { rotate: "-2deg", top: "16px", left: "50px", zIndex: 3 },
        { rotate: "8deg", top: "32px", left: "20px", zIndex: 4 },
        { rotate: "-4deg", top: "48px", left: "40px", zIndex: 5 },
      ].map((style, i) => (
        <div
          key={i}
          className="absolute w-[220px] bg-[#1D2E47] border border-[#253D5A] rounded-lg p-4"
          style={{
            transform: `rotate(${style.rotate})`,
            top: style.top,
            left: style.left,
            zIndex: style.zIndex,
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}
        >
          <div className="flex flex-col gap-1.5">
            {[70, 55, 85, 45, 60].map((w, j) => (
              <div
                key={j}
                className="h-2 bg-[#324155] rounded-full opacity-70"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function OrganizedGraph() {
  const nodes = [
    { x: 80, y: 60, color: "#E9AE3F", label: "Ali", r: 14 },
    { x: 180, y: 45, color: "#E9AE3F", label: "Veli", r: 12 },
    { x: 130, y: 130, color: "#A7ADB3", label: "Secret", r: 10 },
    { x: 220, y: 120, color: "#52C4A4", label: "HQ", r: 11 },
    { x: 55, y: 145, color: "#D4785A", label: "Nadia", r: 10 },
  ];

  const edges = [
    [0, 1], [0, 2], [1, 2], [1, 3], [0, 4],
  ];

  return (
    <div className="h-52 w-full rounded-xl bg-[#0B1624] border border-[#1A2F44] overflow-hidden">
      <svg viewBox="0 0 280 190" className="w-full h-full">
        <defs>
          <radialGradient id="p-sp-gold"  cx="36%" cy="30%" r="68%">
            <stop offset="0%"   stopColor="#FDE68A" stopOpacity="0.95"/>
            <stop offset="55%"  stopColor="#E9AE3F" stopOpacity="0.85"/>
            <stop offset="100%" stopColor="#92600A" stopOpacity="0.45"/>
          </radialGradient>
          <radialGradient id="p-sp-teal"  cx="36%" cy="30%" r="68%">
            <stop offset="0%"   stopColor="#A7EDD9" stopOpacity="0.9"/>
            <stop offset="55%"  stopColor="#52C4A4" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#1A6B54" stopOpacity="0.4"/>
          </radialGradient>
          <radialGradient id="p-sp-warm"  cx="36%" cy="30%" r="68%">
            <stop offset="0%"   stopColor="#F0B99E" stopOpacity="0.9"/>
            <stop offset="55%"  stopColor="#D4785A" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#6B2A15" stopOpacity="0.4"/>
          </radialGradient>
          <radialGradient id="p-sp-slate" cx="36%" cy="30%" r="68%">
            <stop offset="0%"   stopColor="#D4D8DC" stopOpacity="0.85"/>
            <stop offset="55%"  stopColor="#A7ADB3" stopOpacity="0.75"/>
            <stop offset="100%" stopColor="#3A4550" stopOpacity="0.4"/>
          </radialGradient>
          <filter id="prob-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="prob-edge-blur" x="-20%" y="-300%" width="140%" height="700%">
            <feGaussianBlur stdDeviation="1" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Edge glow */}
        {edges.map(([a, b], i) => {
          const from = nodes[a]; const to = nodes[b];
          const { cx, cy } = ctrl(from.x, from.y, to.x, to.y);
          return (
            <path key={`eg${i}`}
              d={`M${from.x},${from.y} Q${cx},${cy} ${to.x},${to.y}`}
              fill="none" stroke={from.color} strokeWidth="2.5" strokeOpacity="0.1"
              filter="url(#prob-edge-blur)"/>
          );
        })}
        {/* Edge core */}
        {edges.map(([a, b], i) => {
          const from = nodes[a]; const to = nodes[b];
          const { cx, cy } = ctrl(from.x, from.y, to.x, to.y);
          return (
            <path key={`ec${i}`}
              d={`M${from.x},${from.y} Q${cx},${cy} ${to.x},${to.y}`}
              fill="none" stroke={from.color} strokeWidth="1" strokeOpacity="0.4"/>
          );
        })}

        {/* Planet nodes */}
        {nodes.map((n, i) => {
          const grad = n.color === "#E9AE3F" ? "url(#p-sp-gold)"
            : n.color === "#52C4A4" ? "url(#p-sp-teal)"
            : n.color === "#D4785A" ? "url(#p-sp-warm)"
            : "url(#p-sp-slate)";
          return (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={n.r * 1.8} fill={n.color} opacity="0.05"/>
              <circle cx={n.x} cy={n.y} r={n.r + 1.5} fill="none" stroke={n.color}
                strokeWidth="0.6" opacity="0.2"/>
              <circle cx={n.x} cy={n.y} r={n.r} fill={grad} filter="url(#prob-glow)"/>
              <text x={n.x} y={n.y + n.r + 9} textAnchor="middle"
                fill="#FFFFFF" fontSize="8" opacity="0.85">{n.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0B1624]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Problem */}
          <AnimatedSection direction="left">
            <p className="label text-[#E9AE3F] mb-3">The Challenge</p>
            <h2 className="heading-m text-white mb-5">
              Your data has structure.{" "}
              <span className="text-[#A7ADB3]">You just can&apos;t see it yet.</span>
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                "Transcripts and scripts are trapped in unstructured text",
                "No way to query relationships between characters or entities",
                "Static text can't capture how things change over time",
                "Manual knowledge management doesn't scale past a few episodes",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[#A7ADB3] text-[15px]">
                  <span className="mt-1 text-[#D4785A] flex-shrink-0">✕</span>
                  {point}
                </li>
              ))}
            </ul>
            <ChaoticDocuments />
          </AnimatedSection>

          {/* Divider arrow */}
          <AnimatedSection direction="none" delay={0.2} className="hidden lg:flex flex-col items-center justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl text-[#E9AE3F]"
              style={{
                background: "rgba(233,174,63,0.1)",
                boxShadow: "0 0 24px rgba(233,174,63,0.2)",
                border: "1px solid rgba(233,174,63,0.3)",
              }}
            >
              →
            </div>
          </AnimatedSection>

          {/* Solution */}
          <AnimatedSection direction="right" delay={0.15}>
            <p className="label text-[#52C4A4] mb-3">The Solution</p>
            <h2 className="heading-m text-white mb-5">
              A living graph that{" "}
              <GradientText variant="brand">grows with your data.</GradientText>
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                "Schema-driven extraction aligned to your exact domain model",
                "Query characters, events and relationships by name or property",
                "Versioned graph tracks how knowledge evolves over time",
                "Review dashboard scales human oversight without manual labour",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[#A7ADB3] text-[15px]">
                  <span className="mt-1 text-[#52C4A4] flex-shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <OrganizedGraph />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
