"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

const faqs = [
  {
    q: "Is GiraffeGraph open source?",
    a: "It will be. The code is in a private repository while the project is in development and will be published on GitHub under an open-source license at the end of the project. There are no paid plans.",
  },
  {
    q: "Can I use it today?",
    a: "Not yet. The engine and the paper are both in development. Follow the GiraffeGraph organization on GitHub to be notified when the first release is out.",
  },
  {
    q: "What does \"hallucination\" mean here?",
    a: "An extracted fact that the source text does not support — for example, a narrator or a link between two narrators that appears nowhere in the chain. GiraffeGraph is designed so that every proposed triple is tied to its source span and enters the graph only through a human decision or an explicitly recorded policy.",
  },
  {
    q: "What is schema drift?",
    a: "When an LLM invents its own entity and relation types across runs — HEARD_FROM in one batch, TOLD or narratedBy in the next — the graph slowly stops matching the schema you designed. GiraffeGraph locks the schema: a type outside it is never written to the graph. It is recorded as a proposal for a human to review, and the schema changes only when you edit it.",
  },
  {
    q: "Why hadith isnad chains?",
    a: "Isnads are graphs by nature, classical scholarship provides ground truth to check against, narrator names vary heavily, and a single wrong link changes how a hadith is graded. That makes them a demanding, well-defined test for grounded extraction.",
  },
  {
    q: "Does it replace hadith scholars?",
    a: "No. The model only proposes; the expert decides. The goal is to take the mechanical work off the expert's plate while keeping every judgement in human hands.",
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
    <section id="faq" className="py-24 px-4 sm:px-6 bg-[#0B1624] border-t border-[#1A2F44]">
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
