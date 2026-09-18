"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Logo } from "@/components/ui/Logo";

const GraphBackground = dynamic(
  () => import("@/components/graph/GraphBackground"),
  { ssr: false, loading: () => null }
);

const KnowledgeGraphMockup = dynamic(
  () => import("@/components/graph/KnowledgeGraphMockup"),
  { ssr: false, loading: () => <div className="w-full h-full" style={{ background: "#0B1624" }} /> }
);

function ctrl(ax: number, ay: number, bx: number, by: number, c = 0.18) {
  const mx = (ax + bx) / 2, my = (ay + by) / 2;
  const dx = bx - ax, dy = by - ay;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  return { cx: mx + (-dy / len) * len * c, cy: my + (dx / len) * len * c };
}

function BackgroundGraph() {
  const nodes = [
    { x: 8,  y:14, r:0.7, hot:false }, { x:22, y:8,  r:0.5, hot:false },
    { x:38, y:22, r:1.0, hot:true  }, { x:55, y:12, r:0.6, hot:false },
    { x:70, y:30, r:0.8, hot:true  }, { x:82, y:14, r:0.5, hot:false },
    { x:93, y:38, r:0.7, hot:false }, { x:15, y:45, r:0.4, hot:false },
    { x:30, y:58, r:0.9, hot:true  }, { x:48, y:50, r:1.1, hot:true  },
    { x:65, y:58, r:0.6, hot:false }, { x:78, y:50, r:0.8, hot:false },
    { x:92, y:62, r:0.4, hot:false }, { x:5,  y:68, r:0.5, hot:false },
    { x:20, y:75, r:0.8, hot:true  }, { x:42, y:80, r:0.5, hot:false },
    { x:60, y:78, r:0.4, hot:false }, { x:75, y:85, r:0.9, hot:true  },
    { x:88, y:80, r:0.4, hot:false }, { x:12, y:90, r:0.5, hot:false },
    { x:35, y:93, r:0.4, hot:false }, { x:55, y:92, r:0.5, hot:false },
    { x:72, y:96, r:0.7, hot:true  }, { x:97, y:20, r:0.4, hot:false },
    { x:3,  y:32, r:0.5, hot:false }, { x:47, y:30, r:0.4, hot:false },
  ];
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,23],
    [0,7],[7,8],[8,9],[9,10],[10,11],[11,12],
    [7,13],[13,14],[14,15],[15,16],[16,17],[17,18],
    [13,19],[19,20],[20,21],[21,22],
    [2,9],[3,10],[4,11],[8,14],[9,15],[10,16],[24,7],[25,2],[25,9],
  ];
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <filter id="nn-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="0.8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {edges.map(([a,b],i) => {
        const na=nodes[a]; const nb=nodes[b];
        if(!na||!nb) return null;
        const {cx,cy}=ctrl(na.x,na.y,nb.x,nb.y);
        const active=i%6===0;
        return <path key={i} d={`M${na.x},${na.y} Q${cx},${cy} ${nb.x},${nb.y}`}
          fill="none" stroke={active?"#E9AE3F":"#2A4460"}
          strokeWidth={active?0.22:0.15} opacity={active?0.38:0.45}
          strokeDasharray={active?"1.2 2.5":undefined}/>;
      })}
      {nodes.map((n,i) => (
        <g key={i}>
          {n.hot && <circle cx={n.x} cy={n.y} r={n.r*4} fill="#E9AE3F" opacity="0.05"/>}
          <circle cx={n.x} cy={n.y} r={n.r}
            fill={n.hot?"#E9AE3F":"#4A6A8A"} opacity={n.hot?0.65:0.3}
            filter={n.hot?"url(#nn-glow)":undefined}/>
        </g>
      ))}
    </svg>
  );
}

