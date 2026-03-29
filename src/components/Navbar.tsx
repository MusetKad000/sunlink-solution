"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Home",         href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Solar Options",href: "#solutions" },
  { label: "Savings",      href: "#calculator" },
  { label: "FAQ",          href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        background: scrolled ? "rgba(0,0,0,0.80)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,102,255,0.3)" : "1px solid transparent",
        transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>

          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-icon.png" alt="SunLink Solution" width={40} height={40} style={{ objectFit: "contain", display: "block" }} />
            <span style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 900,
              fontSize: 18,
              letterSpacing: "-0.3px",
              background: "linear-gradient(135deg, #00aaff 0%, #0066ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              SUNLINK SOLUTION
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ gap: 36, alignItems: "center" }}>
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#contact" className="btn-primary nav-cta-desktop" style={{ padding: "10px 22px", fontSize: 14 }}>
            Get Quote
            <ArrowRight size={15} />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-toggle"
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: "rgba(0,0,10,0.95)",
              borderTop: "1px solid rgba(0,102,255,0.2)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, fontWeight: 500, textDecoration: "none", cursor: "pointer" }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary" style={{ marginTop: 8 }} onClick={() => setMobileOpen(false)}>
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .nav-desktop      { display: flex; }
        .nav-cta-desktop  { display: inline-flex; }
        .nav-mobile-toggle{ display: none; }
        @media(max-width: 768px){
          .nav-desktop      { display: none !important; }
          .nav-cta-desktop  { display: none !important; }
          .nav-mobile-toggle{ display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
