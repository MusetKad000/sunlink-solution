"use client";
import { useId } from "react";

interface LogoIconProps {
  size?: number;
  glow?: boolean;
}

export default function LogoIcon({ size = 36, glow = true }: LogoIconProps) {
  const uid = useId().replace(/:/g, "");
  const gId = `g-${uid}`;
  const fId = `f-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Blue gradient: cyan-white at top-right → deep blue at bottom-left */}
        <linearGradient id={gId} x1="70" y1="8" x2="30" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#80eeff" />
          <stop offset="35%"  stopColor="#1a9fff" />
          <stop offset="100%" stopColor="#0033cc" />
        </linearGradient>

        {/* Glow filter — large spread so it doesn't get clipped into a box */}
        <filter id={fId} x="-60%" y="-60%" width="220%" height="220%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feColorMatrix in="blur" type="saturate" values="2" result="saturated" />
          <feMerge>
            <feMergeNode in="saturated" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={glow ? `url(#${fId})` : undefined}>
        {/* Segmented circle — 4 arcs, gaps at NE / SE / SW / NW diagonals */}
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke={`url(#${gId})`}
          strokeWidth="6.5"
          strokeDasharray="52 14"
          strokeLinecap="round"
          transform="rotate(-22 50 50)"
        />

        {/* Lightning bolt matching the logo shape */}
        <path
          d="M57 13 L20 56 L50 56 L42 87 L80 44 L50 44 Z"
          fill={`url(#${gId})`}
        />
      </g>
    </svg>
  );
}