function GraphExplorer() {
  const gn = [
    { id:"ali",      x:55,  y:55,  r:18, color:"#E9AE3F", label:"Ali",         sel:true  },
    { id:"veli",     x:155, y:60,  r:15, color:"#E9AE3F", label:"Veli",        sel:false },
    { id:"secret",   x:100, y:108, r:13, color:"#A7ADB3", label:"The Secret",  sel:false },
    { id:"hq",       x:210, y:115, r:12, color:"#52C4A4", label:"Istanbul HQ", sel:false },
    { id:"alliance", x:160, y:165, r:13, color:"#D4785A", label:"Alliance",    sel:false },
    { id:"nadia",    x:60,  y:135, r:11, color:"#E9AE3F", label:"Nadia",       sel:false },
    { id:"memo",     x:250, y:58,  r:10, color:"#7BA7CC", label:"Memo",        sel:false },
    { id:"doc",      x:285, y:135, r:9,  color:"#7BA7CC", label:"Document",    sel:false },
  ];
  const edges = [
    { f:"ali", t:"veli",    lbl:"BETRAYS",     c:"#D4785A" },
    { f:"ali", t:"secret",  lbl:"KNOWS_ABOUT", c:"#A7ADB3" },
    { f:"veli",t:"secret",  lbl:"OWNS",        c:"#A7ADB3" },
    { f:"veli",t:"hq",      lbl:"MANAGES",     c:"#52C4A4" },
    { f:"ali", t:"nadia",   lbl:"OWES_TO",     c:"#E9AE3F" },
    { f:"memo",t:"veli",    lbl:"REPORTS_TO",  c:"#7BA7CC" },
    { f:"doc", t:"hq",      lbl:"LINKED_TO",   c:"#7BA7CC" },
  ];
  const get=(id:string)=>gn.find(n=>n.id===id)!;

  const sphere=(id:string,hi:string,mid:string,dark:string)=>(
    <radialGradient key={id} id={id} cx="36%" cy="30%" r="68%">
      <stop offset="0%"   stopColor={hi}   stopOpacity="0.95"/>
      <stop offset="55%"  stopColor={mid}  stopOpacity="0.88"/>
      <stop offset="100%" stopColor={dark} stopOpacity="0.45"/>
    </radialGradient>
  );

  return (
    <div className="relative w-full h-full bg-[#0B1624] rounded-br-[14px] overflow-hidden">
      <svg viewBox="0 0 320 200" className="w-full h-full" aria-label="Knowledge graph">
        <defs>
          {sphere("sg-gold",  "#FDE68A","#E9AE3F","#7A4E08")}
          {sphere("sg-teal",  "#A7EDD9","#52C4A4","#1A5C45")}
          {sphere("sg-warm",  "#F0B99E","#D4785A","#5C2010")}
          {sphere("sg-slate", "#D4D8DC","#A7ADB3","#3A4550")}
          {sphere("sg-blue",  "#BDD5EA","#7BA7CC","#1E4060")}
          <filter id="ge-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="ge-edge" x="-30%" y="-200%" width="160%" height="500%">
            <feGaussianBlur stdDeviation="1" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <marker id="ge-arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L0,5 L5,2.5 z" fill="#3A5570" opacity="0.6"/>
          </marker>
        </defs>

        {edges.map((e,i)=>{
          const f=get(e.f); const t=get(e.t);
          const {cx,cy}=ctrl(f.x,f.y,t.x,t.y,0.24);
          return (
            <g key={i}>
              <path d={`M${f.x},${f.y} Q${cx},${cy} ${t.x},${t.y}`}
                fill="none" stroke={e.c} strokeWidth="2" strokeOpacity="0.08" filter="url(#ge-edge)"/>
              <path d={`M${f.x},${f.y} Q${cx},${cy} ${t.x},${t.y}`}
                fill="none" stroke={e.c} strokeWidth="0.9" strokeOpacity="0.45" markerEnd="url(#ge-arr)"/>
              <text x={(f.x+t.x)/2-2} y={(f.y+t.y)/2-12}
                textAnchor="middle" fill={e.c} fontSize="4.5" opacity="0.6" fontFamily="monospace">{e.lbl}</text>
            </g>
          );
        })}

        {gn.map(n=>{
          const grad=n.color==="#E9AE3F"?"url(#sg-gold)":n.color==="#52C4A4"?"url(#sg-teal)":
            n.color==="#D4785A"?"url(#sg-warm)":n.color==="#7BA7CC"?"url(#sg-blue)":"url(#sg-slate)";
          return (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r={n.r*1.9} fill={n.color} opacity="0.06"/>
              {n.sel && (
                <ellipse cx={n.x} cy={n.y} rx={n.r*1.7} ry={n.r*0.42}
                  fill="none" stroke="#E9AE3F" strokeWidth="0.7" opacity="0.3"
                  transform={`rotate(-22,${n.x},${n.y})`}/>
              )}
              <circle cx={n.x} cy={n.y} r={n.r+1} fill="none" stroke={n.color}
                strokeWidth="0.6" opacity={n.sel?0.45:0.18}/>
              <circle cx={n.x} cy={n.y} r={n.r} fill={grad}
                filter={n.sel?"url(#ge-glow)":undefined}/>
              <text x={n.x} y={n.y+n.r+9} textAnchor="middle"
                fill="#FFF" fontSize={n.sel?6.5:5.5} fontWeight={n.sel?"600":"400"} opacity="0.85">
                {n.label}
              </text>
            </g>
          );
        })}

        <g transform="translate(4,6)">
          <rect width="88" height="44" rx="4" fill="#0D1E30" opacity="0.96"/>
          <rect width="88" height="44" rx="4" fill="none" stroke="#E9AE3F" strokeWidth="0.4" opacity="0.4"/>
          <rect x="0.2" y="0.2" width="87.6" height="2" rx="1.5" fill="#E9AE3F" opacity="0.35"/>
          <text x="7" y="13" fill="#F0C468" fontSize="5.5" fontWeight="700">Ali Yılmaz</text>
          <text x="7" y="23" fill="#A7ADB3" fontSize="4.5">episode: E01  trust: 0.2</text>
          <text x="7" y="32" fill="#A7ADB3" fontSize="4.5">status: alive</text>
          <text x="7" y="41" fill="#52C4A4" fontSize="4">confidence: 0.94</text>
        </g>
      </svg>
    </div>
  );
}

