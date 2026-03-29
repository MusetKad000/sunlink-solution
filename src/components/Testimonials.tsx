"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    initials: "MJ",
    name: "Marcus & Jennifer T.",
    location: "Los Angeles, CA",
    savings: "$214/mo saved",
    option: "Solar Loan",
    stars: 5,
    text: "We went from a $280 monthly SCE bill to practically nothing. SunLink handled permits, installation, utility paperwork — everything. Done in 5 weeks. Best financial decision we've made for this house.",
  },
  {
    initials: "SR",
    name: "Sandra R.",
    location: "San Diego, CA",
    savings: "$248/mo saved",
    option: "Cash Purchase",
    stars: 5,
    text: "I was skeptical, but the numbers don't lie. Paid back in 5.4 years and now I'm just printing money. My last appraisal showed a $28k increase in home value. I tell everyone about SunLink.",
  },
  {
    initials: "JO",
    name: "James & Cathy O.",
    location: "Riverside, CA",
    savings: "$291/mo saved",
    option: "Solar Loan",
    stars: 5,
    text: "Pool, AC, full house — we were paying $360/month. SunLink designed a system that covers 95% of our usage. Now we pay $69 for the grid connection fee. I wish I did this sooner.",
  },
  {
    initials: "DM",
    name: "Denise M.",
    location: "Sacramento, CA",
    savings: "$172/mo saved",
    option: "PPA / Lease",
    stars: 5,
    text: "Wasn't ready to own a system — PPA was the perfect fit. Zero upfront, lower bill, and they handle everything. Two years in, still love it. Easiest decision I've made.",
  },
  {
    initials: "RK",
    name: "Robert K.",
    location: "Irvine, CA",
    savings: "$189/mo saved",
    option: "Solar Loan",
    stars: 5,
    text: "Crew was professional, clean, and fast. One day installation. The monitoring app is genuinely fun — I watch my generation in real-time. Solar is just the smart move in California.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" width={15} height={15} fill="#0066ff" style={{ filter: "drop-shadow(0 0 4px rgba(0,102,255,0.6))" }}>
          <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);

  const prev = () => { setDir(-1); setCur(c => (c - 1 + reviews.length) % reviews.length); };
  const next = () => { setDir(1);  setCur(c => (c + 1) % reviews.length); };

  const r = reviews[cur];

  return (
    <section id="testimonials" style={{ padding: "80px 24px", background: "transparent", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>Real California Homeowners</div>
          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 52px)",
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            color: "#fff",
          }}>
            Don&apos;t Take Our Word For It.
            <br />
            <span className="text-gradient">Hear From Homeowners.</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            className="glass-card"
            style={{
              padding: "48px 52px",
              border: "1px solid rgba(0,102,255,0.2)",
              boxShadow: "0 0 80px rgba(0,102,255,0.1), 0 40px 80px rgba(0,0,0,0.5)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative quote mark */}
            <div style={{
              position: "absolute",
              top: 28,
              right: 36,
              fontSize: 120,
              lineHeight: 1,
              color: "rgba(0,102,255,0.06)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              userSelect: "none",
              pointerEvents: "none",
            }}>
              &ldquo;
            </div>

            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={cur}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -dir * 40 }}
                transition={{ duration: 0.38 }}
              >
                {/* Author row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "linear-gradient(135deg, rgba(0,102,255,0.3), rgba(0,40,120,0.2))",
                      border: "1px solid rgba(0,170,255,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      fontSize: 18,
                      color: "#00aaff",
                    }}>
                      {r.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", fontFamily: "Inter, sans-serif" }}>{r.name}</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>{r.location}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 800, fontSize: 15, color: "#0066ff", fontFamily: "Inter, sans-serif" }}>{r.savings}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>{r.option}</div>
                  </div>
                </div>

                <Stars count={r.stars} />

                <blockquote style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.78)",
                  fontStyle: "italic",
                  marginTop: 20,
                }}>
                  &ldquo;{r.text}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 36,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}>
              <button
                onClick={prev}
                style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,170,255,0.4)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div style={{ display: "flex", gap: 8 }}>
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > cur ? 1 : -1); setCur(i); }}
                    style={{
                      width: i === cur ? 22 : 7,
                      height: 7,
                      borderRadius: 100,
                      background: i === cur ? "#0066ff" : "rgba(255,255,255,0.15)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      padding: 0,
                      boxShadow: i === cur ? "0 0 10px rgba(0,102,255,0.6)" : "none",
                    }}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,170,255,0.4)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 48, flexWrap: "wrap" }}
          >
            {[
              { n: "4.9/5.0", l: "Average Rating" },
              { n: "500+",    l: "Verified Installs" },
              { n: "98%",     l: "Would Recommend" },
              { n: "$1.8M+",  l: "Customer Savings" },
            ].map(item => (
              <div key={item.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: 26, color: "#fff", letterSpacing: "-0.5px" }}>{item.n}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 3 }}>{item.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
