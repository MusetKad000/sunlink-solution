"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, Shield, TrendingDown } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 70,
        background: "transparent",
      }}
    >

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1000,
          margin: "0 auto",
          padding: "60px 24px 80px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Headline */}
        <motion.h1 {...fadeUp(0.08)} style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(52px, 8.5vw, 104px)",
          lineHeight: 1.02,
          letterSpacing: "-3px",
          marginBottom: 28,
          color: "#fff",
        }}>
          Solar Solutions
          <br />
          <span style={{
            background: "linear-gradient(135deg, #00aaff 0%, #0066ff 60%, #00d4ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            built for your home.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p {...fadeUp(0.15)} style={{
          fontSize: 19,
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.6)",
          maxWidth: 640,
          marginBottom: 48,
        }}>
          SunLink Solution helps California homeowners go solar with zero hassle.
          No gimmicks. Just clean energy and real savings.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.21)} style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 56 }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 36px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #0066ff, #00aaff)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.5px",
              cursor: "pointer",
              textDecoration: "none",
              minHeight: 54,
              boxShadow: "0 0 28px rgba(0,102,255,0.45), 0 4px 16px rgba(0,0,0,0.4)",
              transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 44px rgba(0,102,255,0.6), 0 8px 24px rgba(0,0,0,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 28px rgba(0,102,255,0.45), 0 4px 16px rgba(0,0,0,0.4)"; }}
          >
            Get Free Quote
            <ArrowRight size={17} />
          </a>
          <a
            href="#how-it-works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 36px",
              borderRadius: 10,
              background: "transparent",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.5px",
              cursor: "pointer",
              textDecoration: "none",
              minHeight: 54,
              border: "1px solid rgba(0,170,255,0.35)",
              transition: "background 0.2s, border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,170,255,0.08)"; e.currentTarget.style.borderColor = "rgba(0,170,255,0.65)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(0,170,255,0.35)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            See How It Works
            <ChevronRight size={17} />
          </a>
        </motion.div>

        {/* Stats pill */}
        <motion.div {...fadeUp(0.28)}>
          <div className="hero-stats-pill" style={{
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(0,170,255,0.18)",
            backdropFilter: "blur(16px)",
            borderRadius: 100,
            padding: "13px 30px",
            flexWrap: "wrap",
            gap: 0,
          }}>
            {[
              { Icon: Zap,          value: "500+",    label: "Installs" },
              { Icon: TrendingDown, value: "$0 Down", label: "Options"  },
              { Icon: Shield,       value: "25yr",    label: "Warranty" },
            ].map(({ Icon, value, label }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && <span className="hero-stat-divider" style={{ width: 1, height: 26, background: "rgba(0,170,255,0.18)", margin: "0 24px" }} />}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon size={15} color="#00aaff" strokeWidth={2} />
                  <span style={{ fontWeight: 800, fontSize: 14, color: "#fff", fontFamily: "Inter, sans-serif" }}>{value}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        @media(max-width:600px){
          .hero-stats-pill{flex-direction:column!important; border-radius:16px!important; padding:20px 24px!important; gap:12px!important; align-items:flex-start!important;}
          .hero-stat-divider{display:none!important;}
        }
      `}</style>
    </section>
  );
}
