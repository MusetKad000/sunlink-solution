"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, TrendingUp, Leaf } from "lucide-react";

const KWH_RATE = 0.14;
const OFFSET   = 0.40;
const COST_PER_W = 2.8;
const ITC      = 0.30;
const RISE     = 0.035;

function fmt(n: number) {
  return n >= 1000 ? `$${(n / 1000).toFixed(1)}k` : `$${Math.round(n)}`;
}

const METRICS = [
  { key: "annual",   label: "Annual Savings",    sub: "Year 1",    suffix: "",      color: "#0066ff", Icon: DollarSign },
  { key: "lifetime", label: "25-Year Savings",   sub: "Net total", suffix: "",      color: "#00aaff", Icon: TrendingUp },
  { key: "co2",      label: "CO₂ Offset",        sub: "Per year",  suffix: " tons", color: "#00cc88", Icon: Leaf       },
];

export default function Calculator() {
  const [bill, setBill] = useState(150);
  const [res, setRes] = useState({ annual: 0, lifetime: 0, co2: 0 });

  useEffect(() => {
    const monthlyKwh = bill / KWH_RATE;
    const annualKwh  = monthlyKwh * 12;
    const solarKwh   = annualKwh * OFFSET;
    const systemKw   = solarKwh / (5.5 * 365);
    const grossCost  = systemKw * 1000 * COST_PER_W;
    const netCost    = grossCost * (1 - ITC);
    const annual     = bill * 12 * OFFSET;
    let total = 0, s = annual;
    for (let y = 0; y < 25; y++) { total += s; s *= (1 + RISE); }
    setRes({ annual, lifetime: total - netCost, co2: parseFloat(((solarKwh * 0.386) / 2000).toFixed(1)) });
  }, [bill]);

  const pct = ((bill - 50) / 550) * 100;

  return (
    <section id="calculator" style={{ padding: "80px 24px", background: "transparent", position: "relative" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#00aaff", marginBottom: 16 }}>
            Solar Savings Estimator
          </div>
          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "-1.5px",
            lineHeight: 1.08,
            color: "#fff",
            margin: "0 auto 16px",
          }}>
            How much will{" "}
            <span style={{
              background: "linear-gradient(135deg, #00aaff, #0066ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              you actually save?
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
            Drag the slider to see your personalized solar savings estimate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Bill input block */}
          <div style={{
            background: "rgba(0,102,255,0.04)",
            border: "1px solid rgba(0,102,255,0.15)",
            borderRadius: 20,
            padding: "40px 48px",
            marginBottom: 16,
          }}>
            {/* Bill amount */}
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>
                Monthly Electric Bill
              </div>
              <div style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(64px, 10vw, 96px)",
                lineHeight: 1,
                letterSpacing: "-4px",
                background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                ${bill}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: 6, letterSpacing: "2px", textTransform: "uppercase" }}>per month</div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={50}
              max={600}
              step={10}
              value={bill}
              onChange={e => setBill(Number(e.target.value))}
              style={{
                width: "100%",
                background: `linear-gradient(to right, #0066ff 0%, #00aaff ${pct}%, rgba(255,255,255,0.08) ${pct}%, rgba(255,255,255,0.08) 100%)`,
              }}
              aria-label="Monthly electric bill"
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 8 }}>
              <span>$50/mo</span><span>$600/mo</span>
            </div>
          </div>

          {/* Metric cards — 3 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }} className="calc-metrics">
            {METRICS.map(m => {
              const raw   = res[m.key as keyof typeof res] as number;
              const value = m.key === "co2" ? `${raw}${m.suffix}` : fmt(raw);

              return (
                <div
                  key={m.key}
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    padding: "28px 24px",
                    overflow: "hidden",
                    background: `linear-gradient(145deg, ${m.color}08 0%, transparent 100%)`,
                    border: `1px solid ${m.color}20`,
                  }}
                >

                  {/* Icon */}
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${m.color}14`, border: `1px solid ${m.color}28`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 16,
                  }}>
                    <m.Icon size={18} color={m.color} strokeWidth={1.75} />
                  </div>

                  {/* Label */}
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px", marginBottom: 4 }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: 10, color: `${m.color}99`, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 10 }}>
                    {m.sub}
                  </div>

                  {/* Value */}
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 900,
                      fontSize: 30,
                      color: "#fff",
                      lineHeight: 1,
                      letterSpacing: "-1px",
                    }}
                  >
                    {value}
                  </motion.div>

                  {/* Bottom shimmer */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
                    background: `linear-gradient(90deg, transparent, ${m.color}50, transparent)`,
                  }} />
                </div>
              );
            })}
          </div>

          {/* CTA + disclaimer */}
          <div style={{
            background: "rgba(0,102,255,0.04)",
            border: "1px solid rgba(0,102,255,0.12)",
            borderRadius: 16,
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", lineHeight: 1.65, margin: 0, maxWidth: 440 }}>
              * Based on a typical 40% bill offset. Actual results vary by roof, location, and system size.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 28px",
                minHeight: 48,
                borderRadius: 10,
                background: "linear-gradient(135deg, #0066ff, #00aaff)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.3px",
                cursor: "pointer",
                textDecoration: "none",
                flexShrink: 0,
                boxShadow: "0 0 28px rgba(0,102,255,0.35)",
                transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 44px rgba(0,102,255,0.55)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 28px rgba(0,102,255,0.35)"; }}
            >
              Get My Exact Quote
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:640px){.calc-metrics{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
