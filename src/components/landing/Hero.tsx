"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Logo } from "@/components/ui/Logo";
import { GITHUB_ORG_URL } from "@/lib/links";

const GraphBackground = dynamic(
  () => import("@/components/graph/GraphBackground"),
  { ssr: false, loading: () => null }
);

const KnowledgeGraphMockup = dynamic(
  () => import("@/components/graph/KnowledgeGraphMockup"),
  { ssr: false, loading: () => <div className="w-full h-full" style={{ background: "#0B1624" }} /> }
);

function SchemaPanel() {
  const nodeTypes=[
    {label:"Narrator",color:"#E9AE3F"},{label:"Hadith",color:"#A7ADB3"},
    {label:"Collection",color:"#52C4A4"},{label:"Source Span",color:"#7BA7CC"},
  ];
  const relations=[
    {label:"NARRATED_FROM",from:"Narrator",to:"Narrator"},
    {label:"TRANSMITS",from:"Narrator",to:"Hadith"},
    {label:"RECORDED_IN",from:"Hadith",to:"Collection"},
  ];
  return (
    <div className="h-full flex flex-col bg-[#1D2E47] border-r border-[#1A2F44] p-3 overflow-hidden">
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
        <span className="text-[11px] font-semibold text-white">Schema Studio</span>
        <span className="text-[9px] bg-[rgba(212,120,90,0.2)] border border-[rgba(212,120,90,0.3)] text-[#D4785A] px-1.5 py-0.5 rounded-full">v1 locked</span>
      </div>
      <div className="mb-3 flex-shrink-0">
        <p className="text-[9px] text-[#5A6A7E] uppercase tracking-widest mb-1.5">Node Types</p>
        {nodeTypes.map(nt=>(
          <div key={nt.label} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#243650] transition-colors group">
            <span className="w-2 h-2 rounded-full flex-shrink-0"
              style={{backgroundColor:nt.color,boxShadow:`0 0 4px ${nt.color}55`}}/>
            <span className="text-[10px] text-[#A7ADB3] group-hover:text-white transition-colors">{nt.label}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 min-h-0">
        <p className="text-[9px] text-[#5A6A7E] uppercase tracking-widest mb-1.5">Relations</p>
        <div className="flex flex-col gap-1">
          {relations.map(rel=>(
            <div key={rel.label} className="px-2 py-1.5 rounded bg-[#1A2F44] hover:bg-[#243650] transition-colors">
              <p className="text-[9px] font-mono text-[#F0C468]">→ {rel.label}</p>
              <p className="text-[8px] text-[#5A6A7E] mt-0.5">{rel.from} → {rel.to}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductMockup() {
  return (
    <motion.div
      initial={{opacity:0,y:48,scale:0.97}} animate={{opacity:1,y:0,scale:1}}
      transition={{duration:0.8,delay:0.5,ease:[0.21,0.47,0.32,0.98]}}
      className="relative w-full max-w-4xl mx-auto mt-16"
    >
      <div className="rounded-[16px] overflow-hidden border border-[#253D5A]"
        style={{boxShadow:"0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(233,174,63,0.07)"}}>
        <div className="bg-[#1D2E47] border-b border-[#1A2F44] px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#D4785A] opacity-70"/>
            <div className="w-3 h-3 rounded-full bg-[#E9AE3F] opacity-70"/>
            <div className="w-3 h-3 rounded-full bg-[#52C4A4] opacity-70"/>
          </div>
          <div className="flex-1 bg-[#0B1624] rounded-md h-5 flex items-center gap-1.5 px-2 max-w-xs mx-auto">
            <Logo size={12} showText={false}/>
            <span className="text-[10px] text-[#5A6A7E] font-mono">
              concept preview — isnad-chains/graph
            </span>
          </div>
        </div>
        <div className="flex h-[340px] sm:h-[400px]">
          <div className="w-[32%] flex-shrink-0"><SchemaPanel/></div>
          <div className="flex-1"><KnowledgeGraphMockup/></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 rounded-b-[16px] pointer-events-none"
        style={{background:"linear-gradient(to bottom, transparent 0%, rgba(11,22,36,0.9) 100%)"}}/>
    </motion.div>
  );
}

export default function Hero() {
  const s=(i:number)=>({
    initial:{opacity:0,y:24}, animate:{opacity:1,y:0},
    transition:{duration:0.6,delay:i*0.1,ease:[0.21,0.47,0.32,0.98] as const},
  });
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-28 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1624]"/>
      <div className="absolute inset-0" style={{background:"var(--gradient-hero)"}}/>
      <div className="absolute -top-32 -left-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{background:"rgba(233,174,63,0.04)",filter:"blur(80px)"}}/>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{background:"rgba(82,196,164,0.03)",filter:"blur(100px)"}}/>
      <GraphBackground/>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div {...s(0)} className="mb-8">
          <span className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium text-[#F0C468] border border-[rgba(233,174,63,0.3)] overflow-hidden"
            style={{background:"rgba(233,174,63,0.08)"}}>
            <span className="absolute inset-0 shimmer opacity-30" aria-hidden="true"/>
            <span className="relative">✦ Open Source · In Development</span>
          </span>
        </motion.div>
        <motion.h1 {...s(1)} className="heading-xl max-w-[780px] mb-6">
          LLMs Propose.{" "}
          <GradientText variant="brand">Humans Verify.</GradientText>
        </motion.h1>
        <motion.p {...s(2)} className="body-l text-[#A7ADB3] max-w-[560px] mb-10">
          GiraffeGraph is an open-source knowledge graph engine that keeps a human
          in the loop — so LLM extraction stays grounded in the source and the
          schema stays what you designed.{" "}
          <span className="text-white opacity-70">No hallucinated facts.</span>{" "}
          <span className="text-white opacity-70">No schema drift.</span>
        </motion.p>
        <motion.div {...s(3)} className="flex flex-col sm:flex-row gap-3 mb-10">
          <ButtonLink href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="md">
            <Github size={16} aria-hidden="true"/> Follow on GitHub
          </ButtonLink>
          <ButtonLink href="#research" variant="secondary" size="md">About the Research →</ButtonLink>
        </motion.div>
        <motion.div {...s(4)} className="flex items-center gap-3 text-[13px] text-[#5A6A7E]">
          <span>First case study: hadith isnad chains</span>
          <span className="h-4 w-px bg-[#1A2F44]" aria-hidden="true"/>
          <span>Paper in preparation</span>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4">
        <ProductMockup/>
      </div>
    </section>
  );
}
