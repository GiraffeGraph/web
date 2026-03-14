"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

const faqs = [
  {
    q: "What types of data can I upload?",
    a: "GiraffeGraph accepts plain text, Markdown, PDFs, Word documents, screenplay formats (FDX, Fountain), and direct paste. Any document containing entities and relationships can be processed. We normalize all sources into processable segments before extraction.",
  },
  {
    q: "Do I need to know Neo4j or Cypher to use GiraffeGraph?",
    a: "Not at all. The Graph Explorer and visual dashboard let you navigate and query your graph without writing a single line of Cypher. When you're ready to go deeper, we provide a built-in Cypher console and export-to-Neo4j for advanced use cases.",
  },
  {
    q: "How is GiraffeGraph different from a simple NER/entity extraction tool?",
    a: "Traditional NER tools extract generic entities (person, place, org) with no concept of your domain. GiraffeGraph is schema-driven — every extraction is guided by your custom node types, relations, and properties. It also tracks state changes over time and resolves duplicates with an entity resolution engine.",
  },
  {
    q: "Can I use my own LLM or AI model?",
    a: "Custom LLM providers are available on the Enterprise plan. You can connect your own OpenAI, Anthropic, Azure, or on-premise model endpoints. All extraction prompts are transparent and configurable.",
  },
  {
    q: "What happens to my schema if my data grows in new directions?",
    a: "Schema Studio supports iterative expansion. You can add new node types and relation types at any point. The Schema Drift Detection feature (Pro+) alerts you when your data suggests types not in your current schema, so your schema evolves naturally.",
  },
  {
    q: "Is my data private and secure?",
    a: "All data is encrypted at rest and in transit. We never use your data to train shared models. Enterprise customers can choose on-premise deployment for full data isolation. We are GDPR compliant and SOC 2 Type II certified.",
  },
  {
    q: "Can I export my knowledge graph?",
    a: "Yes. Pro and Enterprise plans support full export to Neo4j (Cypher dump or direct write), JSON-LD, and CSV. Your schema and all graph data are fully portable — no lock-in.",
  },
  {
    q: "What domains work best with GiraffeGraph?",
    a: "Any domain with structured relationships hidden in unstructured text. Current strong use cases: story/narrative (TV, film, fiction), legal (case law, contracts), research (academic papers, knowledge bases), and enterprise (process knowledge, incident management). The schema-driven approach means you can model any domain.",
  },
];

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
      open ? "border-[rgba(233,174,63,0.3)] bg-[#1D2E47]" : "border-[#1A2F44] bg-transparent"
    }`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-${index}`}
      >
        <span className="text-[15px] font-medium text-white group-hover:text-[#F0C468] transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={16}
            className={open ? "text-[#E9AE3F]" : "text-[#5A6A7E]"}
            aria-hidden="true"
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-[14px] text-[#A7ADB3] leading-[1.75]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0D1D30] border-t border-[#1A2F44]">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <h2 className="heading-l text-white mb-4">
            Frequently Asked{" "}
            <GradientText variant="brand">Questions</GradientText>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
