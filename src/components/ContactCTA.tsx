"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone, Mail, MapPin } from "lucide-react";

export default function ContactCTA() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", bill: "" });

  return (
    <section id="contact" style={{ padding: "80px 24px", background: "transparent", position: "relative", overflow: "hidden" }}>
      {/* Center glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 800, height: 800,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,170,255,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0066ff", boxShadow: "0 0 8px #0066ff", animation: "pulse 2s infinite" }} />
            <span className="eyebrow">Free Consultation — No Obligation</span>
          </div>
          <h2 style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 52px)",
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: 16,
          }}>
            Ready to Start Saving?
            <br />
            <span className="text-gradient">Let&apos;s Talk.</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 440, margin: "0 auto" }}>
            Tell us about your home and we&apos;ll build a custom solar proposal — at no cost, with zero pressure.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, maxWidth: 1000, margin: "0 auto" }} className="contact-grid">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="glass-card"
              style={{
                padding: 40,
                border: "1px solid rgba(0,102,255,0.2)",
                boxShadow: "0 0 60px rgba(0,102,255,0.1), 0 40px 80px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #0066ff, #00aaff, transparent)", marginBottom: 32, borderRadius: 1 }} />

              {!done ? (
                <form onSubmit={e => { e.preventDefault(); setDone(true); }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    {[
                      { id: "name",  label: "Full Name",  type: "text",  ph: "John Smith",       key: "name"  as const },
                      { id: "email", label: "Email",      type: "email", ph: "john@example.com", key: "email" as const },
                      { id: "phone", label: "Phone",      type: "tel",   ph: "(888) 238-8495",   key: "phone" as const },
                    ].map(f => (
                      <div key={f.id} style={{ gridColumn: f.id === "email" ? "span 1" : "span 1" }}>
                        <label htmlFor={f.id} style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 8 }}>
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          type={f.type}
                          required={f.id !== "phone"}
                          placeholder={f.ph}
                          value={form[f.key]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "12px 16px",
                            borderRadius: 10,
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#fff",
                            fontSize: 14,
                            outline: "none",
                            transition: "border-color 0.2s",
                            fontFamily: "Inter, sans-serif",
                          }}
                          onFocus={e => (e.target.style.borderColor = "rgba(0,102,255,0.5)")}
                          onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                        />
                      </div>
                    ))}

                    <div>
                      <label htmlFor="bill" style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 8 }}>
                        Monthly Bill
                      </label>
                      <select
                        id="bill"
                        value={form.bill}
                        onChange={e => setForm({ ...form, bill: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: 10,
                          background: "rgba(10,10,20,0.9)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: form.bill ? "#fff" : "rgba(255,255,255,0.35)",
                          fontSize: 14,
                          outline: "none",
                          cursor: "pointer",
                          fontFamily: "Inter, sans-serif",
                        }}
                        onFocus={e => (e.target.style.borderColor = "rgba(0,102,255,0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      >
                        <option value="">Select range...</option>
                        <option value="under-100">Under $100</option>
                        <option value="100-150">$100–$150</option>
                        <option value="150-200">$150–$200</option>
                        <option value="200-300">$200–$300</option>
                        <option value="300-500">$300–$500</option>
                        <option value="500+">$500+</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 8, padding: "15px 0" }}>
                    Get My Free Solar Quote
                    <ArrowRight size={17} />
                  </button>
                  <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.22)", marginTop: 12 }}>
                    No spam. No pressure. Just honest numbers.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "32px 0" }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: "rgba(0,200,100,0.1)",
                    border: "1px solid rgba(0,200,100,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <Check size={28} color="#00cc66" />
                  </div>
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 22, color: "#fff", marginBottom: 8 }}>
                    You&apos;re on your way!
                  </h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                    A SunLink advisor will reach out within 24 hours with your personalized proposal.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 32 }}
          >
            <div>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 22, color: "#fff", marginBottom: 20 }}>
                What to expect in your consultation:
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Custom savings estimate from your actual bills",
                  "Roof and site assessment overview",
                  "All financing options explained — no pressure to decide",
                  "Federal and California-specific incentive breakdown",
                  "System size recommendation for your usage",
                  "Honest answers to every question you have",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <Check size={15} style={{ color: "#0066ff", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.62)", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "24px 28px" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 16 }}>
                Prefer to reach us directly?
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: Phone,  val: "888-238-8495",                                    note: "Call us" },
                  { icon: Mail,   val: "info@sunlinksolution.com",                        note: "Email us" },
                  { icon: MapPin, val: "3172 N Rainbow Blvd #1517, Las Vegas, NV 89108",  note: "Address" },
                ].map(item => (
                  <div key={item.note} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(0,102,255,0.12)", border: "1px solid rgba(0,170,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <item.icon size={16} color="#0066ff" />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{item.note}</div>
                      <div style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}
        @keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}
      `}</style>
    </section>
  );
}
