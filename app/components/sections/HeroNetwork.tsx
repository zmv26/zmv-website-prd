"use client";

import { motion } from "framer-motion";

const routes = [
  { x1: 18, y1: 18, x2: 82, y2: 50 },
  { x1: 25, y1: 82, x2: 82, y2: 50 },
  { x1: 78, y1: 20, x2: 82, y2: 50 },
];

const points = [
  { x: 18, y: 18, label: "Europe" },
  { x: 25, y: 82, label: "Middle East" },
  { x: 78, y: 20, label: "Asia" },
  { x: 82, y: 50, label: "Philippines" },
];

export default function HeroNetwork() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="h-[500px] w-[500px]"
      >
        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {routes.map((route, index) => (
          <g key={index}>
            <line
              x1={route.x1}
              y1={route.y1}
              x2={route.x2}
              y2={route.y2}
              stroke="url(#lineGradient)"
              strokeWidth="0.4"
              opacity="0.25"
            />

            <motion.circle
              r="1.2"
              fill="#D4AF37"
              initial={{
                cx: route.x1,
                cy: route.y1,
              }}
              animate={{
                cx: route.x2,
                cy: route.y2,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.8,
              }}
            />
          </g>
        ))}

        {points.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="2"
              fill="#2563EB"
            />

            <circle
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#2563EB"
              opacity=".15"
            />

            <text
              x={point.x}
              y={point.y + 6}
              fill="white"
              fontSize="3"
              textAnchor="middle"
            >
              {point.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}