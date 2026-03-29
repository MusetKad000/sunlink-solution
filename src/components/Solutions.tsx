"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, DollarSign, Zap, Sun } from "lucide-react";

const cards = [
  {
    Icon: Zap,
    badge: null,
    title: "Solar Loan",
    subtitle: "$0 Down. You Own It.",
    bullets: [
      "No upfront cost",
      "Fixed low monthly payments",
      "Full ownership from day one",
      "Build home equity",
      "Locked-in energy rate",
    ],
    cta: "Learn More",
    ctaHref: "#contact",
    featured: false,
  },
  {
    Icon: Sun,
    badge: "Most Popular",
    title: "TPO / PPA",
    subtitle: "No Ownership. No Hassle.",
    bullets: [
      "$0 upfront, ever",
      "Pay for power, not panels",
      "Provider handles maintenance",
      "Immediate bill savings",
      "Easy transfer if you move",
    ],
    cta: "Get Started",
    ctaHref: "#contact",
    featured: true,
  },
  {
    Icon: DollarSign,
    badge: null,
    title: "Cash Purchase",
    subtitle: "Maximum ROI. Full Ownership.",
    bullets: [
      "Own your system outright",
      "Highest long-term savings",
      "Increases home resale value",
      "Locked-in energy rate for life",
      "No monthly payments ever",
    ],
    cta: "Learn More",
    ctaHref: "#contact",
    featured: false,
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
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
            Choose Your Path
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
            Three ways to go solar.
            <br />
            <span style={{
              background: "linear-gradient(135deg, #00aaff 0%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              All roads save money.
            </span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Whether you own it, finance it, or just use the power — we have a solution built for your situation.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}
          className="three-col"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className={`solution-card${card.featured ? " solution-card-featured" : ""}`}
              style={{
                position: "relative",
                borderRadius: 24,
                padding: "40px 36px",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: card.featured
                  ? "linear-gradient(145deg, rgba(0,80,220,0.13), rgba(0,40,120,0.09))"
                  : "rgba(255,255,255,0.025)",
                border: card.featured
                  ? "1px solid rgba(0,170,255,0.5)"
                  : "1px solid rgba(0,170,255,0.13)",
                boxShadow: card.featured
                  ? "0 0 70px rgba(0,102,255,0.22), 0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)"
                  : "0 0 40px rgba(0,102,255,0.05), inset 0 1px 0 rgba(255,255,255,0.03)",
                marginTop: card.featured ? -16 : 0,
                cursor: "default",
                transition: "transform 0.18s ease, border 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-8px)";
                el.style.border = "1px solid rgba(0,170,255,0.5)";
                el.style.boxShadow = "0 0 70px rgba(0,102,255,0.25), 0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)";
                el.style.background = "linear-gradient(145deg, rgba(0,80,220,0.14), rgba(0,40,120,0.10))";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.border = card.featured ? "1px solid rgba(0,170,255,0.5)" : "1px solid rgba(0,170,255,0.13)";
                el.style.boxShadow = card.featured
                  ? "0 0 70px rgba(0,102,255,0.22), 0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)"
                  : "0 0 40px rgba(0,102,255,0.05), inset 0 1px 0 rgba(255,255,255,0.03)";
                el.style.background = card.featured
                  ? "linear-gradient(145deg, rgba(0,80,220,0.13), rgba(0,40,120,0.09))"
                  : "rgba(255,255,255,0.025)";
              }}
            >
              {/* Featured top glow line */}
              {card.featured && (
                <div style={{
                  position: "absolute", top: 0, left: 28, right: 28, height: 2,
                  background: "linear-gradient(90deg, transparent, #0066ff, #00aaff, transparent)",
                  borderRadius: 1,
                }} />
              )}

              {/* Badge row */}
              <div style={{ height: 32, marginBottom: 24, display: "flex", alignItems: "center" }}>
                {card.badge ? (
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "linear-gradient(135deg, #0066ff, #00aaff)",
                    borderRadius: 999,
                    padding: "4px 14px",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    boxShadow: "0 0 16px rgba(0,102,255,0.4)",
                  }}>
                    {card.badge}
                  </div>
                ) : null}
              </div>

              {/* Lucide icon circle */}
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: card.featured ? "rgba(0,102,255,0.18)" : "rgba(0,102,255,0.1)",
                border: "1px solid rgba(0,102,255,0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 22,
                boxShadow: card.featured ? "0 0 18px rgba(0,102,255,0.25)" : "none",
              }}>
                <card.Icon size={22} color="#00aaff" strokeWidth={1.75} />
              </div>

              <h3 style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: 22,
                color: "#fff",
                marginBottom: 6,
                lineHeight: 1.2,
              }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 13, color: "#00aaff", fontWeight: 600, marginBottom: 24, letterSpacing: "0.2px" }}>
                {card.subtitle}
              </p>

              {/* Bullets */}
              <ul style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 32 }}>
                {card.bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <Check
                      size={14}
                      style={{ color: "#0066ff", flexShrink: 0, marginTop: 3 }}
                    />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.68)", lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={card.ctaHref}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: "14px 0",
                  minHeight: 52,
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
                  ...(card.featured
                    ? {
                        background: "linear-gradient(135deg, #0066ff, #00aaff)",
                        color: "#fff",
                        boxShadow: "0 0 24px rgba(0,102,255,0.45)",
                      }
                    : {
                        background: "rgba(0,102,255,0.07)",
                        border: "1px solid rgba(0,170,255,0.22)",
                        color: "#00aaff",
                      }),
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {card.cta}
                <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: 44, fontSize: 14, color: "rgba(255,255,255,0.28)" }}
        >
          Not sure which fits you?{" "}
          <a href="#calculator" style={{ color: "#00aaff", textDecoration: "underline", textUnderlineOffset: 3, cursor: "pointer" }}>
            Try the free savings calculator
          </a>
        </motion.p>
      </div>
      <style>{`
        @media(max-width:900px){
          .three-col{grid-template-columns:1fr!important;}
          .solution-card-featured{margin-top:0!important;}
          .solution-card{text-align:center!important;}
          .solution-card ul{align-items:center!important;}
          .solution-card li{justify-content:center!important;}
          .solution-card>a{justify-content:center!important;}
        }
      `}</style>
    </section>
  );
}