function SchemaPanel() {
  const nodeTypes=[
    {label:"Character",color:"#E9AE3F"},{label:"Event",color:"#A7ADB3"},
    {label:"Secret",color:"#D4785A"},{label:"Location",color:"#52C4A4"},
    {label:"Alliance",color:"#7BA7CC"},
  ];
  const relations=[
    {label:"BETRAYS",from:"Character",to:"Character"},
    {label:"OWES_TO",from:"Character",to:"Character"},
    {label:"KNOWS_ABOUT",from:"Character",to:"Secret"},
  ];
  return (
    <div className="h-full flex flex-col bg-[#1D2E47] border-r border-[#1A2F44] p-3 overflow-hidden">
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
        <span className="text-[11px] font-semibold text-white">Schema Studio</span>
        <span className="text-[9px] bg-[rgba(212,120,90,0.2)] border border-[rgba(212,120,90,0.3)] text-[#D4785A] px-1.5 py-0.5 rounded-full">v2 active</span>
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
              app.giraffegraph.com/projects/breaking-bad/graph
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
            <span className="relative">✦ AI-Powered Knowledge Graph Platform</span>
          </span>
        </motion.div>
        <motion.h1 {...s(1)} className="heading-xl max-w-[780px] mb-6">
          From Raw Text to a{" "}
          <GradientText variant="brand">Living Knowledge Graph</GradientText>
        </motion.h1>
        <motion.p {...s(2)} className="body-l text-[#A7ADB3] max-w-[560px] mb-10">
          Define your schema. Upload your data. Let AI extract entities, relations,
          and events — then watch your knowledge graph grow with every new input.{" "}
          <span className="text-white opacity-70">Human-controlled.</span>{" "}
          <span className="text-white opacity-70">Domain-adaptive.</span>{" "}
          <span className="text-white opacity-70">Dashboard-managed.</span>
        </motion.p>
        <motion.div {...s(3)} className="flex flex-col sm:flex-row gap-3 mb-10">
          <Button variant="primary" size="md">Start Building Free →</Button>
          <Button variant="secondary" size="md"><PlayCircle size={16}/> See Live Demo</Button>
        </motion.div>
        <motion.div {...s(4)} className="flex items-center gap-3 text-[13px] text-[#5A6A7E]">
          <div className="flex -space-x-1.5">
            {["from-[#E9AE3F] to-[#C4893A]","from-[#52C4A4] to-[#3A9A80]","from-[#7BA7CC] to-[#5A87AC]","from-[#D4785A] to-[#B0583A]","from-[#A7ADB3] to-[#7A8390]"].map((g,i)=>(
              <div key={i} className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-[#0B1624]`} aria-hidden="true"/>
            ))}
          </div>
          <span className="h-4 w-px bg-[#1A2F44]" aria-hidden="true"/>
          <span>Trusted by narrative teams, researchers & knowledge engineers</span>
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4">
        <ProductMockup/>
      </div>
    </section>
  );
}
