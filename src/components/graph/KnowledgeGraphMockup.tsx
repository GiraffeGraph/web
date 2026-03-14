"use client";

import { useEffect } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/style.css";
import forceAtlas2 from "graphology-layout-forceatlas2";
import { createNodeBorderProgram } from "@sigma/node-border";
import EdgeCurveProgram from "@sigma/edge-curve";
import type { Attributes } from "graphology-types";

// Planet node: glow ring → colored core
const PlanetNodeProgram = createNodeBorderProgram({
  borders: [
    { color: { attribute: "glowColor",  defaultValue: "#3A4A60" }, size: { value: 0.35, mode: "relative" } },
    { color: { attribute: "rimColor",   defaultValue: "#2A3A50" }, size: { value: 0.12, mode: "relative" } },
    { color: { attribute: "color",      defaultValue: "#E9AE3F" }, size: { fill: true } },
  ],
});

interface KGNode extends Attributes {
  x: number; y: number; size: number;
  color: string; glowColor: string; rimColor: string;
  label: string; type: string;
  selected?: boolean;
}
interface KGEdge extends Attributes {
  size: number; color: string; label: string; type: string;
}

const KG_NODES = [
  { id: "ali",      label: "Ali",          color: "#C4893A", glowColor: "#E9AE3F55", rimColor: "#E9AE3F", size: 16, selected: true  },
  { id: "veli",     label: "Veli",         color: "#C4893A", glowColor: "#E9AE3F44", rimColor: "#E9AE3F", size: 13, selected: false },
  { id: "secret",   label: "The Secret",   color: "#6A7A8A", glowColor: "#A7ADB344", rimColor: "#A7ADB3", size: 11, selected: false },
  { id: "hq",       label: "Istanbul HQ",  color: "#2E7A68", glowColor: "#52C4A444", rimColor: "#52C4A4", size: 12, selected: false },
  { id: "alliance", label: "The Alliance", color: "#8A4030", glowColor: "#D4785A44", rimColor: "#D4785A", size: 12, selected: false },
  { id: "nadia",    label: "Nadia",        color: "#C4893A", glowColor: "#E9AE3F33", rimColor: "#E9AE3F", size: 10, selected: false },
  { id: "memo",     label: "Memo",         color: "#2A5A8A", glowColor: "#7BA7CC33", rimColor: "#7BA7CC", size: 10, selected: false },
  { id: "doc",      label: "Document",     color: "#2A5A8A", glowColor: "#7BA7CC33", rimColor: "#7BA7CC", size: 9,  selected: false },
];

const KG_EDGES = [
  { s: "ali",      t: "veli",    label: "BETRAYS"     },
  { s: "ali",      t: "secret",  label: "KNOWS_ABOUT" },
  { s: "veli",     t: "secret",  label: "OWNS"        },
  { s: "veli",     t: "hq",      label: "MANAGES"     },
  { s: "ali",      t: "nadia",   label: "OWES_TO"     },
  { s: "alliance", t: "hq",      label: "OPERATES_AT" },
  { s: "memo",     t: "veli",    label: "REPORTS_TO"  },
  { s: "doc",      t: "hq",      label: "LINKED_TO"   },
];

function LoadKGGraph() {
  const loadGraph = useLoadGraph<KGNode, KGEdge>();

  useEffect(() => {
    const graph = new Graph<KGNode, KGEdge>({ type: "directed" });

    KG_NODES.forEach((n, i) => {
      const angle = (2 * Math.PI * i) / KG_NODES.length;
      graph.addNode(n.id, {
        label: n.label, size: n.size,
        color: n.color, glowColor: n.glowColor, rimColor: n.rimColor,
        type: "planet", selected: n.selected ?? false,
        x: Math.cos(angle) * 6, y: Math.sin(angle) * 6,
      });
    });

    KG_EDGES.forEach(({ s, t, label }, i) => {
      graph.addDirectedEdge(s, t, {
        label, type: "curved",
        size: 1.5, color: "#2A4060",
      } as KGEdge);
      void i;
    });

    forceAtlas2.assign(graph, {
      iterations: 120,
      settings: { gravity: 2, scalingRatio: 8, strongGravityMode: true },
    });

    loadGraph(graph);
  }, [loadGraph]);

  return null;
}

export default function KnowledgeGraphMockup() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: "#0B1624" }}>
      {/* Atmospheric radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 48% 45%, rgba(233,174,63,0.07) 0%, rgba(82,196,164,0.03) 45%, transparent 75%)",
        }}
      />

      <SigmaContainer<KGNode, KGEdge, Attributes>
        graph={Graph}
        settings={{
          renderLabels: true,
          renderEdgeLabels: true,
          labelColor:     { color: "#CBD5E1" },
          labelSize:       11,
          labelDensity:    1,
          edgeLabelColor:  { color: "#64748B" },
          edgeLabelSize:   9,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          nodeProgramClasses:  { planet: PlanetNodeProgram as any },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          edgeProgramClasses:  { curved: EdgeCurveProgram  as any },
          defaultNodeType:     "planet",
          defaultEdgeType:     "curved",
          defaultNodeColor:    "#C4893A",
          defaultEdgeColor:    "#2A4060",
          nodeReducer: (_node, data) => {
            const d = { ...data } as KGNode & { highlighted?: boolean; zIndex?: number };
            if (d.selected) { d.highlighted = true; d.zIndex = 1; }
            return d;
          },
        }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
        className="!bg-transparent"
      >
        <LoadKGGraph />
      </SigmaContainer>
    </div>
  );
}
