"use client";

import { Play } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

const stats = [
  { value: "12 Episodes", label: "Processed", color: "#E9AE3F", bg: "rgba(233,174,63,0.08)" },
  { value: "247 Entities", label: "Extracted", color: "#A7ADB3", bg: "rgba(167,173,179,0.08)" },
  { value: "1,089 Relations", label: "Mapped", color: "#D4785A", bg: "rgba(212,120,90,0.08)" },
];

export default function Demo() {
  return (
    <section className="py-24 px-4 sm:px-6 mesh-grid bg-[#0D1D30] border-y border-[#1A2F44]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="heading-l text-white mb-4">
            See the Graph{" "}
            <GradientText variant="brand">Come Alive</GradientText>
          </h2>
          <p className="body-m text-[#A7ADB3] max-w-lg mx-auto">
            Watch how a 3-episode transcript becomes a fully queryable story
            universe — in minutes.
          </p>
        </AnimatedSection>

        {/* Video placeholder */}
        <AnimatedSection delay={0.15}>
          <div
            className="relative rounded-[16px] overflow-hidden border border-[#253D5A] cursor-pointer group"
            style={{ aspectRatio: "16/9" }}
            role="button"
            tabIndex={0}
            aria-label="Play GiraffeGraph Story Demo video"
          >
            {/* BG */}
            <div className="absolute inset-0 bg-[#1D2E47]" />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(233,174,63,0.06) 0%, transparent 70%)",
              }}
            />

            {/* Graph silhouette */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 800 450"
              aria-hidden="true"
            >
              {[
                [200, 180, 300, 220], [300, 220, 450, 200], [450, 200, 550, 250],
                [300, 220, 350, 320], [350, 320, 500, 300], [500, 300, 550, 250],
                [200, 180, 250, 300], [250, 300, 350, 320], [600, 180, 550, 250],
                [600, 180, 650, 280], [650, 280, 500, 300],
              ].map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#E9AE3F"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                />
              ))}
              {[
                [200, 180, 18], [300, 220, 22], [450, 200, 16], [550, 250, 20],
                [350, 320, 15], [250, 300, 14], [500, 300, 18], [600, 180, 16],
                [650, 280, 14],
              ].map(([cx, cy, r], i) => (
                <circle key={i} cx={cx} cy={cy} r={r} fill="#E9AE3F" opacity="0.25" />
              ))}
            </svg>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #E9AE3F 0%, #C4893A 100%)",
                  boxShadow: "0 0 40px rgba(233,174,63,0.4)",
                }}
              >
                <Play
                  size={28}
                  className="text-[#1D2E47] ml-1"
                  fill="#1D2E47"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="text-[12px] font-medium text-[#A7ADB3] bg-[rgba(11,22,36,0.8)] px-2.5 py-1 rounded-lg backdrop-blur-sm border border-[#1A2F44]">
                GiraffeGraph — Story Demo
              </span>
            </div>

            {/* Timestamp */}
            <div className="absolute bottom-4 right-4">
              <span className="text-[12px] font-mono text-[#A7ADB3] bg-[rgba(11,22,36,0.8)] px-2 py-1 rounded backdrop-blur-sm">
                4:32
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.25}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#1A2F44] p-4 text-center"
                style={{ backgroundColor: stat.bg }}
              >
                <p
                  className="text-[20px] font-bold tracking-tight"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-[13px] text-[#5A6A7E] mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
