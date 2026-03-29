"use client";

import { motion } from "framer-motion";
import { MessageCircle, PenLine, Wrench, Zap } from "lucide-react";

const steps = [
  {
    n: "01",
    Icon: MessageCircle,
    title: "Free Consultation",
    body: "Talk with a California solar advisor. We analyze your bills, roof, and goals — then build a custom savings projection. No obligation.",
    tag: "30-minute call",
    color: "#0066ff",
  },
  {
    n: "02",
    Icon: PenLine,
    title: "Custom System Design",
    body: "Our engineers design a system optimized for your home. You review and approve every detail before we proceed.",
    tag: "3–5 day turnaround",
    color: "#00aaff",
  },
  {
    n: "03",
    Icon: Wrench,
    title: "Professional Install",
    body: "Certified crew. 1–2 days. We handle all permits, inspections, and utility interconnection on your behalf.",
    tag: "1–2 days on-site",
    color: "#0077ee",
  },
  {
    n: "04",
    Icon: Zap,
    title: "Power On. Save.",
    body: "Your system goes live. Track real-time generation. Watch your bill shrink month after month.",
    tag: "Live in 3–6 weeks",
    color: "#00d4ff",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ padding: "80px 24px", background: "transparent", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: 88 }}
        >
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#00aaff", marginBottom: 20 }}>
            From Consultation to Activation
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
            From consultation to
            <br />
            <span style={{
              background: "linear-gradient(135deg, #00aaff 0%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              power-on in weeks.
            </span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 420, margin: "0 auto", lineHeight: 1.7 }}>
            We handle everything — from permits to activation. Your only job is to enjoy lower bills.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 4,
          position: "relative",
        }} className="four-col">

          {/* Connecting line */}
          <div
            className="step-line"
            style={{
              position: "absolute",
              top: 50,
              left: "12.5%",
              right: "12.5%",
              height: 1,
              background: "linear-gradient(90deg, rgba(0,102,255,0.3), rgba(0,170,255,0.4), rgba(0,212,255,0.3))",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              style={{ position: "relative", zIndex: 1, padding: "0 10px", textAlign: "center" }}
            >
              {/* Number node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, delay: 0.1 + i * 0.12 }}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: `rgba(0,0,20,0.9)`,
                  border: `2px solid ${step.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                  boxShadow: `0 0 18px ${step.color}55`,
                }}
              >
                <step.Icon size={20} color={step.color} strokeWidth={1.75} />
              </motion.div>

              {/* Card */}
              <div
                className="glass-card"
                style={{ padding: "24px 20px", textAlign: "left" }}
              >
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "rgba(0,102,255,0.08)",
                  border: "1px solid rgba(0,170,255,0.18)",
                  borderRadius: 100,
                  padding: "4px 12px",
                  fontSize: 11,
                  color: "#00aaff",
                  fontWeight: 600,
                  marginBottom: 14,
                  letterSpacing: "0.5px",
                }}>
                  Step {step.n} · {step.tag}
                </div>
                <h3 style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: "center", marginTop: 64 }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 36px",
              borderRadius: 10,
              minHeight: 52,
              background: "linear-gradient(135deg, #0066ff, #00aaff)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.5px",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 0 28px rgba(0,102,255,0.4)",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Start My Solar Journey
          </a>
          <p style={{ marginTop: 14, fontSize: 13, color: "rgba(255,255,255,0.28)", letterSpacing: "0.3px" }}>
            Free consultation. No commitment.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:900px){
          .four-col{grid-template-columns:repeat(2,1fr)!important;}
          .step-line{display:none!important;}
        }
        @media(max-width:540px){
          .four-col{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
