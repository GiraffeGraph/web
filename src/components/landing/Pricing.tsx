"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    badge: "Free forever",
    badgeColor: "#A7ADB3",
    priceMonthly: "$0",
    priceAnnual: "$0",
    priceSuffix: "/mo",
    desc: "For individuals exploring knowledge graphs.",
    featured: false,
    features: [
      { text: "1 Project", included: true },
      { text: "Up to 10 Source Units", included: true },
      { text: "Core Schema (fixed node types)", included: true },
      { text: "AI Extraction (100 segments/mo)", included: true },
      { text: "Manual Review Dashboard", included: true },
      { text: "Graph Explorer", included: true },
      { text: "Custom Node Types", included: false },
      { text: "Versioning", included: false },
      { text: "API Access", included: false },
    ],
    cta: "Start Free",
    ctaVariant: "ghost" as const,
  },
  {
    name: "Pro",
    badge: "⭐ Most Popular",
    badgeColor: "#E9AE3F",
    priceMonthly: "$49",
    priceAnnual: "$39",
    priceSuffix: "/mo",
    desc: "For teams building production knowledge graphs.",
    featured: true,
    features: [
      { text: "10 Projects", included: true },
      { text: "Unlimited Source Units", included: true },
      { text: "Custom Schema (full Schema Studio)", included: true },
      { text: "AI Extraction (10,000 segments/mo)", included: true },
      { text: "Schema Versioning", included: true },
      { text: "Entity Resolution Engine", included: true },
      { text: "Schema Drift Detection", included: true },
      { text: "API Access", included: true },
      { text: "Export to Neo4j", included: true },
      { text: "Multi-user collaboration", included: false },
      { text: "Custom LLM provider", included: false },
    ],
    cta: "Get Started",
    ctaVariant: "primary" as const,
  },
  {
    name: "Enterprise",
    badge: "Custom",
    badgeColor: "#7BA7CC",
    priceMonthly: "Contact us",
    priceAnnual: "Contact us",
    priceSuffix: "",
    desc: "For organisations with mission-critical knowledge workflows.",
    featured: false,
    features: [
      { text: "Unlimited everything", included: true },
      { text: "Custom LLM provider", included: true },
      { text: "Multi-user collaboration", included: true },
      { text: "SSO / SAML", included: true },
      { text: "SLA & dedicated support", included: true },
      { text: "On-premise deployment", included: true },
      { text: "Custom domain packs", included: true },
      { text: "Advanced audit logs", included: true },
    ],
    cta: "Talk to Sales",
    ctaVariant: "ghost" as const,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-[#0B1624]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="label text-[#F0C468] mb-4">Pricing</p>
          <h2 className="heading-l text-white mb-4">
            Simple,{" "}
            <GradientText variant="brand">transparent pricing</GradientText>
          </h2>
          <p className="body-m text-[#A7ADB3] mb-8">
            Start free. Scale as your knowledge grows.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#1D2E47] border border-[#253D5A] rounded-full px-2 py-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                !annual
                  ? "bg-gradient-to-br from-[#E9AE3F] to-[#C4893A] text-[#1D2E47]"
                  : "text-[#A7ADB3] hover:text-white"
              }`}
              aria-pressed={!annual}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? "bg-gradient-to-br from-[#E9AE3F] to-[#C4893A] text-[#1D2E47]"
                  : "text-[#A7ADB3] hover:text-white"
              }`}
              aria-pressed={annual}
            >
              Annual
              <span className="text-[10px] bg-[rgba(82,196,164,0.2)] text-[#52C4A4] px-1.5 py-0.5 rounded-full">
                −20%
              </span>
            </button>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1} direction="up">
              <div
                className={`relative rounded-[16px] p-7 flex flex-col ${
                  plan.featured
                    ? "pricing-featured bg-[#1D2E47] shadow-[0_0_40px_rgba(233,174,63,0.12)] scale-[1.02]"
                    : "bg-[#1D2E47] border border-[#1A2F44]"
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[12px] font-medium px-2.5 py-1 rounded-full border"
                    style={{
                      color: plan.badgeColor,
                      borderColor: `${plan.badgeColor}44`,
                      background: `${plan.badgeColor}15`,
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>

                {/* Name + price */}
                <h3 className="text-[18px] font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-[13px] text-[#5A6A7E] mb-4">{plan.desc}</p>

                <div className="flex items-end gap-1 mb-6">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${plan.name}-${annual}`}
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="text-[36px] font-black tracking-tight text-white"
                    >
                      {annual ? plan.priceAnnual : plan.priceMonthly}
                    </motion.span>
                  </AnimatePresence>
                  {plan.priceSuffix && (
                    <span className="text-[#5A6A7E] text-[14px] mb-1.5">{plan.priceSuffix}</span>
                  )}
                </div>

                <Button variant={plan.ctaVariant} size="md" className="w-full mb-6">
                  {plan.cta}
                </Button>

                {/* Features */}
                <ul className="space-y-2.5">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      {feature.included ? (
                        <Check
                          size={14}
                          className="text-[#52C4A4] flex-shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <X
                          size={14}
                          className="text-[#324155] flex-shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`text-[13px] ${
                          feature.included ? "text-[#A7ADB3]" : "text-[#324155]"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
