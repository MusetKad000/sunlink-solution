"use client";

export default function BackgroundOrbs() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}
    >
      {/* Orb 1 — top-left, deep blue */}
      <div style={{
        position: "absolute",
        top: "-25%",
        left: "-20%",
        width: "80vw",
        height: "80vw",
        maxWidth: 1000,
        maxHeight: 1000,
        borderRadius: "50%",
        background: "radial-gradient(circle at 40% 40%, rgba(0,102,255,0.22) 0%, rgba(0,60,200,0.08) 45%, transparent 70%)",
        animation: "orbDrift1 12s ease-in-out infinite",
      }} />

      {/* Orb 2 — right, cyan */}
      <div style={{
        position: "absolute",
        top: "15%",
        right: "-25%",
        width: "65vw",
        height: "65vw",
        maxWidth: 860,
        maxHeight: 860,
        borderRadius: "50%",
        background: "radial-gradient(circle at 60% 40%, rgba(0,170,255,0.18) 0%, rgba(0,120,255,0.06) 45%, transparent 70%)",
        animation: "orbDrift2 16s ease-in-out infinite",
      }} />

      {/* Orb 3 — bottom-center, electric blue */}
      <div style={{
        position: "absolute",
        bottom: "-20%",
        left: "20%",
        width: "60vw",
        height: "60vw",
        maxWidth: 800,
        maxHeight: 800,
        borderRadius: "50%",
        background: "radial-gradient(circle at 50% 60%, rgba(0,200,255,0.13) 0%, rgba(0,80,220,0.05) 45%, transparent 68%)",
        animation: "orbDrift3 19s ease-in-out infinite",
      }} />

      {/* Orb 4 — small accent, mid-page */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "35%",
        width: "35vw",
        height: "35vw",
        maxWidth: 480,
        maxHeight: 480,
        borderRadius: "50%",
        background: "radial-gradient(circle at 50% 50%, rgba(0,80,255,0.10) 0%, transparent 65%)",
        animation: "orbDrift4 14s ease-in-out infinite",
      }} />

      <style>{`
        @keyframes orbDrift1 {
          0%   { transform: translate(0px,    0px)   scale(1);    }
          18%  { transform: translate(120px,  80px)  scale(1.08); }
          38%  { transform: translate(80px,   160px) scale(1.12); }
          58%  { transform: translate(-40px,  120px) scale(1.05); }
          78%  { transform: translate(-90px,  30px)  scale(0.95); }
          100% { transform: translate(0px,    0px)   scale(1);    }
        }
        @keyframes orbDrift2 {
          0%   { transform: translate(0px,    0px)   scale(1);    }
          22%  { transform: translate(-130px, 90px)  scale(1.09); }
          48%  { transform: translate(-70px,  -60px) scale(0.93); }
          72%  { transform: translate(80px,   -100px)scale(1.06); }
          100% { transform: translate(0px,    0px)   scale(1);    }
        }
        @keyframes orbDrift3 {
          0%   { transform: translate(0px,    0px)   scale(1);    }
          20%  { transform: translate(110px,  -90px) scale(1.1);  }
          45%  { transform: translate(50px,   -160px)scale(0.92); }
          68%  { transform: translate(-70px,  -80px) scale(1.07); }
          100% { transform: translate(0px,    0px)   scale(1);    }
        }
        @keyframes orbDrift4 {
          0%   { transform: translate(0px,    0px)   scale(1);    }
          30%  { transform: translate(-80px, -100px) scale(1.15); }
          60%  { transform: translate(100px, -60px)  scale(0.88); }
          100% { transform: translate(0px,    0px)   scale(1);    }
        }
      `}</style>
    </div>
  );
}
