"use client";

import { useEffect } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/style.css";
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

// Isnad of Sahih al-Bukhari #1 ("Actions are judged by intentions").
// NARRATED_FROM points from each narrator to the one they heard it from.
// Fixed zigzag layout: a chain reads better left-to-right than force-directed.
// Order follows transmission, from the Prophet to the collector.
const KG_NODES = [
  { id: "bukhari",  label: "al-Bukhārī",        x: 7, y: 0,   color: "#C4893A", glowColor: "#E9AE3F44", rimColor: "#E9AE3F", size: 12, selected: false },
  { id: "humaydi",  label: "al-Ḥumaydī",        x: 6, y: 1.6, color: "#C4893A", glowColor: "#E9AE3F33", rimColor: "#E9AE3F", size: 10, selected: false },
  { id: "sufyan",   label: "Sufyān",            x: 5, y: 0,   color: "#C4893A", glowColor: "#E9AE3F33", rimColor: "#E9AE3F", size: 10, selected: false },
  { id: "yahya",    label: "Yaḥyā b. Saʿīd",    x: 4, y: 1.6, color: "#C4893A", glowColor: "#E9AE3F55", rimColor: "#E9AE3F", size: 15, selected: false },
  { id: "taymi",    label: "al-Taymī",          x: 3, y: 0,   color: "#C4893A", glowColor: "#E9AE3F33", rimColor: "#E9AE3F", size: 10, selected: false },
  { id: "alqama",   label: "ʿAlqama",           x: 2, y: 1.6, color: "#C4893A", glowColor: "#E9AE3F33", rimColor: "#E9AE3F", size: 10, selected: false },
  { id: "umar",     label: "ʿUmar",             x: 1, y: 0,   color: "#C4893A", glowColor: "#E9AE3F44", rimColor: "#E9AE3F", size: 12, selected: false },
  { id: "prophet",  label: "The Prophet ﷺ",     x: 0, y: 1.6, color: "#2E7A68", glowColor: "#52C4A455", rimColor: "#52C4A4", size: 14, selected: false },
  { id: "hadith",   label: "“Actions are by intentions”", x: 1.5, y: 3.4, color: "#6A7A8A", glowColor: "#A7ADB344", rimColor: "#A7ADB3", size: 11, selected: false },
  { id: "sahih",    label: "Ṣaḥīḥ al-Bukhārī #1", x: 5.5, y: 3.4, color: "#2A5A8A", glowColor: "#7BA7CC33", rimColor: "#7BA7CC", size: 11, selected: false },
];

const KG_EDGES = [
  { s: "umar",    t: "prophet", label: "NARRATED_FROM" },
  { s: "alqama",  t: "umar",    label: "NARRATED_FROM" },
  { s: "taymi",   t: "alqama",  label: "NARRATED_FROM" },
  { s: "yahya",   t: "taymi",   label: "NARRATED_FROM" },
  { s: "sufyan",  t: "yahya",   label: "NARRATED_FROM" },
  { s: "humaydi", t: "sufyan",  label: "NARRATED_FROM" },
  { s: "bukhari", t: "humaydi", label: "NARRATED_FROM" },
  { s: "prophet", t: "hadith",  label: "TRANSMITS"     },
  { s: "hadith",  t: "sahih",   label: "RECORDED_IN"   },
];

function LoadKGGraph() {
  const loadGraph = useLoadGraph<KGNode, KGEdge>();

  useEffect(() => {
    const graph = new Graph<KGNode, KGEdge>({ type: "directed" });

    KG_NODES.forEach((n) => {
      graph.addNode(n.id, {
        label: n.label, size: n.size,
        color: n.color, glowColor: n.glowColor, rimColor: n.rimColor,
        type: "planet", selected: n.selected ?? false,
        x: n.x, y: n.y,
      });
    });

    KG_EDGES.forEach(({ s, t, label }, i) => {
      graph.addDirectedEdge(s, t, {
        label, type: "curved",
        size: 1.5, color: "#2A4060",
      } as KGEdge);
      void i;
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
          stagePadding:    70,
          renderEdgeLabels: true,
          labelColor:     { color: "#CBD5E1" },
          labelSize:       11,
          labelDensity:    10,
          labelGridCellSize: 20,
          labelRenderedSizeThreshold: 0,
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
