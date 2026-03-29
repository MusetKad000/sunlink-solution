"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cols = {
  Solutions: [
    { l: "Cash Purchase", h: "#solutions" },
    { l: "Solar Loan",    h: "#solutions" },
    { l: "Lease / PPA",  h: "#solutions" },
    { l: "Battery Storage", h: "#contact" },
  ],
  Company: [
    { l: "How It Works", h: "#how-it-works" },
    { l: "Testimonials", h: "#testimonials" },
    { l: "FAQ",          h: "#faq" },
    { l: "About Us",     h: "#" },
  ],
  Resources: [
    { l: "Savings Calculator", h: "#calculator" },
    { l: "Federal Tax Credit", h: "#faq" },
    { l: "CA Incentives",      h: "#faq" },
    { l: "Blog",               h: "#" },
  ],
};

const socials = [
  { label: "Facebook",  d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { label: "LinkedIn",  d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

export default function Footer() {
  return (
    <footer style={{ background: "transparent", position: "relative", overflow: "hidden" }}>
      {/* Top separator */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.4), rgba(0,170,255,0.4), transparent)" }} />

      {/* Mini CTA banner */}
      <div style={{
        padding: "60px 24px",
        background: "linear-gradient(135deg, rgba(0,60,180,0.08) 0%, rgba(0,30,80,0.06) 100%)",
        borderBottom: "1px solid rgba(0,102,255,0.12)",
        textAlign: "center",
        position: "relative",
      }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,102,255,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 38px)", color: "#fff", letterSpacing: "-1px", marginBottom: 10 }}>
            Your Electric Bill Is{" "}
            <span className="text-gradient">Optional.</span>
          </h3>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", marginBottom: 28 }}>
            Join 500+ California homeowners who made the switch.
          </p>
          <a href="#contact" className="btn-primary">
            Get Free Quote
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">

          {/* Brand */}
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, cursor: "pointer", textDecoration: "none", width: "fit-content" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-icon.png" alt="SunLink Solution" width={36} height={36} style={{ objectFit: "contain", display: "block" }} />
              <span style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                fontSize: 17,
                letterSpacing: "-0.3px",
                background: "linear-gradient(135deg, #00aaff, #0066ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                SUNLINK SOLUTION
              </span>
            </a>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 260, marginBottom: 24 }}>
              California&apos;s premier residential solar company. Premium systems, zero hassle, maximum savings for homeowners.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,170,255,0.4)"; e.currentTarget.style.color = "#00aaff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
                >
                  <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(cols).map(([cat, links]) => (
            <div key={cat}>
              <h4 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 20 }}>
                {cat}
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map(link => (
                  <li key={link.l}>
                    <a
                      href={link.h}
                      style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", textDecoration: "none", cursor: "pointer", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                    >
                      {link.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 28 }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} SunLink Solution. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Licenses"].map(item => (
              <a key={item} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", textDecoration: "none", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important;} .footer-grid>:first-child{grid-column:span 2;}}`}</style>
    </footer>
  );
}
