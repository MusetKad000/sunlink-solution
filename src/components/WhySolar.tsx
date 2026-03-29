"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, Zap } from "lucide-react";

const benefits = [
  {
    Icon: DollarSign,
    title: "Real Savings. Every Month.",
    stat: 1600,
    statPrefix: "$",
    statSuffix: "+",
    statLabel: "avg. annual savings",
    body: "Most homeowners cut their electric bill by 70–100%. Lock in your energy cost while utility rates keep climbing.",
    points: ["Net metering credits", "Fixed cost for 25+ years", "Immediate monthly impact"],
  },
  {
    Icon: Zap,
    title: "True Energy Independence.",
    stat: 100,
    statPrefix: "",
    statSuffix: "%",
    statLabel: "energy self-sufficient",
    body: "Stop depending on the grid. Add battery backup and your home is protected from outages, hikes, and uncertainty.",
    points: ["Battery storage available", "Real-time monitoring", "Grid-outage protection"],
  },
  {
    Icon: DollarSign,
    title: "Average Lifetime Savings.",
    stat: 40,
    statPrefix: "$",
    statSuffix: "k+",
    statLabel: "avg. 25-year net savings",
    body: "After system costs and incentives, the average California homeowner nets over $40,000 in savings across the life of their system.",
    points: ["$0 down financing available", "Compounds as rates rise", "Immediate monthly savings"],
  },
];

function Counter({ target, prefix = "", suffix = "", active }: {
  target: number; prefix?: string; suffix?: string; active: boolean;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) { setVal(0); return; }
    const steps = 50;
    const inc = target / steps;
    let cur = 0;
    let id: ReturnType<typeof setInterval>;
    const delay = setTimeout(() => {
      id = setInterval(() => {
        cur += inc;
        if (cur >= target) { setVal(target); clearInterval(id); }
        else setVal(Math.floor(cur));
      }, 2200 / steps);
    }, 400);
    return () => { clearTimeout(delay); clearInterval(id); };
  }, [active, target]);
  return <>{prefix}{val.toLocaleString()}{suffix}</>;
}

export default function WhySolar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section
      id="why-solar"
      ref={ref}
      style={{ padding: "80px 24px", background: "transparent", position: "relative" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#00aaff", marginBottom: 20 }}>
            Why Homeowners Choose Solar
          </div>
          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "-1.5px",
            lineHeight: 1.08,
            color: "#fff",
            maxWidth: 600,
            margin: "0 auto 20px",
          }}>
            One decision.{" "}
            <span style={{
              background: "linear-gradient(135deg, #00aaff 0%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Decades of savings.
            </span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Solar isn&apos;t an upgrade. It&apos;s a financial decision that compounds for the life of your home.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-col">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="glass-card glass-card-hover why-card"
              style={{ padding: 40, cursor: "default" }}
            >
              {/* Lucide icon — no emojis */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(0,102,255,0.1)",
                border: "1px solid rgba(0,102,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 28,
              }}>
                <b.Icon size={22} color="#00aaff" strokeWidth={1.75} />
              </div>

              {/* Counter */}
              <div style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: 44,
                lineHeight: 1,
                marginBottom: 4,
                background: "linear-gradient(135deg, #00aaff, #0066ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                <Counter target={b.stat} prefix={b.statPrefix} suffix={b.statSuffix} active={inView} />
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 20 }}>
                {b.statLabel}
              </div>

              <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 19, color: "#fff", marginBottom: 12, lineHeight: 1.3 }}>
                {b.title}
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 24 }}>
                {b.body}
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {b.points.map(pt => (
                  <li key={pt} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#0066ff", flexShrink: 0, boxShadow: "0 0 6px rgba(0,102,255,0.6)" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.three-col{grid-template-columns:1fr!important;}}
        @media(max-width:640px){
          .why-card{padding:28px 24px!important; text-align:center!important;}
          .why-card ul{align-items:center!important;}
          .why-card li{justify-content:center!important;}
        }
      `}</style>
    </section>
  );
}
