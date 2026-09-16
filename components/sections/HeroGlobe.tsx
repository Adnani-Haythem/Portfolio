"use client";

import { useId } from "react";

function project(lat: number, lon: number, r: number) {
  const latR = (lat * Math.PI) / 180;
  const lonR = (lon * Math.PI) / 180;
  const x = Math.cos(latR) * Math.sin(lonR);
  const y = -Math.sin(latR);
  const z = Math.cos(latR) * Math.cos(lonR);
  return { x: x * r, y: y * r, z };
}

const R = 78;
const DOTS: { x: number; y: number; z: number }[] = [];
for (let lat = -80; lat <= 80; lat += 16) {
  for (let lon = -180; lon < 180; lon += 16) {
    const p = project(lat, lon, R);
    if (p.z > 0.06) DOTS.push(p);
  }
}

export function HeroGlobe({ className = "", variant = "location", label = "Build" }: {
  className?: string;
  variant?: "location" | "engineer";
  label?: string;
}) {
  const compact = variant === "engineer";
  const shadeId = useId();

  const sphere = (
    <svg viewBox={compact ? "-100 -90 180 180" : "-140 -100 260 200"} width={compact ? "100%" : "220"} height={compact ? "100%" : "170"} aria-hidden className={`overflow-visible ${compact ? "" : "animate-spin-slow"}`} style={{ transformOrigin: compact ? "50% 50%" : "-10px 0px" }}>
      <defs>
        <radialGradient id={shadeId} cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="rgba(105,183,255,0.32)" />
          <stop offset="55%" stopColor="rgba(105,183,255,0.05)" />
          <stop offset="100%" stopColor="rgba(4,6,10,0.4)" />
        </radialGradient>
      </defs>
      <circle cx={-10} cy={0} r={R} fill={`url(#${shadeId})`} />
      <circle cx={-10} cy={0} r={R} fill="none" stroke="rgba(215,226,234,0.12)" strokeWidth={0.75} />
      <ellipse cx={-10} cy={0} rx={R} ry={R * 0.32} fill="none" stroke="rgba(215,226,234,0.1)" strokeWidth={0.6} />
      <ellipse cx={-10} cy={0} rx={R * 0.4} ry={R} fill="none" stroke="rgba(215,226,234,0.08)" strokeWidth={0.6} />
      {DOTS.map((d, i) => <circle key={i} cx={d.x - 10} cy={d.y} r={0.55 + d.z * 1.1} fill="rgba(215,226,234,0.55)" opacity={0.25 + d.z * 0.55} />)}
    </svg>
  );

  if (compact) {
    return (
      <div className={`relative pointer-events-none select-none ${className}`}>
        <div className="relative h-full w-full animate-spin-slow" style={{ transformOrigin: "50% 50%" }}>
          {sphere}
          <span className="absolute inset-0 grid place-items-center px-1 text-center font-mono text-[10px] font-semibold uppercase leading-none tracking-[0.04em] text-accent-soft [text-shadow:0_0_6px_#0d0f14,0_0_10px_#0d0f14]">{label}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      {sphere}
      <div className="-mt-[92px] ml-[86px] flex items-center gap-2">
        <span className="h-px w-8 bg-accent/50" />
        <div className="font-mono text-[10px] uppercase leading-tight tracking-[0.25em] text-paper/70">Explore<div className="text-paper/40">Build</div></div>
      </div>
    </div>
  );
}
