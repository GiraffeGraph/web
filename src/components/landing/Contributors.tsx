"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

const people = [
  { name: "Yahya Efe Kuruçay", github: "efekurucay", role: "Contributor" },
  { name: "Alperen Ulukaya", github: "ulukayalperen7", role: "Contributor" },
  { name: "Deniz Büyükşahin", github: "Dnzbykshn", role: "Contributor" },
  { name: "Taha Yiğit Alkan", github: "tahayigitalkan", role: "Academic Supervisor" },
];

export default function Contributors() {
  return (
    <section id="contributors" className="py-24 px-4 sm:px-6 bg-[#0D1D30] border-t border-[#1A2F44]">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="label text-[#A7ADB3] mb-4">Contributors</p>
          <h2 className="heading-l text-white">
            The People{" "}
            <GradientText variant="brand">Behind It</GradientText>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {people.map((p) => (
              <li key={p.github}>
                <a
                  href={`https://github.com/${p.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center rounded-[16px] border border-[#1A2F44] bg-[#1D2E47] p-6 bento-card h-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://github.com/${p.github}.png?size=160`}
                    alt=""
                    width={80}
                    height={80}
                    loading="lazy"
                    className="w-20 h-20 rounded-full border-2 border-[#253D5A] mb-4 bg-[#0B1624]"
                  />
                  <span className="text-[15px] font-semibold text-white">{p.name}</span>
                  <span className={`text-[13px] mt-1 ${p.role === "Contributor" ? "text-[#A7ADB3]" : "text-[#E9AE3F]"}`}>
                    {p.role}
                  </span>
                  <span className="text-[12px] font-mono text-[#5A6A7E] mt-2">@{p.github}</span>
                </a>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
