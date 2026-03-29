"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does a solar system cost in California?",
    a: "Most California homes fall between $20,000–$35,000 before incentives. After the 30% federal tax credit, that drops to $14,000–$24,500. With a $0 down solar loan, many homeowners save more each month than their loan payment — so savings start day one.",
  },
  {
    q: "Will solar actually lower my electric bill?",
    a: "Yes. Most of our California customers cut their bill by 70–100%. With some of the highest utility rates in the country, the savings here are exceptional. We build a custom projection using your actual energy data before you sign anything.",
  },
  {
    q: "What is the 30% federal solar tax credit?",
    a: "The federal Residential Clean Energy Credit lets you deduct 30% of your total system cost from your federal taxes. On a $25,000 system, that's $7,500 back. With a solar loan, this credit goes to you — the owner — not the lender.",
  },
  {
    q: "What's the difference between a loan and a PPA/lease?",
    a: "With a solar loan, you own the system — you get the tax credit, all the savings, and added home equity. With a PPA or lease, a third-party company owns the panels. You pay a lower rate for power, but no tax credit or ownership benefit. We'll help you decide based on your situation.",
  },
  {
    q: "How long does installation take?",
    a: "Installation itself takes 1–2 days. Total timeline from signed contract to live system is typically 3–6 weeks, depending on permit timelines in your city or county. We handle all permits, inspections, and utility interconnection paperwork.",
  },
  {
    q: "How much sun does California get?",
    a: "California is one of the best solar states in the country — most areas get 260–300+ sunny days per year. Southern California in particular averages 5.5–6 peak sun hours daily, maximizing your system's output and return on investment.",
  },
  {
    q: "What warranty do I get?",
    a: "Our systems come with a 25-year panel performance warranty, 10-year workmanship warranty, and 10-year inverter warranty. Panels are guaranteed to produce at 80%+ efficiency after 25 years. SunLink also offers an optional extended service plan.",
  },
  {
    q: "Will solar increase my home's resale value?",
    a: "Studies consistently show homes with solar sell for 3–4% more and faster. In California's market, that can mean $20,000–$40,000 in added value. Solar is one of the highest-ROI home improvements available.",
  },
  {
    q: "What if my house needs a re-roof?",
    a: "We have our own roofers, which allows us to bundle roof and solar if needed with no out-of-pocket expense.",
  },
  {
    q: "How do I get started?",
    a: "Easy. Use the savings calculator above to get an instant estimate — then click \"Get Free Quote\" to book your free 30-minute consultation. No pressure, no commitment. Just honest numbers for your home.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "80px 24px", background: "transparent", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="faq-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            style={{ position: "sticky", top: 100 }}
          >
            <div className="eyebrow" style={{ marginBottom: 16 }}>Common Questions</div>
            <h2 style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 46px)",
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: 16,
            }}>
              Questions?
              <br />
              <span className="text-gradient">We&apos;ve Got Answers.</span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, marginBottom: 28 }}>
              Everything California homeowners ask before going solar. Still curious?
            </p>
            <a href="#contact" className="btn-ghost" style={{ fontSize: 14 }}>
              Talk to an Advisor
            </a>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    overflow: "hidden",
                    border: open === i ? "1px solid rgba(0,102,255,0.35)" : "1px solid rgba(0,170,255,0.1)",
                    boxShadow: open === i ? "0 0 24px rgba(0,102,255,0.12)" : "none",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    aria-expanded={open === i}
                  >
                    <span style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 15,
                      color: open === i ? "#fff" : "rgba(255,255,255,0.72)",
                      lineHeight: 1.4,
                      transition: "color 0.2s",
                    }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background: open === i ? "rgba(0,102,255,0.2)" : "rgba(255,255,255,0.04)",
                      border: open === i ? "1px solid rgba(0,102,255,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.2s",
                    }}>
                      {open === i
                        ? <Minus size={15} color="#00aaff" />
                        : <Plus size={15} color="rgba(255,255,255,0.35)" />
                      }
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ padding: "0 24px 20px" }}>
                          <div style={{ height: 1, background: "rgba(0,102,255,0.15)", marginBottom: 16 }} />
                          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.58)", lineHeight: 1.7 }}>
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.faq-grid{grid-template-columns:1fr!important;gap:40px!important;} .faq-grid>:first-child{position:static!important;}}`}</style>
    </section>
  );
}
