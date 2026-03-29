"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay },
});

/* ── Animated wire ─────────────────────────────────────── */
function Wire({
  d,
  color,
  length,
  delay,
  opacity = 1,
}: {
  d: string;
  color: string;
  length: number;
  delay: number;
  opacity?: number;
}) {
  return (
    <g style={{ opacity }}>
      {/* static glowing track */}
      <path d={d} fill="none" stroke={color} strokeWidth={1.5} strokeOpacity={0.08} />
      {/* flowing particle */}
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray={`5 ${length}`}
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -(length + 5) }}
        transition={{ duration: 1.8, delay, repeat: Infinity, ease: "linear" }}
        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
      />
    </g>
  );
}

/* ── Flow node ─────────────────────────────────────────── */
function Node({
  cx,
  cy,
  label,
  color,
  pulse = false,
  delay = 0,
  children,
}: {
  cx: number;
  cy: number;
  label: string;
  color: string;
  pulse?: boolean;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.4, 0.64, 1] }}
    >
      {/* outer pulse ring */}
      {pulse ? (
        <motion.circle
          cx={cx} cy={cy} r={30}
          fill="none" stroke={color} strokeWidth={1}
          animate={{ r: [28, 34, 28], strokeOpacity: [0.35, 0.06, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : (
        <circle cx={cx} cy={cy} r={28} fill="none" stroke={color} strokeWidth={1} strokeOpacity={0.18} />
      )}

      {/* main circle */}
      <circle
        cx={cx} cy={cy} r={21}
        fill="rgba(5,10,25,0.85)"
        stroke={color}
        strokeWidth={1.5}
        style={{ filter: `drop-shadow(0 0 8px ${color}55)` }}
      />

      {/* icon — 24×24 space scaled to 14px, centered */}
      <g
        transform={`translate(${cx - 7}, ${cy - 7}) scale(0.583)`}
        fill="none"
        stroke={color}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>

      {/* label */}
      <text
        x={cx} y={cy + 38}
        textAnchor="middle"
        fontSize={8}
        fontWeight={700}
        fill="rgba(255,255,255,0.38)"
        fontFamily="Inter, sans-serif"
        letterSpacing="1.5"
      >
        {label}
      </text>
    </motion.g>
  );
}

/* ── Main ──────────────────────────────────────────────── */
export default function SolarFlowDiagram() {
  const AMBER = "#f59e0b";
  const BLUE  = "#00aaff";

  return (
    <section style={{ background: "transparent", padding: "80px 24px", position: "relative" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
        className="sfd-grid"
      >

        {/* ── Left: copy ──────────────────────────────── */}
        <motion.div {...fadeUp(0)} style={{ paddingLeft: 8 }}>
          <div style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#00aaff",
            marginBottom: 20,
          }}>
            How It Works
          </div>

          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(34px, 4.5vw, 52px)",
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
            color: "#fff",
            marginBottom: 20,
          }}>
            Two sources.
            <br />
            <span style={{
              background: "linear-gradient(135deg, #00aaff 0%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              One powered home.
            </span>
          </h2>

          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            maxWidth: 400,
            marginBottom: 40,
          }}>
            Your solar panels power your home in real time. Your battery covers
            the rest — at night, on cloudy days, and during outages.
          </p>

          <ul style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              { color: AMBER, text: "Solar panels convert sunlight and power your home directly" },
              { color: BLUE,  text: "Battery stores surplus energy and powers your home 24/7" },
              { color: BLUE,  text: "Both sources work together so your home never loses power" },
            ].map(({ color, text }) => (
              <li key={text} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span style={{
                  width: 7, height: 7,
                  borderRadius: "50%",
                  background: color,
                  boxShadow: `0 0 10px ${color}`,
                  flexShrink: 0,
                  marginTop: 8,
                }} />
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.58)", lineHeight: 1.65 }}>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Right: diagram ──────────────────────────── */}
        <motion.div {...fadeUp(0.18)} style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          <svg
            viewBox="0 0 460 260"
            width="100%"
            style={{ maxWidth: 620, overflow: "hidden", display: "block" }}
            aria-label="Solar energy flow: sun to panels to battery and home"
          >
            {/*
              Node positions:
              SUN     (60,  130)
              PANELS  (175, 130)
              BATTERY (295, 210)
              HOME    (400, 130)
            */}

            {/* SUN → PANELS */}
            <Wire
              d="M 83 130 L 153 130"
              color={AMBER}
              length={70}
              delay={0}
            />

            {/* PANELS → HOME  (direct arc, upper) */}
            <Wire
              d="M 197 120 Q 285 68 378 122"
              color={BLUE}
              length={180}
              delay={0.4}
            />

            {/* PANELS → BATTERY  (lower split) */}
            <Wire
              d="M 190 150 Q 225 195 273 208"
              color={BLUE}
              length={90}
              delay={0.8}
            />

            {/* BATTERY → HOME */}
            <Wire
              d="M 317 205 Q 368 208 392 152"
              color={BLUE}
              length={90}
              delay={1.2}
            />

            {/* ── Nodes ── */}

            {/* SUN */}
            <Node cx={60} cy={130} label="SUN" color={AMBER} delay={0}>
              <circle cx={12} cy={12} r={4} />
              <line x1={12} y1={2}    x2={12} y2={5} />
              <line x1={12} y1={19}   x2={12} y2={22} />
              <line x1={2}  y1={12}   x2={5}  y2={12} />
              <line x1={19} y1={12}   x2={22} y2={12} />
              <line x1={4.9} y1={4.9} x2={7}  y2={7} />
              <line x1={17} y1={17}   x2={19.1} y2={19.1} />
              <line x1={19.1} y1={4.9} x2={17} y2={7} />
              <line x1={7}  y1={17}   x2={4.9} y2={19.1} />
            </Node>

            {/* SOLAR PANELS */}
            <Node cx={175} cy={130} label="SOLAR PANELS" color={BLUE} delay={0.15}>
              <rect x={3}  y={3}  width={7} height={7} rx={0.5} />
              <rect x={14} y={3}  width={7} height={7} rx={0.5} />
              <rect x={3}  y={14} width={7} height={7} rx={0.5} />
              <rect x={14} y={14} width={7} height={7} rx={0.5} />
            </Node>

            {/* BATTERY */}
            <Node cx={295} cy={210} label="BATTERY" color={BLUE} delay={0.3}>
              <rect x={2}  y={7}  width={16} height={10} rx={2} />
              <line x1={22} y1={11} x2={22} y2={13} strokeWidth={2.5} />
              <rect x={4} y={9} width={7} height={6} rx={1} fill={BLUE} stroke="none" />
            </Node>

            {/* YOUR HOME */}
            <Node cx={400} cy={130} label="YOUR HOME" color={BLUE} pulse delay={0.45}>
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
              <path d="M9 21V13h6v8" />
            </Node>
          </svg>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:768px){
          .sfd-grid{grid-template-columns:1fr!important; gap:32px!important;}
          .sfd-grid>div:last-child{padding:0 8px;}
        }
      `}</style>
    </section>
  );
}
