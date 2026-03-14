"use client";

import { useEffect } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/style.css";
import forceAtlas2 from "graphology-layout-forceatlas2";
import { createNodeBorderProgram } from "@sigma/node-border";
import type { NodeProgramType } from "sigma/rendering";
import type { Attributes } from "graphology-types";

// Planet-style node: bright outer ring → filled core
const PlanetNodeProgram = createNodeBorderProgram({
  borders: [
    { color: { attribute: "outerColor", defaultValue: "#2A4A6B" }, size: { value: 0.25, mode: "relative" } },
    { color: { attribute: "color",      defaultValue: "#1A2E42" }, size: { fill: true } },
  ],
}) as unknown as NodeProgramType;

interface NodeAttrs extends Attributes {
  x: number; y: number;
  size: number;
  color: string;
  outerColor: string;
  type: string;
}

interface EdgeAttrs extends Attributes {
  size: number;
  color: string;
}

type BgNode = { id: string; size: number; color: string; outerColor: string };

const BG_NODES: BgNode[] = [
  // Hub nodes (larger, accent)
  { id: "h1", size: 7,  color: "#C4893A", outerColor: "#E9AE3F" },
  { id: "h2", size: 6,  color: "#3A8870", outerColor: "#52C4A4" },
  { id: "h3", size: 6,  color: "#1E4F7A", outerColor: "#7BA7CC" },
  { id: "h4", size: 6,  color: "#C4893A", outerColor: "#E9AE3F" },
  { id: "h5", size: 5,  color: "#3A8870", outerColor: "#52C4A4" },
  // Regular nodes
  ...Array.from({ length: 22 }, (_, i) => ({
    id: `n${i}`,
    size: 2 + (i % 3),
    color: ["#12243A", "#162C40", "#1A3450", "#0F1E30"][i % 4],
    outerColor: ["#1E3550", "#243D5A", "#1A2F44", "#203548"][i % 4],
  })),
];

const BG_EDGES = [
  // Hub connections
  ["h1","n0"],["h1","n4"],["h1","n8"],["h1","h2"],
  ["h2","n1"],["h2","n6"],["h2","n11"],["h2","h3"],
  ["h3","n2"],["h3","n7"],["h3","n15"],["h3","h4"],
  ["h4","n3"],["h4","n9"],["h4","n17"],["h4","h5"],
  ["h5","n5"],["h5","n13"],["h5","n20"],
  // Chain
  ["n0","n1"],["n1","n2"],["n2","n3"],["n3","n4"],
  ["n5","n6"],["n6","n7"],["n7","n8"],["n8","n9"],
  ["n10","n11"],["n11","n12"],["n12","n13"],["n13","n14"],
  ["n15","n16"],["n16","n17"],["n17","n18"],["n18","n19"],
  ["n19","n20"],["n20","n21"],
  // Cross links
  ["n0","n6"],["n4","n10"],["n9","n15"],["n14","n19"],
  ["n3","n11"],["n7","n16"],["n12","n20"],
];

function LoadBgGraph() {
  const loadGraph = useLoadGraph<NodeAttrs, EdgeAttrs>();

  useEffect(() => {
    const graph = new Graph<NodeAttrs, EdgeAttrs>({ type: "undirected" });

    BG_NODES.forEach((n, i) => {
      const angle = (2 * Math.PI * i) / BG_NODES.length;
      const r = 8 + (i % 3) * 3;
      graph.addNode(n.id, {
        x: Math.cos(angle) * r + (Math.random() - 0.5) * 4,
        y: Math.sin(angle) * r + (Math.random() - 0.5) * 4,
        size: n.size, color: n.color, outerColor: n.outerColor,
        type: "planet",
      });
    });

    BG_EDGES.forEach(([s, t], i) => {
      try {
        graph.addEdge(s, t, { size: 0.5, color: "#1A3050" } as EdgeAttrs);
      } catch { void i; }
    });

    forceAtlas2.assign(graph, {
      iterations: 200,
      settings: { gravity: 1.2, scalingRatio: 12, strongGravityMode: true },
    });

    loadGraph(graph);
  }, [loadGraph]);

  return null;
}

export default function GraphBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.75 }}
      aria-hidden="true"
    >
      <SigmaContainer<NodeAttrs, EdgeAttrs, Attributes>
        graph={Graph}
        settings={{
          renderLabels: false,
          renderEdgeLabels: false,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          nodeProgramClasses: { planet: PlanetNodeProgram as any },
          defaultNodeType: "planet",
          defaultNodeColor: "#1A2E42",
          defaultEdgeColor: "#1A3050",
          labelColor: { color: "transparent" },
        }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
        className="!bg-transparent"
      >
        <LoadBgGraph />
      </SigmaContainer>
    </div>
  );
}
